import { Event } from "../Utils";
import VEditor from "../VEditor";
interface IPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}
declare class BrushSelector extends Event {
    paper: SVGGElement;
    editor: VEditor;
    svg: SVGSVGElement;
    container: SVGGElement;
    dom: SVGElement;
    startPos: {
        x: number;
        y: number;
        rect: DOMRect;
    };
    position: any;
    radius: any;
    constructor(editor: VEditor);
    init(): void;
    listenEvents(): void;
    onMouseUp: () => void;
    onMouseMove: (e: MouseEvent) => void;
    toLoaclPos(position: IPosition): IPosition;
    calcOuputInner(): void;
    render(): void;
}
export default BrushSelector;
