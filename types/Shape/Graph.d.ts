export default Graph;
/**
 * @class
 * @extends Event
 */
declare class Graph extends Event {
    constructor(editor: any);
    editor: any;
    /**
     * @property {Node} node
     */
    node: Node;
    /**
     * @property {Line} line
     */
    line: Line;
    /**
    * @prop {AnchorLine} anchorLine
    */
    anchorLine: AnchorLine;
    /**
     * @prop {Animation} animation
     */
    animation: {
        createRadialGradient(color?: any, color2?: any): Snap.Element;
    };
    mode: any;
    addBack(): void;
    listenEvents(): void;
    linkStatus: string;
    onKeyDown: (e: any) => boolean;
    /**
     * 添加链接点事件
     */
    addLinkHoverEvent(): void;
    onLinkPointHover: (ele: any) => void;
    hoverLinkPoint: any;
    onLinkPointOut: (ele: any) => void;
    /**
     * 关闭线hover事件
     */
    offLinkHoverEvent(): void;
    /**
     *
     * @param {*} data
     */
    render(data: any): Promise<void>;
    data: any;
    /**
     * 清空画布
     */
    clearGraph(): void;
    destroy(): void;
}
import Event from "../Utils/Event";
import Node from "./Node";
import Line from "./Line";
import AnchorLine from "./AnchorLine";
