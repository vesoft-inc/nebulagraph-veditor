import DefaultLine from './Lines/Line';
import PolyLine from './Lines/PolyLine';
import { v1 as getUuid } from 'uuid';

/**
 * @class
 */
class Line {
	constructor(graph) {
		this.graph = graph;
		this.node = graph.node;
		this.paper = graph.editor.paper;
		this.lines = [];
		this.lineG = this.paper.g();
		this.allLinkPointsXY = [];
		this.shapes = {
			default: DefaultLine,
			polyline: PolyLine,
			tempLine: {
				render: paper => {
					const path = paper.path();
					path.attr({
						stroke: '#abc',
						strokeDasharray: '10 10'
					});
					return path;
				},
				renderPath: ({ fromX, fromY, x, y }, line) => {
					line.attr({
						d: `M${fromX} ${fromY}L${x} ${y}`
					});
				}
			}
		};
		this.listenEvent();
	}

	// 监听事件
	listenEvent() {
		this.graph.on('paper:click', () => {
			this.unActiveLine();
		});
		this.graph.on('node:click', () => {
			this.unActiveLine();
		});
	}

	/**
	 * 添加线
	 * @param {*} data
	 */
	addLine(data) {
		/**
		 * @event Graph#line:beforeadd
		 */
		this.graph.fire('line:beforeadd', { data, type: 'add' });
		const line = this.renderLine(data);
		/**
		 * @event Graph#line:add
		 */
		this.graph.fire('line:add', { line, type: 'add' });
	}

	/**
	 * 添加虚拟的连线，用于新建链接
	 * @param {*} lineData
	 */
	addTempLine(lineData) {
		this.tempLine = this.paper.path();
		this.tempLine.data = lineData;
	}

	/**
	 * 跟下该node的线
	 * @param {ele} node
	 */
	updateByNode(node) {
		node.fromLines.forEach(lineId => {
			this.updateLine(lineId);
		});
		node.toLines.forEach(lineId => {
			this.updateLine(lineId);
		});
	}

	/**
	 * 重绘某个线
	 * @param {*} data
	 */
	updateLine(data, rerenderShape = true) {
		let lineId;
		let lineData
		if (data.uuid) {
			lineId = data.uuid;
			lineData = data;
		} else {
			lineId = data;
			lineData = {
				uuid: lineId
			}
		}
		const line = this.lines[lineId];
		const { nodes } = this.graph.node;
		const {
			data: { type, className = '' }
		} = line;
		if (rerenderShape) {
			const { data } = this.shapes[type || 'default'].render(line.data, nodes, line.shape);
			line.arrow = this.shapes[type || 'default'].renderArrow(line.data, nodes, line.arrow);
			line.attr({
				class: `mm-line ${className || ''}`
			});
			line.data = Object.assign(line.data, lineData ? lineData : {}, data);
		} else {
			line.data = Object.assign(line.data, lineData ? lineData : {});
		}
		if (this.activeLine === line) {
			this.setActiveLine(line)
		}
	}

	/**
	 * 添加线
	 * @param {*} lineData
	 */
	renderLine(lineData) {
		const key = lineData.uuid
		const { nodes } = this.node;
		const shape = this.shapes[lineData.type || 'default'];
		shape.paper = this.paper;
		const newLine = shape.render(lineData, nodes);
		const arrow = shape.renderArrow(lineData, nodes);
		// const label = shape.renderLabel(lineData, nodes, newLine.path);
		const g = this.paper.g();

		g.append(newLine.path);
		g.append(arrow);
		// g.append(label);
		g.data = Object.assign(
			lineData,
			{
				uuid: key
			},
			newLine.data
		);
		g.shape = newLine.path;
		g.arrow = arrow;
		if (lineData.arrow2 && shape.renderArrow2) {
			g.arrow2 = shape.renderArrow(lineData, nodes);
		}
		// g.label = label;
		g.attr({
			class: `mm-line ${lineData.className || ''}`
		});
		newLine.path.attr({
			class: 'mm-line-shape'
		});
		this.addToNodes(nodes, g);
		this.addLineEvents(g);
		this.lines[key] = g;
		this.lineG.node.appendChild(g.node);
		return g;
	}

