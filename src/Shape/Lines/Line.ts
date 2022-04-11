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
const DefaultLine: LineRender = {
    arcRatio: 4,
    adsorb: [20, 20],
    render(line: InstanceLine) {
        const { from, to, data } = line;
        const pathString = this.makePath(from, to, line);
        const shape = line.shape ? line.shape : SVGHelper.group();
        const path = line.path ? line.path : (line.path = SVGHelper.path());
        const shadowPath = line.shadowPath
            ? line.shadowPath
            : (line.shadowPath = SVGHelper.path());
        setAttrs(path, {
            d: pathString,
            class: "ve-line-path",
            "stroke-dasharray": "10",
            fill: "transparent",
            "stroke-width": 2,
            stroke: "rgba(178,190,205,0.7)",
            ...((data.style as AnyMap) || {}),
        });
        setAttrs(shadowPath, {
            d: pathString,
            stroke: "transparent",
            fill: "none",
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
        this.renderLabe && this.renderLabel(line);
        return shape;
    },

    makePath(
        from: InstanceNodePoint,
        to: InstanceNodePoint,
        line: InstanceLine
    ) {
        let edgeX = from.x;
        let edgeY = from.y;
        let endX = to.x;
        let endY = to.y;
        let toX = to.x;
        let toY = to.y;
        const arrowStartSpace = 0; // 顶部距离node节点的距离
        const arrEndSpace = 8; // 底部距离node节点的距离
        // 根据连接点位置生成控制点
        // 上右下左的控制点分别为 (x,上偏移) (右偏移,y)  (x,下偏移) (左偏移,y)
        let startControlPoint = { x: edgeX, y: edgeY };
        let endControlPoint = { x: endX, y: endY };
        const startAngel = this.getPointDirect(from);
        const endAngel = this.getPointDirect(to);
        const offsetLength =
            Math.sqrt(Math.pow(edgeX - endX, 2) + Math.pow(edgeY - endY, 2)) /
            this.arcRatio; // 连接点的距离的一半作为控制点的长度
        startControlPoint.x +=
            (1 / startAngel < 0 ? -1 : 1) * Math.cos(startAngel) * offsetLength;
        startControlPoint.y += -Math.sin(startAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号
        endControlPoint.x +=
            (1 / endAngel < 0 ? -1 : 1) * Math.cos(endAngel) * offsetLength;
        endControlPoint.y += -Math.sin(endAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号
        if (from.data.y === 1) {
            edgeY += arrowStartSpace;
        } else if (from.data.y === 0) {
            edgeY -= arrowStartSpace;
        } else if (from.data.x === 0) {
            edgeX -= arrowStartSpace;
        } else if (from.data.x === 1) {
            edgeX += arrowStartSpace;
        }
        if (to.data.y === 1) {
            endY += arrEndSpace;
        } else if (to.data.y === 0) {
            endY -= arrEndSpace;
        } else if (to.data.x === 0) {
            endX -= arrEndSpace;
        } else if (to.data.x === 1) {
            endX += arrEndSpace;
        }
        let pathString = `M${from.x} ${from.y} T ${edgeX} ${edgeY}`;
        let toPointString = `${endX} ${endY} T ${toX} ${toY} `;
        const path = `${pathString}C${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${toPointString}`;
        line.bezierData = {
            from: {
                x: edgeX,
                y: edgeY,
            },
            to: {
                x: endX,
                y: endY,
            },
            startControlPoint,
            endControlPoint,
        };
        line.data.fromX = from.x;
        line.data.fromY = from.y;
        line.data.toX = to.x;
        line.data.toY = to.y;
        return path;
    },

    //没用了
    getPointDirect(pointNode: InstanceNodePoint) {
        const point2center = [pointNode.data.x, pointNode.data.y];
        let angel = 0;
        if (point2center[1] === 0) {
            angel = Math.PI / 2;
        } else if (point2center[1] === 1) {
            angel = -Math.PI / 2;
        } else if (point2center[0] === 0) {
            angel = Math.PI;
        } else if (point2center[0] === 1) {
            angel = -Math.PI;
        } else {
            // arctan求角度
            angel =
                Math.atan((point2center[1] - 0.5) / (point2center[0] - 0.5)) +
                (point2center[0] - 0.5 < 0 ? Math.PI : 0);
        }
        return angel || 0;
    },

    renderArrow(line: InstanceLine) {
        const { to } = line;
        let angle = 0;
        if (to.data.y <= 0) {
            angle = 180;
        } else if (to.data.x >= 1) {
            angle = 270;
        } else if (to.data.x <= 0) {
            angle = 90;
        }
        const pathString = `M${-5} ${10}L${0} ${0}L${5} ${10}Z`;
        const path = line.arrow ? line.arrow : SVGHelper.path();
        // 进行角度的中心变换
        const matrix = mat2d.create();
        mat2d.translate(matrix, matrix, [to.x, to.y]);
        mat2d.rotate(matrix, matrix, (angle * Math.PI) / 180);
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
            from,
            to,
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
                text: SVGHelper.text(0, 0, label),
                textRect: SVGHelper.rect(0, 0, 10, 10),
                labelGroup: null,
            };
            line.label.labelGroup = SVGHelper.group(
                line.label.text,
                line.label.textRect
            );
            line.shape.appendChild(line.label.labelGroup);
        }
        const { text, textRect, textBBox, oldText, labelGroup } = line.label;
        const x = xPoint + (refX || 0);
        const y = yPoint + (refY || 0);
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
                transform: `rotate(${angle},${xPoint + (refX || 0)},${
                    yPoint + (refY || 0)
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
