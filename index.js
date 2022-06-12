let counter = 0;

function play(move) {
	let notif = document.getElementById("notif");
	let score = document.getElementById("score");
	let moves = {
		"rock": "scissors",
		"paper": "rock",
		"scissors": "paper"
	}

	let computer = Object.keys(moves)[Math.floor(Math.random() * 3)];

	if (moves[computer] == move) {
		notif.innerHTML = `<span style="color: green;">You</span> played <span style="color: red;">${move}</span> and <span style="color: red;">computer</span> played <span style="color: green;">${computer}</span><br><span style="color: red;">Computer wins!</span>`;
	}else if (moves[move] == computer) {
		counter += 1;
		score.innerText = `score: ${counter}`;
		notif.innerHTML = `<span style="color: green;">You</span> played <span style="color: green;">${move}</span> and <span style="color: red;">computer</span> played <span style="color: red;">${computer}</span><br><span style="color: green;">You win!</span>`;
	}else {
		notif.innerHTML = `<span style="color: green;">You</span> played <span style="color: green;">${move}</span> and <span style="color: red;">computer</span> played <span style="color: green;">${computer}</span><br><span style="color: grey;">It's a tie!</span>`;
	}
}
