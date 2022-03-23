import React, { Fragment, PureComponent } from "react";
import { Icon } from "antd";
import request from "@/utils/request";
import { connect } from "dva";
import Sockjs from "sockjs-client";
@connect(state => ({
	globalStore: state.global,
	editStore: state.jobEdit
}))
class Console extends PureComponent {
	state = {
		height: 0,
		status: "hide",

		messages: []
	};

	height = 182;

	constructor(props) {
		super(props);
		window.editorConsole = this;
	}

	componentWillReceiveProps(props) {
		if (props.editStore.running === true && !this.props.editStore.running) {
			this.setState(
				{
					height: this.height,
					status: "show"
				},
				() => {
					this.connect();
				}
			);
		}
		if (props.editStore.running === false && this.props.editStore.running) {
			this.close();
		}
	}

	// 关闭websoket
	close() {
		if (!this.ws) return;
		this.ws.send("__close__");
		this.ws.close();
		this.ws = null;
	}

	// 连接websoket
	connect() {
		const {
			editStore: { flowId }
		} = this.props;
		this.runnedNodes = [];
		this.runnedNodes = [];
		this.setState({
			messages: ["开始连接..."]
		});
		this.ws = new Sockjs("/ws/etl/test_status");
		this.ws.onopen = () => {
			const { messages } = this.state;
			messages.push("连接成功...");
			this.ws.send(
				JSON.stringify({
					flowId,
					type: "test",
					userId: this.props.globalStore.currentUser.account
				})
			);
			this.setState({
				messages: [...messages]
			});
		};
		this.ws.onmessage = this.log;
		this.ws.onclose = e => {
			const taskFn = () => {
				this.log({ data: "连接关闭..." });
				this.props.dispatch({
					type: "jobEdit/changeState",
					payload: {
						running: false
					}
				});
				this.ws = null;
			};
			requestIdleCallback(taskFn);
		};
	}

	// 打印websocket数据
	log = e => {
		const { runnedNodes = [], runningNodes = [] } = this;
		const { data } = e;
		const { messages } = this.state;
		let msg;
		if (data.indexOf("data^^") === 0) {
			msg = data.substr(6);
		} else if (data.indexOf("startNode^^") === 0) {
			const node = JSON.parse(data.substr(11));
			runningNodes.push(node.nodeId);
			this.changeNodeStatus(node, "running");
		} else if (data.indexOf("finishNode^^") === 0) {
			const node = JSON.parse(data.substr(12));
			runnedNodes.push(node.nodeId);
			this.changeNodeStatus(node, "success");
		} else if (data.indexOf("errorNode^^") === 0) {
			const node = JSON.parse(data.substr(11));
			runnedNodes.push(node.nodeId);
			this.changeNodeStatus(node, "error");
		} else if (data.indexOf("info^^") === 0) {
			msg = data.substr(6);
			const index = msg.indexOf("data:image/png;base64,");
			if (index !== -1) {
				messages.push({
					type: "img",
					src: msg.substr(index)
				});
			} else if (msg.indexOf("</a>") !== -1) {
				messages.push({
					type: "link",
					msg
				});
			} else {
				messages.push(msg);
			}
		} else if (data.indexOf("error^^") === 0) {
			msg = data.substr(7);
			messages.push({
				type: "error",
				msg
			});
		} else if (data.indexOf("warn^^") === 0) {
			msg = data.substr(6);
			messages.push({
				type: "warn",
				msg
			});
		} else if (data.indexOf("testCode^^") === 0) {
			msg = data.substr(10);
			this.props.dispatch({
				type: "jobEdit/changeState",
				payload: {
					testCode: msg
				}
			});
			messages.push({
				type: "testCode",
				msg
			});
		} else {
			msg = data;
			messages.push(msg);
		}

		this.setState(
			{
				messages: [...messages]
			},
			() => {
				this.messageRef.scroll(0, this.messageRef.scrollHeight);
			}
		);
	};

	dragStart = e => {
		this.setState({
			currentY: e.clientY
		});
		window.document.addEventListener("mousemove", this.dragMove);
		window.document.addEventListener("mouseup", this.dragEnd);
	};

	dragMove = e => {
		const { clientY } = e;
		this.height += this.state.currentY - clientY;
		this.setState({
			currentY: clientY,
			height: this.height
		});
	};

	clearNodeStatus = id => {
		const {
			editor: {
				graph: { node, line }
			}
		} = this.props;
		node.nodes[id].fromLines.forEach(lineId => {
			line.lines[lineId].removeClass("success error running");
		});
		node.nodes[id].shape.removeClass("success error running");
	};

