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
import { Path } from '../../Utils';
 
export type Direction = "left" | "right" | "top" | "bottom";
/**
 * notice: only for circle node, cause the force line is render by circle-node's radius
 */
const ForceLine: LineRender = { 
  ...DefaultLine,
  endSpace: 12,
  startSpace:3,
  selfLoopRadius: 70,
  curvatrueRatio: 30,
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
    let path = '';
    if (from.nodeId === to.nodeId) { 
      const selfLoopIndex = this.getSelfLoopLineIndex(line);
      const offsetLength = ((selfLoopIndex + 1) * this.selfLoopRadius + this.radius);
      startControlPoint = {
        x: start.x - offsetLength*Math.cos(Math.PI/4) ,
        y: start.y - offsetLength*Math.sin(Math.PI/4),
      }
      endControlPoint = {
        x: end.x + offsetLength*Math.cos(Math.PI/4),
        y: end.y - offsetLength*Math.sin(Math.PI/4),
      }
      path = `M${start.x} ${start.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${end.x} ${end.y}`;
    } else {
      const graph = this.graph as Graph;
      const nodes = graph.node.nodes;
      const startNode = nodes[from.nodeId];
      const endNode = nodes[to.nodeId];
      const angle = Math.atan((to.y - from.y) / (to.x - from.x)) + ((to.x - from.x) < 0 ? Math.PI : 0);
      const startOffsetLength = this.radius + this.startSpace; // start offset length
      const endOffsetLength = this.radius + this.endSpace; // end offset length
      start = {
        x: startNode.data.x + this.radius + startOffsetLength * Math.cos(angle),
        y: startNode.data.y + this.radius + startOffsetLength * Math.sin(angle),
      };
      end = {
        x: endNode.data.x + this.radius - endOffsetLength * Math.cos(angle),
        y: endNode.data.y + this.radius - endOffsetLength * Math.sin(angle),
      };
      const start2endVec = {
        x: end.x - start.x,
        y: end.y - start.y,
      }
      const normal = normalize(start2endVec); 
      const centerNormal = {
        x: -normal.y,
        y: normal.x
      }
      const length = getVectorLength(start2endVec);
      const graphIndex = line.data.graphIndex || 0;
      const direction = graphIndex % 2 === 0;
      const curvature = (direction ? 1 : -1) * (graphIndex > 0 ? 1 : -1) * (Math.ceil(Math.abs(graphIndex) / 2));
      if (curvature === 0) {
        startControlPoint = {
          ...start
        }
        endControlPoint = {
          ...end
        }
      } else {
        startControlPoint = {
          x: (from.x+to.x)*.5 + centerNormal.x * this.curvatrueRatio * curvature ,
          y: (from.y+to.y)*.5 + centerNormal.y * this.curvatrueRatio * curvature ,
        } 
        endControlPoint = startControlPoint;
        const bezierLine = new Path(`M${from.x} ${from.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${to.x} ${to.y}`);
        start = bezierLine.getPointAtLength(startOffsetLength);
        end = bezierLine.getPointAtLength(bezierLine.getTotalLength() - endOffsetLength);
      }
      path = `M${start.x} ${start.y} Q ${startControlPoint.x} ${startControlPoint.y} ${end.x} ${end.y}`;
    }
    line.bezierData = {
      from: start,
      to: end,
      startControlPoint,
      endControlPoint,
    }; 
    return path;
  },

  renderArrow(line: InstanceLine) {
    const { bezierData } = line;
    const { from, to } = bezierData;
    let coord, angle;
    // self loop
    if (line.from.nodeId === line.to.nodeId) {
      const point = line.pathData.getPointAtLength(line.path.getTotalLength() - this.radius - 10);
      angle = point.alpha/180*Math.PI;
      coord = point;
    } else {
      const point = line.pathData.getPointAtLength(line.path.getTotalLength());
      angle = point.alpha/180*Math.PI;
      coord = to;
    }
    const pathString = `M${0} ${5}L${0} ${-5}L${-10} ${0}Z`;
    const path = line.arrow ? line.arrow : SVGHelper.path();
    // 进行角度的中心变换
    const matrix = mat2d.create();
    mat2d.translate(matrix, matrix, [coord.x, coord.y]);
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

  checkNewLine(data: VEditorLine): boolean {
    return true;
  },
};
export default ForceLine;
