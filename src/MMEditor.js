import Graph from "./Shape/Graph";
import Snap, { eve, mina } from "./Snap/snap.svg.js";
import Event from "./Utils/Event";
import Controller from "./Utils/Controller";
import Schema from "./Model/Schema";
import Minimap from './Plugins/Minimap';
import Util from './Utils/util'
import "./index.less";

/**
 * @class 
 * @extends Event
 */
class MMEditor extends Event {
	// /**
	//  * 初始化配置
	//  * @param {Object} config - 初始化配置.
	//  * @param {boolean} config.hideAchor - 是否隐藏磁吸.
	//  * @param {boolean} config.hideAchorLine - 是否隐藏磁吸线
	//  * @param {string} config.anchorDistance - 磁吸距离
	//  * @param {boolean} config.showBackGrid - 是否展示网格
	//  * @param {boolean} config.showMiniMap - 是否隐藏小地图
	//  * @param {string} config.mode - 模式是否只读，可选 view
	//  * @param {Object} config.dagreOption - dagre的配置
	//  */

	constructor(config) {
		super();
		this.config = Object.assign({
			hideAchor: false,
			hideAchorLine: false,
			anchorDistance: 5,
			showBackGrid: true,
			showMiniMap: false,
			mode: undefined,
			dagreOption: {}
		}, config);
		if (!config.dom) return;
		/**
		* @property {HTMLElement} dom 容器
		*/
		this.dom = this.initDom(config.dom);
		/**
		 * @property {Snap.Element} svg
		 */
		this.svg = Snap(this.dom.select("svg"));
		/**
		 * @property {Snap.Element} paper
		 */
		this.paper = this.svg.g();
		this.paper.addClass("mm-editor-paper");
		/**
		 * @property {HTMLElement} container 实例dom
		 */
		this.container = this.dom.select(".mm-editor");
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

	initDom(dom) {
		dom.innerHTML = `<div class="mm-editor ${this.config.mode || ''}" >
				<div class="mm-editor-back" ></div>
				<div class="mm-editor-svg" >
					<svg  />
				</div>
			</div>`;
		return Snap(dom);
	}

	/**
	 * 重新布局
	 */
	resize() {
		const { width, height } = this.config;
		this.svg.attr({
			width: width || "100%",
			height: height || "100%"
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
MMEditor.Event = Event;
MMEditor.Schema = Schema;
MMEditor.Snap = Snap;
MMEditor.Graph = Graph;
MMEditor.Controller = Controller;
MMEditor.Util = Util;
export default MMEditor;
export { Event, MMEditor, Schema, Snap, Graph, Controller, eve, mina };
