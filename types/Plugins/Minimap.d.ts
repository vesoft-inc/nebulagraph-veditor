import VEditor from "../VEditor";
import { Canvg } from "canvg";
import { Position } from "../Utils/types";
declare class MiniMap {
    editor: VEditor;
    width: number;
    height: number;
    padding: number;
    scale: number;
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    drag: HTMLDivElement;
    dragPoint: HTMLDivElement;
    dragBBox: {
        width: number;
        height: number;
    };
    dragStart: Position;
    svgBBox: DOMRect;
    dragStartBBox: DOMRect;
    limitScale: number;
    converting: Canvg;
    timeout: any;
    constructor(editor: VEditor);
    init(): void;
    initEvent(): void;
    /**
     * 重新计算拖拽框位置
     */
    resetDrag: () => void;
    /**
     * 重新渲染小地图
     */
    render: () => void;
    renderCanvas(): Promise<void>;
    destroy(): void;
}
export default MiniMap;
