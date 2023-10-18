declare const SVGHelper: {
    rect: (x: number, y: number, w: number, h: number, rx?: number, ry?: number) => SVGRectElement;
    text: (x: number, y: number, text?: string) => SVGTextElement;
    circle: (cx: number, cy: number, r: number) => SVGCircleElement;
    image: (src: string, x: number, y: number, w: number, h: number) => SVGImageElement;
    path: (d?: string) => SVGPathElement;
    group: (...others: SVGElement[]) => SVGGElement;
    getDOMRect(str: any): DOMRect;
    svgWrapper(svgString: string, parent?: SVGElement): SVGElement;
    createSVGElement(name: string, parent?: SVGElement): SVGElement;
    setAttrs(dom: Element, attrs: Record<string, any>): void;
    setTransform(scale: any, translateX: any, translateY: any): string;
    animate(start: number, end: number, callback: (val: number) => void, duration: number, endCallback?: Function, easeType?: string): number;
    getEase(easeType: string): import("./BezierLine").default;
    drag(node: Element, dragMove: (e: MouseEvent) => void, dragStart: (e: MouseEvent) => void, dragEnd: (e: MouseEvent) => void): () => void;
    getAngle(from: import("./types").Position, to: import("./types").Position): number;
};
export { SVGHelper };
