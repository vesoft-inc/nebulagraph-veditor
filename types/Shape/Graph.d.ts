import Node from "./Node";
import Line from "./Line";
import AnchorLine from "./AnchorLine";
import VEditor from "../VEditor";
import { VEditorSchema } from "../Model/Schema";
import * as Utils from "../Utils";
declare class Graph extends Utils.Event {
    editor: VEditor;
    node: Node;
    line: Line;
    anchorLine: AnchorLine;
    linkStatus: string;
    data: VEditorSchema;
    shadow: SVGSVGElement;
    constructor(editor: VEditor);
    addBack(): void;
    listenEvents(): void;
    onKeyDown: (e: KeyboardEvent) => boolean;
    render(data: VEditorSchema): Promise<void>;
    update(): void;
    initDefs(): void;
    /**
     * 清空画布
     */
    clearGraph(): void;
    destroy(): void;
}
export default Graph;
