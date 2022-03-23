export default DefaultLine;
declare namespace DefaultLine {
    const arcRatio: number;
    /**
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} line
     */
    function render(data: any, allNodesMap: any, line: any): {
        path: any;
        data: {
            fromX: any;
            fromY: any;
            toX: any;
            toY: any;
        };
    };
    /**
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} line
     */
    function render(data: any, allNodesMap: any, line: any): {
        path: any;
        data: {
            fromX: any;
            fromY: any;
            toX: any;
            toY: any;
        };
    };
    /**
     * @param  {} fromX
     * @param  {} fromY
     * @param  {} toX
     * @param  {} toY
     * @param  {} fromPointNode
     * @param  {} toPointNode
     */
    function makePath(fromX: any, fromY: any, toX: any, toY: any, fromPointNode: any, toPointNode: any): string;
    /**
     * @param  {} fromX
     * @param  {} fromY
     * @param  {} toX
     * @param  {} toY
     * @param  {} fromPointNode
     * @param  {} toPointNode
     */
    function makePath(fromX: any, fromY: any, toX: any, toY: any, fromPointNode: any, toPointNode: any): string;
    function getPointDirect(pointNode: any): number;
    function getPointDirect(pointNode: any): number;
    /**
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} arrow
     */
    function renderArrow(data: any, allNodesMap: any, arrow: any): any;
    /**
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} arrow
     */
    function renderArrow(data: any, allNodesMap: any, arrow: any): any;
    /** 是否渲染文字
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} lineShapePath
     * @param  {} labelGroup 是否已有文字对象
     */
    function renderLabel(data: any, allNodesMap: any, lineShapePath: any, labelGroup: any): any;
    /** 是否渲染文字
     * @param  {} data
     * @param  {} allNodesMap
     * @param  {} lineShapePath
     * @param  {} labelGroup 是否已有文字对象
     */
    function renderLabel(data: any, allNodesMap: any, lineShapePath: any, labelGroup: any): any;
    /**
     * @param  {} data
     */
    function checkNewLine(data: any): boolean;
    /**
     * @param  {} data
     */
    function checkNewLine(data: any): boolean;
}
