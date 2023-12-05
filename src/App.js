import { useState } from "react";
import "./App.css";
import { ADATLISTA } from "./adatok.js";
import Termekek from "./komponens/Termekek";

function App() {
	const [Lista, setLista] = useState(ADATLISTA);
	function katt(index){
		console.log(index);
	}
  	return (
		<div className="App">
			<header className="App-header">
				<h1>Könyvesbolt</h1>
			</header>
			<article>
				<Termekek katt={katt} lista={Lista}></Termekek>
			</article>
			<footer>
				<p>Milichovszky Sándor</p>
			</footer>
		</div>
  );
}

export default App;