	/**
	 * 删除线
	 */
	deleteLine(data, notEvent, byNode) {
		let uuid = data;
		if (data.data) {
			uuid = data.data.uuid;
		}
		const { nodes } = this.node;
		const line = this.lines[uuid];
		if (!line) return;//这里有可能被删除node时的关联删除线了
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
			this.graph.fire('line:remove', {
				line,
				uuid,
				before: line.data,
				byNode,
				type: 'remove'
			});
		line.arrow.remove();
		line.arrow.undrag();
		line.arrow = null;
		line.unclick();
		line.remove();
		this.activeLine = null;
	}

	getLineId(lineData) {
		const { from, to, fromPoint = 0, toPoint = 0 } = lineData;
		return `${from}.${fromPoint}=${to}.${toPoint}`;
	}

	/**
	 * 更新线为
	 * @param {*} line
	 * @param {*} x
	 * @param {*} y
	 */
	updateActiveLine = g => {
		const {
			hoverLinkPoint,
			node: { nodes }
		} = this.graph;
		const { data } = g;
		const { shape = 'default', to: oldTo, toPoint: oldToPoint, uuid } = data;
		const line = this.lines[uuid];
		if (hoverLinkPoint) {
			const toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
			const beforeData = Object.assign({}, line.data);
			const to = toElement.getAttribute('data-node-id');
			const toPoint = parseInt(toElement.getAttribute('data-index'), 10);

			if (this.shapes[shape].checkNewLine({
				...data,
				to, toPoint,
			}, this.graph.editor) && !(oldTo == to && toPoint == oldToPoint)) {
				Object.assign(line.data, { to, toPoint });
				// 删除节点入口关联的线，给新链接的节点加上入口线
				nodes[oldTo].fromLines.delete(uuid);
				nodes[to].fromLines.add(uuid);
				/**
				 * @event Graph#line:change
				 */
				this.graph.fire('line:change', { line, type: 'change', before: beforeData });
			} else {
				/**
				 * @event Graph#line:drop
				 */
				this.graph.fire('line:drop', { line: g });
			}
			hoverLinkPoint.removeClass && hoverLinkPoint.removeClass('hover');
		}
		this.updateLine(uuid);
	};

	/**
	 * 检查是否生成新线
	 */
	checkNewLine = (e) => {
		const { hoverLinkPoint } = this.graph;
		if (hoverLinkPoint) {
			const toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
			const toNodeId = toElement.getAttribute('data-node-id');
			const toPoint = toElement.getAttribute('data-index');
			const { from, fromPoint = 0, to } = this.tempLineData;
			const data = Object.assign(
				{
					uuid: getUuid(),
					to: toNodeId,
					toPoint
				},
				this.tempLineData
			);
			if (this.lines[data.uuid]) return;
			this.graph.fire("line:beforeAdd", { line: data })
			if (this.shapes[data.type || 'default'].checkNewLine(data, this.graph.editor)) {
				this.addLine(data);
			}
			hoverLinkPoint.removeClass && hoverLinkPoint.removeClass('hover');
			this.graph.hoverLinkPoint = undefined;
		}
	};

	/**
	 * 注册线
	 * @param {*} data
	 */
	registeLine(data) {
		const { type } = data;
		this.shapes[type] = Object.assign({}, this.shapes['default'], data);
	}

	/**
	 * 渲染
	 * @param {*} lines
	 */
	render(lines = []) {
		Object.keys(lines).map(key => {
			const item = lines[key];
			this.renderLine(item);
		});
	}

	/**
	 *
	 * @param {*} nodes
	 * @param {*} g
	 */
	addToNodes(nodes, g) {
		const { from, to } = g.data;
		const id = g.data.uuid;

		nodes[from].toLines.add(id);
		nodes[to].fromLines.add(id);
	}


	/**
	 *
	 * @param {*} line
	 */
	setActiveLine(line) {
		this.unActiveLine();
		this.activeLine = line;
		this.activeLine.addClass('active');
	}

	/**
	 * 取消激活
	 */
	unActiveLine() {
		if (this.activeLine) {
			this.activeLine.removeClass('active');
		}
		this.activeLine = null;
	}

	// 计算磁吸
	calcLinkPoint = (x, y, adsorb = [20, 20]) => {
		const newXY = this.allLinkPointsXY.find(item => {
			if (Math.abs(x - item[0]) < adsorb[0] && Math.abs(y - item[1]) < adsorb[1]) {
				this.graph.hoverLinkPoint && this.graph.hoverLinkPoint.removeClass && this.graph.hoverLinkPoint.removeClass('hover');
				this.graph.hoverLinkPoint = item[2];
				item[2].addClass('hover');
				return item;
			}
		});
		if (!newXY) {
			this.graph.hoverLinkPoint && this.graph.hoverLinkPoint.removeClass('hover');
		}
		return newXY;
	}

