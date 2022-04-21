import VEditor from "../VEditor";
import { setAttrs, setTransform } from "./dom";
import * as Utils from ".";
/**
 * 控制器
 * @class
 * @extends Event
 */
class Controller extends Utils.Event {
    editor: VEditor;
    paper: SVGGElement;
    svg: SVGSVGElement;
    scaleRatio: number = 0.01;
    scale: number = 1;
    x: number = 0;
    y: number = 0;
    achors: number[] = [];
    status: string;
    startPosition: { x: any; y: any };
    constructor(editor: VEditor) {
        super();
        this.editor = editor;
        this.paper = editor.paper;
        this.svg = editor.svg;
        this.listenEvents();
    }

    /**
     * 自适应,支持
     */
    autoFit(center = true, vertical = true) {
        const data = this.editor.schema.getData();
        this.x = 0;
        this.y = 0;
        setAttrs(this.paper, {
            transform: setTransform(this.scale, 0, 0),
        });
        const { width, height } = this.editor.dom.getBoundingClientRect();
        const bbox = this.paper.getBBox();
        const dx = ((width - bbox.width) / 2 - bbox.x) / this.scale;
        const dy = ((height - bbox.height) / 2 - bbox.y) / this.scale;
        data.nodes.forEach((node) => {
            if (center) node.x += dx;
            if (vertical) node.y += dy;
        });
        this.editor.schema.setData(data);
        this.editor.fire("autofit", { data });
        setTimeout(() => {
            this.paper.style.transition = null;
        }, 200);
    }

    listenEvents() {
        this.svg.addEventListener("mousedown", this.panStart);
        this.svg.addEventListener("mouseup", this.panStop);
        this.svg.addEventListener("mouseleave", this.panStop);
        this.svg.addEventListener("wheel", this.onWheel);
    }

    clear() {
        this.svg.removeEventListener("mousedown", this.panStart);
        this.svg.removeEventListener("mouseup", this.panStop);
        this.svg.removeEventListener("mouseleave", this.panStop);
        this.svg.removeEventListener("wheel", this.onWheel);
    }

    /**
     * 禁用滚轮缩放
     */
    disableWheel() {
        this.svg.removeEventListener("wheel", this.onWheel);
    }

    /**
     * 禁用鼠标移动
     */
    disablePan() {
        this.svg.removeEventListener("mousedown", this.panStart);
    }
    /**
     * 移动到指定位置
     */
    pan(x: number, y: number) {
        this.x += x;
        this.y += y;
        this.update();
        this.editor.fire("panning");
    }

    /**
     * 移动到指定位置
     */
    moveTo(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.update();
    }

    onWheel = (e: WheelEvent) => {
        if (this.status === "disabled") {
            return;
        }
        e.preventDefault();

        if (e.ctrlKey) {
            // 双指
            const newScale = Math.max(1 - e.deltaY * this.scaleRatio, 0.1);
            this.zoom(newScale, e.offsetX, e.offsetY);
        } else {
            this.pan(-e.deltaX, -e.deltaY);
        }
    };

    panStart = (ev: MouseEvent) => {
        if (
            (ev.target as Element).tagName !== "svg" ||
            this.status === "disabled"
        ) {
            return;
        }
        ev.preventDefault();
        this.startPosition = { x: ev.clientX, y: ev.clientY };
        this.svg.addEventListener("mousemove", this.panning);
    };

    panStop = (ev: MouseEvent) => {
        ev.preventDefault();
        this.svg.removeEventListener("mousemove", this.panning);
        // this.svg.unmouseup(this.panStop);
        this.editor.fire("panEnd", { event: ev });
    };
    /**
     * 缩放
     * @param  {number} scale 当前基础上 缩放多少
     * @param  {number} cx=0 zoom 缩放中心点x
     * @param  {number} cy=0 zoom 缩放中心点y
     */
    zoom = (newScale, cx = 0, cy = 0) => {
        this.scale *= newScale;
        const dis = [
            (cx - this.x) * (newScale - 1),
            (cy - this.y) * (newScale - 1),
        ];
        this.x -= dis[0];
        this.y -= dis[1];
        this.update();
        this.editor.fire("zoom", { scale: newScale });
    };

    /**
     * 滚动到指定位置
     * @param {number} newScale
     */
    zoomTo = (newScale: number) => {
        this.scale = newScale;
        this.update();
    };

    /**
     * 做指定转换
     */
    transform = (newScale: number, x = 0, y = 0) => {
        this.scale = newScale;
        this.x = x;
        this.y = y;
        this.update();
        this.editor.fire("panning");
        this.editor.fire("zoom");
    };

    panning = (ev: MouseEvent) => {
        ev.preventDefault();
        const p1 = { x: ev.clientX, y: ev.clientY };
        const p2 = this.startPosition;

        const deltaP = [p1.x - p2.x, p1.y - p2.y];
        this.x += deltaP[0];
        this.y += deltaP[1];
        this.update();
        this.startPosition = p1;
        this.editor.fire("panning", { event: ev });
    };

    disable() {
        this.status = "disabled";
    }

    enable() {
        this.status = "enable";
    }
    /**
     * 更新最新的matrix
     */
    update() {
        setAttrs(this.paper, {
            transform: `matrix(${this.scale}, 0, 0, ${this.scale}, ${this.x}, ${this.y})`,
        });
    }
}
export default Controller;
