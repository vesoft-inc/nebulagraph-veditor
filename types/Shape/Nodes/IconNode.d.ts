export default IconNode;
declare namespace IconNode {
    const adsorb: number[];
    const linkPoints: {
        x: number;
        y: number;
    }[];
    const shapeBBox: any;
    function render(data: any, snapPaper: any): any;
    function renderLinkPoint(node: any, linkPoint: any, circle: any): any;
    function updateLinkPoint(node: any, linkPoint: any, refreshSize: any): void;
}
