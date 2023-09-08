export default class Tree {
	constructor(dataArr) {
		this._root = buildTree(this._curateArr(dataArr));
	}

	curateArr(arr) {
		if (typeof arr === "string")
			arr = arr.split(",").map((el) => Number(el.trim()));
		return arr.sort().filter((el, index) => index == arr.indexOf(el));
	}

	buildTree(arr, start, end) {
		if (!start) start = 0;
		if (!end) end = arr.length - 1;
		if (start > end) return null;

		const middle = Math.round((start + end) / 2);

		return new Node(
			arr[middle],
			buildTree(arr, start, mid - 1),
			buildTree(arr, mid + 1, start)
		);
	}

	prettyPrint = (node, prefix = "", isLeft = true) => {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			prettyPrint(
				node.right,
				`${prefix}${isLeft ? "│   " : "    "}`,
				false
			);
		}
		console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
		if (node.left !== null) {
			prettyPrint(
				node.left,
				`${prefix}${isLeft ? "    " : "│   "}`,
				true
			);
		}
	};
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
