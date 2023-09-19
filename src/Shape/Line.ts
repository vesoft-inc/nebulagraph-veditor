import DefaultLine, { LabelInstance, LineRender } from "./Lines/Line";
import PolyLine from "./Lines/PolyLine";
import { v1 as getUuid } from "uuid";
import Graph from "./Graph";
import { SVGHelper } from "../Utils/svg";
import Node, { InstanceNode, InstanceNodePoint } from "./Node";
import { createSVGElement, setAttrs } from "../Utils/dom";
import { VEditorLine } from "../Model/Schema";
import Path from "../Utils/path";
import { AnyMap, Position } from "../Utils/types";
import ForceLine from './Lines/ForceLine';
export interface InstanceLine extends AnyMap {
  dom: SVGElement; //wrapperDOM
  path?: SVGPathElement; //pathDOM
  shape: SVGElement; //shapeDOM
  arrow: SVGElement; //arrowDOM
  label?: LabelInstance; //label instance
  data: VEditorLine;
  from: InstanceNodePoint;
  to: InstanceNodePoint;
  pathData: Path;
  shadowPath?: SVGPathElement;
  width?: number;
  bezierData?: {
    from: Position;
    startControlPoint: Position;
    endControlPoint: Position;
    to: Position;
  };
}
class Line {
  graph: Graph;
  node: Node;
  paper: SVGGElement;
  lines: Record<string, InstanceLine>;
  lineG: SVGGElement;
  hoverLinkPoint: InstanceNodePoint;
  allLinkPoints: InstanceNodePoint[];
  shapes: Record<string, LineRender>;
  activeLine: InstanceLine;
  tempLine: {
    dom: SVGPathElement;
    data: VEditorLine;
  };
  tempLineRender = {
    render: (): SVGPathElement => {
      const path = SVGHelper.path();
      this.paper.appendChild(path);
      setAttrs(path, {
        stroke: "#abc",
        "stroke-dasharray": "10 10",
      });
      return path;
    },
    renderPath: (
      { fromX = 0, fromY = 0, x = 0, y = 0 },
      line: { dom: SVGPathElement; data: VEditorLine }
    ) => {
      setAttrs(line.dom, {
        d: `M${fromX} ${fromY}L${x} ${y}`,
      });
    },
  };
  constructor(graph: Graph) {
    this.graph = graph;
    this.node = graph.node;
    this.paper = graph.editor.paper;
    this.lines = {};
    this.lineG = createSVGElement("g", this.paper) as SVGGElement;
    this.paper.prepend(this.lineG);
    this.lineG.classList.add("ve-lines");
    this.allLinkPoints = [];
    this.shapes = {
      default: DefaultLine,
      polyline: PolyLine,
      forceLine:ForceLine
    };
    this.listenEvent();
  }

  // 监听事件
  listenEvent() {
    this.graph.on("paper:click", () => {
      this.unActiveLine();
    });
    this.graph.on("node:click", () => {
      this.unActiveLine();
    });
  }

  /**
   * 添加线
   */
  addLine(data: VEditorLine) {
    /**
     * @event Graph#line:beforeadd
     */
    this.graph.fire("line:beforeadd", { data, type: "add" });
    const line = this.renderLine(data);
    /**
     * @event Graph#line:add
     */
    this.graph.fire("line:add", { line, type: "add" });
  }

  /**
   * 跟下该node的线
   */
  updateByNode(node: InstanceNode) {
    node.fromLines.forEach((lineId) => {
      this.updateLine(lineId, true);
    });
    node.toLines.forEach((lineId) => {
      this.updateLine(lineId, true);
    });
  }

