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
