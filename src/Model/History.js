/**
 * 历史记录堆栈管理类
 * @class
 */
class History {
    /**
     * @prop {number} index
     */
	index = -1;

    /**
     * @prop {array} schemaList
     */
	schemaList = [];

	constructor(schema) {
		this.schema = schema;
	}

	/**
	 * @param  {} data
	 */
	push(data) {
		if(this.index!==-1&&this.index<(this.schemaList.length-1)){// 删除后面会被覆盖的历史记录
			this.schemaList.splice(this.index+1,this.schemaList.length-this.index-1);
		}
		this.schemaList.push(JSON.stringify(data).trim(" "));
		this.index++;
		this.schema.editor.fire("change");
	}

	pop(){
		this.schemaList.pop();
		this.index--;
		this.schema.editor.fire("change");
	}

	/**
	 * @param  {} index
	 * @param  {} data
	 */
	replace(index, data) {
		this.schemaList[this.index + index] = data;
	}

	// 重做
	redo() {
		this.schema.data = JSON.parse(this.schemaList[++this.index]);
		this.schema.editor.fire("change");
	}

	// 撤销
	undo() {
		this.schema.data = JSON.parse(this.schemaList[--this.index]);
		this.schema.editor.fire("change");
	}

	clear(){
		this.schemaList = [];
		this.index = -1;
	}
}
export default History;
