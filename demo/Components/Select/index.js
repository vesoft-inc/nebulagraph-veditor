import React, { Fragment, PureComponent } from "react";
import { Table, Input, Form, Radio } from "antd";
import FieldSelectForm from "../Read/FieldSelect";

// 输入源更新
function refresh(input = {}, data) {
	input = input.output || [];
	const {
		config: { dstFields = [] }
	} = data;
	const res = [];
	dstFields.forEach(item => {
		// 输入的字段
		const field = input.find(each => item.srcField === each.name);
		// 输出后的字段
		if (field) {
			res.push(Object.assign({}, field, item));
		}
	});
	data.config.dstField = dstFields;
	data.output = res;
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
class Select extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			type: null,
			data: {}
		};
	}

	onOutputChange = data => {
		this.props.onOutputChange([...data]);
	};

	render() {
		const { data } = this.props;
		const { config = {} } = data;
		const { getFieldDecorator } = this.props.form;
		const { input = [] } = this.props;
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

				<Form.Item label="字段选择">
					{getFieldDecorator("dstFields", {
						initialValue: config.dstFields,
						rules: [
							{
								required: true,
								message: "该项必填"
							}
						]
					})(<FieldSelectForm onChange={this.onOutputChange} fields={input[0].output} />)}
				</Form.Item>
			</Form>
		);
	}
}
export { refresh };
export default Select;