  /**
   * 添加线
   */
  renderLine(lineData: VEditorLine): InstanceLine {
    const key = lineData.uuid || getUuid();
    const { nodes } = this.node;
    const shape = this.shapes[lineData.type || "default"];
    const { from, to, fromPoint = 0, toPoint = 0 } = lineData;
    const fromNode = nodes[from];
    const toNode = nodes[to];
    const fromPointNode = fromNode.linkPoints[fromPoint];
    const toPointNode = toNode.linkPoints[toPoint];
    const instanceLine = {
      arrow: null,
      dom: null,
      shape: null,
      arrow2: undefined,
      pathData: undefined,
      data: Object.assign(lineData, {
        uuid: key,
      }),
      from: fromPointNode,
      to: toPointNode,
    };
    shape.graph = this.graph; // mount graph to shape
    const lineShape = shape.render(instanceLine);
    const arrow = shape.renderArrow(instanceLine);
    const g = SVGHelper.group(lineShape, arrow);
    setAttrs(lineShape, {
      class: "ve-line-shape",
    });
    instanceLine.dom = g;
    instanceLine.shape = lineShape;
    instanceLine.arrow = arrow;
    lineData.arrow2 && shape.renderArrow2
      ? (instanceLine.arrow2 = shape.renderArrow2(instanceLine))
      : undefined;
    setAttrs(g, {
      class: `ve-line ${lineData.className || ""}`,
    });
    this.addToNodes(instanceLine);
    this.addLineEvents(instanceLine);
    this.lines[key] = instanceLine;
    this.lineG.appendChild(g);
    return instanceLine;
  }

  /**
   * redraw all lines
   */
  update() {
    Object.values(this.lines).forEach((line) => {
      this.updateLine(line.data.uuid);
    });
  }

  /**
   * 重绘某个线
   */
  updateLine(data: VEditorLine | string, rerenderShape = true) {
    let lineId;
    let lineData;
    if (typeof data !== "string") {
      lineId = data.uuid;
      lineData = data;
    } else {
      lineId = data;
      lineData = this.lines[lineId].data;
    }
    const { nodes } = this.graph.node;
    const line = this.lines[lineId];
    const {
      data: {
        type,
        className = "",
        from,
        to,
        fromPoint = 0,
        toPoint = 0,
      },
    } = line;
    line.from = nodes[from].linkPoints[fromPoint];
    line.to = nodes[to].linkPoints[toPoint];
    if (rerenderShape) {
      this.shapes[type || "default"].render(line);
      line.arrow = this.shapes[type || "default"].renderArrow(line);
      line.dom.setAttribute("class", `ve-line ${className || ""}`);
      Object.assign(
        line.data,
        lineData ? lineData : {},
      );
    } else {
      Object.assign(line.data, lineData ? lineData : {});
    }
    if (this.activeLine === line) {
      this.setActiveLine(line);
    }
  }
  /**
   * 删除线
   */
  deleteLine(data: VEditorLine | string, notEvent = false, byNode = false) {
    let line: InstanceLine;
    if (typeof data === "string") {
      line = this.lines[data];
    } else {
      line = this.lines[data.uuid];
    }
    let uuid = line.data.uuid;
    const { nodes } = this.node;
    if (!line) return; //这里有可能被删除node时的关联删除线了
    delete this.lines[uuid];
    // 删除关联线
    const { from, to } = line.data;
    nodes[from] && nodes[from].toLines.delete(uuid);
    nodes[to] && nodes[to].fromLines.delete(uuid);
    !notEvent &&
      // 是否由删除节点触发的线删除操作
      /**
       * @event Graph#line:remove
       */
      this.graph.fire("line:remove", {
        line,
        uuid,
        before: line.data,
        byNode,
        type: "remove",
      });
    line.arrow.remove();
    line.arrow = null;
    line.dom.remove();
    this.activeLine = null;
  }

