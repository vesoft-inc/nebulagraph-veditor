import History from "./History";
import VEditor from "../VEditor";
import { AnyMap, Position } from "../Utils/types";
export interface VEditorNode extends AnyMap {
    uuid?: string;
    type: string;
    x?: number;
    y?: number;
    name?: string;
    data?: AnyMap;
    iconPath?: string;
    style?: AnyMap;
    className?: string;
    linkPointsTypes?: Position[];
}
export declare type VEditorLine = {
    type?: string;
    uuid?: string;
    from: string;
    to: string;
    fromPoint?: number;
    toPoint?: number;
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
    name?: string;
    data?: AnyMap;
    label?: string;
    className?: string;
    graphIndex?: number;
    labelCfg?: {
        refX?: number;
        refY?: number;
        autoRotate?: boolean;
        showNum?: number;
        style?: AnyMap;
    };
} & AnyMap;
export interface VEditorData {
    nodes: VEditorNode[];
    lines: VEditorLine[];
}
export interface VEditorSchema {
    nodesMap: Record<string, VEditorNode>;
    linesMap: Record<string, VEditorLine>;
}
declare class Schema {
    data: VEditorSchema;
    editor: VEditor;
    history: History;
    /**
     *
     * @param {VEditor} editor - VEditor实例
     */
    constructor(editor: VEditor);
    /**
     * format data with dagre
     */
    format(): void;
    listenEvents(): void;
    /**
     * 历史入栈最新数据
     */
    pushHistory(): void;
    /**
     * 历史出栈
     */
    popHistory(): void;
    /**
     * 获取当前最新的map
     * TODO: 数据引用有点混乱，应该去除掉nodesMap和linesMap，改为实时获取
     */
    makeNowDataMap(): VEditorSchema;
    setData(data: VEditorData): Promise<void>;
    setInitData(data: VEditorData): Promise<void>;
    parseData({ nodes, lines }: VEditorData): void;
    /**
     * 渲染数据
     */
    renderData(): Promise<void>;
    /**
     * 重做
     */
    redo(): Promise<void>;
    /**
     * 撤销
     */
    undo(): Promise<void>;
    /**
     * 获取数据
     */
    getData(): {
        nodes: VEditorNode[];
        lines: VEditorLine[];
    };
}
export default Schema;
