type Node<T> = {
	value: T
	prev?: Node<T>
}

export default class Stack<T> {
	public length: number
	private head?: Node<T>

	constructor() {
		this.head = undefined
		this.length = 0
	}

	push(item: T): void {
		let node: Node<T> = { value: item }
		this.length++

		if (!this.head) {
			this.head = node
			return
		}

		node.prev = this.head
		this.head = node
	}

	pop(): T | undefined {
		if (!this.head) {
			return
		}

		this.length--
		let currentHead = this.head

		if (this.length === 0) {
			this.head = undefined
		} else {
			this.head = currentHead?.prev
		}

		currentHead.prev = undefined // free memory
		return currentHead?.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
