
# Register Shape
You can refer to src/Shape/Nodes, src/Shape/Lines to register your own shape.


## Registe React Node
extend VEditor.Default.Node
```javascript
 
editor.graph.node.registeNode("react-svg-node", {
  linkPoints: [{ x: 0, y: 0.5 }, { x: 1, y: 0.5 }],
  adsorb: [20, 12],
  render: render: (node: InstanceNode) => {
    const radius = 30;
    // popOver
    node.shape = node.shape ? node.shape : document.createElementNS('http://www.w3.org/2000/svg', 'g');
    ReactDOM.render(
      <>
        <circle className="svg-item-output" r={radius + 2} cx={radius} cy={radius} />
        <circle
          className="svg-item"
          r={radius - 1}
          cx={radius}
          cy={radius}
          style={{
            strokeWidth: 2,
            fill: 'white',
            stroke: 'blue',
          }}
        />
      </>,
      node.shape
    );
    return node.shape;
  },
});
// result data
```
