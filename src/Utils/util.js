/**
 * @namespace Utils
 */
export default {
    /**
     * 获取最新的domRect
     * @instance 
     * @memberof Utils
     * @param {*} str 
     * @param {*} callback 
     * @returns {DOMRect}
     */
    getDOMRect(str, callback) {
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.visibility = 'hidden';
        div.innerHTML = str;
        document.body.appendChild(div);
        const rect = div.getBoundingClientRect();
        // document.body.removeChild(div);
        return rect;
    },

    getSVGBBox(){

    }
}