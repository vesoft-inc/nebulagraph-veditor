import { SVGHelper } from "../Utils/svg";
import VEditor from "../VEditor";
import { Canvg } from "canvg";
import { mat2d } from "gl-matrix";
import { Position } from "../Utils/types";
// 使用html
/**
 * @class
 */
class MiniMap {
  editor: VEditor;
  width: number;
  height: number;
  padding: number;
  scale: number;
  container: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  drag: HTMLDivElement;
  dragPoint: HTMLDivElement;
  dragBBox: {
    width: number;
    height: number;
  };
  dragStart: Position;
  svgBBox: DOMRect;
  dragStartBBox: DOMRect;
  limitScale: number;
  converting: Canvg;
  timeout: any;
  constructor(editor: VEditor) {
    this.editor = editor;
    const { minimap = [] } = editor.config;
    this.width = minimap.width || 160;
    this.height = minimap.height || 160;
    this.padding = minimap.padding || 20;
    this.scale = minimap.scale || 10;
  }

  init() {
    const dom = `<div class="ve-minimap" >
			<canvas width="100%" height="100%"></canvas>
			<div class="drag-rect" style="left:${this.padding}px;top:${this.padding}px">
				<div class="drag-point"></div>
			</div>
		</div>`;
    const can = document.createElement("div");
    can.innerHTML = dom;
    this.container = can.querySelector(".ve-minimap");
    this.editor.container.append(this.container);
    this.canvas = this.container.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drag = this.container.querySelector(".drag-rect");
    this.dragPoint = this.container.querySelector(".drag-point");
    const bbox = this.container.getBoundingClientRect();
    this.width = bbox.width;
    this.height = bbox.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.initEvent();
  }

  initEvent() {
    const { controller } = this.editor;
    this.canvas.addEventListener("click", (e) => {
      const left = e.offsetX - this.dragBBox.width / 2;
      const top = e.offsetY - this.dragBBox.height / 2;
      this.drag.style.left = left + "px";
      this.drag.style.top = top + "px";
      controller.moveTo(
        -(left - this.padding) * this.scale * controller.scale,
        -(top - this.padding) * this.scale * controller.scale
      );
      this.resetDrag();
    });
    let clientX = 0;
    let clientY = 0;
    SVGHelper.drag(
      this.drag,
      (e) => {
        const dx = e.clientX - clientX;
        const dy = e.clientY - clientY;
        const dleft = dx + this.dragStart.x;
        const dtop = dy + this.dragStart.y;
        const left = Math.min(
          Math.max(dleft, 0),
          this.width - this.dragBBox.width + this.padding * 2
        );
        const top = Math.min(
          Math.max(dtop, 0),
          this.height - this.dragBBox.height + this.padding * 2
        );
        this.drag.style.left = left + "px";
        this.drag.style.top = top + "px";
        controller.moveTo(
          -(left - this.padding) * this.scale * controller.scale,
          -(top - this.padding) * this.scale * controller.scale
        );
      },
      (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
        const { style } = this.drag;
        this.dragStart = {
          x: style.left ? parseInt(style.left.split("px")[0]) : 0,
          y: style.top ? parseInt(style.top.split("px")[0]) : 0,
        };
      },
      () => { }
    );
    let pointClientX = 0;
    let pointClientY = 0;
    SVGHelper.drag(
      this.dragPoint,
      (e) => {
        const dx = e.clientX - pointClientX;
        const dy = e.clientY - pointClientY;
        const ratio = this.svgBBox.width / this.svgBBox.height;
        let height = Math.max(dy + this.dragStartBBox.height, 10);
        let width = height * ratio;
        this.drag.style.width = width + "px";
        this.drag.style.height = height + "px";
        controller.scale = this.svgBBox.width / (width * this.scale);
        controller.update();
      },
      (e) => {
        pointClientX = e.clientX;
        pointClientY = e.clientY;
        e.preventDefault();
        e.stopPropagation();
        this.dragStartBBox = this.drag.getBoundingClientRect();
        return false;
      },
      () => { }
    );
    this.editor.on("change", this.render);
    this.editor.on("format", this.render);
    this.editor.on("autofit", this.resetDrag);
    this.editor.on("panning", this.resetDrag);
    this.editor.on("zoom", this.resetDrag);
  }

  /**
   * 重新计算拖拽框位置
   */
  resetDrag = () => {
    const { x, y, scale } = this.editor.controller;
    const { padding } = this;
    if (!this.svgBBox) return;
    /**
     * 这里虽然坐标整体都缩小了10倍，但是用户画布放大的scale倍，在这个坐标系下永远都是1倍，不会随着用户放大而放大，
     * 所以这里求得的左上角便宜坐标实际上还是标准倍率吸下的，需要再放大用户的倍率才能得到最终的效果，
     * 用户画布=>缩小10倍画布到用户scale*this.sclae=>还原回基准this.scale
     */
    this.drag.style.left = -x / scale / this.scale + padding + "px";
    this.drag.style.top = -y / scale / this.scale + padding + "px";
    this.dragBBox = {
      width: this.svgBBox.width / this.scale / scale,
      height: this.svgBBox.height / this.scale / scale,
    };
    this.drag.style.width = this.dragBBox.width + "px";
    this.drag.style.height = this.dragBBox.height + "px";
    // 这里需要考虑width太大的情况，这种时候需要引入一个新变量把图的缩小倍数变小,this.limitScale
  };

  /**
   * 重新渲染小地图
   */
  render = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      this.renderCanvas();
      this.resetDrag();
    }, 200);
  };

  async renderCanvas() {
    const node = this.editor.svg;
    const svgBBox = node.getBoundingClientRect();
    const images = node.querySelectorAll("image") || [];
    images.forEach((img) => {
      img.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    });
    const matrix = this.editor.paper.getAttribute("transform");
    this.editor.paper.setAttribute("transform", "");
    const svg = node.innerHTML;
    if (matrix) this.editor.paper.setAttribute("transform", matrix);
    const paperBBox = this.editor.paper.getBBox();
    this.scale =
      this.limitScale ||
      Math.max(
        paperBBox.width / (this.width - this.padding * 2),
        paperBBox.height / (this.height - this.padding * 2),
        10
      );
    const x = this.padding;
    const y = this.padding;
    const m = mat2d.create();
    mat2d.translate(m, m, [x, y]);
    mat2d.scale(m, m, [1 / this.scale, 1 / this.scale]);
    this.svgBBox = svgBBox;
    this.converting = await Canvg.fromString(
      this.ctx,
      `<g transform="matrix(${m.toString()})" class="minimap-graph">${svg}</g>`,
      {
        ignoreMouse: true,
        ignoreDimensions: true,
        ignoreAnimation: true,
      }
    );
    this.converting.render();
  }

  destroy() {
    clearTimeout(this.timeout);
    this.editor.off("change", this.render);
    this.editor.off("format", this.render);
    this.editor.off("autofit", this.resetDrag);
    this.editor.off("panning", this.resetDrag);
    this.editor.off("zoom", this.resetDrag);
    this.drag.remove();
    this.dragPoint.remove();
    this.drag.remove();
    this.dragPoint.remove();
  }
}
export default MiniMap;
