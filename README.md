# [NebulaGraph veditor](https://vesoft-inc.github.io/nebulagraph-veditor/)

NebulaGraph VEditor is a highly customizable flow chart library, with which you create flow charts, sequence diagrams, workflow, and more.

![](https://user-images.githubusercontent.com/7129229/184819808-13aec715-3056-4e87-a5ee-944a3b4e1703.png)
![](https://user-images.githubusercontent.com/7129229/184819760-615b53b7-d0c3-4e87-8ad3-d76b69db7821.png)
![](https://user-images.githubusercontent.com/7129229/184819660-0f6da546-4d80-4c97-9fa0-2389d4122d0f.png)

# Features
- Typescript: Natively TS support
- Customizable: Support SVG, HTML, CSS, Canvas, React/Vue and more to custome node/line shapes
- Minimap: Birdview of given viewport in the diagram
- Shortcuts Keys: undo, redo, copy, paste, select, zoom, pan and more
- Performant: Async/Await pattern enabled high performance of graph loading
 
# Installation
```bash
npm install @vesoft-inc/veditor
```

# demo
```bash
npm run start
```
+ [Basic Demo](https://vesoft-inc.github.io/nebulagraph-veditor/public/basic.html)
+ [FlowChart Demo](https://vesoft-inc.github.io/nebulagraph-veditor/public/flowChart.html)
+ [React Demo](https://vesoft-inc.github.io/nebulagraph-veditor/public/demo.html)

# Build
```bash
npm run build
# make declaration
npm run makeDts
```

## Quick Start
```typescript
import VEditor from "@vesoft-inc/veditor";

let index = 0;
const editor =  new VEditor({ 
  dom: document.getElementById("root")
});
// add node
function add(){
  editor.graph.node.addNode({
    uuid:index,
    type:"default",// node shape type
    name:"test"+index++,
    x:window.innerWidth*Math.random(),
    y:300*Math.random()
  })
}
for(let x = 0;x<50;x++){
  add();
}
// add line
for(let x = 0;x<10;x++){
  editor.graph.line.addLine({
    from:Math.floor(50*Math.random()),
    to:Math.floor(50*Math.random()),
    fromPoint:1,
    toPoint:0
  })
}
// result
console.log(editor.schema.getData())
```

# Documents
- [Get Started](./start.md)
- [Custom Shape](./custom.md)
- [API](./docs)

# License

Apache 2.0
