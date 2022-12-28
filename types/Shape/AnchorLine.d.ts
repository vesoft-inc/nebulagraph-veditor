import { Position } from "../Utils/types";
import Graph from "./Graph";
import { InstanceNode } from "./Node";
/**
 * @class
 */
declare class AchorLine {
    graph: Graph;
    anchorLines: {};
    paper: SVGGElement;
    anchorDistance: number;
    anchorXLength: number;
    anchorYLength: number;
    hideAchorLine: boolean;
    hideAchor: boolean;
    anchors: Position[];
    path: SVGPathElement;
    node: InstanceNode;
    constructor(graph: Graph);
    /**
     * 生成所有的吸附线位置
     */
    makeAllAnchors(origin: InstanceNode): void;
    checkAchor(x: number, y: number): Position;
    /**
     * 画节点
     */
    check(x: number, y: number): Position;
    /**
     * 隐藏线
     */
    hidePath(): void;
}
export default AchorLine;
