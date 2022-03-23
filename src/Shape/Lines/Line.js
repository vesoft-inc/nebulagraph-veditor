/**
 * graph.line.shapes
 * @interface DefaultLine
 */
import { Snap } from "../../MMEditor";

const DefaultLine = {
	arcRatio: 4,
	/**
	 * @param  {} data
	 * @param  {} allNodesMap
	 * @param  {} line
	 */
	render(data, allNodesMap, line) {
		const { from, to, fromPoint = 0, toPoint = 0 } = data;
		const fromNode = allNodesMap[from];
		const toNode = allNodesMap[to];
		const fromPointNode = fromNode.linkPoints[fromPoint];
		const toPointNode = toNode.linkPoints[toPoint];
		let fromX = fromPointNode.x;
		let fromY = fromPointNode.y;
		let toX = toPointNode.x;
		let toY = toPointNode.y;
		const pathString = this.makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode);
		const path = line ? line.path : this.paper.path();
		path.attr({
			d: pathString,
			strokeDasharray: "10",
			fill: "transparent",
			stroke: "rgba(178,190,205,0.7)",
			...(data.style || {})
		});
		path.animate(
			{
				strokeDasharray: "0"
			},
			300
		);
		const labelGroup = this.renderLabel(data, allNodesMap, path, line ? line.labelGroup : null);
		if (!line) {
			line = this.paper.group();
			line.append(path);
		}
		labelGroup && line.append(labelGroup)
		line.labelGroup = labelGroup;
		line.path = path;
		return {
			path: line,
			data: {
				fromX,
				fromY,
				toX,
				toY
			}
		};
	},


	/**
	 * @param  {} fromX
	 * @param  {} fromY
	 * @param  {} toX
	 * @param  {} toY
	 * @param  {} fromPointNode
	 * @param  {} toPointNode
	 */
	makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode) {
		let edgeX = fromX;
		let edgeY = fromY;
		let endX = toX;
		let endY = toY;
		const arrowStartSpace = 0; // 顶部距离node节点的距离
		const arrEndSpace = 8; // 底部距离node节点的距离
		const arrowEndSpace = 5;// 箭头占用的空间
		// 根据连接点位置生成控制点
		// 上右下左的控制点分别为 (x,上偏移) (右偏移,y)  (x,下偏移) (左偏移,y)
		let startControlPoint = [edgeX, edgeY];
		let endControlPoint = [endX, endY];
		const startAngel = this.getPointDirect(fromPointNode);
		const endAngel = this.getPointDirect(toPointNode);
		const offsetLength = Math.sqrt(Math.pow(edgeX - endX, 2) + Math.pow(edgeY - endY, 2)) / this.arcRatio; // 连接点的距离的一半作为控制点的长度
		startControlPoint[0] += (1 / startAngel < 0 ? -1 : 1) * Math.cos(startAngel) * offsetLength;
		startControlPoint[1] += -Math.sin(startAngel) * offsetLength;// svg坐标系倒置需要给y坐标加负号
		endControlPoint[0] += (1 / endAngel < 0 ? -1 : 1) * Math.cos(endAngel) * offsetLength;
		endControlPoint[1] += -Math.sin(endAngel) * offsetLength;// svg坐标系倒置需要给y坐标加负号
		if (fromPointNode.data.y === 1) {
			edgeY += arrowStartSpace;
		} else if (fromPointNode.data.y === 0) {
			edgeY -= arrowStartSpace;
		} else if (fromPointNode.data.x === 0) {
			edgeX -= arrowStartSpace;
		} else if (fromPointNode.data.x === 1) {
			edgeX += arrowStartSpace;
		}
		if (toPointNode.data.y === 1) {
			endY += arrEndSpace;
			toY += arrowEndSpace;
		} else if (toPointNode.data.y === 0) {
			endY -= arrEndSpace;
			toY -= arrowEndSpace;
		} else if (toPointNode.data.x === 0) {
			endX -= arrEndSpace;
			toX -= arrowEndSpace;
		} else if (toPointNode.data.x === 1) {
			endX += arrEndSpace;
			toX += arrowEndSpace;
		}
		let pathString = `M${fromX} ${fromY} T ${edgeX} ${edgeY}`;


		let toPointString = `${endX} ${endY} T ${toX} ${toY} `;
		const path = `${pathString}C${startControlPoint[0]} ${startControlPoint[1]} ${endControlPoint[0]} ${endControlPoint[1]} ${toPointString}`;
		return path;
	},

	//没用了
	getPointDirect(pointNode) {
		const point2center = [pointNode.data.x, pointNode.data.y];
		let angel = 0;
		if (point2center[1] === 0) {
			angel = Math.PI / 2;
		} else if (point2center[1] === 1) {
			angel = -Math.PI / 2;
		} else if (point2center[0] === 0) {
			angel = Math.PI;
		} else if (point2center[0] === 1) {
			angel = -Math.PI;
		} else {
			// arctan求角度
			angel = Math.atan((point2center[1] - 0.5) / (point2center[0] - 0.5)) + ((point2center[0] - 0.5) < 0 ? Math.PI : 0);
		}
		return angel || 0;
	},

	/**
	 * @param  {} data
	 * @param  {} allNodesMap
	 * @param  {} arrow
	 */
	renderArrow(data, allNodesMap, arrow) {
		const { to, toPoint = 0 } = data;
		const toNode = allNodesMap[to];
		const toPointNode = toNode.linkPoints[toPoint];
		const toLinkPoint = toNode.linkPointsTypes[toPoint];
		let angle = 0;
		if (toLinkPoint.y <= 0) {
			angle = 180;
		} else if (toLinkPoint.x >= 1) {
			angle = 270;
		} else if (toLinkPoint.x <= 0) {
			angle = 90;
		}
		const toX = toPointNode.x;
		const toY = toPointNode.y;
		const pathString = `M${-5} ${10}L${0} ${0}L${5} ${10}Z`;
		const path = arrow ? arrow : this.paper.path();
		// 进行角度的中心变换
		const matrix = new Snap.Matrix();
		matrix.translate(toX, toY);
		matrix.rotate(angle, 0, 0);
		path.attr({
			class: "mm-line-arrow",
			d: pathString,
			fill: "rgba(178,190,205,0.7)",
			transform: matrix.toString(),
			...data.arrowStyle
		});
		path.angle = angle;
		return path;
	},

	/** 是否渲染文字
	 * @param  {} data
	 * @param  {} allNodesMap
	 * @param  {} lineShapePath
	 * @param  {} labelGroup 是否已有文字对象
	 */
	renderLabel(data, allNodesMap, lineShapePath, labelGroup) {
		const { fromX, toX, labelCfg } = data;
		let { label } = data;
		if (!label) {
			labelGroup && labelGroup.remove();
			return null
		};
		const totalLabel = label;
		// label 样式
		const {
			refX = 0,
			refY = 0,
			autoRotate,
			showNum = 20,
			style = {
				fill: "#333",
				stroke: "#fff",
				fontSize: "12px",
			}
		} = labelCfg || {};
		// 获取旋转角度 暂时不支持
		const totalLen = lineShapePath.getTotalLength();
		const pointLen = lineShapePath.getPointAtLength(totalLen / 2);
		let { alpha, x: xPoint, y: yPoint } = pointLen || {};
		if (label && label.length > showNum && showNum) {
			label = label.slice(0, showNum) + "..."
		}
		if (!labelGroup) {
			let textCreate = this.paper.text(0, 0, label);
			let rectCreate = this.paper.rect();
			labelGroup = this.paper.group(rectCreate, textCreate);
		}
		let rect = labelGroup[0];
		let text = labelGroup[1];
		const x = xPoint + (refX || 0);
		const y = yPoint + (refY || 0);
		text.attr({
			text: label || "",
			fill: style.fill,
			fontSize: style.fontSize,
			textAnchor: "middle",
			dominantBaseline: "middle",
			x,
			y,
		})
		if (!text.bbox || text.oldText !== label) {
			text.oldText = label;
			text.bbox = text.getBBox();
		}
		// 性能优化
		const { width, height } = text.bbox;
		rect.attr({
			fill: style.stroke,
			width,
			height,
			stroke: "transparent",
			x: x - width * 0.5,
			y: y - height * 0.5
		});
		labelGroup.attr({
			class: "mm-line-label",
			'data-label': encodeURI(totalLabel)
		})
		if (autoRotate) {
			// 文字顺序方向
			if (fromX < toX || fromX === toX) {
				alpha += 180;
			}
			labelGroup.attr({
				transform: `rotate(${alpha},${xPoint + (refX || 0)},${yPoint + (refY || 0)})`
			})
		}
		return labelGroup;
	},

	/**
	 * @param  {} data
	 */
	checkNewLine(data) {
		const { from, to } = data;
		if (from === to) {
			return false;
		}
		return true;
	}
};
export default DefaultLine
