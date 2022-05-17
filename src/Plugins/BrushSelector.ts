import { VEditorLine, VEditorNode } from "../Model/Schema";
import { Event, SVGHelper } from "../Utils";
import { setAttrs } from "../Utils/dom";
import VEditor from "../VEditor";
interface IPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}
class BrushSelector extends Event {
  paper: SVGGElement;
  editor: VEditor;
  svg: SVGSVGElement;
  container: SVGGElement;
  dom: SVGElement;
  startPos: { x: number; y: number; rect: DOMRect; };
  position: any;
  radius: any;

  constructor(editor: VEditor) {
    super();
    this.editor = editor;
    this.paper = editor.paper;
    this.svg = editor.svg;
    this.listenEvents();
    this.init();
  }

  init() {
    const node = this.paper as SVGGElement;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    node.insertBefore(g, node.firstChild);
    this.container = g;
    this.dom = SVGHelper.createSVGElement('rect', this.container);
  }

  listenEvents() {
    const { editor, container } = this;
    const { svg } = editor;
    svg.addEventListener('mousedown', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      this.startPos = {
        x: e.pageX - rect.x,
        y: e.pageY - rect.y,
        rect,
      };
      editor.controller.disable();
      svg.addEventListener('mousemove', this.onMouseMove);
      svg.addEventListener('mouseup', this.onMouseUp);
      svg.addEventListener('mouseleave', this.onMouseUp);
    });
  }

  onMouseUp = () => {
    const { editor } = this;
    const { svg } = editor;
    svg.removeEventListener('mousemove', this.onMouseMove);
    svg.removeEventListener('mouseup', this.onMouseUp);
    svg.removeEventListener('mouseleave', this.onMouseUp);
    this.calcOuputInner();
  };

  onMouseMove = (e: MouseEvent) => {
    const { rect } = this.startPos;
    const endPos = {
      x: e.pageX - rect.x,
      y: e.pageY - rect.y,
    };
    const dx = endPos.x - this.startPos.x;
    const dy = endPos.y - this.startPos.y;
    const x = dx > 0 ? this.startPos.x : this.startPos.x + dx;
    const y = dy > 0 ? this.startPos.y : this.startPos.y + dy;
    this.position = this.toLoaclPos({
      x,
      y,
      width: Math.abs(dx),
      height: Math.abs(dy),
    });
    this.render();
  };

  toLoaclPos(position: IPosition): IPosition {
    const { controller } = this.editor;
    const { x, y, width, height } = position;
    return {
      x: (x - controller.x) / controller.scale,
      y: (y - controller.y) / controller.scale,
      width: width / controller.scale,
      height: height / controller.scale,
    };
  }

  calcOuputInner() {
    if (!this.position) return;
    const { x, y, width, height } = this.position;
    /**
     * |* | calc inner nodes & edges
     * | *|
     */
    const radius = this.radius;
    const bbox = [x - radius, y - radius, x + width - radius, y + height - radius];
    const { node, line } = this.editor.graph;
    const uuids: string[] = [];
    for (const key in node.nodes) {
      const item = node.nodes[key].data as VEditorNode;
      if (item.x > bbox[0] && item.x < bbox[2] && item.y > bbox[1] && item.y < bbox[3]) {
        uuids.push(item.uuid);
      }
    }
    for (const key in line.lines) {
      const item = line.lines[key].data as VEditorLine;
      const { from, to } = item;
      const fromNode = node.nodes[from].data as VEditorLine;
      const toNode = node.nodes[to].data as VEditorLine;

      if (
        fromNode.x > bbox[0] &&
        fromNode.x < bbox[2] &&
        fromNode.y > bbox[1] &&
        fromNode.y < bbox[3] &&
        toNode.x > bbox[0] &&
        toNode.x < bbox[2] &&
        toNode.y > bbox[1] &&
        toNode.y < bbox[3]
      ) {
        uuids.push(item.uuid);
      }
    }
    if (!uuids.length) {
      this.clear();
    }
  }

  render() {
    setAttrs(this.dom, {
      x: this.position.x,
      y: this.position.y,
      width: this.position.width,
      height: this.position.height,
    });
  }
}
export default BrushSelector