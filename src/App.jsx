import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Tree from "./BST";

function App() {
	function setAnswer(ans) {
		console.log(ans);
	}

	const controlPanelData = {
		functionList: [
			{
				func: (input) => {
					const BST = new Tree(input);
					BST.prettyPrint(BST.root);
				},
				funcName: "test",
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
