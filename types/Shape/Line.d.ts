import { LabelInstance, LineRender } from "./Lines/Line";
import Graph from "./Graph";
import Node, { InstanceNode, InstanceNodePoint } from "./Node";
import { VEditorLine } from "../Model/Schema";
import Path from "../Utils/path";
import { AnyMap, Position } from "../Utils/types";
export interface InstanceLine extends AnyMap {
    dom: SVGElement;
    path?: SVGPathElement;
    shape: SVGElement;
    arrow: SVGElement;
    label?: LabelInstance;
    data: VEditorLine;
    from: InstanceNodePoint;
    to: InstanceNodePoint;
    pathData: Path;
    shadowPath?: SVGPathElement;
    bezierData?: {
        from: Position;
        startControlPoint: Position;
        endControlPoint: Position;
        to: Position;
    };
}
declare class Line {
    graph: Graph;
    node: Node;
    paper: SVGGElement;
    lines: Record<string, InstanceLine>;
    lineG: SVGGElement;
    hoverLinkPoint: InstanceNodePoint;
    allLinkPoints: InstanceNodePoint[];
    shapes: Record<string, LineRender>;
    activeLine: InstanceLine;
    tempLine: {
        dom: SVGPathElement;
        data: VEditorLine;
    };
    tempLineRender: {
        render: () => SVGPathElement;
        renderPath: ({ fromX, fromY, x, y }: {
            fromX?: number;
            fromY?: number;
            x?: number;
            y?: number;
        }, line: {
            dom: SVGPathElement;
            data: VEditorLine;
        }) => void;
    };
    constructor(graph: Graph);
    listenEvent(): void;
    /**
     * 添加线
     */
    addLine(data: VEditorLine): void;
    /**
     * 跟下该node的线
     */
    updateByNode(node: InstanceNode): void;
    /**
     * 添加线
     */
    renderLine(lineData: VEditorLine): InstanceLine;
    /**
     * redraw all lines
     */
    update(): void;
    /**
     * 重绘某个线
     */
    updateLine(data: VEditorLine | string, rerenderShape?: boolean): void;
    /**
     * 删除线
     */
    deleteLine(data: VEditorLine | string, notEvent?: boolean, byNode?: boolean): void;
    /**
     * 更新线为
     */
    updateActiveLine: (instanceLine: InstanceLine) => void;
    /**
     * 检查是否生成新线
     */
    checkNewLine: () => void;
    /**
     * 注册线
     */
    registeLine(type: string, data: LineRender): void;
    /**
     * 渲染
     */
    render(lines?: Record<string, VEditorLine>): void;
    addToNodes(instanceLine: InstanceLine): void;
    /**
     *
     */
    setActiveLine(line: InstanceLine): void;
    /**
     * 取消激活
     */
    unActiveLine(): void;
    calcLinkPoint: (x: number, y: number, adsorb?: number[]) => InstanceNodePoint;
    makeAdsorbPoints: () => void;
    /**
     * 绑定线拖动事件
     */
    addLineEvents(g: InstanceLine): void;
    /**
     * 节点的新增线逻辑
     */
    addLinkPointEvent: (point: InstanceNodePoint) => void;
    /**
     *
     */
    clear(): void;
}
export default Line;
