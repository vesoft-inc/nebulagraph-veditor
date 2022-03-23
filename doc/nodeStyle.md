## 增加自定义节点

通过registeNode函数可以进行注册新节点,并且选择需要继承的节点,在渲染函数里，你可以使用snap工具进行操作，或者使用原生svg进行渲染，但最终必须返回snap包裹后的对象,如
```js
const svgDom = document.createElementNS("http://www.w3.org/2000/svg","text") 
```

```js
// 注册一个叫demoNode的节点,并继承default
registeNode("demoNdoe",{
  linkPoints: [{ x: 0.5, y: 0 }, { x: 0.5, y: 1 }],
  render:(data,snapPaper)=>{
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
},"defualt")
```