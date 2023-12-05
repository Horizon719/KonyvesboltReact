import { useState } from "react";
import "./App.css";
import { ADATLISTA } from "./adatok.js";
import Termekek from "./komponens/Termekek";

function App() {
	const [Lista, setLista] = useState(ADATLISTA);
  	return (
		<div className="App">
			<header className="App-header">
				<h1>Könyvesbolt</h1>
			</header>
			<article>
				<Termekek lista={Lista}></Termekek>
			</article>
		</div>
  );
}

export default App;
