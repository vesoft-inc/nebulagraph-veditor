import React, { Fragment, PureComponent } from "react";
import { Table, Select, Input, Modal, Button } from "antd";

export default class FieldSelect extends PureComponent {
	componentDidMount() {
		const { value = [], fields = [] } = this.props;
		this.makeFields(value, fields);
	}

	makeFields(value, fields) {
		const selectedRows = [];
		const data = fields.map(item => {
			const field = value.find(each => each.srcField === item.name);
			if (!field) return Object.assign({}, item);
			item.dstField = field.name;
			// 选中条
			selectedRows.push(item);
			// 选中的还原到data上
			return Object.assign({}, item);
		});
		this.setState({
			selectedRows,
			data
		});
	}

	componentWillReceiveProps(props) {
		if (this.props.fields !== props.fields) {
			const { value = [], fields = [] } = props;
			// 还原被选中的字段
			this.makeFields(value, fields);
		}
	}

	onOk = () => {
		const { selectedRows, data } = this.state;
		const res = selectedRows.map(item => {
			const field = data.find(each => each.name === item.name);
			// 返回选中的
			return Object.assign({}, field, {
				name: field.dstField || field.name,
				srcField: field.name
			});
		});
		this.props.onChange(res);
		this.setState({
			visible: false
		});
	};

	onCancel = () => {
		this.setState({
			visible: false
		});
	};

	show = () => {
		this.setState({
			visible: true
		});
	};

	onRename = (e, index) => {
		const { data } = this.state;
		data[index].dstField = e.target.value;
		this.setState({
			data: [...data]
		});
	};

	renderRename = (value, row, index) => {
		return (
			<Input
				style={{ width: 100 }}
				value={value || row.name}
				onChange={e => {
					this.onRename(e, index);
				}}
			/>
		);
	};

	render() {
		const columns = [
			{
				title: "字段名",
				dataIndex: "name"
			},
			{
				title: "重命名",
				dataIndex: "dstField",
				render: this.renderRename
			},
			{
				title: "类型",
				dataIndex: "dataType"
			},
			{
				title: "描述",
				width: 200,
				dataIndex: "detail"
			}
		];
		const { data, visible, selectedRows = [] } = this.state || {};
		const selectedRowKeys = selectedRows.map(item => {
			return item.name;
		});
		return (
			<Fragment>
				<Button style={{ width: "100%" }} onClick={this.show}>
					字段选择
				</Button>
				<Modal
					title="字段选择"
					visible={visible}
					width={800}
					onOk={this.onOk}
					onCancel={this.onCancel}
				>
					<Table
						rowKey="name"
						pagination={false}
						dataSource={data}
						rowSelection={{
							selectedRowKeys: selectedRowKeys,
							onChange: (selectedRowKeys, selectedRows) => {
								this.setState({
									selectedRows
								});
							}
						}}
						columns={columns}
					/>
				</Modal>
			</Fragment>
		);
	}
}
