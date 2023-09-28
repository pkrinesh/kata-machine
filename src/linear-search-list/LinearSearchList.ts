export default function linear_search(haystack: number[], needle: number): boolean {
	for (let i = 0; i < haystack.length; ++i) {
		if (haystack[i] === needle) {
			return true;
		}
	}
	return false;
}

/*
	Linear search has O(N) Big-O complexity.
*/
/*
	Rules to remember for measuring big-o complexity.
		1) Growth is with respect to the input.
		2) Constants are always dropped.
		3) Worst case is usually the way to measure.

	Common bog-o complexity
		1) O(1)
		2) O(log n) - Binary search tree.
		3) O(n) - Linear search.
		4) O(n log n) - Quicksort.
		5) O(n^2)
		6) O(2^n) - Can't run on traditional machines.
		7) O(n!) - Can't run on traditional machines.
		8) O(sqrt(n)) - Two crystal ball.
*/
