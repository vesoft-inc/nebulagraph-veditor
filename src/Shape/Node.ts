import { v1 as uuid } from "uuid";
import defaultNode, { NodeRender } from "./Nodes/DefaultNodes";
import iconNode from "./Nodes/IconNode";
import domNode from "./Nodes/DomNode";
import Graph from "./Graph";
import {
  createSVGElement,
  setAttrs,
  setTransform,
  svgWrapper,
} from "../Utils/dom";
import { VEditorNode } from "../Model/Schema";
import { SVGHelper } from "../Utils/svg";
import { AnyMap, Position } from "../Utils/types";
export interface InstanceNode {
  dom: SVGGElement;
  shape?: SVGGElement;
  shapeBBox?: DOMRect;
  data: VEditorNode;
  toLines: Set<string>;
  fromLines: Set<string>;
  linkPointsTypes?: Position[];
  linkPoints?: InstanceNodePoint[];
  startX?: number;
  startY?: number;
  clientX?: number;
  clientY?: number;
  _destroys: Function[];
}
export interface InstanceNodePoint {
  x: number;
  y: number;
  nodeId?: string;
  index?: number;
  local?: {
    x: number;
    y: number;
  };
  dom?: SVGGElement;
  data?: {
    x: number;
    y: number;
    [key: number | string]: unknown;
  };
}
/**
 * @class Node
 */
class Node {
  graph: Graph;
  nodes: Record<string, InstanceNode>;
  paper: SVGGElement;
  nodeG: SVGGElement;
  actives: {};
  shadow: SVGElement;
  shapes: {
    [key: string]: NodeRender;
  };
  copyNode: {};
  tmpLinkPoints: InstanceNode[];
  timeout: NodeJS.Timeout;
  destroyFunc: Function[];
  constructor(graph: Graph) {
    this.graph = graph;
    this.nodes = {};
    this.paper = graph.editor.paper;
    this.nodeG = createSVGElement("g", this.paper) as SVGGElement;
    this.nodeG.classList.add("ve-nodes");
    this.initDefs();
    this.listenEvent();
    this.actives = {};
    this.shapes = {
      default: defaultNode,
      iconNode: iconNode,
      domNode,
    };
  }

  initDefs() {
    this.shadow = svgWrapper(
      `<defs>
			<filter id="ve-black-shadow" filterUnits="userSpaceOnUse">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur>
                <feGaussianBlur stdDeviation="3" />
                <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
                <feFlood flood-color="#333333"></feFlood>
                <feComposite in2="offsetblur" operator="in"></feComposite>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"></feFuncA>
                </feComponentTransfer>
                <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
		</defs>`,
      this.paper
    );
  }

  // 监听事件
  listenEvent() {
    this.graph.on("paper:click", () => {
      this.unActive();
    });
    this.graph.on("line:click", () => {
      this.unActive();
    });
    this.graph.on("copy", () => {
      const activeNode = {
        ...this.actives,
      };
      let newActiveNode = {};
      for (let node in activeNode) {
        newActiveNode[node] = {
          ...activeNode[node],
          data: JSON.parse(JSON.stringify(activeNode[node].data)),
        };
      }
      this.copyNode = newActiveNode;
    });
    this.graph.on("paste", () => {
      this.unActive();
      for (let key in this.copyNode) {
        const node = this.copyNode[key];
        let newData = { ...node.data };
        newData.x += 20 + Math.random() * 20;
        newData.y += 20 + Math.random() * 20;
        delete newData.uuid;
        const newNode = this.addNode(newData);
        this.setActive(newNode);
      }
    });
  }

  registeNode(type: string, data: NodeRender, extend = "default") {
    this.shapes[type] = Object.assign({}, this.shapes[extend], data);
  }

  render(data: Record<string, VEditorNode> = {}) {
    return new Promise((resolve, reject) => {
      this.tmpLinkPoints = []; //先缓存获取所有节点渲染后触发，避免重绘
      Object.keys(data).map((key) => {
        this.renderNode(data[key]);
      });
      this.timeout = setTimeout(() => {
        this.tmpLinkPoints.forEach((node) => {
          this.addNodeLinkPoints(node);
        });
        this.tmpLinkPoints = undefined;
        resolve(true);
      }, 0);
    });
  }

  /**
   * 添加节点
   * @param {object} data
   */
  addNode = (data: VEditorNode) => {
    if (!data.uuid) {
      data.uuid = uuid();
      this.graph.editor.fire("node:makeuuid", data);
    }
    if (data.uuid.indexOf && data.uuid.indexOf("-") > -1) {
      data.uuid = data.uuid.replace(/-/g, "");
    }
    const node = this.renderNode(data);
    /**
     * @event Graph#node:change - 节点变化事件
     * @property {Object} node
     */
    this.graph.fire("node:change", { node });
    return node;
  };

