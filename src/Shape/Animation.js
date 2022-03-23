import { Snap } from "../MMEditor";
/**
 * @namespace Aniamtion
 */
export default {
    /**
     * @prop {function} Aniamtion.createRadialGradient
     * @param {*} color 
     * @param {*} color2 
     * @memberof Aniamtion
     * @returns {Snap.Element}
     */
	createRadialGradient(color = '#f4c708', color2 = '#f7e69a') {
		const radialGradient = document.createElementNS(
			'http://www.w3.org/2000/svg',
			radialGradient
		);

		radialGradient.innerHTML = `<stop offset="0%" stop-color="${color}"></stop>
			<stop offset="100%" stop-color="${color2}"></stop>
			<animate attributeName="fy" dur="700ms" from="90%" to="0%" repeatCount="indefinite" />`;
		const ele = Snap(radialGradient);
		ele.attr({
			fy: '90%'
		});
		return ele;
	}
};
