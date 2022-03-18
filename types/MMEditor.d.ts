export default MMEditor;
/**
 * @class
 * @extends Event
 */
export class MMEditor extends Event {
    constructor(config: any);
    config: any;
    /**
    * @property {HTMLElement} dom 容器
    */
    dom: any;
    /**
     * @property {Snap.Element} svg
     */
    svg: any;
    /**
     * @property {Snap.Element} paper
     */
    paper: any;
    /**
     * @property {HTMLElement} container 实例dom
     */
    container: any;
    /**
     * @property {Graph} graph 画布
     */
    graph: Graph;
    /**
    * @property {Controller} controller 控制器
    */
    controller: Controller;
    /**
     * @property {Schema} schema 数据管理器
     */
    schema: Schema;
    /**
     * @property {Minimap?} minimap 小地图
     */
    minimap: Minimap;
    initDom(dom: any): any;
    /**
     * 重新布局
     */
    resize(): void;
    /**
     * 销毁函数
     */
    destroy(): void;
    /**
     * 重绘
     */
    repaint(): void;
}
export namespace MMEditor {
    export { Event };
    export { Schema };
    export { Snap };
    export { Graph };
    export { Controller };
    export { Util };
}
import Event from "./Utils/Event";
import Schema from "./Model/Schema";
import Graph from "./Shape/Graph";
import Controller from "./Utils/Controller";
import Minimap from "./Plugins/Minimap";
import Util from "./Utils/util";
export { Event, Schema, Snap, Graph, Controller, eve, mina };
