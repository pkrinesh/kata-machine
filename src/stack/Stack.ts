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
		const node: Node<T> = { value: item }

		this.length++

		if (!this.head) {
			this.head = node
			return
		}

		node.prev = this.head
		this.head = node
		console.log(this.head)
	}

	pop(): T | undefined {
		if (!this.head) {
			return
		}

		this.length--
		const currentHead = this.head

		if (this.length === 0) {
			this.head = undefined
		}

		this.head = currentHead.prev

		//free
		currentHead.prev = undefined
		return currentHead.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