  /**
   * 更新线为
   */
  updateActiveLine = (instanceLine: InstanceLine) => {
    const { hoverLinkPoint } = this;
    const {
      node: { nodes },
    } = this.graph;
    const { data } = instanceLine;
    const beforeData = { ...data };
    const { type = "default", uuid } = data;
    if (hoverLinkPoint) {
      const to = hoverLinkPoint.nodeId;
      const toNode = nodes[data.to];
      const toPoint = hoverLinkPoint.index;
      if (
        this.shapes[type].checkNewLine(
          {
            ...data,
            to,
            toPoint,
          },
          this.graph.editor
        ) &&
        !(data.to == to && toPoint == data.toPoint)
      ) {
        toNode.fromLines.delete(uuid);
        Object.assign(data, { to, toPoint });
        // 删除节点入口关联的线，给新链接的节点加上入口线
        nodes[to].fromLines.add(uuid);
        /**
         * @event Graph#line:change
         */
        this.graph.fire("line:change", {
          line: instanceLine,
          type: "change",
          before: beforeData,
        });
      }
      hoverLinkPoint?.dom?.classList.remove("hover");
    }
    this.updateLine(uuid);
  };

  /**
   * 检查是否生成新线
   */
  checkNewLine = () => {
    const { hoverLinkPoint } = this;
    if (hoverLinkPoint) {
      const toNodeId = hoverLinkPoint.nodeId;
      const toPoint = hoverLinkPoint.index;
      const data: VEditorLine = Object.assign(this.tempLine.data, {
        uuid: getUuid(),
        to: toNodeId,
        toPoint,
      });
      if (this.lines[data.uuid]) return;
      this.graph.fire("line:beforeadd", { data });
      if (
        this.shapes[data.type || "default"].checkNewLine(
          data,
          this.graph.editor
        )
      ) {
        this.addLine(data);
      }
      hoverLinkPoint?.dom.classList.remove("hover");
      this.hoverLinkPoint = undefined;
    }
  };

  /**
   * 注册线
   */
  registeLine(type: string, data: LineRender,extend="default") {
    this.shapes[type] = Object.assign({}, this.shapes[extend], data);
  }

  /**
   * 渲染
   */
  render(lines: Record<string, VEditorLine> = {}) {
    Object.keys(lines).map((key) => {
      const item = lines[key];
      this.renderLine(item);
    });
  }

  addToNodes(instanceLine: InstanceLine) {
    const { nodes } = this.graph.node;
    const { from, to } = instanceLine.data;
    const id = instanceLine.data.uuid;
    nodes[from].toLines.add(id);
    nodes[to].fromLines.add(id);
  }

  /**
   *
   */
  setActiveLine(line: InstanceLine) {
    this.unActiveLine();
    this.activeLine = line;
    this.activeLine.dom.classList.add("active");
  }

  /**
   * 取消激活
   */
  unActiveLine() {
    if (this.activeLine) {
      this.activeLine.dom.classList.remove("active");
    }
    this.activeLine = null;
  }

  // 计算磁吸
  calcLinkPoint = (x: number, y: number, adsorb = [20, 20]) => {
    const newXY = this.allLinkPoints.find((item) => {
      if (
        Math.abs(x - item.x) < adsorb[0] &&
        Math.abs(y - item.y) < adsorb[1]
      ) {
        this.hoverLinkPoint?.dom.classList.remove("hover");
        this.hoverLinkPoint = item;
        item.dom?.classList.add("hover");
        return item;
      }
    });
    if (!newXY) {
      this.hoverLinkPoint?.dom.classList.remove("hover");
    }
    return newXY;
  };

  // 生成磁吸
  makeAdsorbPoints = () => {
    const { nodes } = this.graph.node;
    this.allLinkPoints = [];
    for (let key in nodes) {
      const node = nodes[key];
      const { linkPoints } = node;
      linkPoints.forEach((item) => {
        this.allLinkPoints.push(item);
      });
    }
  };

