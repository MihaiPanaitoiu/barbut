var diceDsp11 = document.querySelector("#span1");
var diceDsp12 = document.querySelector("#span2");
var diceDsp21 = document.querySelector("#span3");
var diceDsp22 = document.querySelector("#span4");
var buton1 = document.querySelector("#button1");
var buton2 = document.querySelector("#button2");

var p1Score = 0;
var p2Score = 0;
var zar1 = zar();
var zar2 = zar();
var zar3 = zar();
var zar4 = zar();



function zar(){
	return Number(Math.floor(Math.random() * 6 + 1));
}

function announceWinner()
{
    console.log("Winner");
}

function resetRound()
{
    console.log("Round over");
    roundOver = 0;
}


function round() {

    var roundOver = 0;
    
    buton1.addEventListener("click", function() {
        if (roundOver < 2) {
            p1Score += zar1 + zar2;
            buton1.disabled = true;
        }
        diceDsp11.textContent = zar1;
        diceDsp12.textContent = zar2;
        roundOver++;
        if (roundOver >= 2)
            announceWinner();
    })

    buton2.addEventListener("click", function() {
        if (roundOver < 2) {
            p2Score += zar3 + zar4;
            buton2.disabled = true;
        }
        diceDsp21.textContent = zar3;
        diceDsp22.textContent = zar4;
        roundOver++;
        if (roundOver >= 2)
            announceWinner();
    })

}

function init() {
    round();
}

init();




























