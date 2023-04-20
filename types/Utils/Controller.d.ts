import VEditor from "../VEditor";
import * as Utils from ".";
/**
 * 控制器
 * @class
 * @extends Event
 */
declare class Controller extends Utils.Event {
    editor: VEditor;
    paper: SVGGElement;
    svg: SVGSVGElement;
    scaleRatio: number;
    scale: number;
    x: number;
    y: number;
    achors: number[];
    status: string;
    startPosition: {
        x: any;
        y: any;
    };
    disableScroll: boolean;
    constructor(editor: VEditor);
    /**
     * auto fit to screen
     */
    autoFit(center?: boolean, vertical?: boolean): void;
    /**
     * auto fit to screen with scale
     */
    autoScale(padding?: number): void;
    listenEvents(): void;
    clear(): void;
    /**
     * 禁用滚轮缩放
     */
    disableWheel(): void;
    /**
     * 禁用鼠标移动
     */
    disablePan(): void;
    /**
     * 移动到指定位置
     */
    pan(x: number, y: number): void;
    /**
     * 移动到指定位置
     */
    moveTo(x: number, y: number): void;
    onWheel: (e: WheelEvent) => void;
    panStart: (ev: MouseEvent) => void;
    panStop: (ev: MouseEvent) => void;
    /**
     * 缩放
     * @param  {number} scale 当前基础上 缩放多少
     * @param  {number} cx=0 zoom 缩放中心点x
     * @param  {number} cy=0 zoom 缩放中心点y
     */
    zoom: (newScale: any, cx?: number, cy?: number) => void;
    /**
     * 滚动到指定位置
     * @param {number} newScale
     */
    zoomTo: (newScale: number) => void;
    /**
     * 做指定转换
     */
    transform: (newScale: number, x?: number, y?: number) => void;
    panning: (ev: MouseEvent) => void;
    disable(): void;
    enable(): void;
    /**
     * 更新最新的matrix
     */
    update(): void;
}
export default Controller;
