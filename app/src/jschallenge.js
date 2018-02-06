

var start = 0;
var questionNumber = 0;
var questionHeaderArray = ["Bindend referendum", "Maatschappelijke dienstplicht", ];
var questionTextArray =[
	"Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
	"Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
	"Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden."];


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
	if (questionNumber < 30) {
	return questionNumber ++, NextQuestion();	
	}
	
}

function downQuestion(){
	if(questionNumber > 0){
	return questionNumber --, NextQuestion();
	}
}

function NextQuestion(){
	if (start === 0){
	upStart();
	}
	onloadhead();
		h1.innerHTML= questionHeaderArray[questionNumber];
		text.innerHTML =  questionTextArray[questionNumber];
	backbutton.setAttribute("onClick", "javascript:minQuestion();");	
	option1.setAttribute("onClick", "javascript:upQuestion();");	
	option2.setAttribute("onClick", "javascript:upQuestion();");	
	option3.setAttribute("onClick", "javascript:upQuestion();");
	optionskip.setAttribute("onClick", "javascriptupQuestion();");	
}