  /**
   * 删除节点
   *  @param {object} data
   */
  deleteNode = (input: VEditorNode | string) => {
    const uuid = typeof input === "string" ? input : input.uuid;
    const deleteNode = this.nodes[uuid] as InstanceNode;
    const nodeRender = this.shapes[deleteNode.data.type || "default"];
    nodeRender.destroy && nodeRender.destroy(deleteNode);
    delete this.nodes[uuid];
    /**
     * @event Graph#node:remove - 移除节点事件
     */
    this.graph.fire("node:remove", { node: deleteNode, uuid });
    deleteNode.linkPoints?.forEach((point) => {
      point.dom.remove();
      point = null;
    });
    deleteNode.fromLines?.forEach((lineId) => {
      this.graph.line.deleteLine(lineId, true, true);
    });
    deleteNode.toLines?.forEach((lineId) => {
      this.graph.line.deleteLine(lineId, true, true);
    });
    deleteNode._destroys.forEach((func) => func());
    deleteNode.dom.remove();
  };

  /**
   * 渲染新节点
   */
  renderNode(item: VEditorNode): InstanceNode {
    const key = item.uuid;
    const shape = this.shapes[item.type || "default"];
    shape.paper = this.paper;
    const node: InstanceNode = {
      dom: undefined,
      toLines: new Set<string>(),
      fromLines: new Set<string>(),
      _destroys: [],
      data: item,
      linkPoints: []
    };
    const nodeShape = shape.render(node);
    const dom = SVGHelper.group(nodeShape);
    node.shape = nodeShape;
    node.dom = dom;
    node.linkPointsTypes = item.linkPointsTypes;
    nodeShape.classList.add("ve-node-shape");
    dom.setAttribute("class", `ve-node ${item.className || ""}`);
    dom.setAttribute("data-id", key);
    dom.setAttribute(
      "transform",
      `translate(${item.x || 0},${item.y || 0})`
    );
    this.nodeG.appendChild(dom);
    this.nodes[item.uuid] = node;
    // 是否缓存
    this.tmpLinkPoints
      ? this.tmpLinkPoints.push(node)
      : this.addNodeLinkPoints(node);
    this.addNodeEvent(node);
    return node;
  }

  update() {
    for (const nodeId in this.nodes) {
      this.updateNode(nodeId, true);
    }
  }

  /**
   * 根据数据更新节点位置
   */
  updateNode(input: VEditorNode | string, rerenderShape = false) {
    let nodeData: VEditorNode;
    if (typeof input !== "object") {
      nodeData = this.nodes[input].data;
    } else {
      nodeData = input;
    }
    if (!nodeData) return;
    const { uuid } = nodeData;
    const node = this.nodes[uuid];
    const shape = this.shapes[nodeData.type || "default"];
    if (rerenderShape) {
      const nodeShape = shape.render(node);
      node.shape = nodeShape;
      node.dom.prepend(nodeShape);
    }
    setAttrs(node.dom, {
      class: `ve-node ${nodeData.className || ""}`,
    });
    node.dom.setAttribute("transform", `translate(${nodeData.x} ,${nodeData.y})`);
    node.data = nodeData;
    if (rerenderShape) {
      node.linkPoints.forEach((linkPoint) => {
        shape.renderLinkPoint(node, linkPoint);
      });
    }

  }

  /**
   * 给节点添加连线点
   * @param {node} node
   */
  addNodeLinkPoints(node: InstanceNode) {
    node.linkPoints = [];
    const shape = this.shapes[node.data.type || "default"];
    node.linkPointsTypes = node.linkPointsTypes || this.shapes[node.data.type].linkPoints;
    if (!node.linkPointsTypes) {
      return false;
    }
    node.linkPointsTypes.forEach((linkPoint, index) => {
      if (shape.renderLinkPoint) {
        const instancePoint: InstanceNodePoint = {
          data: { ...linkPoint },
          dom: undefined,
          x: 0,
          y: 0,
        };
        shape.renderLinkPoint(node, instancePoint);
        instancePoint.index = index;
        instancePoint.nodeId = node.data.uuid;
        node.linkPoints.push(instancePoint);
        setAttrs(instancePoint.dom, {
          "data-node-id": node.data.uuid,
          "data-index": index,
        });
        node.dom.append(instancePoint.dom);
        this.graph.line.addLinkPointEvent(instancePoint);
      }
    });
  }