	// 更新节点状态
	changeNodeStatus = (nodeData, status) => {
		const {
			editor: {
				schema: { data },
				graph: { node, line }
			}
		} = this.props;
		const id = nodeData.nodeId;
		data.nodesMap[id].exSql = nodeData.exSql;
		this.clearNodeStatus(id);
		if (status === "success") {
			if (!node.nodes[id].shape.successIcon) {
				const obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
				obj.innerHTML =
					'<span xmlns="http://www.w3.org/1999/xhtml" class="iconfont etl-success" style="font-size:24px"></span>';
				const icon = Snap(obj);
				icon.attr({
					width: 26,
					height: 30,
					x: 150,
					y: -2
				});
				node.nodes[id].shape.add(icon);
				node.nodes[id].shape.successIcon = icon;
			}
			node.nodes[id].fromLines.forEach(lineId => {
				line.lines[lineId].addClass("success");
			});
			node.nodes[id].shape.addClass("success");
		} else if (status === "error") {
			if (!node.nodes[id].shape.errorIcon) {
				const obj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
				obj.innerHTML =
					'<span xmlns="http://www.w3.org/1999/xhtml" class="iconfont etl-baocuo" style="font-size:24px"></span>';
				const icon = Snap(obj);
				icon.attr({
					width: 26,
					height: 30,
					x: 150,
					y: -2
				});
				node.nodes[id].shape.add(icon);
				node.nodes[id].shape.errorIcon = icon;
			}
			node.nodes[id].fromLines.forEach(lineId => {
				line.lines[lineId].addClass("error");
			});
			node.nodes[id].shape.addClass("error");
		} else if (status === "running") {
			node.nodes[id].fromLines.forEach(lineId => {
				line.lines[lineId].addClass("running");
				this.updateRunningLine(line.lines[lineId]);
			});
			node.nodes[id].shape.addClass("running");
		}
	};

	updateRunningLine(line) {
		let length = line.shape.label.getTotalLength();
		if (!line.hasClass("running")) {
			this.props.editor.graph.line.updateLine(line.data.uuid);
			return;
		}
		Snap.animate(
			0,
			length,
			val => {
				const coord = line.shape.label.getPointAtLength(val);
				const matrix = new window.Snap.Matrix();
				matrix.translate(coord.x, coord.y);
				matrix.rotate(coord.alpha + line.arrow.angle + 90, 0, 0);
				line.arrow.attr({
					transform: matrix.toTransformString()
				});
			},
			length * 30,
			() => {
				this.updateRunningLine(line);
			}
		);
	}

	dragEnd = e => {
		this.setState({
			currentY: null
		});
		window.document.removeEventListener("mousemove", this.dragMove);
		window.document.removeEventListener("mouseup", this.dragEnd);
	};

	active = () => {
		if (this.state.status === "show") {
			this.setState({
				height: 0,
				status: "hide"
			});
		} else {
			this.setState({
				height: this.height,
				status: "show"
			});
		}
	};

	render() {
		const { status, height, currentY, messages } = this.state;
		return (
			<div
				className="job-console"
				style={{
					transition: currentY ? "none" : "height 300ms",
					height: height
				}}
			>
				<div
					onMouseDown={this.dragStart}
					style={{
						cursor: "n-resize",
						position: "absolute",
						top: 0,
						width: "100%",
						height: 10
					}}
				/>
				<div className="job-console-title"> 日志 </div>

				<div
					className="job-console-messages"
					ref={ref => {
						this.messageRef = ref;
					}}
				>
					{messages.map(message => {
						let dom;
						switch (message.type) {
							case "img":
								dom = <img className="image" src={message.src} />;
								break;
							case "link":
								dom = (
									<p
										className="link"
										dangerouslySetInnerHTML={{ __html: message.msg }}
									/>
								);
								break;
							case "error":
								dom = <p className="error">{message.msg}</p>;
								break;
							case "warn":
								dom = <p className="warn">{message.msg}</p>;
								break;
							case "testCode":
								dom = <p className="test-code">测试码:{message.msg}</p>;
								break;
							default:
								dom = <p className="info">{message}</p>;
								break;
						}
						return dom;
					})}
				</div>
				<div
					style={{
						top: status === "show" ? 0 : -14
					}}
					onClick={this.active}
					className="job-console-handle"
				>
					<Icon rotate={status === "show" ? 0 : 180} type="down" />
				</div>
			</div>
		);
	}
}
export default Console;
