import React, { Fragment, PureComponent } from "react";
import { Table, Input, Form, Select, Radio } from "antd";
import FieldSelect from "../Read/FieldSelect";

// 输入源更新
function refresh(input = {}, data) {
	input = input.output || [];
	const {
		config: { dstFields = [] }
	} = data;
	const inputNames = input.map(item => {
		return item.name;
	});
	data.output = dstFields.filter(item => inputNames.indexOf(item.srcField) > -1);
	data.config.dstFields = data.output;
	return data;
}

@Form.create({
	onValuesChange: (props, changedValues, allValues) => {
		props.data.config = allValues;
		props.onChange(props.data);
	}
})
/**
 * 类名
 */
class Write extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			type: null,
			data: {}
		};
	}

	componentDidMount() {
		this.props.form.validateFields();
	}

	onOutputChange = data => {
		this.props.onOutputChange([...data]);
	};

	render() {
		const {
			data,
			input = [],
			form: { getFieldDecorator, getFieldValue }
		} = this.props;
		const { config = {} } = data;
		const { allDbTable = [] } = this.state || {};
		return (
			<Form>
				<Form.Item label="步骤名称">
					{getFieldDecorator("name", {
						initialValue: data.name,
						rules: [
							{
								required: true,
								message: "该项必填"
							}
						]
					})(<Input placeholder="步骤名称" />)}
				</Form.Item>
				<Form.Item label="项目">
					{getFieldDecorator("srcDbName", {
						initialValue: config.srcDbName,
						rules: [{ required: true, message: "不能为空" }]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="写入表">
					{getFieldDecorator("tableName", {
						initialValue: config.tableName,
						rules: [{ required: true, message: "不能为空" }]
					})(<Input placeholder="写入表名称" />)}
				</Form.Item>
				<Form.Item label="是否分区">
					{getFieldDecorator("isPartition", {
						initialValue: config.isPartition,
						rules: [{ required: true, message: "不能为空" }]
					})(
						<Radio.Group>
							<Radio value={1}>是</Radio>
							<Radio value={0}>否</Radio>
						</Radio.Group>
					)}
				</Form.Item>

				{getFieldValue("isPartition") ? (
					<div className="insert-form">
						<Form.Item label="分区字段">
							{getFieldDecorator("partitionField", {
								initialValue: getFieldValue("isPartition") ? "ds" : "",
								rules: [
									{
										required: true,
										message: "该项必填"
									}
								]
							})(<Input disabled placeholder="分区字段" style={{ width: "100%" }} />)}
						</Form.Item>
						<Form.Item label="分区间隔">
							{getFieldDecorator("partitionValue", {
								initialValue: config.partitionValue,
								rules: [
									{
										required: true,
										message: "该项必填"
									}
								]
							})(
								<Select placeholder="分区间隔">
									<Option value={"yyyyMMdd-1d"}>天</Option>
								</Select>
							)}
						</Form.Item>
					</div>
				) : null}

				<Form.Item label="输出字段">
					{getFieldDecorator("dstFields", {
						initialValue: config.dstFields,
						rules: [
							{
								required: true,
								message: "该项必填"
							}
						]
					})(<FieldSelect onChange={this.onOutputChange} fields={input[0].output} />)}
				</Form.Item>
			</Form>
		);
	}
}

export { refresh };
export default Write;
