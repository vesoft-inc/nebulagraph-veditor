export default class Path {
    d: string;
    static pathCommand: RegExp;
    static tCommand: RegExp;
    static pathValues: RegExp;
    constructor(d: string);
    getTotalLength(): number;
    getPointAtLength(length: number): {
        x: number;
        y: number;
        m: {
            x: number;
            y: number;
        };
        n: {
            x: number;
            y: number;
        };
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
        alpha: number;
    };
    private getLength;
    private path2curve;
    private pathToAbsolute;
    private parsePathString;
}
