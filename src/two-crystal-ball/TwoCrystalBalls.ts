/**
 * Given two crystal balls that will break if dropped from high enough distance,
 * determine the exact spot in which it will break in the most optimized way.
 */

export function two_crystal_balls(breaks: boolean[]): number {
	const len = breaks.length
	const jump = Math.floor(Math.sqrt(len))

	let jumpPoint = jump

	// todo-1: find approx position - linear search with x jump
	for (; jumpPoint < len; jumpPoint += jump) {
		if (breaks[jumpPoint]) break
	}
	// todo-2: find exact position - linear search with +1 jump
	for (let i = jumpPoint - jump; i <= jumpPoint && i < len; ++i) {
		if (breaks[i]) return i
	}
	return -1
}

// 👇 this is the copy from lecture.
// export function two_crystal_balls(breaks: boolean[]): number {
// 	let jumpAmount = Math.floor(Math.sqrt(breaks.length))

// 	let i = jumpAmount
// 	for (; i < breaks.length; i += jumpAmount) {
// 		if (breaks[i]) {
// 			break
// 		}
// 	}

// 	i -= jumpAmount
// 	for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
// 		if (breaks[i]) {
// 			return i
// 		}
// 	}

// 	return -1
// }

/*
	It has time complexity of O(sqrt(n)). because the `for` loop will always search for at least sqrt(n) amount of time.
*/
/*
	1) Nested `for` loops won't works here because in the case of last jump if the `jumpAt` is greater than the length of the array, the other `for` loop will break and inner `for` loop won't run. i.e. consider 6(six) length array.
	2) For above case we need to linearly search the last jump. And by placing the `for` loop a the bottom we make sure that linear search will happen for the worst case. i.e [false, false, false, false, false, true].
*/
