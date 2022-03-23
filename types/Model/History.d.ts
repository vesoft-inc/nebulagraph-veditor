export default History;
/**
 * 历史记录堆栈管理类
 * @class
 */
declare class History {
    constructor(schema: any);
    /**
     * @prop {number} index
     */
    index: number;
    /**
     * @prop {array} schemaList
     */
    schemaList: any[];
    schema: any;
    /**
     * @param  {} data
     */
    push(data: any): void;
    pop(): void;
    /**
     * @param  {} index
     * @param  {} data
     */
    replace(index: any, data: any): void;
    redo(): void;
    undo(): void;
    clear(): void;
}
