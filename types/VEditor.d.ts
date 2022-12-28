import Graph from "./Shape/Graph";
import Controller from "./Utils/Controller";
import Schema from "./Model/Schema";
import Minimap from "./Plugins/Minimap";
import "./index.less";
import * as Utils from "./Utils";
/**
 * @link
 */
export interface VEditorOptions {
    dom: HTMLDivElement;
    hideAchor?: boolean;
    hideAchorLine?: boolean;
    anchorDistance?: number;
    disableCopy?: boolean;
    showBackGrid?: boolean;
    showMiniMap?: boolean;
    mode?: "edit" | "view";
    dagreOption?: Record<string, any>;
    [key: string]: any;
}
/**
 * @class
 * @extends Utils.Event
 */
declare class VEditor extends Utils.Event {
    config: VEditorOptions;
    dom: HTMLDivElement;
    svg: SVGSVGElement;
    paper: SVGGElement;
    container: HTMLDivElement;
    graph: Graph;
    controller: Controller;
    schema: Schema;
    minimap: Minimap;
    /**
     * @param {VEditorOptions} options 配置项
     */
    constructor(config: VEditorOptions);
    initDom(dom: HTMLDivElement): HTMLDivElement;
    resize(): void;
    /**
     * destroy
     */
    destroy(): void;
    /**
     * repaint
     */
    repaint(): void;
}
export default VEditor;
