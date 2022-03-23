export default Line;
/**
 * @class
 */
declare class Line {
    constructor(graph: any);
    graph: any;
    node: any;
    paper: any;
    lines: any[];
    lineG: any;
    allLinkPointsXY: any[];
    shapes: {
        default: {
            arcRatio: number;
            render(data: any, allNodesMap: any, line: any): {
                path: any;
                data: {
                    fromX: any;
                    fromY: any;
                    toX: any;
                    toY: any;
                };
            };
            makePath(fromX: any, fromY: any, toX: any, toY: any, fromPointNode: any, toPointNode: any): string;
            getPointDirect(pointNode: any): number;
            renderArrow(data: any, allNodesMap: any, arrow: any): any;
            renderLabel(data: any, allNodesMap: any, lineShapePath: any, labelGroup: any): any;
            checkNewLine(data: any): boolean;
        };
        polyline: {
            gapDistance: number;
            rankDir: string;
            makePath(fromX: number, fromY: number, toX: number, toY: number, fromPointNode: any, toPointNode: any, fromNode: any, toNode: any): string;
            makeGap(direction: any, pos: any): any;
            getDirection({ x, y }: {
                x: any;
                y: any;
            }, bbox: any, center: any): "left" | "bottom" | "right" | "top";
            arcRatio: number;
            render(data: any, allNodesMap: any, line: any): {
                path: any;
                data: {
                    fromX: any;
                    fromY: any;
                    toX: any;
                    toY: any;
                };
            };
            getPointDirect(pointNode: any): number;
            renderArrow(data: any, allNodesMap: any, arrow: any): any;
            renderLabel(data: any, allNodesMap: any, lineShapePath: any, labelGroup: any): any;
            checkNewLine(data: any): boolean;
        };
        tempLine: {
            render: (paper: any) => any;
            renderPath: ({ fromX, fromY, x, y }: {
                fromX: any;
                fromY: any;
                x: any;
                y: any;
            }, line: any) => void;
        };
    };
    listenEvent(): void;
    /**
     * 添加线
     * @param {*} data
     */
    addLine(data: any): void;
    /**
     * 添加虚拟的连线，用于新建链接
     * @param {*} lineData
     */
    addTempLine(lineData: any): void;
    tempLine: any;
    /**
     * 跟下该node的线
     * @param {ele} node
     */
    updateByNode(node: ele): void;
    /**
     * 重绘某个线
     * @param {*} lineData
     */
    updateLine(lineData: any, rerenderShape?: boolean): void;
    /**
     * 添加线
     * @param {*} lineData
     */
    renderLine(lineData: any): any;
    /**
     * 删除线
     */
    deleteLine(data: any, notEvent: any, byNode: any): void;
    activeLine: any;
    getLineId(lineData: any): string;
    /**
     * 更新线为
     * @param {*} line
     * @param {*} x
     * @param {*} y
     */
    updateActiveLine: (g: any) => void;
    /**
     * 检查是否生成新线
     */
    checkNewLine: (e: any) => void;
    /**
     * 注册线
     * @param {*} data
     */
    registeLine(data: any): void;
    /**
     * 渲染
     * @param {*} lines
     */
    render(lines?: any): void;
    /**
     *
     * @param {*} nodes
     * @param {*} g
     */
    addToNodes(nodes: any, g: any): void;
    /**
     *
     * @param {*} line
     */
    setActiveLine(line: any): void;
    /**
     * 取消激活
     */
    unActiveLine(): void;
    calcLinkPoint: (x: any, y: any, adsorb?: number[]) => any;
    makeAdsorbPoints: () => void;
    /**
     * 绑定线拖动事件
     * @param {*} g
     */
    addLineEvents(g: any): void;
    tempLineData: {
        from: any;
        fromPoint: any;
        fromX: any;
        toX: any;
        fromY: any;
        toY: any;
    } | {
        from: any;
        fromPoint: any;
        fromX: any;
        fromY: any;
        toX?: undefined;
        toY?: undefined;
    };
    /**
     * 节点的新增线逻辑
     */
    addLinkPointEvent: (point: any, node: any, index: any) => void;
    /**
     *
     */
    clear(): void;
}
