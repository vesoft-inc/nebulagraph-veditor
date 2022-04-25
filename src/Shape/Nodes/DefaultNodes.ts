import { AnyMap } from "../../Utils/types";
import { VEditorNode } from "../../Model/Schema";
import { setAttrs } from "../../Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import { InstanceNode, InstanceNodePoint } from "../Node";

export type NodeRender = {
    adsorb?: [number, number]; //磁吸的范围
    linkPoints?: { x: number; y: number }[];
    /**
     * 默认渲染函数 data,snapPaper
     */
    render?: <T>(data: InstanceNode) => SVGGElement;

    /**
     * 渲染连接点 (node, linkPoint, circle)
     */
    renderLinkPoint?: (
        node: InstanceNode,
        point: InstanceNodePoint
    ) => InstanceNodePoint;

    destroy?: (node: InstanceNode) => void;
} & AnyMap;
const DefaultNode: NodeRender = {
    adsorb: [20, 20], //磁吸的范围
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    /**
     * 默认渲染函数 data,snapPaper
     */
    render: (instanceNode: InstanceNode) => {
        let node, text;
        const { data } = instanceNode;
        if (instanceNode.shape) {
            instanceNode.shape.remove();
        } else {
            node = SVGHelper.rect(0, 0, 100, 40);
            text = SVGHelper.text(20, 25, data.name);
        }
        setAttrs(node, {
            fill: "#fff",
            stroke: "#000",
            rx: 5,
            ry: 5,
        });
        return SVGHelper.group(node, text);
    },

    /**
     * 渲染连接点 (node, linkPoint, circle)
     */
    renderLinkPoint: (node: InstanceNode, instance: InstanceNodePoint) => {
        const { data: linkPoint } = instance;
        if (!instance.dom) {
            instance.dom = SVGHelper.circle(0, 0, 5);
        }
        const circle = instance.dom;
        const box = node.bbox || node.dom.getBBox();
        const x = linkPoint.x * box.width + node.data.x;
        const y = linkPoint.y * box.height + node.data.y;
        setAttrs(circle, {
            cx: x,
            cy: y,
            fill: "#fff",
            display: "none",
            stroke: "#08c",
            class: "ve-link-points",
        });

        if (!instance.data) {
            instance.data = linkPoint;
        }
        instance.data.box = box;
        instance.data.type = "input";
        instance.x = x;
        instance.y = y;
        instance.local = {
            x: linkPoint.x * box.width,
            y: linkPoint.y * box.height,
        };
        return instance;
    },
    destroy: (node: InstanceNode) => {
        node.shape?.remove();
    },
};
export default DefaultNode;
