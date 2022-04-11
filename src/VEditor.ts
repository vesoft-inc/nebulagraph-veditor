import Graph from "./Shape/Graph";
import Controller from "./Utils/Controller";
import Schema from "./Model/Schema";
import Minimap from "./Plugins/Minimap";
import "./index.less";
import { createSVGElement, setAttrs } from "./Utils/dom";
import * as Utils from "./Utils";
export interface VEditorOptions {
    dom: HTMLDivElement;
    hideAchor?: boolean;
    hideAchorLine?: boolean;
    anchorDistance?: number;
    showBackGrid?: boolean;
    showMiniMap?: boolean;
    mode?: "edit" | "view";
    dagreOption?: Record<string, any>;
    [key: string]: any;
}
/**
 * @class
 * @extends Event
 */
class VEditor extends Utils.Event {
    config: VEditorOptions;
    dom: HTMLDivElement;
    svg: SVGSVGElement;
    paper: SVGGElement;
    container: HTMLDivElement;
    graph: Graph;
    controller: Controller;
    schema: Schema;
    minimap: Minimap;
    constructor(config: VEditorOptions) {
        super();
        this.config = Object.assign(
            {
                hideAchor: false,
                hideAchorLine: false,
                anchorDistance: 5,
                showBackGrid: true,
                showMiniMap: false,
                mode: undefined,
                dagreOption: {},
            },
            config
        );
        if (!config.dom) return;
        /**
         * @property {HTMLElement} dom 容器
         */
        this.dom = this.initDom(config.dom);
        /**
         * @property {Snap.Element} svg
         */
        this.svg = this.dom.querySelector("svg");
        /**
         * @property {Snap.Element} paper
         */
        this.paper = createSVGElement("g", this.svg) as SVGGElement;
        this.paper.classList.add("ve-editor-paper");
        /**
         * @property {HTMLElement} container 实例dom
         */
        this.container = this.dom.querySelector(".ve-editor");
        this.resize();
        /**
         * @property {Graph} graph 画布
         */
        this.graph = new Graph(this);
        /**
         * @property {Controller} controller 控制器
         */
        this.controller = new Controller(this);
        /**
         * @property {Schema} schema 数据管理器
         */
        this.schema = new Schema(this);
        if (this.config.showMiniMap) {
            /**
             * @property {Minimap?} minimap 小地图
             */
            this.minimap = new Minimap(this);
            this.minimap.init();
        }
    }

    initDom(dom: HTMLDivElement): HTMLDivElement {
        dom.innerHTML = `<div class="ve-editor ${this.config.mode || ""}" >
				<div class="ve-editor-back" ></div>
				<div class="ve-editor-svg" >
					<svg  />
				</div>
			</div>`;
        return dom;
    }

    /**
     * 重新布局
     */
    resize() {
        const { width, height } = this.config;
        setAttrs(this.svg, {
            width: width || "100%",
            height: height || "100%",
        });
    }

    /**
     * 销毁函数
     */
    destroy() {
        this.minimap && this.minimap.destroy();
        this.graph.destroy();
        this.graph = undefined;
        this.svg.remove();
        this.dom.innerHTML = undefined;
        this.controller.clear();
        this.controller = undefined;
        this.schema = undefined;
        this.clear();
    }

    /**
     * 重绘
     */
    repaint() {
        this.graph.clearGraph();
        this.graph.render(this.schema.data);
    }
}
export default VEditor;
