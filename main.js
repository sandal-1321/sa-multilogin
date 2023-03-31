var next1=document.getElementById("nex1");
var con2=document.getElementById("twoo");
var next2=document.getElementById("bf1");
var next3=document.getElementById("nex2");
var con3=document.getElementById("twooo");
var next4=document.getElementById("bf2");



next1.addEventListener("click",next);
function next()
{
	let form1=next1.parentElement.parentElement;
	form1.style.visibility="hidden";
    con2.parentElement.style.visibility="visible";;
}


next2.addEventListener("click",bef);
function bef()
{
	let form2=next2.parentElement.parentElement.parentElement.parentElement.firstElementChild;
	form2.style.visibility="visible";
    con2.parentElement.style.visibility="hidden";
}


next3.addEventListener("click",nextt);
function nextt()
{
	let form3=next3.parentElement.parentElement.parentElement;
	form3.style.visibility="hidden";
    con3.parentElement.style.visibility="visible";
}

next4.addEventListener("click",beff);
function beff()
{
	let formf=document.getElementById("for2");
	let form4=next4.parentElement.parentElement.parentElement.parentElement.lastElementChild;
	form4.style.visibility="hidden";
    formf.style.visibility="visible";
}