export default class BinarySearchTree {
	constructor(dataArr) {
		this._root = buildTree(this._curateArr(dataArr));
	}

	_curateArr(arr) {
		if (typeof arr === "string")
			arr = arr.split(",").map((el) => Number(el.trim()));
		return arr.sort().filter((el, index) => index == arr.indexOf(el));
	}
	buildTree(arr) {}
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

	constructor(val, right, left) {
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
