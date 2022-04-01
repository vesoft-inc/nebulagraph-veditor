export default class Event {
    events = {};
    /**
     * 箭头
     */
    on(event: string, func: Function, index?: number) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        index = index || this.events[event].length;
        this.events[event].push({ index, func });
        // 按照index顺序执行
        this.events[event].sort((a, b) => a.index > b.index);
    }

    fire(event: string, data?: any) {
        const events = this.events[event] || [];
        try {
            events.forEach((item) => {
                item.func(data);
            });
        } catch (e) {
            console.warn(e);
        }
    }

    /**
     * 关闭绑定的事件
     */
    off(event: string, offFunc?: Function) {
        if (!offFunc) {
            this.events[event] = [];
        } else {
            this.events[event] = this.events[event].filter(
                (func) => offFunc !== func.func
            );
        }
    }

    /**
     * 清空
     */
    clear() {
        delete this.events;
    }

    dispatch = this.fire;
}
