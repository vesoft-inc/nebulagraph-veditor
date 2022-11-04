# Install
```
npm install @vesoft-inc/veditor --save
```

# Usage 

### Step 1: Import VEditor  
```ts
import VEditor from "@vesoft-inc/veditor";

const editor = new VEditor({ 
  dom: document.getElementById("root")
});
```
### Step 2: Set Data

```ts
await editor.schema.setInitData({
  nodes:[
    {
      uuid:0,
      type:"default",// node shape type
      name:"test0",
      x:100,
      y:300
    },
    {
      uuid:1,
      type:"default",// node shape type
      name:"test1",
      x:300,
      y:300
    }
  ],
  lines:[
    {
      from:0,
      to:1,
      fromPoint:1,
      toPoint:0
    }
  ]
})
``` 
### Step 3: Autofit with dagre
```ts
editor.graph.format();
editor.graph.autofit();
```

### Step 4: Get Data
```ts
console.log(editor.schema.getData())
```