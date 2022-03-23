export default [
	{
		type: "extract",
		name: "数据引入",
		icon: "introduction",
		components: [
			{
				component: "read",
				type: "iconNodeInput",
				iconPath: "./jobTypes/数据引入@2x.png",
				name: "输入",
				help: `支持对节点的形状大小完全自定义`
			}
		]
	},
	{
		type: "load",
		name: "数据存储",
		icon: "storage",
		components: [
			{
				component: "write",
				type: "iconNodeOutput",
				iconPath: "./jobTypes/数据存储@2x.png",
				name: "输出",
				help: `基于Snap.svg可以方便的进行动画操作`
			}
		]
	},
	{
		type: "transform",
		name: "数据转换",
		icon: "change",
		components: [
			{
				component: "select",
				type: "iconNode",
				iconPath: "./jobTypes/数据转换@2x.png",
				name: "过程组件",
				help: `这是一个使用MMEditor的基础例子`
			}
		]
	}
];