  /**
   * 绑定线拖动事件
   */
  addLineEvents(g: InstanceLine) {
    g.shape.addEventListener("mouseenter", (event) => {
      /**
       * @event Graph#line:mouseenter
       */
      this.graph.fire("line:mouseenter", { line: g, event });
    });
    g.shape.addEventListener("mouseleave", (event) => {
      /**
       * @event Graph#line:mouseleave
       */
      this.graph.fire("line:mouseleave", { line: g, event });
    });
    g.shape.addEventListener("click", (e) => {
      this.setActiveLine(g);
      /**
       * @event Graph#line:click
       */
      this.graph.fire("line:click", { line: g, event: e });
    });
    if (this.graph.editor.config.mode === "view") return;
    let startX: number;
    let startY: number;
    // 箭头拖拽
    SVGHelper.drag(
      g.arrow,
      (e: MouseEvent) => {
        const {
          tempLine: {
            data: { fromX, fromY, toX, toY = 0 },
          },
        } = this;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const { controller } = this.graph.editor;
        const { scale } = controller;
        let x = (toX || 0) + dx / scale + 1;
        let y = toY + dy / scale - 1;
        // 计算磁吸坐标
        const { adsorb } =
          this.graph.line.shapes[g.data.type || "default"];
        const newXY = this.calcLinkPoint(x, y, adsorb);
        if (newXY) {
          x = newXY.x;
          y = newXY.y;
        }
        this.tempLineRender.renderPath(
          {
            fromX,
            fromY,
            x,
            y,
          },
          this.tempLine
        );
        this.graph.fire("line:dragging");
      },
      (e) => {
        const { data } = g;
        const {
          fromX = 0,
          fromY = 0,
          toX,
          toY,
          from,
          fromPoint,
        } = data;
        startX = e.clientX;
        startY = e.clientY;
        this.makeAdsorbPoints();
        g.dom.style.display = "none";
        data.status = "active";
        /**
         * @event Graph#line:drag
         */
        this.tempLine = {
          dom: this.tempLineRender.render(),
          data: {
            from,
            fromPoint,
            fromX,
            fromY,
            to: null,
            toX,
            toY,
          },
        };
        this.graph.fire("line:drag");
      },
      () => {
        g.dom.style.display = "block";
        this.tempLine.dom.remove();
        this.updateActiveLine(g);

        /**
         * @event Graph#line:drop
         */
        this.graph.fire("line:drop", { line: g });
      }
    );
  }

  /**
   * 节点的新增线逻辑
   */
  addLinkPointEvent = (point: InstanceNodePoint) => {
    if (this.graph.editor.config.mode === "view") return;
    const { nodes } = this.graph.node;
    const node = nodes[point.nodeId];
    let startX: number;
    let startY: number;
    SVGHelper.drag(
      point.dom,
      (e) => {
        const {
          tempLine: {
            data: { fromX, fromY },
          },
        } = this;
        const { controller } = this.graph.editor;
        const { scale } = controller;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        let x = (fromX || 0) + dx / scale + 1;
        let y = (fromY || 0) + dy / scale - 1;

        // 计算磁吸坐标
        const { adsorb } = this.graph.node.shapes[node.data.type];
        const newXY = this.calcLinkPoint(x, y, adsorb);
        if (newXY) {
          x = newXY.x;
          y = newXY.y;
        }
        this.tempLineRender.renderPath(
          {
            fromX,
            fromY,
            x,
            y,
          },
          this.tempLine
        );
        e.stopPropagation();
        this.graph.fire("line:dragging");
      },
      (e) => {
        startX = e.clientX;
        startY = e.clientY;
        this.makeAdsorbPoints();
        this.tempLine = {
          dom: this.tempLineRender.render(),
          data: {
            from: node.data.uuid,
            to: undefined,
            fromPoint: point.index,
            fromX: point.x,
            fromY: point.y,
          },
        };
        this.graph.fire("line:drag");
        e.stopPropagation();
      },
      (e) => {
        const { hoverLinkPoint } = this;
        let toNode: InstanceNodePoint = null;
        if (hoverLinkPoint) {
          toNode = hoverLinkPoint;
        }
        this.checkNewLine();
        this.tempLine.dom.remove();
        /**
         * @event Graph#line:drop
         */
        this.graph.fire("line:drop", {
          fromNode: node,
          toNodePoint: toNode,
          event: e,
        });
        e.stopPropagation();
      }
    );
  };

  /**
   *
   */
  clear() {
    const { lines } = this;
    for (let key in lines) {
      this.deleteLine(lines[key].data, true);
    }
  }
}
export default Line;