  updateLinkPoints(node: InstanceNode) {
    node.linkPoints?.forEach((point) => {
      point.dom.remove();
      point = null;
    });
    this.addNodeLinkPoints(node);
  }

  panNode(node: InstanceNode, dx: number, dy: number) {
    const { controller } = this.graph.editor;
    const { scale } = controller;
    let x = (node.startX || 0) + dx / scale;
    let y = (node.startY || 0) + dy / scale;
    const newXY = this.graph.anchorLine.check(x, y);
    if (newXY) {
      x = newXY.x;
      y = newXY.y;
    }
    node.data.x = x;
    node.data.y = y;
    node.linkPoints.forEach((circle) => {
      this.shapes[node.data.type || "default"].renderLinkPoint(
        node,
        circle
      );
    });
    node.dom.setAttribute("transform", `translate(${x} ,${y})`);
  }

  /**
   * 给节点添加事件
   * @param {*} node
   */
  addNodeEvent(node: InstanceNode) {
    node._destroys.push(
      SVGHelper.drag(
        node.dom,
        (e) => {
          const dx = e.clientX - node.clientX;
          const dy = e.clientY - node.clientY;
          if (this.actives[node.data.uuid]) {
            for (let key in this.actives) {
              this.panNode(this.actives[key], dx, dy);
              /**
               * @event Graph#node:move on node move event
               */
              this.graph.fire("node:move", {
                node: this.actives[key],
              });
            }
          } else {
            this.panNode(node, dx, dy);
            /**
             * @event Graph#node:move
             */
            this.graph.fire("node:move", { node });
          }
        },
        (e) => {
          // 拖动时是否有选中其他
          for (let key in this.actives) {
            this.actives[key].startX = this.actives[key].data.x;
            this.actives[key].startY = this.actives[key].data.y;
          }
          this.graph.anchorLine.makeAllAnchors(node);
          node.clientX = e.clientX;
          node.clientY = e.clientY;
          // 提前获得bbox避免重绘
          node.startX = node.data.x;
          node.startY = node.data.y;
          /**
          * @event Graph#node:startmove start move
          */
          this.graph.fire("node:startmove", { node });
        },
        (e) => {
          this.graph.anchorLine.hidePath();
          if (
            node.startX === node.data.x &&
            node.startY === node.data.y
          ) {
            return false;
          }
          /**
          * @event Graph#node:endmove end move
          */
          this.graph.fire("node:endmove", { node });
          this.graph.fire("node:change", { node });
        }
      )
    );
    node.dom.addEventListener("click", (event) => {
      if (
        Math.abs(event.clientX - node.clientX) < 2 &&
        Math.abs(event.clientY - node.clientY) < 2
      ) {
        if (event.shiftKey) {
          if (this.actives[node.data.uuid]) {
            this.unActive(node);
          } else {
            this.setActive(node);
          }
        } else {
          this.unActive();
          this.setActive(node);
        }
        /**
         * @event Graph#node:click - 节点点击事件
         */
        this.graph.fire("node:click", { node, event });
      }
    });
    node.dom.addEventListener("mouseenter", (event) => {
      /**
       * @event Graph#node:mouseenter - 节点进入事件
       */
      this.graph.fire("node:mouseenter", { node, event });

    });

    node.dom.addEventListener("mouseleave", (event) => {
      /**
       * @event Graph#node:mouseleave
       */
      this.graph.fire("node:mouseleave", { node, event });

    });
  }

  setActive(node: InstanceNode) {
    const nodes = node
      ? {
        [node.data.uuid]: node,
      }
      : this.nodes;
    for (let key in nodes) {
      node = nodes[key];
      node.dom.classList.add("active");
      setAttrs(node.shape, {
        filter: "url(#ve-black-shadow)",
      });
      this.actives[node.data.uuid] = node;
    }

    /**
     * @event Graph#node:unactive
     */
    this.graph.fire("node:active", { nodes });
  }

  unActive(node?: InstanceNode) {
    if (node) {
      delete this.actives[node.data.uuid];
      this.unActiveNode(node);
    } else {
      for (let key in this.actives) {
        this.unActiveNode(this.actives[key]);
      }
      this.actives = {};
    }
    /**
     * @event Graph#node:unactive
     */
    this.graph.fire("node:unactive", { node: node });
  }

  unActiveNode(node: InstanceNode) {
    node.dom.classList.remove("active");
    setAttrs(node.dom, {
      filter: null,
    });
  }

  /**
   *
   */
  clear() {
    const { nodes } = this;
    clearTimeout(this.timeout);
    for (let key in nodes) {
      this.deleteNode(nodes[key].data);
    }
  }
}
export default Node;