MM-Editor中大部分动画都是采用CSS动画实现，你可以进行样式复写，来实现或者禁用你需要的动画。

大部分的动画都可以合理利用CSS3动画进行实现，少部分动画可以直接控制MM-ediotr的dom节点进行实现，并通过线重新渲染还原到初始状态。

如实现箭头移动动画

```js
//更新线状态
 updateRunningLine(line) {
        let length = line.shape.getTotalLength();
        if (!line.hasClass("running")) {
            this.props.editor.graph.line.updateLine(line.data.uuid);
            return;
        }
        Snap.animate(
            0,
            length,
            val => {
                const coord = line.shape.getPointAtLength(val);
                const matrix = new window.Snap.Matrix();
                matrix.translate(coord.x, coord.y);
                matrix.rotate(coord.alpha + line.arrow.angle + 90, 0, 0);
                line.arrow.attr({
                    transform: matrix.toTransformString()
                });
            },
            length * 30,
            () => {
               this.updateRunningLine(line);
            }
        );
    }
```