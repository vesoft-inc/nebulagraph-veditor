/// <reference types="node" />
import { NodeRender } from "./Nodes/DefaultNodes";
import Graph from "./Graph";
import { VEditorNode } from "../Model/Schema";
import { Position } from "../Utils/types";
export interface InstanceNode {
    dom: SVGGElement;
    shape?: SVGGElement;
    shapeBBox?: DOMRect;
    data: VEditorNode;
    toLines: Set<string>;
    fromLines: Set<string>;
    linkPointsTypes?: Position[];
    linkPoints?: InstanceNodePoint[];
    startX?: number;
    startY?: number;
    clientX?: number;
    clientY?: number;
    _destroys: Function[];
}
export interface InstanceNodePoint {
    x: number;
    y: number;
    nodeId: string;
    index: number;
    local?: {
        x: number;
        y: number;
    };
    dom?: SVGGElement;
    data?: {
        x: number;
        y: number;
        isPixel?: boolean;
        [key: number | string]: unknown;
    };
}
declare class Node {
    graph: Graph;
    nodes: Record<string, InstanceNode>;
    paper: SVGGElement;
    nodeG: SVGGElement;
    actives: {};
    shadow: SVGElement;
    shapes: {
        [key: string]: NodeRender;
    };
    copyNode: {};
    tmpLinkPoints: InstanceNode[];
    timeout: NodeJS.Timeout;
    destroyFunc: Function[];
    constructor(graph: Graph);
    initDefs(): void;
    listenEvent(): void;
    registeNode(type: string, data: NodeRender, extend?: string): void;
    render(data?: Record<string, VEditorNode>): Promise<unknown>;
    /**
     * 添加节点
     * @param {object} data
     */
    addNode: (data: VEditorNode) => InstanceNode;
    /**
     * 删除节点
     *  @param {object} data
     */
    deleteNode: (input: VEditorNode | string, noEvent?: boolean) => void;
    /**
     * 渲染新节点
     */
    renderNode(item: VEditorNode): InstanceNode;
    update(): void;
    /**
     * 根据数据更新节点位置
     */
    updateNode(input: VEditorNode | string, rerenderShape?: boolean): void;
    /**
     * 给节点添加连线点
     * @param {node} node
     */
    addNodeLinkPoints(node: InstanceNode): boolean;
    updateLinkPoints(node: InstanceNode): void;
    panNode(node: InstanceNode, dx: number, dy: number): void;
    /**
     * 给节点添加事件
     * @param {*} node
     */
    addNodeEvent(node: InstanceNode): void;
    setActive(node: InstanceNode): void;
    unActive(node?: InstanceNode): void;
    unActiveNode(node: InstanceNode): void;
    /**
     *
     */
    clear(): void;
}
export default Node;
