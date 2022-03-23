export default Controller;
/**
 * 控制器
 * @class
 * @extends Event
 */
declare class Controller extends Event {
    constructor(editor: any);
    editor: any;
    paper: any;
    svg: any;
    /**
     * 缩放比例系数
     * @type {number}
     */
    scaleRatio: number;
    scale: number;
    x: number;
    y: number;
    /**
     * 所有吸附节点
     */
    achors: any[];
    /**
     * 自适应,支持
     */
    autoFit(center?: boolean, vertical?: boolean): void;
    listenEvents(): void;
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
     * @param  {number} x
     * @param  {number} y
     */
    pan(x: number, y: number): void;
    /**
     * 移动到指定位置
     * @param {*} x
     * @param {*} y
     */
    moveTo(x: any, y: any): void;
    onWheel: (e: any) => void;
    panStart: (ev: any) => void;
    startPosition: {
        x: any;
        y: any;
    };
    matrix: any;
    panStop: (ev: any) => void;
    /**
     * 缩放
     * @param  {} scale 当前基础上 缩放多少
     * @param  {number} cx=0 zoom 缩放中心点x
     * @param  {number} cy=0 zoom 缩放中心点y
     */
    zoom: (newScale: any, cx?: number, cy?: number) => void;
    /**
     * 滚动到指定位置
     * @param {*} newScale
     */
    zoomTo: (newScale: any) => void;
    /**
     * 做指定转换
     * @param {*} newScale
     * @param {*} x
     * @param {*} y
     */
    transform: (newScale: any, x?: any, y?: any) => void;
    panning: (ev: any) => void;
    disable(): void;
    status: string;
    enable(): void;
    /**
     * 更新最新的matrix
     */
    update(): void;
}
import Event from "./Event";
