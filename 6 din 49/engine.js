console.log("Welcome to engine.js");

var Game = {
	winners: [],
	userChoices: [],
	guessed: 0

}


Game.checkIfAvailable = function (number, prop) {

	if (number === '0' ){
		return false;
	}

	for ( var i in prop) {
		if(prop[i] === number) {
			return false;
		}
	}

	return true;
}

Game.chooseRandomWinnerNumbers = function () {
	var i,
		t;
	i = 0;

	while (i < 6) {
		t = Math.floor(Math.random() * 49);
		if (Game.checkIfAvailable(t, Game.winners) === true) {
			Game.winners[i] = t;
			console.log(t);
			i ++;
		}
	}
}

Game.numbersSelectedByTheUser = function () {
	var i;
	i = 0;

	while (i < 6) {
		var t;
		t = prompt("What number do you want?", "Please select a number from 1 to 49!");
		t = parseInt(t,10);

		if (t === null ) {
			throw new Error("Have a nice day!");
		}

		if (Game.checkIfAvailable(t, Game.userChoices) === true) {
			Game.userChoices[i] = t;
			//console.log(t);
			i++;
		}
	}
}

Game.checkIfThereAreAsociatedNumbers = function () {
	//console.log("A intrat in verificare!");
	var i,j;

	for ( i in Game.winners) {

		for (j in Game.userChoices) {

			//console.log(Game.winners[i] + " - " + Game.userChoices[j]);
			//console.log(Game.winners[i].toString() + " - " + Game.userChoices[j].toString());

			if (Game.winners[i] === Game.userChoices[j] ) {
				//console.log(Game.winners[i] + " - " + Game.userChoices[j]);
				Game.guessed++;
			}
		}
	}
}

Game.start = function () {

	Game.chooseRandomWinnerNumbers();
	Game.numbersSelectedByTheUser();
	Game.checkIfThereAreAsociatedNumbers();

	if (Game.guessed === 6) {
		console.log("Congratulations! You won the big prize!");
	}

	else {
		console.log("Unfortunatelly, you hit just " + Game.guessed + " numbers.");
	}
}

Game.start();
