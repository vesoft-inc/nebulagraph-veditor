export interface Vector2 {
    x: number;
    y: number;
}
declare function normalize(v: Vector2): {
    x: number;
    y: number;
};
declare function addVector(...vectors: Vector2[]): Vector2;
declare function getVectorLength(v: Vector2): number;
declare function subVector(v0: Vector2, v1: Vector2): {
    x: number;
    y: number;
};
declare function multiple(v: Vector2, t: number): {
    x: number;
    y: number;
};
export { normalize, addVector, multiple, getVectorLength, subVector };
