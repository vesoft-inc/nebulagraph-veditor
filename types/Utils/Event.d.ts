export default class Event {
    events: {};
    /**
     * 箭头
     */
    on(event: string, func: Function, index?: number): void;
    fire(event: string, data?: any): void;
    /**
     * 关闭绑定的事件
     */
    off(event: string, offFunc?: Function): void;
    /**
     * 清空
     */
    clear(): void;
    dispatch: (event: string, data?: any) => void;
}
