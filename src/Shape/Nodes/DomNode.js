/**
 * @interface DomNode
 * @implements {DefaultNode}
 */
const DomNode = {
	adsorb: [20, 20],//磁吸的范围
	linkPoints: [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }, { x: 0.5, y: 0 }, { x: 0.5, y: 1 }],
	render: (data, snapPaper) => {
		const dom = this.paper.el('foreignObject', {
			width: data.width,
			height: data.height
		});
		dom.node.innerHTML = (`<div style="width:${data.width}px;height:${data.height}" class="mm-node-wrapper">
			<div class="node-text">${data.name}</div>
		</div>`);
		const group = this.paper.group(dom);
		return group;
	},

	/**
	 * 渲染连接点 (node, linkPoint, circle)
	 */
	renderLinkPoint: (node, linkPoint, circle) => {
		circle = circle || node.paper.circle(0, 0, 5, 5);
		const box = node.shape.getBBox();
		const x = linkPoint.x * box.w + parseInt(node.data.x, 10);
		const y = linkPoint.y * box.h + parseInt(node.data.y, 10);
		circle.attr({
			cx: x,
			cy: y,
			fill: "#fff",
			display: "none",
			stroke: "#08c",
			class: "mm-link-points"
		});
		circle.data = linkPoint;
		circle.data.box = box;
		circle.data.type = "input";
		circle.x = x;
		circle.y = y;
		circle.local = {
			x: linkPoint.x * box.w,
			y: linkPoint.y * box.h
		};
		return circle;
	},

	/**
	 * 更新渲染点
	 * @param  {} node
	 * @param  {} linkPoint
	 * @param  {} refreshSize
	 */
	updateLinkPoint: (node, linkPoint, refreshSize) => {
		if (refreshSize) {
			const box = node.shape.getBBox();
			linkPoint.local.x = linkPoint.data.x * box.w;
			linkPoint.local.y = linkPoint.data.y * box.h;
		}
		const { local } = linkPoint;
		const x = local.x + node.data.x;
		const y = local.y + node.data.y;
		linkPoint.attr({
			cx: x,
			cy: y
		});
		linkPoint.x = x;
		linkPoint.y = y;
	}
};
export default DomNode;
