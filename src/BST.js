export default class Tree {
	get root() {
		return this._root;
	}

	curateArr(arr) {
		if (typeof arr === "string") arr = arr.split(",");
		arr = arr.map((x) => Number(x));
		return arr
			.sort((a, b) => a - b)
			.filter((el, index) => index == arr.indexOf(el));
	}

	buildTree(arr, start, end) {
		if (start > end) return null;

		// console.log(arr, ", ", start, ", ", end);

		const middle = Math.round((start + end) / 2);
		// console.log(middle, ", ", arr[middle]);
		return new Node(
			arr[middle],
			this.buildTree(arr, start, middle - 1),
			this.buildTree(arr, middle + 1, end)
		);
	}

	prettyPrint = (node, prefix = "", isLeft = true) => {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			this.prettyPrint(
				node.right,
				`${prefix}${isLeft ? "│   " : "    "}`,
				false
			);
		}
		console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
		if (node.left !== null) {
			this.prettyPrint(
				node.left,
				`${prefix}${isLeft ? "    " : "│   "}`,
				true
			);
		}
	};
	constructor(dataArr) {
		dataArr = this.curateArr(dataArr);
		this._root = this.buildTree(dataArr, 0, dataArr.length - 1);
		// this.prettyPrint(this._root)
	}
}

class Node {
	/**
	 * @param {any} val
	 */
	set value(val) {
		this._value = val;
	}
	get value() {
		return this._value;
	}

	constructor(val, left, right) {
		this._value = val || null;
		this._right = right || null;
		this._left = left || null;
	}

	/**
	 * @param {Node} right
	 */
	set right(right) {
		this._right = right;
	}
	get right() {
		return this._right;
	}

	/**
	 * @param {Node} left
	 */
	set left(left) {
		this._left = left;
	}
	get left() {
		return this._left;
	}
}
