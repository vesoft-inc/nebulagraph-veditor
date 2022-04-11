import React, { Fragment, PureComponent } from "react";
import { Table, Select, Input } from "antd";
import { Components, refreshs } from "../Components/index";
import { SVGHelper } from "@";
class RightBar extends PureComponent {
	state = {};
	componentDidMount() {
		this.addEvents(this.props);
		this.updateNodes();
	}

	updateNodes = () => {
		const {
			editor: {
				schema: { data },
				graph: {
					node: { nodes },
					line: { lines }
				}
			}
		} = this.props;
		this.rankNodes = [];
		const dataArray = Object.keys(data.nodesMap).map(key => data.nodesMap[key]);
		// 有向图排序刷新
		this.rankData(dataArray, data.linesMap);
		this.rankNodes.forEach(node => {
			const toNode = nodes[node.uuid];
			const fromLines = toNode.fromLines;
			fromLines.forEach(line => {
				const fromData = data.nodesMap[data.linesMap[line].from];
				this.refreshNode(fromData, toNode);
			});
		});
	};

	// 节点数据有向图排序
	rankData(data, linesMap) {
		let deleteLines = [];
		const others = [];
		data.forEach(node => {
			let nodeId = node.uuid;
			node.indexDepth = 0;
			node.fromLines = [];
			for (let key in linesMap) {
				const line = linesMap[key];
				if (line.to === nodeId) {
					node.indexDepth++;
				}
				if (line.from === nodeId) {
					line.uuid = key;
					node.fromLines.push(line);
				}
			}
			if (node.indexDepth === 0) {
				this.rankNodes.push(node);
				deleteLines = deleteLines.concat(node.fromLines);
			} else {
				others.push(node);
			}
		});
		if (others.length) {
			let newLinesMap = JSON.parse(JSON.stringify(linesMap));
			deleteLines.forEach(line => {
				delete newLinesMap[line.uuid];
			});
			this.rankData(others, newLinesMap);
		}
	}

	addEvents(props) {
		props.editor.on("load", this.updateNodes);
		props.editor.graph.on("line:change", this.onLineChange);
		props.editor.graph.on("line:add", this.onLineChange);
		props.editor.graph.on("line:remove", this.onLineChange);
		// props.editor.graph.on("node:remove", this.onNodeRemove);
	}

	onNodeRemove = ({ node }) => {
		const {
			editor: {
				graph: {
					node: { nodes }
				},
				schema
			}
		} = this.props;
		node.toLines.forEach(item => {
			const before = schema.data.linesMap[item];
			const toNode = nodes[before.to];
			// 更新to的节点，然后遍历子节点
			this.updateParentNode(toNode, before);
		});
	};

	onLineChange = ({ line, before, type, byNode }) => {
		const {
			editor: {
				graph: {
					line: { lines },
					node: { nodes }
				}
			}
		} = this.props;
		const { activeNode = {} } = this.props;
		if (type === "remove" && nodes[line.data.to]) {
			this.updateParentNode(nodes[line.data.to], before);
		}
		if (type === "add") {
			this.updateNode(nodes[line.data.from]);
		}
		if (type === "change") {
			this.updateNode(nodes[line.data.from]);
			this.updateParentNode(nodes[before.to], before);
		}
	};

	updateParentNode(parentNode, before) {
		const {
			editor: { schema }
		} = this.props;
		const { data } = parentNode;
		const refresh = refreshs[data.component];
		if (!refresh) return false;
		const newData = refresh(
			{
				before
			},
			data,
			schema.data
		);
		schema.data.nodesMap[data.uuid] = newData;
		this.updateNode(parentNode);
	}

	/**
	 * 输出更新
	 */
	onOutputChange = data => {
		const { editor } = this.props;
		const { activeNode = {} } = this.state;
		const { uuid } = activeNode;
		// 步骤名称
		activeNode.output = data;
		// 更新node
		const node = editor.graph.node.nodes[uuid];
		node.data = activeNode;
		editor.schema.data.nodesMap[uuid] = node.data;
		this.setState({ ...this.state });
		this.updateNode(node);
	};

	/**
	 * 配置变化
	 */
	onChange = data => {
		const { editor } = this.props;
		const { uuid } = data;

		// 步骤名称
		data.name = data.config.name;
		// 更新editor
		const node = editor.graph.node.nodes[uuid];
		this.changeTiemout && clearTimeout(this.changeTiemout);
		this.changeTiemout = setTimeout(() => {
			if (JSON.stringify(node.data) === JSON.stringify(data)) {
				return false;
			}
			node.data.config = data.config;
			node.data.name = data.config.name;
			editor.graph.fire("node:change", { node });
			node.select("text").node.innerHTML = data.config.name;
		}, 300);
	};

	// 递归更节点新树输入源
	updateNode(node) {
		const {
			editor: {
				graph: {
					line: { lines },
					node: { nodes }
				},
				schema
			}
		} = this.props;
		const { data } = node;
		const toLines = node.toLines;
		const toNodes = [];
		toLines.forEach(lineId => {
			toNodes.push(nodes[lines[lineId].data.to]);
		});
		toNodes.forEach(async toNode => {
			await this.refreshNode(data, toNode);
			this.updateNode(toNode);
		});
	}

	async refreshNode(data, toNode) {
		const {
			editor: {
				schema,
				graph: {
					node: { nodes }
				}
			}
		} = this.props;
		const refresh = refreshs[toNode.data.component];
		// 上游数据修改导致下属节点全部更新输入
		let newData = refresh ? await refresh(data, toNode.data, schema.data) : toNode.data;
		// 刷新动画
		SVGHelper.animate(
			0,
			100,
			val => {
				const num = val < 50 ? 50 - val : val - 50;
				SVGHelper.setAttrs(toNode.shape, {
					fillOpacity: num / 50
				});
			},
			1500,
			'ease-in-out'
		);

		toNode.data = newData;
		schema.data.nodesMap[toNode.data.uuid] = newData;
		return toNode;
	}

	/**
	 * 渲染
	 */
	render() {
		const { activeNode } = this.state;
		const { editor } = this.props;
		if (!editor || !activeNode) return null;
		const input = [];
		const nodes = editor.graph.node.nodes;
		const lines = editor.graph.line.lines;
		const node = nodes[activeNode.uuid] || {};
		const fromLines = node.fromLines || [];
		fromLines.forEach(lineId => {
			const line = lines[lineId];
			input.push(nodes[line.data.from].data);
		});

		if (!input.length) {
			input[0] = { output: [] };
		}
		const Component = Components[activeNode.component];
		return (
			<div
				className="job-right-bar"
				style={{
					width: activeNode.uuid ? 224 : 0
				}}
			>
				<div className="component-title">{activeNode.name}</div>
				<div className="component-content">
					{Component && (
						<Component
							input={input}
							data={{ ...activeNode }}
							onOutputChange={this.onOutputChange}
							onChange={this.onChange}
						/>
					)}
				</div>
			</div>
		);
	}
}
export default RightBar;
