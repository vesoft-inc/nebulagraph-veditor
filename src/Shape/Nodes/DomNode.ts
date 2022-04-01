import { createSVGElement, svgWrapper } from "../../Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import { InstanceNodePoint } from "../Node";
import DefaultNode, { NodeRender } from "./DefaultNodes";

const DomNode: NodeRender = {
    adsorb: [20, 20], //磁吸的范围
    linkPoints: [
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    render: (instanceNode) => {
        const { data, shape } = instanceNode;
        if (shape) {
            shape.remove();
        }
        const dom = svgWrapper(`<foreignObject width=${
            data.width as number
        } height=${data.height} >
		<div style="width:${data.width}px;height:${
            data.height
        }" class="mm-node-wrapper">
			<div class="node-text">${data.name}</div>
		</div>
		</foreignObject>`) as SVGForeignObjectElement;
        const group = SVGHelper.group(dom);
        return group;
    },
    renderLinkPoint: (node, instance: InstanceNodePoint) => {
        return DefaultNode.renderLinkPoint.call(this, node, instance);
    },
};
export default DomNode;
