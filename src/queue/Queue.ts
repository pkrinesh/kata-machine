type Node<T> = {
	value: T
	next?: Node<T>
}

export default class Queue<T> {
	public length: number
	private head?: Node<T>
	private tail?: Node<T>

	constructor() {
		this.head = this.tail = undefined
		this.length = 0
	}

	/**
	 * Add the new item at the end of the queue. Replace the old tail with new tail.
	 * @param item
	 */
	enqueue(item: T): void {
		const node = { value: item } as Node<T>
		this.length++

		if (!this.tail) {
			this.tail = this.head = node
			return
		}

		this.tail.next = node // point old tail to the new tail
		this.tail = node // new tail
	}

	/**
	 * Remove the head from the queue and replace old head with new head.
	 * @returns
	 */
	deque(): T | undefined {
		if (!this.head) {
			return undefined
		}

		this.length--
		const currentHead = this.head

		// now if the length is 0, then head and tail will be undefined
		if (this.length === 0) {
			this.head = this.tail = undefined
		}

		this.head = this.head?.next // new `head`

		// free currentHead
		currentHead.next = undefined

		return currentHead.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
