## Events

### VEditor

```ts
// when any data change , such as history change, node change, line change
editor.on("change")
// when editor.schema.format() called
editor.on("format",({data:VEditorData}))
// when editor schema data loaded
editor.on("load",(data:VEditorData))
// history redo
editor.on("redo")
// history undo
editor.on("undo")
// on make uuid,you can change it
editor.on("node:makeuuid",data:VEditorNode)

// controller changed event
// autofit
editor.on("autofit")
// panning
editor.on("panning",({event?:MouseEvent}))
// panEnd
editor.on("panEnd",({event:MouseEvent}))
// zoomed
editor.on("zoom",({scale?:number}))
```

### VEditor.graph
```ts
// on graph paper clicked
graph.on("paper:click",(e:MouseEvent))
// on something deleted
graph.on("delete",({event:MouseEvent,deleteKeys:string[]}))
// on node copyed
graph.on("copy",({event:MouseEvent}))
// on node pasted
graph.on("paste",({event:MouseEvent}))
// on graph before render,usally called before setData
graph.on("beforeRender")
// on graph render data to svg
graph.on("render")
// on graph update svg by now data
graph.on("update")

// lines event
// on line beforeadd
graph.on("line:beforeadd",({data:VEditorLine}))
// on line added
graph.on("line:add",({data:InstanceLine}))
// on line remove
graph.on("line:remove",({
  line:InstanceLine,
  uuid:string|number,
  before: VEditorLine,
  byNode:boolean
}))
// on line change
graph.on("line:change",({
  line:InstanceLine,
  before: VEditorLine,
}))
// on line drag
graph.on("line:drag")
graph.on("line:dragging",({line:InstanceLine}))
graph.on("line:drop",({line:InstanceLine})) 
// on line mouseenter
graph.on("line:mouseenter",({line:InstanceLine,event:MouseEvent}))
// on line mouseleave
graph.on("line:mouseleave",({line:InstanceLine,event:MouseEvent}))
// on line click
graph.on("line:click",({line:InstanceLine,event:MouseEvent}))
// on line dragend
graph.on("line:dragend",{
  fromNode:InstanceNode,
  toNodePoint:InstanceNodePoint,
  event:MouseEvent
})

// node event
// on node change
graph.on("node:change",({node:InstanceNode}))
// on node remove
graph.on("node:remove",({node:InstanceNode,uuid:string|number}))
// on node move
graph.on("node:move",({node:InstanceNode}))
// on node start move
graph.on("node:startmove",({node:InstanceNode}))
// on node end move
graph.on("node:endmove",({node:InstanceNode}))
// on node click
graph.on("node:click",({node:InstanceNode,event:MouseEvent}))
// on node mouseenter
graph.on("node:mouseenter",({node:InstanceNode,event:MouseEvent}))
// on node mouseleave
graph.on("node:mouseleave",({node:InstanceNode,event:MouseEvent}))
// on node unactive
graph.on("node:unactive",({node:InstanceNode}))
// on nodes active
graph.on("node:active",({nodes:InstanceNode[]}))
```