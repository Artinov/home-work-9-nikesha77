var ball = document.querySelector(".discoball");

function goDisco() {
	//do your disco magic here !
	ball.setAttribute("style","background: linear-gradient(to left, #FF512F , #DD2476)");
}
function goDisco1(){
	ball.setAttribute("style","background: linear-gradient(to left, #E55D87 , #5FC3E4)");
}
function goDisco2(){
	ball.setAttribute("style","background: linear-gradient(to left, #3494E6 , #EC6EAD)");
}
function goDisco3(){
	ball.setAttribute("style","background: linear-gradient(to left, #00c3ff , #ffff1c)");

}
function goDisco4(){
	ball.setAttribute("style","background: linear-gradient(to left, #de6161 , #2657eb)");
}

setInterval(goDisco,300);
setInterval(goDisco1,600);
setInterval(goDisco2,900);
setInterval(goDisco3,1200);
setInterval(goDisco4,1500);