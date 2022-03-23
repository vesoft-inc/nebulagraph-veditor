export default Node;
/**
 * @class
 */
declare class Node {
    constructor(graph: any);
    graph: any;
    nodes: {};
    paper: any;
    nodeG: any;
    linkPointsG: any;
    actives: {};
    shapes: {
        default: {
            adsorb: number[];
            linkPoints: {
                x: number;
                y: number;
            }[];
            shapeBBox: any;
            render: (data: any, snapPaper: any) => any;
            renderLinkPoint: (node: any, linkPoint: any, circle: any) => any;
            updateLinkPoint: (node: any, linkPoint: any, refreshSize: any) => void;
        };
        iconNode: {
            adsorb: number[];
            linkPoints: {
                x: number;
                y: number;
            }[];
            shapeBBox: any;
            render: (data: any, snapPaper: any) => any;
            renderLinkPoint: (node: any, linkPoint: any, circle: any) => any;
            updateLinkPoint: (node: any, linkPoint: any, refreshSize: any) => void;
        };
        domNode: {
            adsorb: number[];
            linkPoints: {
                x: number;
                y: number;
            }[];
            render: (data: any, snapPaper: any) => any;
            renderLinkPoint: (node: any, linkPoint: any, circle: any) => any;
            updateLinkPoint: (node: any, linkPoint: any, refreshSize: any) => void;
        };
    };
    initDefs(): void;
    shadow: any;
    listenEvent(): void;
    copyNode: {};
    /**
     * 注册node
     * @param {string} type 形状名称
     * @param {object} data 复写的形状方法
     * @param {string} extend 继承的形状，默认为default
     */
    registeNode(type: string, data: object, extend?: string): void;
    render(data?: {}): Promise<any>;
    tmpLinkPoints: any[];
    timeout: number;
    /**
     * 添加节点
     * @param {object} data
     */
    addNode: (data?: object) => any;
    /**
     * 删除节点
     *  @param {object} data
     */
    deleteNode: (node: any) => void;
    /**
     * 渲染新节点
     */
    renderNode(item: any): any;
    /**
         * 根据数据更新节点位置
         * @param {*} nodeData
         * @param {*} rerenderShape
         */
    updateNode(nodeData?: any, rerenderShape?: any): void;
    /**
     * 给节点添加连线点
     * @param {node} node
     */
    addNodeLinkPoints(node: any, shape: any): boolean;
    addLinkHoverEvent(point: any, node: any): void;
    panNode(node: any, info: any, dx: any, dy: any): void;
    /**
     * 给节点添加事件
     * @param {*} node
     */
    addNodeEvent(node: any): void;
    /**
     *
     * @param {*} node node为空时全选
     */
    setActive(node: any): void;
    /**
     *
     * @param {*} node 传node就取消选中这个node,没有就全部取消选中
     */
    unActive(node: any): void;
    unActiveNode(node: any): void;
    /**
     *
     */
    clear(): void;
}
