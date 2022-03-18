/**
 * @interface PolyLine
 * @implements {DefaultLine}
 */
import Line from './Line'

 const PolyLine = {
     ...Line, 
     gapDistance:30,
     rankDir:"tb",
     /**
      * @param  {number} fromX
      * @param  {number} fromY
      * @param  {number} toX
      * @param  {number} toY
      * @param  {object} fromPointNode
      * @param  {object} toPointNode
      */
     makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode,fromNode,toNode) {
         // 折线
         const fromBBox = fromNode.getBBox();
         const toBBox = toNode.getBBox();
         const fromCenter = {x:fromBBox.x + fromBBox.width/2,y:fromBBox.y+fromBBox.height/2};
         const toCenter = {x:toBBox.x + toBBox.width/2,y:toBBox.y+toBBox.height/2};
         // 找到点的方向
         const fromDirection = this.getDirection({x:fromX,y:fromY},fromBBox,fromCenter);
         const endDiretion = this.getDirection({x:toX,toY},toBBox,toCenter);
         // 对应方向的坐标要加间隔值
         const startPos = {x:fromX,y:fromY};
         const endPos = {x:toX,y:toY};
         this.makeGap(fromDirection,startPos);
         this.makeGap(endDiretion,endPos);
         const paths = [startPos];
         let centerY,centerX;
         const directions = ['bottom','top','left','right'];
         const fromIndex = directions.indexOf(fromDirection)>1;
         const endIndex = directions.indexOf(endDiretion)>1;
         
         if(fromIndex===endIndex){
            centerY = (startPos.y + endPos.y)/2;
            paths.push({
                x:startPos.x,
                y:centerY
            },{
                x:endPos.x,
                y:centerY
            })
         }else {
            centerX = (startPos.x + endPos.x)/2;
            paths.push({
                x:centerX,
                y:startPos.y
            },{
                x:centerX,
                y:endPos.y
            })
         }
         paths.push(endPos)
         let path = `M${fromX} ${fromY} `;
         paths.map(item=>{
             path += `L${item.x} ${item.y} `;
         });
         path+=`L${toX} ${toY}`;
         return path;
     },

     makeGap(direction,pos){
        if(direction==="left"){
            pos.x -= this.gapDistance
        }else if(direction==='right'){
            pos.x += this.gapDistance
        }
        if(direction==="top"){
           pos.y -= this.gapDistance
        }else if(direction==='bottom'){
           pos.y += this.gapDistance
        }
         return pos
     },

     getDirection({x,y},bbox,center){
        const leftTop = {x:bbox.x,y:bbox.y};
        const leftBottom = {x:bbox.x ,y:bbox.y+bbox.height};
        // 左上到右下的直线表达式
        const leftTopC = function(x,y){
            const k = (leftTop.y - center.y)/(leftTop.x - center.x);
            const c = center.y -center.x*k;
            if(x||x===0){
                return k*x + c
            }else{
                if(k === 0){
                    return x;
                }
                return (y-c)/k
            }
        }
        // 左下到右上的直线表达式
        const leftBottomC = function(x,y){
            const k = (leftBottom.y - center.y)/(leftBottom.x - center.x);
            const c = center.y -center.x*k;
            if(x){
                return k*x + c
            }else{
                if(k === 0){
                    return x;
                }
                return (y-c)/k
            }
        }
        const ltY = leftTopC(x);
        const lbY = leftBottomC(x);
        if(y<ltY&&y>lbY){
            return 'left'
        }else if(y>ltY&&y>lbY){
            return 'bottom'
        }else if(y<lbY&&y>ltY){
            return 'right'
        }else{
            return 'top'
        }
     }
 
 };
 export default PolyLine
 