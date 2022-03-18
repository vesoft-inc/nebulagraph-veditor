import Node from './Node';
import Line from './Line';
import Event from '../Utils/Event';
import Animation from './Animation';
import AnchorLine from './AnchorLine';
const backSvg = require('../back.svg');
/**
 * @class
 * @extends Event
 */
class Graph extends Event {
	constructor(editor) {
		super();
		this.editor = editor;
		/**
		 * @property {Node} node
		 */
		this.node = new Node(this);
		/**
		 * @property {Line} line
		 */
		this.line = new Line(this);
		/**
		* @prop {AnchorLine} anchorLine
		*/
		this.anchorLine = new AnchorLine(this);
		this.node.linkPointsG.before(this.line.lineG);
		/**
		 * @prop {Animation} animation
		 */
		this.animation = Animation;

		// 模式：操作、查看模式
		this.mode = editor.config.mode;

		this.listenEvents();
		if (this.editor.config.showBackGrid) { this.addBack(); }
	}

	addBack() {
		this.editor.container.select('.mm-editor-back').node.style.backgroundImage = `url(${backSvg})`;
	}

	listenEvents() {
		this.on('node:move', ({ node }) => {
			this.line.updateByNode(node);
		});
		this.editor.svg.attr({
			tabindex: '0'
		});
		this.editor.svg.click(e => {
			if (e.target.tagName === 'svg') {
				this.fire('paper:click', e);
			}
		});

		// 查看模式不能删除节点、线条；如果存在部分可操作则自己在业务中监听处理相关逻辑
		if (this.mode !== 'view') {
			document.addEventListener('keydown', this.onKeyDown);
		}

		this.on('line:drag', () => {
			this.linkStatus = 'lineing';
			for (let key in this.node.nodes) {
				const node = this.node.nodes[key];
				node.linkPoints.forEach(point => {
					point.attr({
						display: 'block'
					});
				});
			}
		});
		this.on('line:drop', () => {
			this.linkStatus = 'none';
			for (let key in this.node.nodes) {
				const node = this.node.nodes[key];
				node.linkPoints.forEach(point => {
					point.attr({
						display: 'none'
					});
				});
			}
		});
	}

	//todo:
	onKeyDown = (e) => {
		if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.getAttribute("contenteditable") !== "false") {
			return;
		}
		if (e.key === 'Backspace') {
			const deleteKeys = [];
			for (let key in this.node.actives) {
				// 不触发事件
				this.node.deleteNode(this.node.actives[key]);
				delete this.node.actives[key];
				deleteKeys.push(key);
			}
			this.line.activeLine && this.line.deleteLine(this.line.activeLine);
			/**
			 * @event Graph#delete
			 * @type {Object}
			 */
			this.fire('delete', { event: e, deleteKeys });
		}
		if (e.keyCode === 'C'.charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
			/**
						 * @event Graph#copy
						 * @type {Object}
						 */
			this.fire('copy', { event: e });
		}
		if (e.keyCode === 'V'.charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
			/**
			 * @event Graph#paste
			 * @type {Object}
			 */
			this.fire('paste', { event: e });
		}
		if (e.keyCode === 'Z'.charCodeAt(0) && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
			this.editor.schema.undo();
		}
		if (e.keyCode === 'Z'.charCodeAt(0) && (e.metaKey || e.ctrlKey) && e.shiftKey) {
			this.editor.schema.redo();
		}
		e.preventDefault();
		return false;
	}

	/**
	 * 添加链接点事件
	 */
	addLinkHoverEvent() {
		const linkPoints = this.editor.paper.selectAll('.mm-link-points');
		linkPoints.forEach(point => {
			point.mouseover(this.onLinkPointHover);
			point.mouseout(this.onLinkPointOut);
		});
	}

	onLinkPointHover = ele => {
		this.hoverLinkPoint = ele;
	};
	onLinkPointOut = ele => {
		this.hoverLinkPoint = undefined;
	};

	/**
	 * 关闭线hover事件
	 */
	offLinkHoverEvent() {
		const linkPoints = this.editor.paper.selectAll('.mm-link-points');
		linkPoints.forEach(point => {
			point.unmouseover(this.onLinkPointHover);
			point.unmouseout(this.onLinkPointOut);
		});
		this.hoverLinkPoint = undefined;
	}

	/**
	 *
	 * @param {*} data
	 */
	async render(data) {
		/**
		 * @event Graph#beforeRender 渲染之前触发
		 */
		this.fire('beforeRender')
		this.data = data;
		await this.node.render(data.nodesMap);
		await this.line.render(data.linesMap);
		/**
		 * @event Graph#render  渲染后触发
		 */
		this.fire('render')
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
		document.removeEventListener('keydown', this.onKeyDown);
	}
}
export default Graph;
