import React, { Fragment, PureComponent } from "react";
import { Icon, Menu, Tooltip } from "antd";
import AllComponents from "./Components";
const { SubMenu } = Menu;
class LeftBar extends PureComponent {
	componentDidMount() {}

	onDrag(item) {
		this.setState({
			dragItem: item
		});
		this.addEvents();
	}

	addEvents() {
		const mousemove = e => {
			this.setState({
				pageX: e.pageX,
				pageY: e.pageY
			});
		};
		const mouseup = e => {
			this.props.onDrop(this.state.dragItem, e);
			this.setState({
				dragItem: undefined
			});
			window.document.removeEventListener("mousemove", mousemove);
			window.document.removeEventListener("mouseup", mouseup);
		};

		window.document.addEventListener("mousemove", mousemove);
		window.document.addEventListener("mouseup", mouseup);
	}

	renderItems(components, parent) {
		return components.map(item => {
			item.operatorGroup = parent.type;
			return (
				<Menu.Item key={item.component}>
					<Tooltip placement="right" overlayStyle={{ fontSize: 12 }} title={item.help}>
						<div
							className="job-edit-component"
							onMouseDown={() => {
								this.onDrag(item);
							}}
						>
							{item.name}
						</div>
					</Tooltip>
				</Menu.Item>
			);
		});
	}

	onChangeValue = e => {
		const value = e.target.value;
		this.timeout && clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.search(value);
		}, 500);
	};

	search(value) {
		const res = [];
		AllComponents.forEach(items => {
			const children = [];
			items.components.forEach(item => {
				if (item.name.indexOf(value) > -1) {
					children.push(item);
				}
			});
			if (children.length > 0) {
				items.components = children;
				res.push(items);
			}
		});
		this.setState({
			components: res
		});
	}

	render() {
		const { dragItem = {}, pageX = 0, pageY = 0, components = AllComponents } =
			this.state || {};
		return (
			<div className="job-left-bar">
				<div
					style={{
						left: dragItem.name ? pageX - 70 : -9999,
						top: dragItem.name ? pageY - 15 : -9999,
						display: dragItem.name ? "block" : "none"
					}}
					className="drag-item"
				>
					<img src={dragItem.iconPath} />
					{dragItem.name}
				</div>
				<div className="search-components">
					<Icon type="search" />
					<input onChange={this.onChangeValue} placeholder="请输入搜索内容" />
				</div>
				<Menu
					mode="inline"
					defaultOpenKeys={[
						"extract",
						"transform",
						"load",
						"other",
						"statistics",
						"link"
					]}
					selectable={false}
				>
					{components.map(item => {
						return (
							<SubMenu
								key={item.type}
								title={
									<div>
										<Icon type="android" />
										<span>{item.name}</span>
									</div>
								}
							>
								{this.renderItems(item.components, item)}
							</SubMenu>
						);
					})}
				</Menu>
			</div>
		);
	}
}
export default LeftBar;
