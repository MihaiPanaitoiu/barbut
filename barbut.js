var diceDsp11 = document.querySelector("#span1");
var diceDsp12 = document.querySelector("#span2");
var diceDsp21 = document.querySelector("#span3");
var diceDsp22 = document.querySelector("#span4");
var buton1 = document.querySelector("#button1");
var buton2 = document.querySelector("#button2");
var roundOver = false;
var p1Score = 0;
var p2Score = 0;
var zar1 = zar();
var zar2 = zar();
var zar3 = zar();
var zar4 = zar();


function winnerCheck(){
	if (p1Score > p2Score) {
		diceDsp11.classList.add("winner");
		console.log("player 1 winner");
	}
}


function zar(){
	return Number(Math.floor(Math.random() * 6 + 1));
}


function round() {
	buton1.addEventListener("click", function() {
	if (!roundOver) {
		p1Score += zar1 + zar2;
	}
	diceDsp11.textContent = zar1;
	diceDsp12.textContent = zar2;
	})

	buton2.addEventListener("click", function() {
		if (!roundOver) {
			p2Score += zar3 + zar4;
		}
		diceDsp21.textContent = zar3;
		diceDsp22.textContent = zar4;
	})

	if (p1Score > p2Score) {
		roundOver = true;
		console.log("a castigat p1");
	}

	else if(p2Score > p1Score) {
		roundOver = true;
		console.log("a castigat p2");
	}
}

function init() {
	round();
}

init();

// buton1.addEventListener("click", function() {
// 	if (!roundOver) {
// 		p1Score += zar1 + zar2;
// 		p2Score += zar3 + zar4;
// 	}
// 	if (p1Score > p2Score) {
// 		roundOver = true;
// 		console.log("a castigat p1");
// 	}
// 	diceDsp11.textContent = zar1;
// 	diceDsp12.textContent = zar2;
// })



























