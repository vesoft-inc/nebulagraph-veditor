import React, { Fragment, PureComponent } from "react";
import { Icon, Tooltip, message, Modal, Input } from "antd";
import { Utils } from "@";
const { SVGHelper } = Utils;
class TopBar extends PureComponent {
  componentWillReceiveProps(props) {
    if (props.editor && !this.props.editor) {
      props.editor.on("change", () => {
        const {
          editor: {
            schema: { history }
          }
        } = props;
        const canRedo = history.index < history.schemaList.length - 1;
        const canUndo = history.index > 0;
        this.setState({
          canRedo,
          canUndo
        });
      });
    }
    return props;
  }

  state = {};
  /**
   * 保存切格式化
   */
  save = async () => {
    const {
      editor: { schema }
    } = this.props;
    const data = schema.getData();
    Modal.confirm({
      width: 500,
      content: (
        <Input.TextArea
          style={{ height: 500 }}
          value={JSON.stringify(data, "", 4)}
        ></Input.TextArea>
      )
    });
  };

  // 格式化
  format = e => {
    e.preventDefault();
    const {
      editor: {
        schema,
        controller
      }
    } = this.props;
    schema.format();
    controller.autoFit();
  };

  run = () => {
    const {
      editor: {
        schema: { data },
        graph: {
          node: { nodes },
          line: { lines }
        }
      }
    } = this.props;
    this.props.editor.repaint();
    this.rankNodes = [];
    this.runningIndex = 0;
    const dataArray = Object.keys(data.nodesMap).map(key => data.nodesMap[key]);
    // 有向图排序刷新
    this.rankData(dataArray, data.linesMap);
    this.runDemo();
  };

  runDemo() {
    this.timeout && clearTimeout(this.timeout);
    const node = this.rankNodes[this.runningIndex];
    this.clearNodeStatus(node.uuid);
    const lastNode = this.rankNodes[this.runningIndex - 1];
    if (lastNode) {
      this.changeNodeStatus(lastNode.uuid, "success");
    }
    this.changeNodeStatus(node.uuid, "running");
    this.runningIndex++;
    this.timeout = setTimeout(() => {
      if (this.runningIndex < this.rankNodes.length) {
        this.runDemo();
      } else {
        this.changeNodeStatus(this.rankNodes[this.runningIndex - 1].uuid, "success");
      }
    }, 3000);
  }

  // 清楚节点状态
  clearNodeStatus = id => {
    const {
      editor: {
        graph: { node, line }
      }
    } = this.props;
    node.nodes[id].fromLines.forEach(lineId => {
      line.lines[lineId].dom.setAttribute('class', 've-line');
    });
    node.nodes[id].shape.setAttribute("class", 've-node-shape')
  };

  // 更新节点状态
  changeNodeStatus = (id, status) => {
    const {
      editor: {
        schema: { data },
        graph: { node, line }
      }
    } = this.props;
    this.clearNodeStatus(id);
    if (status === "success") {
      if (!node.nodes[id].shape.successIcon) {
        const obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        obj.innerHTML =
          '<span xmlns="http://www.w3.org/1999/xhtml" class="iconfont etl-success" style="font-size:24px">&radic;</span>';
        SVGHelper.setAttrs(obj, {
          width: 26,
          height: 30,
          x: 150,
          y: -2
        });
        node.nodes[id].shape.appendChild(obj);
        node.nodes[id].shape.successIcon = obj;
      }
      node.nodes[id].fromLines.forEach(lineId => {
        line.lines[lineId].dom.classList.add("success");
        line.lines[lineId].data.className = ("success");
      });
      node.nodes[id].shape.classList.add("success");
    } else if (status === "error") {
      if (!node.nodes[id].shape.errorIcon) {
        const obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        obj.innerHTML =
          '<span xmlns="http://www.w3.org/1999/xhtml" class="iconfont etl-baocuo" style="font-size:24px">X</span>';
        SVGHelper.setAttrs(obj, {
          width: 26,
          height: 30,
          x: 150,
          y: -2
        });
        node.nodes[id].shape.appendChild(obj);
        node.nodes[id].shape.errorIcon = obj;
      }
      node.nodes[id].fromLines.forEach(lineId => {
        line.lines[lineId].dom.classList.add("error");
      });
      node.nodes[id].shape.classList.add("error");
    } else if (status === "running") {
      node.nodes[id].fromLines.forEach(lineId => {
        line.lines[lineId].dom.classList.add("running");
        this.updateRunningLine(line.lines[lineId]);
      });
      node.nodes[id].shape.classList.add("running");
    }
  };

