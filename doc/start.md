## 开始

MMEditor是一个基于SVG技术实现的轻量级流程编辑器，期望通过简单化的API和广泛可定制可修改的真实dom，实现使用者的快速接入和定制化，对比Canvas方案有以下优缺点

+ 入门简单，使用简易
+ 可定制化程度高
+ 便于接入第三方库使用
+ 依赖程度小
+ 相对canvas和webgl，高密节点的情况性能较差
+ 难以实现复杂的渲染特效(如: 粒子效果)

MMEditor提供npm安装和直接引用的方式进行使用，同时内置了优化的Snap.svg，不再需要单独引入。你可以通过MMEditor.Snap获取Snap类

## 安装

```s
npm i @tntd/mm-editor --save
```
或
```html
<script src="https://unpkg.com/@tntd/mm-editor@${version}/dist/MMEditor.js"></script>
```

## 初始化
```javascript
import MMEditor from '@tntd/mm-editor';
const  editor =  new MMEditor({ dom : document.getElementById("root")})
```

## 设置数据
```js
// ！！注意，为了提高初始化性能，设置数据是异步操作，返回的是一个Promise
await editor.schema.setData({
  nodes:[{
     "type": "iconNode",
     "iconPath":"/images/favicon.png",
     "name": "组件-1",
     "uuid":"0",
      x:0,y:0
  },{
     "type": "iconNode",
     "iconPath":"/images/favicon.png",
     "name": "组件-1",
     "uuid":"1",
      x:100,y:100
  }],
  lines:[{
     "to": "1",
     "toPoint": 0,
     "from": "0",
     "fromPoint": 1
  }]
})
```

## 添加节点
```js
editor.graph.node.addNode({
    uuid:index,// 节点唯一id
    type:"default",// 节点样式类型
    name:"测试"+index++,
    x:window.innerWidth*Math.random(), // 节点坐标
    y:300*Math.random()
})
```

## 添加连接线
```js
editor.graph.line.addLine({
    from:Math.floor(50*Math.random()),// 连接起点节点id
    to:Math.floor(50*Math.random()),// 连接终点节点id
    fromPoint:1,// 起点连接点序号
    toPoint:0 // 终点连接点序号
})
```

## 注册节点
```js
this.editor.graph.node.registeNode(
	"iconNodeInput",// 注册节点名
	{
            // 连接点位置
	    linkPoints: [{ x: 0.5, y: 1 }],
	},
        // 继承的节点
	"iconNode" 

);
```