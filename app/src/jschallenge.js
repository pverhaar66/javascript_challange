

var start = 0;
var question = 0;
var questionArray = [];
var textArray =[];


var backbutton = document.getElementById('back');
var startbutton = document.getElementById('start');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var optionskip = document.getElementById('optionskip');
var text = document.getElementById('text');
var h1 = document.getElementById('h1');

function onloadhead(){
     if(start === 0 ){
	backbutton.style.display = 'none';
	option1.style.display = 'none';
	option2.style.display = 'none';
	option3.style.display = 'none';
	optionskip.style.display = 'none';
	startbutton.style.display = 'block ';
     }
     else{
	 backbutton.style.display = 'block';
	option1.style.display = 'block';
	option2.style.display = 'block';
	option3.style.display = 'block';
	optionskip.style.display = 'block';
	startbutton.style.display = 'none ';    
     }
}

function upStart(){
	return start = 1;
}

function upQuestion(){
	if (question < 30) {
	return question ++;	
	}
	
}

function downQuestion(){
	if(question > 0){
	return question --;
	}
}

function startQuest(){
	upQuestion();
	upStart();
	onloadhead();
		h1.innerHTML= questionArray[question];
		text.innerHTML =  textArray[question];
	backbutton.setAttribute("onClick", "javascript:minQuestion();");	
	option1.setAttribute("onClick", "javascript:upQuestion();");	
	option2.setAttribute("onClick", "javascript:upQuestion();");	
	option3.setAttribute("onClick", "javascript:upQuestion();");
	optionskip.setAttribute("onClick", "javascriptupQuestion();");	
}