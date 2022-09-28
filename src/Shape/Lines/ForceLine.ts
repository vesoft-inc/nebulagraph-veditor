import { animate, setAttrs } from "../../Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import Graph from "../Graph";
import { InstanceLine } from "../Line";
import { InstanceNodePoint } from "../Node";
import BezierLine from "../../Utils/BezierLine";
import { mat2d } from "gl-matrix";
import { AnyMap } from "../../Utils/types";
import { VEditorLine } from "../../Model/Schema";
import DefaultLine, { LineRender } from './Line';
import { getVectorLength, normalize } from '../../Utils/vector';
 
export type Direction = "left" | "right" | "top" | "bottom";
const ForceLine: LineRender = { 
  ...DefaultLine,
  radius: 30,// the radius of the node; notice: ForceLine only support circle node
  makePath(
    from: InstanceNodePoint,
    to: InstanceNodePoint,
    line: InstanceLine
  ) {
    let start = { x: from.x, y: from.y, };
    let end = { x: to.x, y: to.y, }
    let startControlPoint = { x: start.x, y: start.y };
    let endControlPoint = { x: end.x, y: end.y };
    const startSpace = this.startSpace;
    const endSpace = this.endSpace; 
    let path = '';
    if (from.nodeId === to.nodeId) {
      const startAngle = this.getPointAngle(from);
      const endAngle = this.getPointAngle(to);
      start.x += startSpace * Math.cos(startAngle);
      start.y += startSpace * Math.sin(startAngle);
      end.x += endSpace * Math.cos(endAngle);
      end.y += endSpace * Math.sin(endAngle);
      const selfLoopIndex = this.getSelfLoopLineIndex(line);
      const angle = (from.index === to.index) ? 0 : (Math.PI / (this.selfLoopRadius / 10 + selfLoopIndex));
      const dis = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
      let radius = (dis / 2) / Math.sin(angle / 2);
      if (!radius) {// when from point and to point are the same
        radius = (selfLoopIndex / this.arcRatio + 1) * this.selfLoopRadius
        const topPos = {
          x: start.x + radius * 2 * Math.cos(startAngle),
          y: start.y + radius * 2 * Math.sin(startAngle),
        }
        path = `M${from.x} ${from.y} L${start.x} ${start.y} M${start.x} ${start.y} A ${radius} ${radius} 0 1 0 ${topPos.x} ${topPos.y}`;
        path += ` M${topPos.x} ${topPos.y} A ${radius} ${radius} 0 1 0 ${end.x} ${end.y} L${to.x} ${to.y}`;
      } else {
        path = `M${from.x} ${from.y} A ${radius} ${radius} 0 1 0 ${end.x} ${end.y} L${to.x} ${to.y}`;
      }
    } else {
      const graph = this.graph as Graph;
      const nodes = graph.node.nodes
      const angle = Math.atan((to.y - from.y) / (to.x - from.x)) + ((to.x - from.x) < 0 ? Math.PI : 0);
      const startOffsetLength = this.radius + this.startSpace; // start offset length
      const endOffsetLength = this.radius + this.endSpace; // end offset length
      const startNode = nodes[from.nodeId];
      const endNode = nodes[to.nodeId];
      start = {
        x: startNode.data.x + startNode.shapeBBox.width/2 + startOffsetLength * Math.cos(angle),
        y: startNode.data.y + startNode.shapeBBox.height/2 + startOffsetLength * Math.sin(angle),
      };
      end = {
        x: endNode.data.x + endNode.shapeBBox.width / 2 - endOffsetLength * Math.cos(angle),
        y: endNode.data.y + endNode.shapeBBox.height / 2 - endOffsetLength * Math.sin(angle),
      };
      const start2endVec = {
        x: end.x - start.x,
        y: end.y - start.y,
      }
      const normal = normalize(start2endVec);
      const centerPos = {
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2,
      };
      const centerNormal = {
        x: -normal.y,
        y: normal.x
      }
      const length = getVectorLength(start2endVec);
      const graphIndex = line.data.graphIndex as number;
      startControlPoint = {
        x: start.x + centerNormal.x * length * graphIndex * this.arcRatio / 8,
        y: start.y + centerNormal.y * length * graphIndex * this.arcRatio / 8,
      }
      endControlPoint = {
        x: end.x + centerNormal.x * length * graphIndex *this.arcRatio / 8,
        y: end.y + centerNormal.y * length * graphIndex *this.arcRatio / 8,
      }
    }
    line.bezierData = {
      from: start,
      to: end,
      startControlPoint,
      endControlPoint,
    }; 
    return path;
  },
 
  getSelfLoopLineIndex(line: InstanceLine) {
    const { from, to } = line;
    const graph = this.graph as Graph;
    let index = 0;
    for (const lineId in graph.line.lines) {
      const each = graph.line.lines[lineId].data;
      if (each.from === each.to && each.from === from.nodeId && each.fromPoint === from.index && each.toPoint === to.index) {
        if (lineId === line.data.uuid) {
          break;
        }
        index++;
      }
    }
    return index;
  }, 

  renderArrow(line: InstanceLine) {
    const { bezierData ,from,to} = line;
    const angle = Math.atan((to.y - from.y) / (to.x - from.x)) + ((to.x - from.x) < 0 ? Math.PI : 0);
    const pathString = `M${0} ${0}L${10} ${5}L${10} ${-5}Z`;
    const path = line.arrow ? line.arrow : SVGHelper.path();
    // 进行角度的中心变换
    const matrix = mat2d.create();
    mat2d.translate(matrix, matrix, [bezierData.to.x, bezierData.to.y]);
    mat2d.rotate(matrix, matrix, angle);
    setAttrs(path, {
      class: "ve-line-arrow",
      d: pathString,
      fill: "rgba(178,190,205,0.7)",
      transform: `matrix(${matrix.join(",")})`,
      ...(line.data.arrowStyle as AnyMap),
    });
    return path;
  },

  /** 是否渲染文字
   */
  renderLabel(line: InstanceLine) {
    let {
      bezierData: { from,to,startControlPoint, endControlPoint },
      data: { label, labelCfg = {} },
    } = line;
    if (!label) {
      if (line.label) {
        line.label.labelGroup.remove();
        line.label = null;
      }
      return null;
    }
    const totalLabel = label;
    // label 样式
    const {
      refX = 0,
      refY = 0,
      autoRotate,
      showNum = 20,
      style = {
        fill: "#333",
        stroke: "#fff",
        fontSize: "12px",
      },
    } = labelCfg || {};
    const bezier = new BezierLine();
    bezier.setControl(from, startControlPoint, endControlPoint, to);
    const point = bezier.getPoint(0.5);
    let { x: xPoint, y: yPoint } = point || {};
    if (label && label.length > showNum && showNum) {
      label = label.slice(0, showNum) + "...";
    }
    if (!line.label) {
      line.label = {
        textRect: SVGHelper.rect(0, 0, 10, 10),
        text: SVGHelper.text(0, 0, label),
        labelGroup: null,
      };
      line.label.labelGroup = SVGHelper.group(
        line.label.textRect,
        line.label.text,
      );
    }
    line.shape.appendChild(line.label.labelGroup);
    const { text, textRect, textBBox, oldText, labelGroup } = line.label;
    const x = xPoint + (refX || 0);
    const y = yPoint + (refY || 0);
    text.textContent = label;
    setAttrs(text, {
      text: label || "",
      fill: style.fill,
      fontSize: style.fontSize,
      textAnchor: "middle",
      dominantBaseline: "middle",
      x,
      y,
    });
    if (!textBBox || oldText !== label) {
      line.oldText = label;
      line.label.textBBox = text.getBBox();
    }
    // 性能优化
    const { width, height } = line.label.textBBox;
    setAttrs(line.label.textRect, {
      fill: style.stroke,
      width,
      height,
      stroke: "transparent",
      x: x - width * 0.5,
      y: y - height * 0.5,
    });
    setAttrs(labelGroup, {
      class: "ve-line-label",
      "data-label": encodeURI(totalLabel),
    });
    if (autoRotate) {
      // 文字顺序方向
      let angle = SVGHelper.getAngle(from, to);
      if (from.x < to.x || from.x === to.x) {
        angle += 180;
      }
      setAttrs(labelGroup, {
        transform: `rotate(${angle},${xPoint + (refX || 0)},${yPoint + (refY || 0)
          })`,
      });
    }
    return labelGroup;
  },

  checkNewLine(data: VEditorLine): boolean {
    return true;
  },
};
export default ForceLine;
