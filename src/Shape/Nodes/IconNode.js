/**
 * @interface IconNode
 * @implements {DefaultNode}
 */
const IconNode = {
	adsorb: [20, 20],
	linkPoints: [{ x: 0.5, y: 0 }, { x: 0.5, y: 1 }],
    shapeBBox:undefined,
	/**
	 * @param  {} data
	 * @param  {} snapPaper
	 */
	render: (data, snapPaper) => {
		const node = snapPaper.rect(0, 0, 180, 32);
		const text = snapPaper.text(40, 21, data.name);
		const icon = snapPaper.image(data.iconPath, 5, 4, 24, 24);
		icon.node.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
		node.attr({
			class: "icon-node",
			fill: "#EAEEFA",
			stroke: "#CCD9FD",
			rx: 17,
			ry: 17
		});
		return snapPaper.group(node, text, icon);
	},

	/**
	 * @param  {} node
	 * @param  {} linkPoint
	 * @param  {} circle
	 */
	renderLinkPoint: (node, linkPoint, circle) => {
		circle = circle || node.paper.circle(0, 0, 5, 5);
		const box = node.shape.getBBox();
		const x = linkPoint.x * box.w + parseInt(node.data.x||0, 10);
		const y = linkPoint.y * box.h + parseInt(node.data.y||0, 10);
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
export default IconNode;