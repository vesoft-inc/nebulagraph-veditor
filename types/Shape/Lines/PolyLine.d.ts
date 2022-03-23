export default PolyLine;
declare const PolyLine: {
    gapDistance: number;
    rankDir: string;
    /**
     * @param  {number} fromX
     * @param  {number} fromY
     * @param  {number} toX
     * @param  {number} toY
     * @param  {object} fromPointNode
     * @param  {object} toPointNode
     */
    makePath(fromX: number, fromY: number, toX: number, toY: number, fromPointNode: object, toPointNode: object, fromNode: any, toNode: any): string;
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
