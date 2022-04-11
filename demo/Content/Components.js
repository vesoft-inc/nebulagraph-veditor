export default [
	{
		type: "extract",
		name: "Input",
		icon: "introduction",
		components: [
			{
				component: "read",
				type: "iconNodeInput",
				iconPath: "./jobTypes/数据引入@2x.png",
				name: "Input",
				help: `node&link free custom`,
			}
		]
	},
	{
		type: "load",
		name: "Output",
		icon: "storage",
		components: [
			{
				component: "write",
				type: "iconNodeOutput",
				iconPath: "./jobTypes/数据存储@2x.png",
				name: "Output",
				help: `ease for svg animation`,
			}
		]
	},
	{
		type: "transform",
		name: "Filter",
		icon: "change",
		components: [
			{
				component: "select",
				type: "iconNode",
				iconPath: "./jobTypes/数据转换@2x.png",
				name: "Filter",
				help: `base demo for ETL scene`
			}
		]
	}
];
