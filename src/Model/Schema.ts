import History from "./History";
import dagre from "dagre";
import { v1 as getUuid } from "uuid";
import VEditor from "../VEditor";
import { AnyMap, Position } from "../Utils/types";

export interface VEditorNode extends AnyMap {
  uuid?: string;
  type: string;
  x?: number;
  y?: number;
  name?: string;
  data?: AnyMap;
  iconPath?: string;
  style?: AnyMap;
  className?: string;
  linkPointsTypes?: Position[]
}
export type VEditorLine = {
  type?: string;
  uuid?: string;
  from: string;
  to: string;
  fromPoint?: number;
  toPoint?: number;
  fromX?: number;
  fromY?: number;
  toX?: number;
  toY?: number;
  name?: string;
  data?: AnyMap;
  label?: string;
  className?: string;
  labelCfg?: {
    refX?: number;
    refY?: number;
    autoRotate?: boolean;
    showNum?: number;
    style?: AnyMap;
  };
} & AnyMap;
export interface VEditorData {
  nodes: VEditorNode[];
  lines: VEditorLine[];
}
export interface VEditorSchema {
  nodesMap: Record<string, VEditorNode>;
  linesMap: Record<string, VEditorLine>;
}
class Schema {
  data: VEditorSchema;
  editor: VEditor;
  history: History;
  /**
   *
   * @param {VEditor} editor - VEditor实例
   */
  constructor(editor: VEditor) {
    this.data = {
      nodesMap: {},
      linesMap: {},
    };

    this.editor = editor;
    /**
     * @property {History} history
     */
    this.history = new History(this);
    this.listenEvents();
  }

  /**
   * 格式化有向图
   */
  async format() {
    const nodes = this.editor.graph.node.nodes;
    const lines = this.editor.graph.line.lines;
    const res = {
      nodes: [],
      lines: [],
    };
    const g = new dagre.graphlib.Graph();
    const option = Object.assign(
      {
        nodesep: 50,
        rankdir: "TB",
        ranksep: 50,
        align: "UL",
      },
      this.editor.config.dagreOption
    );
    g.setGraph(option);
    const { center = true } = this.editor.config.dagreOption;

    g.setDefaultEdgeLabel(function () {
      return {};
    });

    for (let key in nodes) {
      const node = nodes[key];
      const data = node.data;
      if (!data.width || !data.height) {
        const bbox = node.dom.getBBox();
        data.width = bbox.width;
        data.height = bbox.height;
      }
      g.setNode(key, { ...data });
    }
    for (let key in lines) {
      const line = lines[key];
      const data = line.data;
      g.setEdge(data.from, data.to);
      res.lines.push(data);
    }

    dagre.layout(g);

    g.nodes().forEach(function (key) {
      const nodeData = g.node(key);
      if (center) {
        if (option.rankdir.indexOf("T") < 0) {
          // 左右布局
          nodeData.y -= nodeData.height / 2;
        } else {
          //上下布局
          nodeData.x -= nodeData.width / 2;
        }
      }
      res.nodes.push(nodeData);
    });
    // 触发format事件，保存历史
    await this.setData(res);
    /**
     * @event VEditor#format
     * @property {{data:VEditorData}} data
     */
    this.editor.fire("format", { data: res });
  }

  listenEvents() {
    const historyChangeEvents = [
      "node:change",
      "node:add",
      "line:change",
      "line:add",
      "line:remove",
      "delete",
    ];
    const editorEvents = ["autofit"]
    historyChangeEvents.forEach((event) => {
      this.editor.graph.on(
        event,
        () => {
          this.history.push(this.makeNowDataMap());
        },
        9999
      );
    });

    editorEvents.forEach((event) => {
      this.editor.on(
        event,
        () => {
          this.history.push(this.makeNowDataMap());
        },
        9999
      );
    });
  }

  /**
   * 历史入栈最新数据
   */
  pushHistory() {
    this.history.push(this.makeNowDataMap());
  }

  /**
   * 历史出栈
   */
  popHistory() {
    this.history.pop();
  }

  /**
   * 获取当前最新的map
   */
  makeNowDataMap() {
    const nodes = this.editor.graph.node.nodes;
    const lines = this.editor.graph.line.lines;
    let nodesMap = {};
    let linesMap = {};
    for (let uuid in nodes) {
      nodesMap[uuid] = nodes[uuid].data;
    }
    for (let uuid in lines) {
      linesMap[uuid] = lines[uuid].data;
    }
    this.data = {
      nodesMap,
      linesMap,
    };
    return this.data;
  }

  async setData(data: VEditorData) {
    this.parseData(data); // 解析数据
    this.editor.graph.clearGraph();
    await this.renderData();
    /**
     * @event VEditor#load
     * @type {Object}
     */
    this.editor.fire("load", data);
  }

  async setInitData(data: VEditorData) {
    await this.setData(data);
    this.history.clear();
    this.history.push(this.data);
  }

  parseData({ nodes = [], lines = [] }: VEditorData) {
    let nodesMap = {};
    let linesMap = {};
    nodes.forEach((item) => {
      nodesMap[item.uuid] = item;
    });
    lines.forEach((item) => {
      const { uuid } = item;
      linesMap[uuid ? uuid : getUuid()] = item;
    });
    this.data = {
      nodesMap,
      linesMap,
    };
  }

  /**
   * 渲染数据
   */
  async renderData() {
    await this.editor.graph.render(this.data);
  }

  /**
   * 重做
   */
  async redo() {
    if (this.history.redo()) {
      this.editor.graph.clearGraph();
      await this.renderData();
      this.editor.fire("redo");
    }
  }

  /**
   * 撤销
   */
  async undo() {
    if (this.history.undo()) {
      this.editor.graph.clearGraph();
      await this.renderData();
      this.editor.fire("undo");
    }
  }

  /**
   * 获取数据
   */
  getData() {
    this.makeNowDataMap();
    const { nodesMap, linesMap } = this.data;
    return {
      nodes: Object.keys(nodesMap).map((key) => nodesMap[key]),
      lines: Object.keys(linesMap).map((key) => linesMap[key]),
    };
  }
}
export default Schema;
