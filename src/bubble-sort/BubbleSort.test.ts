import { test, expect } from 'bun:test'
import { bubble_sort } from './BubbleSort.ts'

test('bubble sort - [9, 3, 7, 4, 69, 420, 42]', function () {
	const arr = [9, 3, 7, 4, 69, 420, 42]

	bubble_sort(arr)
	expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})

test('bubble sort - [5, 4, 3, 2, 1, 0]', () => {
	const arr = [5, 4, 3, 2, 1, 0]

	bubble_sort(arr)
	expect(arr).toEqual([0, 1, 2, 3, 4, 5])
})
