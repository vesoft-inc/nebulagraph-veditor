 你可以选择继承或自定义新的线样式，但需要实现DefaultLine接口,并通过Line.registeLine 实现继承

```js
registeNode("demoLine",{
    // 更改线路轨迹
  makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode,fromNode,toNode){
     let path = `M${fromX} ${fromY} `;
     path+=`L${toX} ${toY}`;
     return path;
  }
},"defualt")
```