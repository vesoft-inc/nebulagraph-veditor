export default MiniMap;
/**
 * @class
 */
declare class MiniMap {
    constructor(editor: any);
    editor: any;
    width: any;
    height: any;
    padding: any;
    scale: any;
    init(): void;
    container: Element;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    drag: any;
    dragPoint: any;
    initEvent(): void;
    dragStart: {
        x: number;
        y: number;
    };
    dragStartBBox: any;
    /**
     * 重新计算拖拽框位置
     */
    resetDrag: () => void;
    dragBBox: {
        width: number;
        height: number;
    };
    /**
     * 重新渲染小地图
     */
    render: () => void;
    timeout: number;
    renderCanvas(): Promise<void>;
    svgBBox: any;
    converting: any;
    destroy(): void;
}
