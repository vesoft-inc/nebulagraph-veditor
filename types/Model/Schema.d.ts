export default Schema;
/**
 * @class
 */
declare class Schema {
    /**
     *
     * @param {MMEditor} editor - MMEditor实例
     */
    constructor(editor: MMEditor);
    data: {
        nodesMap: any[];
        linesMap: any[];
    };
    /**
* @property {MMEditor} editor
*/
    editor: MMEditor;
    /**
     * @property {History} history
     */
    history: History;
    /**
     * 格式化有向图
     */
    format(): void;
    listenEvents(): void;
    /**
     * 历史入栈最新数据
     */
    pushHistory(): void;
    /**
     * 历史出栈
     */
    popHistory(): void;
    /**
     * 获取当前最新的map
     */
    getNowDataMap(): {
        nodesMap: any[];
        linesMap: any[];
    };
    /**
     * @param {flowData} data
     */
    setData(data: flowData): Promise<void>;
    /**
     * @param  {flowData} data
     */
    setInitData(data: flowData): Promise<void>;
    /**
     * 解析数据
     * @param {flowData} data
     */
    parseData({ nodes, lines }: flowData): void;
    /**
     * 渲染数据
     */
    renderData(): Promise<void>;
    /**
     * 重做
     */
    redo(): Promise<void>;
    /**
     * 撤销
     */
    undo(): Promise<void>;
    /**
     * 获取数据
     */
    getData(): {
        nodes: any[];
        lines: any[];
    };
}
import MMEditor from "../MMEditor";
import History from "./History";
