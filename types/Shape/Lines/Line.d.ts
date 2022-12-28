import Graph from "../Graph";
import { InstanceLine } from "../Line";
import { AnyMap } from "../../Utils/types";
import { VEditorLine } from "../../Model/Schema";
import VEditor from "../../VEditor";
export interface LineRender extends AnyMap {
    graph?: Graph;
    adsorb?: [number, number];
    render?: (instanceLine: InstanceLine) => SVGElement;
    renderArrow?: (instanceLine?: InstanceLine) => SVGElement;
    renderArrow2?: (instanceLine?: InstanceLine) => SVGElement;
    renderLabel?: (instanceLine?: InstanceLine) => SVGElement;
    checkNewLine?: (lineData: VEditorLine, editor: VEditor) => boolean;
}
export interface LabelInstance {
    text: SVGTextElement;
    textRect: SVGRectElement;
    textBBox?: DOMRect;
    oldText?: string;
    labelGroup: SVGGElement;
}
export declare type Direction = "left" | "right" | "top" | "bottom";
declare const DefaultLine: LineRender;
export default DefaultLine;