	// 生成磁吸
	makeAdsorbPoints = () => {
		const linkPoints = this.paper.selectAll('.mm-link-points');
		this.allLinkPointsXY = [];
		linkPoints.forEach(item => {
			const x = parseInt(item.attr('cx'));
			const y = parseInt(item.attr('cy'));
			this.allLinkPointsXY.push([x, y, item]);
		});
	}

	/**
	 * 绑定线拖动事件
	 * @param {*} g
	 */
	addLineEvents(g) {
		g.shape.hover(
			(event) => {
				/**
				 * @event Graph#line:mouseenter
				 */
				this.graph.fire('line:mouseenter', { line: g, event });
			},
			(event) => {
				/**
				 * @event Graph#line:mouseleave
				 */
				this.graph.fire('line:mouseleave', { line: g, event });
			}
		);
		g.shape.click(e => {
			this.setActiveLine(g);
			/**
			 * @event Graph#line:click
			 */
			this.graph.fire('line:click', { line: g, event: e });
		});
		if (this.graph.mode === 'view') return;
		// 箭头拖拽
		g.arrow.drag(
			(dx, dy) => {
				const {
					tempLineData: { fromX, fromY, toX, toY }
				} = this;
				const transform = this.paper.transform();
				const info = transform.globalMatrix.split();
				let x = (toX || 0) + dx / info.scalex + 1;
				let y = (toY || 0) + dy / info.scalex - 1;

				// 计算磁吸坐标
				const { adsorb } = this.graph.line.shapes[g.data.type || 'default'];
				const newXY = this.calcLinkPoint(x, y, adsorb);
				if (newXY) {
					x = newXY[0]; y = newXY[1];
				}
				this.shapes.tempLine.renderPath(
					{
						fromX,
						fromY,
						x,
						y
					},
					this.tempLine
				);
			},
			() => {
				const { data } = g;
				const { fromX, fromY, toX, toY, from, fromPoint } = data;

				this.tempLineData = {
					from,
					fromPoint,
					fromX, toX,
					fromY, toY
				};
				this.makeAdsorbPoints();
				g.attr({
					display: "none"
				});
				data.status = 'active';
				/**
				 * @event Graph#line:drag
				 */
				this.tempLine = this.shapes.tempLine.render(this.paper);
				this.graph.fire('line:drag');
			},
			(e) => {
				g.attr({
					display: "block"
				});
				this.tempLine.remove();
				this.updateActiveLine(g);
			}
		);
	}

	/**
	 * 节点的新增线逻辑
	 */
	addLinkPointEvent = (point, node, index) => {
		if (this.graph.mode === 'view') return;
		point.drag(
			(dx, dy) => {
				const {
					tempLineData: { fromX, fromY }
				} = this;
				const transform = this.paper.transform();
				const info = transform.globalMatrix.split();
				let x = (fromX || 0) + dx / info.scalex + 1;
				let y = (fromY || 0) + dy / info.scalex - 1;

				// 计算磁吸坐标
				const { adsorb } = this.graph.node.shapes[node.data.type];
				const newXY = this.calcLinkPoint(x, y, adsorb);
				if (newXY) {
					x = newXY[0]; y = newXY[1];
				}
				this.shapes.tempLine.renderPath(
					{
						fromX,
						fromY,
						x,
						y
					},
					this.tempLine
				);
			},
			() => {
				this.tempLineData = {
					from: node.data.uuid,
					fromPoint: index,
					fromX: point.x,
					fromY: point.y
				};
				this.makeAdsorbPoints();
				this.tempLine = this.shapes.tempLine.render(this.paper);

				this.graph.fire('line:drag');
			},
			(e) => {
				const { hoverLinkPoint } = this.graph;
				let toNode = null;
				if (hoverLinkPoint) {
					const toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
					const toNodeId = toElement.getAttribute('data-node-id');
					toNode = this.node.nodes[toNodeId];
				}
				this.checkNewLine(e);
				this.tempLine.remove();
				/**
				 * @event Graph#line:drop
				 */
				this.graph.fire('line:drop', { fromNode: node, toNode, event: e });
			}
		);
	};

	/**
	 *
	 */
	clear() {
		const { lines } = this;
		for (let key in lines) {
			this.deleteLine(lines[key], true);
		}
	}
}
export default Line;
