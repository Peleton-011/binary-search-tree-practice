import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Tree from "./BST";

function App() {
	function setAnswer(ans) {
		console.log(ans);
	}
	let BST;

	const controlPanelData = {
		functionList: [
			{
				func: (input) => {
					BST = new Tree(input);
					BST.prettyPrint(BST.root);
				},
				funcName: "create",
				inputName: "",
			},
			{
				func: (input) => {
					BST.insert(input);
					BST.prettyPrint(BST.root);
				},
				funcName: "insert",
				inputName: "",
			},
			{
				func: (input) => {
					BST.delete(input);
					BST.prettyPrint(BST.root);
				},
				funcName: "delete",
				inputName: "",
			},
			{
				func: (input) => {
					return BST.find(input);
				},
				funcName: "find",
				inputName: "",
			},
			{
				func: (input) => {
					return BST.levelOrder(input);
				},
				funcName: "level order",
				inputName: "",
			},
            {
				func: (input) => {
					return BST.inorder(input);
				},
				funcName: "in order",
				inputName: "",
			},{
				func: (input) => {
					return BST.preorder(input);
				},
				funcName: "pre order",
				inputName: "",
			},{
				func: (input) => {
					return BST.postorder(input);
				},
				funcName: "post order",
				inputName: "",
			},{
				func: (input) => {
					return BST.depth(input);
				},
				funcName: "depth",
				inputName: "",
			},{
				func: (input) => {
					return BST.height(input);
				},
				funcName: "height",
				inputName: "",
			},{
				func: (input) => {
					return BST.isBalanced(input);
				},
				funcName: "isBalanced",
				inputName: "",
			},{
				func: (input) => {
					return BST.rebalance(input);
				},
				funcName: "rebalance",
				inputName: "",
			},
		],
		setAnswer,
	};
	return (
		<>
			<h1>Henlo</h1>
			<ControlPanel data={controlPanelData} />
		</>
	);
}

export default App;
