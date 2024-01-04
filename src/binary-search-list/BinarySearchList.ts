export function binary_search(haystack: number[], needle: number): boolean {
	let lo = 0
	let hi = haystack.length

	do {
		let mi = Math.floor(lo + (hi - lo) / 2)
		let value = haystack[mi]

		if (needle === value) return true

		if (needle > value) {
			lo = mi + 1
		} else {
			hi = mi
		}
	} while (lo < hi)

	return false
}

/*
	It follows the [lo, hi), include `lo` and exclude the `hi`.
	Binary search has O(log N) Big-O time complexity, where `N` is the length of input.

	N + N/2 + N/4 + N/8 + ... + N/N = 1
	N/2^K = 1
	N = 2^K
	log N = K
*/
