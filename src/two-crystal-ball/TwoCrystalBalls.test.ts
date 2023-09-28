import { test, expect } from 'bun:test'
import { two_crystal_balls } from './TwoCrystalBalls.js'

test('two crystal balls - random 10000', function () {
	let idx = Math.floor(Math.random() * 10000)
	const data = new Array(10000).fill(false)

	for (let i = idx; i < 10000; ++i) {
		data[i] = true
	}

	expect(two_crystal_balls(data)).toEqual(idx)
})

test('two crystal balls - all false', () => {
	expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1)
})

test('two crystal balls - [false, true, true]', () => {
	const data = [false, true, true]
	expect(two_crystal_balls(data)).toEqual(1)
})

test('two crystal balls - [false, false, true]', () => {
	const data = [false, false, true]
	expect(two_crystal_balls(data)).toEqual(2)
})

test('two crystal balls - [false, false, false, false, false, true]', () => {
	const data = [false, false, false, false, false, true]
	expect(two_crystal_balls(data)).toEqual(5)
})
