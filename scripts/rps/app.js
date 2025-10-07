//@ts-check

// 1. player picks a weapon
// 2. Computer pick random weapon
// 3. Determine winner
// 4. Display
// 5. Play again / keep playing

const ROCK = "carr";
const PAPER = "carte";
const SCISSORS = "scear";

let tieCount = 0;
let winCount = 0;
let lossCount = 0;

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null) {
	throw "aftermath is not defined! Check your HTML!!";
}

const pickWeapon = function (weapon) {
	let aftermathText = `Plegman gepickod ${weapon}. `;
	console.log("Plegman gepickod", weapon);

	// get a random computer weapon and assign
	// it the the computerWeapon variable
	let computerWeapon = selectComputerWeapon();
	console.log("Gewaede gepickod", computerWeapon);
	aftermathText = aftermathText + `Gewaede gepickod ${computerWeapon}. `;

	// get results object from decideResults function
	let results = decideResults(weapon, computerWeapon);
	console.log("Battle Results", results);

	let winner = "";
	if (results.isTie) {
		tieCount = tieCount + 1;
		winner = results.description;
	} else if (results.playerWon) {
		winCount += 1;
		winner = "Plegman wynnes! Hal!!";
	} else {
		lossCount++;
		winner = "Gewaede wynnes! Ha Ha Haaa Forloren!!";
	}

	aftermathText += `${winner} Paet cyrrende taelle: Binda [${tieCount}] Wynnes [${winCount}] Losaos [${lossCount}]`;

	aftermathElement.textContent = aftermathText;
};

const selectComputerWeapon = function () {
	// this will give us a random number
	// between 0 and 3
	const rand = Math.floor(Math.random() * 3);

	if (rand == 0) {
		return ROCK;
	}

	if (rand == 1) {
		return PAPER;
	}

	if (rand == 2) {
		return SCISSORS;
	}

	// don't know what random number is choosing!
	throw "Unknown weapon";
};

function decideResults(player, computer) {
	// create a result object to hold the
	// default state of the outcome of the
	// battle
	let result = {
		isTie: false,
		playerWon: false,
		description: "",
	}

	// this is for a tie
	if (player == computer) {
		result.isTie = true;
		result.description = "Hit is an heafod!";
		// return the tie result
		return result;
	}

	// rock beats scissors
	if (player == ROCK && computer == SCISSORS) {
		result.playerWon = true;
		result.description = "rock heaps scissors";
		return result;
	}

	// paper beats rock
	if (player == PAPER && computer == ROCK) {
		result.playerWon = true;
		result.description = "paper covrirs rock";
		return result;
	}

	// scissors beats paper
	if (player == SCISSORS && computer == PAPER) {
		result.playerWon = true;
		result.description = "scissors scerans paper";
		return result;
	}

	// computer wins
	// rock beats scissors
	if (computer == ROCK && player == SCISSORS) {
		result.description = "rock heaps scissors";
		return result;
	}

	// paper beats rock
	if (computer == PAPER && player == ROCK) {
		result.description = "paper covrirs rock";
		return result;
	}

	// scissors beats paper
	if (computer == SCISSORS && player == PAPER) {
		result.description = "scissors scerans paper";
		return result;
	}

	result.description = "Ne wat ic hwaet haefde!";
	return result;
}