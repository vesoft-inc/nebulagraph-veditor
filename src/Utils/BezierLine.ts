import {addVector, getVectorLength, multiple, subVector, Vector2} from './vector';
class BezierLine {
	v0: Vector2;
	v1: Vector2;
	v2: Vector2;
	v3: Vector2;
	lengths: {
		x: number,
		y: number,
		length: number
	}[] = [];

	setControl(v0:Vector2, v1: Vector2, v2:Vector2, v3:Vector2) {
		this.v0 = v0;
		this.v1 = v1;
		this.v2 = v2;
		this.v3 = v3;
	}

	getPoint(t:number):Vector2 {
		const { v0, v1, v2, v3 } = this;
		const pos = addVector(
			multiple({...v0}, Math.pow(1 - t, 3)),
			multiple({...v1}, Math.pow(1 - t, 2) * 3 * t),
			multiple({...v2}, 3 * (1 - t) * Math.pow(t, 2)),
			multiple({...v3}, Math.pow(t, 3)));
		return pos
	}

	// 这里使用简单的前后点来计算角度
	getAngle(t:number) {
		const pre = this.getPoint(Math.max(0,t - 0.001));
		const next = this.getPoint(Math.min(1,t + 0.001));
		const angle = Math.atan2(next.y - pre.y, next.x - pre.x);
		return angle;
	}

	/**
	 * @param n 指定点的个数
	 * @returns 
	 */
	getSpacedPoints(n:number):Vector2[] {
		const points = [];
		this.getLengths(n);// 缓存起来
		for (let i = 0;i <= n;i++) {
			const t = this.getUtoTmapping(i / n);
			points.push(this.getPoint(t));
		}
		return points;
	}

	/**
	 * 返回缓存长度数组
	 * @param n 分割点的个数
	 * @returns 
	 */
	getLengths(n = 100):BezierLine {
		let length = 0;
		let prePos = {...this.v0};
		this.lengths = [{
			...this.v0,
			length:0
		}]
		for (let i = 1;i <= n;i++) {
			const pos = this.getPoint(i / n);
			length += getVectorLength(subVector(pos, prePos));
			this.lengths.push({
				...pos,
				length
			})
			prePos = pos;
		}
		return this;
	}

	/**
	 * 获取线总长度
	 * @param n 
	 * @returns 
	 */
	getLength(n):number {
		this.getLengths(n);
		return this.lengths[this.lengths.length - 1].length;
	}

	// TODO: 根据总长度算出一定比例的长度所对应的t值，
	// 这个等距划分的算法不很准确，可以改进成，记录每个线段起止点，然后利用累进线段长度和斜率来计算等距点，
	// 但是某些弧度特别大的线可能需要取点密一点才有用，不过也非常有效了
	getUtoTmapping(u:number):number {
		const lengths = this.lengths;
		const length = lengths[lengths.length - 1].length;
		const targetLength = u * length;
		let nextIndex; let nowIndex = 0;
		lengths.find((item, index)=>{
			if (item.length >= targetLength) {
				nextIndex = index;
				return true;
			} else {
				nowIndex = index;
				return false;
			}
		});
		const nextPoint = this.lengths[nextIndex];
		const nowPoint =  this.lengths[nowIndex];
		const restRatio = u === 0 ? 0 : (targetLength - nowPoint.length) / (nextPoint.length - nowPoint.length);
		const t = (nowIndex + Math.max(restRatio, 0)) / (this.lengths.length - 1);
		return t;
	}
}
 
export default BezierLine;
