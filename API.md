# VEditor

## paper

snap.svg 画布,

## destroy()

## repaint()

## clearGraph()

## Schema

### history

历史记录类

#### push(data)

历史记录堆栈中加入新的历史记录数据

#### replace(index,data)

替换指定堆栈的数据

### setData(data)

设置编辑器数据（替换当前数据）

### undo()

### redo()

### getData()

### renderData(data)

### setInitData(data)

设置编辑器初始数据

### data

存储当前编辑器的临时数据，以 map 方式存储的 node.data 数据

#### nodesMap

#### linesMap

## controller

控制器，控制缩放和平移操作

### scaleRatio

### disableWheel()

禁用缩放

### disablePan()

禁用移动

## Graph

### node

#### []nodes

生成的 svg 节点实例

##### {}node

snap.svg element 实例，挂载有部分其他数据

###### data

存储的节点数据，包含坐标等

####### uuid

自动生成的 uui

###### []fromLines

连接到该节点的线 ID 数组

###### []toLines

该节点发出的线节点 ID 数组

#### registeNode(type,data,extend-"default")

注册节点,默认继承 default 节点
data 实例
"newTypeNode",{
linkPoints: [{ x: 0.5, y: 0 }, { x: 0.5, y: 1 }],
render: (data, snapPaper) => {
const node = snapPaper.rect(0, 0, 180, 32);
const text = snapPaper.text(40, 21, data.name);
const icon = snapPaper.image(data.iconPath, 5, 4, 24, 24);
node.attr({
class: "icon-node",
fill: "#EAEEFA",
stroke: "#CCD9FD",
rx: 17,
ry: 17
});
return snapPaper.group(node, text, icon);
}
}

#### shapes

存储各种注册的节点类型
默认提供 default,iconNode

#### addNode(data)

添加节点，data 格式为
{
type:"default",//节点类型
x:0,//节点坐标
y:0,
...
}
该 data 会挂载到 node 实例上

#### deleteNode(nodeId)

#### updateNode(data)

更新节点根据最新的数据

#### setActiveNode(node)

#### unActiveNode(node)

#### clear()

### line

#### []lines

##### {}line

###### data

####### uuid

自动生成的 uuid

#### registeLine(data)

注册线，可以参考 default 的配置格式
export default {
/\*\*
_ 渲染线
_/
render(data, allNodesMap, line) {
const { from, to, fromPoint = 0, toPoint = 0 } = data;
const fromNode = allNodesMap[from];
const toNode = allNodesMap[to];
const fromPointNode = fromNode.linkPoints[fromPoint];
const toPointNode = toNode.linkPoints[toPoint];
let fromX = fromPointNode.x;
let fromY = fromPointNode.y;
let toX = toPointNode.x;
let toY = toPointNode.y;
const pathString = this.makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode);
const path = line ? line : this.paper.path();
path.attr({
d: pathString,
strokeDasharray: "10",
fill: "transparent",
stroke: "rgba(178,190,205,0.7)"
});
path.animate(
{
strokeDasharray: "0"
},
300
);
return {
path,
data: {
fromX,
fromY,
toX,
toY
}
};
},

    /**
     * 渲染路径
     */
    makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode) {
    	let edgeX = fromX;
    	let edgeY = fromY;
    	let endX = toX;
    	let endY = toY;
    	if (fromPointNode.data.y === 1) {
    		edgeY += 15;
    	} else if (fromPointNode.data.y === 0) {
    		edgeY -= 15;
    	} else if (fromPointNode.data.x === 0) {
    		edgeX -= 15;
    	} else if (fromPointNode.data.x === 1) {
    		edgeX += 15;
    	}
    	if (toPointNode.data.y === 1) {
    		endY += 15;
    		toY += 5;
    	} else if (toPointNode.data.y === 0) {
    		endY -= 15;
    		toY -= 5;
    	} else if (toPointNode.data.x === 0) {
    		endX -= 15;
    		toX -= 5;
    	} else if (toPointNode.data.x === 1) {
    		endX += 15;
    		toX += 5;
    	}
    	let pathString = `M${fromX} ${fromY} T ${edgeX} ${edgeY}`;
    	let bezierPoint1 = `${edgeX} ${edgeY +
    		(fromPointNode.data.y === 1 ? 1 : -1) * Math.abs((edgeY - endY) / 2)}`;
    	let bezierPoint2 = `${endX} ${endY +
    		(toPointNode.data.y === 1 ? 1 : -1) * Math.abs((edgeY - endY) / 2)}`;
    	let toPointString = `${endX} ${endY} T ${toX} ${toY} `;
    	const path = `${pathString}C${bezierPoint1} ${bezierPoint2} ${toPointString}`;
    	return path;
    },

    /**
     * 渲染箭头
     */
    renderArrow(data, allNodesMap, arrow) {
    	const { to, toPoint = 0 } = data;
    	const toNode = allNodesMap[to];
    	const toPointNode = toNode.linkPoints[toPoint];
    	const toLinkPoint = toNode.linkPointsTypes[toPoint];
    	let angle = 0;
    	if (toLinkPoint.y === 0) {
    		angle = 180;
    	} else if (toLinkPoint.x === 1) {
    		angle = 90;
    	} else if (toLinkPoint.x === 0) {
    		angle = 270;
    	}
    	const toX = toPointNode.x;
    	const toY = toPointNode.y;
    	const pathString = `M${-5} ${10}L${0} ${0}L${5} ${10}Z`;
    	const path = arrow ? arrow : this.paper.path();
    	// 进行角度的中心变换
    	const matrix = new window.Snap.Matrix();
    	matrix.translate(toX, toY);
    	matrix.rotate(angle, 0, 0);
    	path.attr({
    		class: "mm-line-arrow",
    		d: pathString,
    		fill: "rgba(178,190,205,0.7)",
    		transform: matrix.toTransformString()
    	});
    	path.angle = angle;
    	return path;
    },

    /**
     * 检查是否生成新线
     */
    checkNewLine(data) {
    	const { from, to } = data;
    	if (from === to) {
    		return false;
    	}
    	return true;
    }

};

#### shapes

存储各种注册的线类型
默认提供 default

#### addLine(data)

data 格式
{
from:"",
to:"",
fromPoint:"",
toPoint:""
}

#### deleteLine(lineId)

#### updateByNode(node)

更新该 node 关联的线

#### updateLine(lineId)

更新线根据相关的节点位置

#### setActiveLine(line)

#### unActiveLine()

#### clear()

### clearGraph()

### render(data)

渲染数据