  //更新线状态
  /**
   * 
   * @param {import("@/Shape/Line").InstanceLine} line 
   * @returns 
   */
  updateRunningLine(line) {
    if (!line.dom.classList.contains("running")) {
      this.props.editor.graph.line.updateLine(line.data.uuid);
      return;
    }
    const totalLength = line.pathData.getTotalLength();
    SVGHelper.animate(
      0,
      1,
      val => {
        const { x, y, alpha } = line.pathData.getPointAtLength(val * totalLength);
        line.arrow.setAttribute('transform', `translate(${x.toFixed(0)} ${y.toFixed(0)}) rotate(${alpha})`);//同步箭头
      },
      totalLength * 30,
      () => {
        this.updateRunningLine(line);
      }
    );
  }

  // demo排序运行
  rankData(data, linesMap) {
    let deleteLines = [];
    const others = [];
    data.forEach(node => {
      let nodeId = node.uuid;
      node.indexDepth = 0;
      node.fromLines = [];
      for (let key in linesMap) {
        const line = linesMap[key];
        if (line.to === nodeId) {
          node.indexDepth++;
        }
        if (line.from === nodeId) {
          line.uuid = key;
          node.fromLines.push(line);
        }
      }
      if (node.indexDepth === 0) {
        this.rankNodes.push(node);
        deleteLines = [...deleteLines, ...node.fromLines];
      } else {
        others.push(node);
      }
    });
    if (others.length) {
      let newLinesMap = JSON.parse(JSON.stringify(linesMap));
      deleteLines.forEach(line => {
        delete newLinesMap[line.uuid];
      });
      this.rankData(others, newLinesMap);
    }
  }

  stop = () => { };

  redo = () => {
    this.props.editor.schema.redo();
  };

  undo = () => {
    this.props.editor.schema.undo();
  };

  autofit = () => {
    this.props.editor.controller.autoFit();
  }

  render() {
    if (!this.props.editor) return null;
    const {
      editor: {
        schema: { history }
      }
    } = this.props;
    const { loading, running } = this.state;
    const canRedo = history.index < history.schemaList.length - 1;
    const canUndo = history.index > 0;
    return (
      <div className="job-top-bar">
        <Tooltip title="重做">
          <Icon
            type="redo"
            onClick={canRedo && this.redo}
            className={`${!canRedo && "disable"} `}
          />
        </Tooltip>
        <Tooltip title="撤销">
          <Icon
            type="undo"
            onClick={canUndo && this.undo}
            className={`${!canUndo && "disable"} `}
          />
        </Tooltip>
        <Tooltip title="保存">
          {loading ? <Icon type="loading" /> : <Icon onClick={this.save} type="save" />}
        </Tooltip>
        {!running ? (
          <Tooltip title="运行">
            <Icon onClick={this.run} type="play-circle" />
          </Tooltip>
        ) : (
          <Tooltip title="终止">
            <Icon onClick={this.stop} type="poweroff" />
          </Tooltip>
        )}
        <Tooltip title="格式化">
          <Icon onClick={this.format} type="smile" />
        </Tooltip>
        <Tooltip title="auto fit">
          <Icon onClick={this.autofit} type="pic-center" />
        </Tooltip>
      </div>
    );
  }
}
export default TopBar;
