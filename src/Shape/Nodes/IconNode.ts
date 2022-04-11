import { setAttrs } from "../..//Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import { InstanceNodePoint } from "../Node";
import DefaultNode, { NodeRender } from "./DefaultNodes";

const IconNode: NodeRender = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],

    render: (instanceNode) => {
        const { data, shape } = instanceNode;
        if (shape) {
            shape.remove();
        }
        const node = SVGHelper.rect(0, 0, 180, 32);
        const text = SVGHelper.text(40, 21, data.name);
        const icon = SVGHelper.image(data.iconPath as string, 5, 4, 24, 24);
        icon.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        setAttrs(node, {
            class: "icon-node",
            fill: "#EAEEFA",
            stroke: "#CCD9FD",
            rx: 17,
            ry: 17,
        });
        return SVGHelper.group(node, text, icon);
    },

    renderLinkPoint: (node, instance) => {
        return DefaultNode.renderLinkPoint.call(this, node, instance);
    },
};
export default IconNode;
