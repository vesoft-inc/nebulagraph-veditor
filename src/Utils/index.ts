import { VEditorLine } from '../Model/Schema';

export { SVGHelper } from "./svg";
export * as dom from "./dom";
export * as Vector2 from "./vector";
export * from './types'
export { default as Event } from "./Event";
export { default as BezierLine } from "./BezierLine";
export { default as Path } from "./path";

// makeLineSort by line's direction & rank to make the same direction be close
export function makeLineSort(links:VEditorLine[]) {
  // update link sort
  const sourceMap = {};
  links.forEach((link) => {
    const sourceId = link.from ;
    const targetId = link.to ;
    const sourceCommonId = `${sourceId}=>${targetId}`;
    const targetCommonId = `${targetId}=>${sourceId}`;
    const linkArr = sourceMap[sourceCommonId] || sourceMap[targetCommonId];
    if (!linkArr) {
      sourceMap[sourceCommonId] = [link];
    } else if (sourceMap[sourceCommonId]) {
      linkArr.unshift(link);
    } else if (sourceMap[targetCommonId]) {
      linkArr.push(link);
    }
  });
  // update link's graphIndex
  // 0 = only one line
  // if(source!==target)
  // -  unseem direction line
  // +  seem direction line
  Object.keys(sourceMap).forEach((key) => {
    if (sourceMap[key].length > 1) {
      const source = sourceMap[key][0].from;
      let status = true;
      let number = 1;
      while (sourceMap[key].length) {
        const link = status ? sourceMap[key].pop() : sourceMap[key].shift();
        link.graphIndex = number;
        // check direction
        if (link.from !== source) {
          link.graphIndex *= -1;
        }
        number++;
        status = !status;
      }
    } else {
      const link = sourceMap[key][0];
      if (link.from === link.to) {
        link.graphIndex = 1;
      } else {
        link.graphIndex = 0;
      }
    }
  });
}
