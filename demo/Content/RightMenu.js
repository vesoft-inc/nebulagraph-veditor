import React, { PureComponent, Fragment } from "react";
import { message, Menu, Table, Modal } from "antd";
const { Column } = Table;
export default class RightMenu extends PureComponent {
	onOk = () => {
		this.setState({
			visible: false
		});
	};
	onCancel = () => {
		this.setState({
			visible: false
		});
	};

	changeStatus(status) {
		const { rightNodeId, topbar } = this.props;
		topbar.clearNodeStatus(rightNodeId);
		topbar.changeNodeStatus(rightNodeId, status);
	}
	clearStatus() {
		const { rightNodeId, topbar } = this.props;
		topbar.clearNodeStatus(rightNodeId);
	}

	render() {
		const { left = 0, top = 0 } = this.props;
		const { data, visible, code, schemas = [], loading } = this.state || {};
		return (
			<Fragment>
				<Menu
					selectedKeys={[]}
					className="editor-context-menu"
					style={{ position: "absolute", left: left, top: top }}
				>
					<Menu.Item
						onClick={() => {
							this.clearStatus();
						}}
					>
						清空节点状态
					</Menu.Item>
					<Menu.Item
						onClick={() => {
							this.changeStatus("running");
						}}
					>
						设置节点运行中
					</Menu.Item>
					<Menu.Item
						onClick={() => {
							this.changeStatus("error");
						}}
					>
						设置节点失败
					</Menu.Item>
					<Menu.Item
						onClick={() => {
							this.changeStatus("success");
						}}
					>
						设置节点成功
					</Menu.Item>
				</Menu>
			</Fragment>
		);
	}
}
