import { AnyMap } from "../../Utils/types";
import { InstanceNode, InstanceNodePoint } from "../Node";
export interface NodeRender extends AnyMap {
    adsorb?: [number, number];
    linkPoints?: {
        x: number;
        y: number;
        isPixel?: boolean;
    }[];
    /**
     * 默认渲染函数 data,snapPaper
     */
    render?: <T>(data: InstanceNode) => SVGGElement;
    /**
     * 渲染连接点 (node, linkPoint, circle)
     */
    renderLinkPoint?: (node: InstanceNode, point: InstanceNodePoint) => InstanceNodePoint;
    destroy?: (node: InstanceNode) => void;
}
declare const DefaultNode: NodeRender;
export default DefaultNode;
