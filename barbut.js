var diceDsp11 = document.querySelector("#span1");
var diceDsp12 = document.querySelector("#span2");
var diceDsp21 = document.querySelector("#span3");
var diceDsp22 = document.querySelector("#span4");
var buton1 = document.querySelector("#button1");
var buton2 = document.querySelector("#button2");
var roundOver = 2;
var roundOverCheck = 0



buton1.addEventListener("click", function(){
	diceDsp11.textContent = zar();
	diceDsp12.textContent = zar();
	roundOverCheck+=1;
	console.log(roundOverCheck);
});

buton2.addEventListener("click", function(){
	diceDsp21.textContent = zar();
	diceDsp22.textContent = zar();
	roundOverCheck+=1;
	console.log(roundOverCheck);
});



function zar(){
	return Math.floor(Math.random() * 6 + 1);
}

