import { createSVGElement, setAttrs } from "../Utils/dom";

export function createRadialGradient(color = "#f4c708", color2 = "#f7e69a") {
    const radialGradient = createSVGElement("radialGradient");

    radialGradient.innerHTML = `<stop offset="0%" stop-color="${color}"></stop>
			<stop offset="100%" stop-color="${color2}"></stop>
			<animate attributeName="fy" dur="700ms" from="90%" to="0%" repeatCount="indefinite" />`;
    setAttrs(radialGradient, {
        fy: "90%",
    });
    return radialGradient;
}
