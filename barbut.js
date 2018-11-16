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

buton1.addEventListener("click", function(){
	diceDsp11.textContent = zar1;
	diceDsp12.textContent = zar2;
	p1Score += zar1 + zar2;
	return p1Score;
});

buton2.addEventListener("click", function(){
	diceDsp21.textContent = zar3;
	diceDsp22.textContent = zar4;
	p2Score += zar3 + zar4;
	return p2Score;
});



function zar(){
	return Number(Math.floor(Math.random() * 6 + 1));
}

