import { tableau } from "./components/tableau.js";

const app = {
	init() {
		tableau.init();
	},
};

document.addEventListener("DOMContentLoaded", app.init);
