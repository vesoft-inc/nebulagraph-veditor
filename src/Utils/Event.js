/**
 * @class
 */
class Event {
	events = {};
	/**
	 * 箭头
	 * @param {*} event 
	 * @param {*} func 
	 * @param {*=} index 
	 */
	on(event, func, index) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		index = index || this.events[event].length;
		this.events[event].push({ index, func });
		// 按照index顺序执行
		this.events[event].sort((a, b) => a.index > b.index);
	}

	/**
	 * 
	 * @param {*} event 
	 * @param {*} data 
	 */
	fire(event, data) {
		const events = this.events[event] || [];
		events.forEach(item => {
			item.func(data);
		});
	}

	/**
	 * 关闭绑定的事件
	 * @param {*} event 
	 * @param {*} offFunc 不传清空所有
	 */
	off(event, offFunc) {
		this.events[event] = this.events[event].filter(func => offFunc !== func);
	}

	/**
	 * 清空
	 */
	clear() {
		delete this.events;
	}

	dispatch = this.fire;
}
export default Event;