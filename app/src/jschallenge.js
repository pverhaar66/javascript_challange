

var start = 0;
var questionNumber = 28;
var showpartysthought = 1;
var awnsers = [];
var data = [];

var extremesection = document.getElementById('section');
var partytextbutton = document.getElementById('partytextbutton');
var partiestext = document.getElementById('partiestext');
var backbutton = document.getElementById('back');
var startbutton = document.getElementById('start');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var optionskip = document.getElementById('optionskip');
var text = document.getElementById('text');
var h1 = document.getElementById('h1');

function onloadHead() {
	if (start === 0) {
		partytextbutton.style.display = 'none';
		partiestext.style.display = 'none';
		backbutton.style.display = 'none';
		option1.style.display = 'none';
		option2.style.display = 'none';
		option3.style.display = 'none';
		optionskip.style.display = 'none';
		startbutton.style.display = 'block ';
	}
	if (start === 1) {
		partiestext.style.display = 'none';
		partytextbutton.style.display = 'block';
		backbutton.style.display = 'block';
		option1.style.display = 'block';
		option2.style.display = 'block';
		option3.style.display = 'block';
		optionskip.style.display = 'block';
		startbutton.style.display = 'none ';
	}
}

function upStart() {
	return start = 1;
}

function upQuestion(givenAwnser) {
	awnser(givenAwnser);
	if (questionNumber < 29) {
		return questionNumber++, nextQuestion();
	} else {
		getResults();
		partytextbutton.style.display = 'none';
		partiestext.style.display = 'none';
		backbutton.style.display = 'none';
		option1.style.display = 'none';
		option2.style.display = 'none';
		option3.style.display = 'none';
		optionskip.style.display = 'none';
		startbutton.style.display = 'none ';
	}

}

function downQuestion() {
	if (questionNumber > 0) {
		return questionNumber--, nextQuestion();
	}
	if (questionNumber-- === 0) {
		location.reload();
	}
}

function awnser(givenAwnser) {
	return awnsers[questionNumber] = givenAwnser;
}

function nextQuestion() {
	console.log(questionNumber);
	if (start === 0) {
		upStart();
	}
	onloadHead();
	h1.innerHTML = questionHeaderArray[questionNumber];
	text.innerHTML = questionTextArray[questionNumber];
	partiestext.innerHTML = partiesThought[questionNumber];
	backbutton.setAttribute("onClick", "downQuestion();");
	option1.setAttribute("onClick", "upQuestion(1)"); // option 1 = eens == pro
	option2.setAttribute("onClick", "upQuestion(2)"); // option 2 = geen van beide == none of both
	option3.setAttribute("onClick", "upQuestion(3)"); // option 3 = niet eens == against
	optionskip.setAttribute("onClick", "upQuestion(4)"); // option 4 = skip == none
	partytextbutton.setAttribute("onClick", "switchButtonPartyText()");//


}
function switchButtonPartyText() {

	if (showpartysthought == 0) {
		partiestext.style.display = 'none';
		return showpartysthought = 1;
	}
	if (showpartysthought == 1) {
		partiestext.style.display = 'block';
		return showpartysthought = 0;
	}
}

function getResults() {
	h1.innerHTML = "Welke partijen wilt u meenemen in het resultaat?";
	text.innerHTML = "U kunt kiezen voor zittende partijen, die nu in de Tweede Kamer vertegenwoordigd zijn. \n\
			Daarbij nemen we ook de partijen mee die in de peilingen op minimaal één zetel staan. \n\
			U kunt alle partijen meenemen en u kunt een eigen selectie maken van tenminste drie partijen."
	var button = document.createElement("button");
	var t = document.createTextNode("Zie het reultaat");
	button.appendChild(t);
	button.setAttribute("onclick", "showResults()")
	extremesection.appendChild(button);

	for (var i = 0; i < getTotalAmountOfPartys(); i++) {
		var tr = document.createElement('tr');
		tr.id = "trs";
		extremesection.appendChild(tr);
		var checkbox = document.createElement('input');
		var p = document.createElement('p');
		checkbox.type = 'checkbox';
		tr.appendChild(checkbox);
		var partyname = document.createTextNode(parties[i]['name']);
		tr.appendChild(p);
		p.appendChild(partyname);	
	}
	if (checkbox.checked) {
		data.push(partyname);
	}
}

function showResults() {
	console.log(data);
	console.log(awnsers);
	
	for (var i = 0; i < getTotalAmountOfPartys(); i++) {
		
	}
}