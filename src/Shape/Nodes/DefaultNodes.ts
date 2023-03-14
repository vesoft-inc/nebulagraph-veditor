import { AnyMap } from "../../Utils/types";
import { setAttrs } from "../../Utils/dom";
import { SVGHelper } from "../../Utils/svg";
import { InstanceNode, InstanceNodePoint } from "../Node";

export interface NodeRender extends AnyMap {
  adsorb?: [number, number]; //磁吸的范围
  linkPoints?: { x: number; y: number, isPixel?: boolean }[];
  /**
   * 默认渲染函数 data,snapPaper
   */
  render?: <T>(data: InstanceNode) => SVGGElement;

  /**
   * 渲染连接点 (node, linkPoint, circle)
   */
  renderLinkPoint?: (
    node: InstanceNode,
    point: InstanceNodePoint
  ) => InstanceNodePoint;

  destroy?: (node: InstanceNode) => void;
}

const DefaultNode: NodeRender = {
  adsorb: [20, 20], //磁吸的范围
  linkPoints: [
    { x: 0.5, y: 0 },
    { x: 0.5, y: 1 },
  ],
  /**
   * 默认渲染函数 data,snapPaper
   */
  render: (instanceNode: InstanceNode) => {
    let node, text;
    const { data } = instanceNode;
    // remove the old shape and create a new one every time
    if (instanceNode.shape) {
      instanceNode.shape.remove();
    } 
    node = SVGHelper.rect(0, 0, 100, 40);
    text = SVGHelper.text(20, 25, data.name);
    setAttrs(node, {
      fill: "#fff",
      stroke: "#000",
      rx: 5,
      ry: 5,
    });
    return SVGHelper.group(node, text);
  },

  /**
   * 渲染连接点 (node, linkPoint, circle)
   */
  renderLinkPoint: (node: InstanceNode, instance: InstanceNodePoint) => {
    const { data: linkPoint } = instance;
    if (!instance.dom) {
      instance.dom = SVGHelper.circle(0, 0, 5);
    }
    const circle = instance.dom;
    const box = node.shapeBBox || node.shape.getBBox();
    node.shapeBBox = box;

    const x = (linkPoint.isPixel ? linkPoint.x : linkPoint.x * box.width);
    const y = (linkPoint.isPixel ? linkPoint.y : linkPoint.y * box.height);
    setAttrs(circle, {
      cx: x,
      cy: y,
      fill: "#fff",
      stroke: "#08c",
      class: "ve-link-points",
    });

    if (!instance.data) {
      instance.data = linkPoint;
    }
    instance.x = x + node.data.x;
    instance.y = y + node.data.y;
    instance.local = {
      x: linkPoint.isPixel ? linkPoint.x : (linkPoint.x * box.width),
      y: linkPoint.isPixel ? linkPoint.y : (linkPoint.y * box.height),
    };
    return instance;
  },
  destroy: (node: InstanceNode) => {
    node.shape?.remove();
  },
};
export default DefaultNode;
