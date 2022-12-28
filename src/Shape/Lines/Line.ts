import { animate, setAttrs } from "../../Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import Graph from "../Graph";
import { InstanceLine } from "../Line";
import { InstanceNodePoint } from "../Node";
import BezierLine from "../../Utils/BezierLine";
import { mat2d } from "gl-matrix";
import { Path } from "../../Utils";
import { AnyMap } from "../../Utils/types";
import { VEditorLine } from "../../Model/Schema";
import VEditor from "../../VEditor";

export interface LineRender extends AnyMap {
  graph?: Graph;
  adsorb?: [number, number]; //磁吸的范围
  render?: (instanceLine: InstanceLine) => SVGElement;
  renderArrow?: (instanceLine?: InstanceLine) => SVGElement;
  renderArrow2?: (instanceLine?: InstanceLine) => SVGElement;
  renderLabel?: (instanceLine?: InstanceLine) => SVGElement;
  checkNewLine?: (lineData: VEditorLine, editor: VEditor) => boolean;
}
export interface LabelInstance {
  text: SVGTextElement;
  textRect: SVGRectElement;
  textBBox?: DOMRect;
  oldText?: string;
  labelGroup: SVGGElement;
}

export type Direction = "left" | "right" | "top" | "bottom";
const DefaultLine: LineRender = {
  arcRatio: 4,
  selfLoopRatio: 4,
  selfLoopRadius: 30,
  adsorb: [20, 20],
  startSpace: 8,
  endSpace: 8,
  render(line: InstanceLine) {
    const { from, to, data } = line;
    const pathString = this.makePath(from, to, line);
    const shape = line.shape ? line.shape : SVGHelper.group();
    line.shape = shape;
    const path = line.path ? line.path : (line.path = SVGHelper.path());
    const shadowPath = line.shadowPath
      ? line.shadowPath
      : (line.shadowPath = SVGHelper.path());
    setAttrs(path, {
      d: pathString,
      class: "ve-line-path",
      "stroke-dasharray": "10",
      fill: "none",
      "stroke-width": 2,
      "pointer-events": "visiblepainted",
      stroke: "rgba(178,190,205,0.7)",
      ...((data.style as AnyMap) || {}),
    });
    setAttrs(shadowPath, {
      d: pathString,
      stroke: "transparent",
      fill: "none",
      "pointer-events": "visiblestroke",
    });
    line.pathData = new Path(pathString);
    shadowPath.setAttribute("class", "ve-shdow-path");
    animate(
      10,
      0,
      (val) =>
        setAttrs(path, {
          "stroke-dasharray": `${val}`,
        }),
      300
    );
    shape.appendChild(shadowPath);
    shape.appendChild(path);
    this.renderLabel && this.renderLabel(line);
    return shape;
  },

  makePath(
    from: InstanceNodePoint,
    to: InstanceNodePoint,
    line: InstanceLine
  ) {
    const start = { x: from.x, y: from.y, };
    const end = { x: to.x, y: to.y, }
    let startControlPoint = { x: start.x, y: start.y };
    let endControlPoint = { x: end.x, y: end.y };
    const startSpace = this.startSpace; // 顶部距离node节点的距离
    const endSpace = this.endSpace; // 底部距离node节点的距离
    const startAngle = this.getPointAngle(from);
    const endAngle = this.getPointAngle(to);
    start.x += startSpace * Math.cos(startAngle);
    start.y += startSpace * Math.sin(startAngle);
    end.x += endSpace * Math.cos(endAngle);
    end.y += endSpace * Math.sin(endAngle);
    let path = '';
    const pathString = `M${from.x} ${from.y} T ${start.x} ${start.y}`;
    const toPointString = `${end.x} ${end.y} T ${to.x} ${to.y} `;
    if (from.nodeId === to.nodeId) {
      const selfLoopIndex = this.getSelfLoopLineIndex(line);
      const angle = (from.index === to.index) ? 0 : (Math.PI / (this.selfLoopRadius / 10 + selfLoopIndex));
      const dis = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
      let radius = (dis / 2) / Math.sin(angle / 2);
      if (!radius) {// when from point and to point are the same
        radius = (selfLoopIndex / this.selfLoopRatio + 1) * this.selfLoopRadius
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
      const offsetLength = Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)) / this.arcRatio; // 连接点的距离的一半作为控制点的长度
      startControlPoint.x += Math.cos(startAngle) * offsetLength;
      startControlPoint.y += Math.sin(startAngle) * offsetLength; // svg坐标系倒置需要给y坐标加负号
      endControlPoint.x += Math.cos(endAngle) * offsetLength;
      endControlPoint.y += Math.sin(endAngle) * offsetLength; // svg坐标系倒置需要给y坐标加负号
      path = `${pathString}C${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${toPointString}`;
    }
    line.bezierData = {
      from: start,
      to: end,
      startControlPoint,
      endControlPoint,
    };
    line.data.fromX = from.x;
    line.data.fromY = from.y;
    line.data.toX = to.x;
    line.data.toY = to.y;
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

  // get Angle for point in svg coordinate system 
  getPointAngle(pointNode: InstanceNodePoint): number {
    const graph = this.graph as Graph;
    const node = graph.node.nodes[pointNode.nodeId];
    const p = [pointNode.data.x, pointNode.data.y];
    let c = [0.5, 0.5];
    if (pointNode.data.isPixel) {
      c = [node.shapeBBox.width / 2, node.shapeBBox.height / 2];
    }
    const a = [p[0] - c[0], p[1] - c[1]];
    let angle = Math.atan(a[1] / a[0]) + (a[0] < 0 ? Math.PI : 0);
    angle %= Math.PI * 2;

    if (angle > -Math.PI / 4 && angle < Math.PI / 4) {
      return 0;
    } else if (angle > Math.PI / 4 && angle < Math.PI * 3 / 4) {
      return Math.PI / 2;
    } else if (angle > Math.PI * 5 / 4 && angle < Math.PI * 7 / 4 || (angle < -Math.PI / 4)) {
      return -Math.PI / 2;
    } else {
      return Math.PI;
    }
  },

  renderArrow(line: InstanceLine) {
    const { to } = line;
    const angle = this.getPointAngle(to);
    const pathString = `M${0} ${0}L${10} ${5}L${10} ${-5}Z`;
    const path = line.arrow ? line.arrow : SVGHelper.path();
    // 进行角度的中心变换
    const matrix = mat2d.create();
    mat2d.translate(matrix, matrix, [to.x, to.y]);
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
      from, to,
      bezierData: { startControlPoint, endControlPoint },
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
    const { from, to } = data;
    if (from === to) {
      return false;
    }
    return true;
  },
};
export default DefaultLine;
