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
    const json = JSON.stringify(data).trim();
    const last = this.schemaList[this.index];
    if (last === json) { return }
    if (this.index !== -1 && this.index < (this.schemaList.length - 1)) {// 删除后面会被覆盖的历史记录
      this.schemaList.splice(this.index + 1, this.schemaList.length - this.index - 1);
    }
    this.schemaList.push(json);
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
  redo():boolean {
    if (this.index >= this.schemaList.length - 1) {
      return false
    }
    this.schema.data = JSON.parse(this.schemaList[++this.index]);
    this.schema.editor.fire("change");
    return true;
  }

  // 撤销
  undo():boolean {
    if (this.index < 1) {
      return false
    }
    this.schema.data = JSON.parse(this.schemaList[--this.index]);
    this.schema.editor.fire("change");
    return true;
  }

  clear() {
    this.schemaList = [];
    this.index = -1;
  }

  reset() {
    if (this.schemaList.length <= 0) { return }
    this.index = 0;
    this.schemaList = [this.schemaList[0]];
  }
}
export default History;
