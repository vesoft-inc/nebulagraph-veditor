import React, { Fragment, PureComponent } from "react";
import { Table, Input, Form, Select, message, Radio } from "antd";
import FieldSelect from "./FieldSelect";
import fields from "../../columnList.json";
@Form.create({
	onValuesChange: (props, changedValues, allValues) => {
		props.data.config = allValues;
		props.onChange(props.data);
	}
})
/**
 * 类名
 */
class Read extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			type: null,
			data: {}
		};
	}

	onOutputChange = data => {
		const output = (data || []).map(item => {
			return Object.assign({}, item, { name: item.dstField || item.srcField });
		});
		this.props.onOutputChange(output);
	};

	componentDidMount() {
		this.props.form.validateFields();
	}

	// 更改表
	changeTable = value => {
		this.tableName = value;
		this.getTableColumns(this.databaseName, value);
	};

	render() {
		const { data } = this.props;
		const { config = {} } = data;
		const { getFieldDecorator, getFieldValue } = this.props.form;
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

				<Form.Item label="是否分区">
					{getFieldDecorator("isPartition", {
						initialValue: config.isPartition || 0,
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
								initialValue: config.partitionField,
								rules: [
									{
										required: true,
										message: "该项必填"
									}
								]
							})(
								<Select showSearch placeholder="分区字段" style={{ width: "100%" }}>
									{fields.map(item => (
										<Option value={item.name} key={item.name}>
											{item.name}
										</Option>
									))}
								</Select>
							)}
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

				<Form.Item label="字段选择">
					{getFieldDecorator("dstFields", {
						initialValue: config.dstFields,
						rules: [
							{
								required: true,
								message: "该项必填"
							}
						]
					})(<FieldSelect onChange={this.onOutputChange} fields={fields} />)}
				</Form.Item>
			</Form>
		);
	}
}

export default Read;
