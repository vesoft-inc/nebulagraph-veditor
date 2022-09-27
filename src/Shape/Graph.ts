import Node from "./Node";
import Line from "./Line";
import AnchorLine from "./AnchorLine";
import VEditor from "../VEditor";
import { setAttrs } from "../Utils/dom";
import { VEditorSchema } from "../Model/Schema";
import * as Utils from "../Utils";
const backSvg = require("../back.svg").default;

class Graph extends Utils.Event {
  editor: VEditor;
  node: Node;
  line: Line;
  anchorLine: AnchorLine;
  mode: "edit" | "view";
  linkStatus: string;
  data: VEditorSchema;
  constructor(editor: VEditor) {
    super();
    this.editor = editor;
    this.node = new Node(this);
    this.line = new Line(this);
    this.anchorLine = new AnchorLine(this);

    // 模式：操作、查看模式
    this.mode = editor.config.mode;

    this.listenEvents();
    if (this.editor.config.showBackGrid) {
      this.addBack();
    }
  }

  addBack() {
    (
      this.editor.container.querySelector(
        ".ve-editor-back"
      ) as HTMLDivElement
    ).style.backgroundImage = `url(${backSvg})`;
  }

  listenEvents() {

    this.on("node:move", ({ node }) => {
      this.line.updateByNode(node);
    });
    setAttrs(this.editor.svg, {
      tabindex: "0",
    });
    this.editor.svg.addEventListener("click", (e: MouseEvent) => {
      if ((e.target as Element).tagName === "svg") {
        this.fire("paper:click", e);
      }
    });

    document.addEventListener("keydown", this.onKeyDown);

    this.on("line:drag", () => {
      this.linkStatus = "lineing";
      this.editor.paper.classList.add("ve-paper-lineing");
    });
    this.on("line:drop", () => {
      this.linkStatus = "none";
      this.editor.paper.classList.remove("ve-paper-lineing");
    });
  }

  onKeyDown = (e: KeyboardEvent) => {

    // 查看模式不能删除节点、线条；如果存在部分可操作则自己在业务中监听处理相关逻辑
    if (this.mode === "view") {
      return
    }
    if (
      ["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) >
      -1 &&
      document.activeElement.getAttribute("contenteditable") !== "false"
    ) {
      return;
    }
    if (e.key === "Backspace") {
      const deleteKeys = [];
      for (let key in this.node.actives) {
        // 不触发事件
        this.node.deleteNode(this.node.actives[key].data);
        delete this.node.actives[key];
        deleteKeys.push(key);
      }
      this.line.activeLine &&
        this.line.deleteLine(this.line.activeLine.data);
      /**
       * @event Graph#delete
       * @type {Object}
       */
      this.fire("delete", { event: e, deleteKeys });
    }
    if (e.keyCode === "C".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
      /**
       * @event Graph#copy
       * @type {Object}
       */
      this.fire("copy", { event: e });
      return;
    }
    if (e.keyCode === "V".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
      /**
       * @event Graph#paste
       * @type {Object}
       */
      this.fire("paste", { event: e });
      return;
    }
    if (
      e.keyCode === "Z".charCodeAt(0) &&
      (e.metaKey || e.ctrlKey) &&
      !e.shiftKey
    ) {
      this.editor.schema.undo();
    }
    if (
      e.keyCode === "Z".charCodeAt(0) &&
      (e.metaKey || e.ctrlKey) &&
      e.shiftKey
    ) {
      this.editor.schema.redo();
    }
    e.preventDefault();
    return false;
  };

  async render(data: VEditorSchema) {
    /**
     * @event Graph#beforeRender 渲染之前触发
     */
    this.fire("beforeRender");
    this.data = data;
    await this.node.render(data.nodesMap);
    await this.line.render(data.linesMap);
    /**
     * @event Graph#render  渲染后触发
     */
    this.fire("render");
  }

  update() {
    this.node.update();
    this.line.update();
    /**
    * @event Graph#update  渲染后触发
    */
    this.fire("update");
  }

  /**
   * 清空画布
   */
  clearGraph() {
    this.line.clear();
    this.node.clear();
  }

  destroy() {
    this.clearGraph();
    this.clear();
    document.removeEventListener("keydown", this.onKeyDown);
  }
}
export default Graph;
