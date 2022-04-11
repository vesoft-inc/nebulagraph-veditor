import { createSVGElement, svgWrapper } from "./dom";
import * as DOMHelper from "./dom";
const SVGHelper = {
  ...DOMHelper,
  rect: (x: number, y:number, w:number, h:number, rx:number=0, ry:number=0) => {
    const svgString = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" ry="${ry}" />`;
    return svgWrapper(svgString) as SVGRectElement;
  },
  text: (x:number,y:number,text:string='') => {
    return svgWrapper(`<text x="${x}" y="${y}">${text}</text>`) as SVGTextElement;
  },
  circle: (cx: number, cy: number, r: number):SVGCircleElement => {
    return svgWrapper(`<circle cx="${cx}" cy="${cy}" r="${r}" />`) as SVGCircleElement;
  },
  image: (src: string, x: number, y: number, w: number, h: number) => {
    return svgWrapper(`<image x="${x}" y="${y}" width="${w}" height="${h}" xlink:href="${src}" />`) as SVGImageElement;
  },
  path: (d: string="") => {
    return svgWrapper(`<path d="${d}" />`) as SVGPathElement;
  },
  group: (...others:SVGElement[]):SVGGElement => {
    const group = createSVGElement("g") as SVGGElement;
    others&&others.forEach(item => {
      group.appendChild(item);
    });
    return group;
  },
 }
export {
  SVGHelper
};