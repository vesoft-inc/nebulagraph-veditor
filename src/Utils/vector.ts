
export interface Vector2{
	x: number,
	y: number
}
function normalize(v:Vector2) {
	const length = Math.sqrt(v.x * v.x + v.y * v.y);
	return {
		x: v.x / length,
		y: v.y / length
	};
}

function addVector(...vectors: Vector2[]) {
	return vectors.reduce((pre,cur) => {
		return {
			x: pre.x + cur.x,
			y :pre.y+cur.y
		}
	}, {
		x: 0, y: 0
	})
}

function getVectorLength(v:Vector2) {
	const length = Math.sqrt(v.x * v.x + v.y * v.y);
	return length;
}

function subVector(v0:Vector2, v1:Vector2) {
	return {
		x: v1.x - v0.x,
		y: v1.y - v0.y
	};
}

function multiple(v:Vector2, t:number) {
	return {
		x: v.x * t,
		y: v.y * t
	};
}

export {
	normalize,
	addVector,
	multiple,
	getVectorLength,
	subVector
};
