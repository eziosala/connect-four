export const tableau = {
	grid: [],
	turn: "Player1",
	winner: null,
	init() {
		const cases = document.querySelectorAll(".row");
		for (const _case of cases) {
			_case.addEventListener("click", tableau.handleClick);
		}
		for (let c = 0; c < 7; c++) {
			tableau.grid.push([]);
			for (let r = 0; r < 6; r++) {
				tableau.grid[c].push("empty");
			}
		}
	},
	handleClick(e) {
		let target = e.target;
		if (target.dataset.state !== "empty") return;

		const column = target.parentElement.querySelectorAll(":not(:disabled)");
		target = column[column.length - 1];
		target.disabled = true;
		target.dataset.state = tableau.turn;
		tableau.turn === "Player1"
			? (tableau.turn = "Player2")
			: (tableau.turn = "Player1");
		//Analyse de tableau.grid
		tableau.check(target);
	},
	check(target) {
		const column = target.dataset.column;
		const row = target.dataset.row;
		tableau.grid[column][row] = target.dataset.state;
		tableau.checkWinner();
	},
	isConnect(a, b, c, d) {
		return a !== "empty" && a === b && a === c && a === d;
	},
	checkWinner() {
		for (let c = 0; c < 7; c++) {
			for (let r = 0; r < 3; r++) {
				if (
					tableau.isConnect(
						tableau.grid[c][r],
						tableau.grid[c][r + 1],
						tableau.grid[c][r + 2],
						tableau.grid[c][r + 3]
					)
				)
					return tableau.update(tableau.grid[c][r]);
			}
		}
		for (let c = 0; c < 4; c++) {
			for (let r = 0; r < 6; r++) {
				if (
					tableau.isConnect(
						tableau.grid[c][r],
						tableau.grid[c + 1][r],
						tableau.grid[c + 2][r],
						tableau.grid[c + 3][r]
					)
				)
					return tableau.update(tableau.grid[c][r]);
				if (
					tableau.isConnect(
						tableau.grid[c][r],
						tableau.grid[c + 1][r + 1],
						tableau.grid[c + 2][r + 2],
						tableau.grid[c + 3][r + 3]
					)
				)
					return tableau.update(tableau.grid[c][r]);
			}
		}
		for (let c = 3; c < 7; c++) {
			for (let r = 0; r < 3; r++) {
				if (
					tableau.isConnect(
						tableau.grid[c][r],
						tableau.grid[c - 1][r + 1],
						tableau.grid[c - 2][r + 2],
						tableau.grid[c - 3][r + 3]
					)
				)
					return tableau.update(tableau.grid[c][r]);
			}
		}
	},
	update(winner) {
		tableau.winner = winner;
		const cases = document.querySelectorAll(".row");
		for (const _case of cases) {
			_case.removeEventListener("click", tableau.handleClick);
		}
		const modal = document.querySelector("#winner-modal");
		modal.showModal();
		const texte = modal.querySelector("p");
		const replay = modal.querySelector("button");
		replay.addEventListener("click", () => window.location.reload());
		texte.textContent = `${tableau.winner} a gagné !`;
	},
};
