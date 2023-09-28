import { test, expect } from 'bun:test'
import { binary_search } from './BinarySearchList.ts'

test('binary search - [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]', function () {
	const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]

	expect(binary_search(foo, 69)).toEqual(true)
	expect(binary_search(foo, 1336)).toEqual(false)
	expect(binary_search(foo, 69420)).toEqual(true)
	expect(binary_search(foo, 69421)).toEqual(false)
	expect(binary_search(foo, 1)).toEqual(true)
	expect(binary_search(foo, 0)).toEqual(false)
})

test('binary-search [1, 3, 6]', () => {
	const foo = [1, 3, 6]

	expect(binary_search(foo, 7)).toEqual(false)
	expect(binary_search(foo, 1)).toEqual(true)
	expect(binary_search(foo, 3)).toEqual(true)
	expect(binary_search(foo, 0)).toEqual(false)
})
