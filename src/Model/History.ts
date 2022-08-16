import Schema, { VEditorSchema } from "./Schema";

/**
 * History
 */
class History {
  index = -1;
  schemaList: string[] = [];
  schema: Schema;

  constructor(schema: Schema) {
    this.schema = schema;
  }

  /**
   */
  push(data: VEditorSchema) {
    if (this.index !== -1 && this.index < (this.schemaList.length - 1)) {// 删除后面会被覆盖的历史记录
      this.schemaList.splice(this.index + 1, this.schemaList.length - this.index - 1);
    }
    this.schemaList.push(JSON.stringify(data).trim());
    this.index++;
    this.schema.editor.fire("change");
  }

  pop() {
    this.schemaList.pop();
    this.index--;
    this.schema.editor.fire("change");
  }

  replace(index: number, data: string) {
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

  clear() {
    this.schemaList = [];
    this.index = -1;
  }
}
export default History;
