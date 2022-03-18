export default Event;
/**
 * @class
 */
declare class Event {
    events: {};
    /**
     * 箭头
     * @param {*} event
     * @param {*} func
     * @param {*=} index
     */
    on(event: any, func: any, index?: any | undefined): void;
    /**
     *
     * @param {*} event
     * @param {*} data
     */
    fire(event: any, data: any): void;
    /**
     * 关闭绑定的事件
     * @param {*} event
     * @param {*} offFunc 不传清空所有
     */
    off(event: any, offFunc: any): void;
    /**
     * 清空
     */
    clear(): void;
    dispatch: (event: any, data: any) => void;
}
