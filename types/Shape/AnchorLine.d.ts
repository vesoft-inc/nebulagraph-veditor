export default AchorLine;
/**
 * @class
 */
declare class AchorLine {
    constructor(graph: any);
    graph: any;
    anchorLines: {};
    paper: any;
    anchorDistance: any;
    anchorXLength: any;
    anchorYLength: any;
    hideAchorLine: any;
    hideAchor: any;
    anchors: any[];
    path: any;
    /**
     * 生成所有的吸附线位置
     */
    makeAllAnchors(origin: any): void;
    node: any;
    checkAchor(x: any, y: any): {
        x: any;
        y: any;
    };
    /**
     * 画节点
     * @param {*} node
     */
    check(x: any, y: any): {
        x: any;
        y: any;
    };
    /**
     * 隐藏线
     */
    hidePath(): void;
}
