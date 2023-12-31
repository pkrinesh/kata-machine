export function bubble_sort(arr: number[]): void {
	for (let i = 1; i < arr.length; ++i) {
		for (let j = 0; j < arr.length - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
}

/*
	Bubble Sort has O(N^2) big-o time complexity.
	N(N-1)/2
*/
