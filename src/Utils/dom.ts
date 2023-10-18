import BezierLine from "./BezierLine";
import { Position } from "./types";

export function getDOMRect(str) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    div.innerHTML = str;
    document.body.appendChild(div);
    const rect = div.getBoundingClientRect();
    document.body.removeChild(div);
    return rect;
}
export function svgWrapper(svgString: string, parent?: SVGElement): SVGElement {
    const svg = createSVGElement("svg") as SVGSVGElement;
    svg.innerHTML = svgString;
    if (parent) parent.appendChild(svg.children[0]);
    return svg.children[0] as SVGElement;
}
export function createSVGElement(name: string, parent?: SVGElement) {
    const svg = window.document.createElementNS(
        "http://www.w3.org/2000/svg",
        name
    );
    if (parent) {
        parent.appendChild(svg);
    }
    return svg;
}
export function setAttrs(dom: Element, attrs: Record<string, any>) {
    for (const key in attrs) {
        if (key === "className") {
            return dom.setAttribute("class", attrs[key]);
        }
        if (attrs.hasOwnProperty(key)) {
            dom.setAttribute(key, attrs[key]);
        }
    }
}
export function setTransform(scale, translateX, translateY) {
    return `translate(${translateX},${translateY}) scale(${scale})`;
}
export function animate(
    start: number,
    end: number,
    callback: (val: number) => void,
    duration: number,
    endCallback?: Function,
    easeType: string = "ease-in"
): number {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const bezierLine = getEase(easeType);
    let aniamteFrame;
    const step = () => {
        const now = Date.now();
        if (now >= endTime) {
            callback(end);
            if (typeof endCallback === "function") endCallback();
            return;
        }
        const { y } = bezierLine.getPoint((now - startTime) / duration);
        callback(start + y * (end - start));
        aniamteFrame = requestAnimationFrame(step);
    };
    step();
    return aniamteFrame;
}
export function getEase(easeType: string): BezierLine {
    const bezierLine = new BezierLine();
    switch (easeType) {
        case "ease":
            bezierLine.setControl(
                { x: 0, y: 0 },
                { x: 0.25, y: 0.1 },
                { x: 0.25, y: 1 },
                { x: 1, y: 1 }
            );
        case "ease-in":
            bezierLine.setControl(
                { x: 0, y: 0 },
                { x: 0.42, y: 0 },
                { x: 1, y: 1 },
                { x: 1, y: 1 }
            );
        case "ease-out":
            bezierLine.setControl(
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 0.58, y: 1 },
                { x: 1, y: 1 }
            );
        case "ease-in-out":
            bezierLine.setControl(
                { x: 0, y: 0 },
                { x: 0.42, y: 0 },
                { x: 0.58, y: 1 },
                { x: 1, y: 1 }
            );
        default:
            bezierLine.setControl(
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 1, y: 1 },
                { x: 1, y: 1 }
            );
    }
    return bezierLine;
}
export function drag(
    node: Element,
    dragMove: (e: MouseEvent) => void,
    dragStart: (e: MouseEvent) => void,
    dragEnd: (e: MouseEvent) => void
) {
    function onDragStart(e) {
        dragStart(e);
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", onDragEnd);
    }
    function onDragMove(e) {
        dragMove(e);
        if (node && !node.parentElement) {
            _destroy();
        }
    }
    function onDragEnd(e) {
        dragEnd(e);
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragEnd);
    }
    node.addEventListener("mousedown", onDragStart);

    const _destroy = () => {
        node.removeEventListener("mousedown", onDragStart);
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragEnd);
        node = undefined;
    };
    return _destroy;
}
export function getAngle(from: Position, to: Position) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
}
