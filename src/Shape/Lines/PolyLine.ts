/**
 * @interface PolyLine
 * @implements {DefaultLine}
 */
import { normalize } from '../../Utils/vector';
import { InstanceLine } from "../Line";
import { InstanceNodePoint } from "../Node";
import Line, { LineRender } from "./Line";

const PolyLine: LineRender = {
  ...Line,
  startSpace: 1,
  arcRadius: 5,
  makePath(
    from: InstanceNodePoint,
    to: InstanceNodePoint,
    line: InstanceLine
  ) {
    const start = { x: from.x, y: from.y, };
    const end = { x: to.x, y: to.y, }
    const startSpace = this.startSpace; // 顶部距离node节点的距离
    const endSpace = this.endSpace; // 底部距离node节点的距离
    const startAngle = this.getPointAngle(from);
    const endAngle = this.getPointAngle(to);
    start.x += startSpace * Math.cos(startAngle);
    start.y += startSpace * Math.sin(startAngle);
    end.x += endSpace * Math.cos(endAngle);
    end.y += endSpace * Math.sin(endAngle);
    const disX = end.x - start.x;
    const disY = end.y - start.y;

    const paths: any = [{
      x: start.x + disX * .5 * Math.cos(startAngle) * (disX > 0 ? 1 : -1),
      y: start.y + disY * .5 * Math.sin(startAngle),
      type: "L"
    }, {
      x: end.x + disX * .5 * Math.cos(endAngle) * (disX > 0 ? 1 : -1),
      y: end.y + disY * .5 * Math.sin(endAngle),
      type: "L"
    }];

    if (this.arcRadius !== 0 && (start.x !== end.x && start.y !== end.y)) {
      /**
       *   b-d----a
       *   |
       *   e
       *   |
       *   c
       */
      const a = {
        ...paths[0]
      }
      const b = {
        ...paths[1]
      }
      const c = {
        ...end
      }
      const cb = normalize({
        x: b.x - c.x,
        y: b.y - c.y,
      })
      const ab = normalize({
        x: b.x - a.x,
        y: b.y - a.y,
      })
      const d = {
        x: b.x - ab.x * this.arcRadius,
        y: b.y - ab.y * this.arcRadius,
      }
      const e = {
        x: b.x - cb.x * this.arcRadius,
        y: b.y - cb.y * this.arcRadius,
      }
      // use cross product to determine clockwise or anti-clockwise
      // crossProduct = cb*ab*sin(theta),  theta is the angle between cb and ab
      const crossVal = cb.x * ab.y - cb.y * ab.x;
      const clockwise = crossVal > 0 ? 1 : 0;
      const arcPath = `L${d.x} ${d.y} A${this.arcRadius} ${this.arcRadius} 0 0 ${clockwise} ${e.x} ${e.y} `;
      paths[paths.length - 1] = {
        path: arcPath,
      }
    }
    let path = `M${start.x} ${start.y} `;
    paths.map((item) => {
      if (item.path) {
        path += item.path;
      } else {
        path += `L${item.x} ${item.y} `;
      }
    });
    path += `L${end.x} ${end.y}`;
    return path;
  }
};
export default PolyLine;
