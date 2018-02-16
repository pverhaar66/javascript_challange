

var start = 0;
var questionnumber = 28;
var showpartysthought = 1;
var skipcounter = 0;
var scorearray = [];
var awnsers = [];
var data = [1, 1, 1];
var secular = "all";

var button = document.createElement("button");
var extrasection = document.getElementById('startsection');
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
	if (questionnumber < 29) {
		return questionnumber++, nextQuestion();
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
	if (questionnumber > 0) {
		return questionnumber--, nextQuestion();
	}
	if (questionnumber-- === 0) {
		location.reload();
	}
}

function awnser(givenAwnser) {
	if (givenAwnser === "skip") {
		return skipcounter++;
	} else {
		return awnsers[questionnumber] = givenAwnser;
	}
}

function nextQuestion() {
	if (start === 0) {
		upStart();
	}
	onloadHead();
	h1.innerHTML = questionHeaderArray[questionnumber];
	text.innerHTML = questionTextArray[questionnumber];
	partiestext.innerHTML = partiesThought[questionnumber];
	backbutton.setAttribute("onClick", "downQuestion();");
	option1.setAttribute("onClick", "upQuestion('pro')"); // option 1 = eens == pro
	option2.setAttribute("onClick", "upQuestion('ambivalent')"); // option 2 = geen van beide == none of both
	option3.setAttribute("onClick", "upQuestion('contra')"); // option 3 = niet eens == against
	optionskip.setAttribute("onClick", "upQuestion('skip')"); // option 4 = skip == none
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
function changesecu() {
	extrasection.innerHTML=""; 
	if (secular == "all") {	
		return secular = "true",getResults();
	}
	if (secular == "true") {
		return secular = "false",getResults();
	}
	if (secular == "false") {
		return secular = "all", getResults();
	}
}


function getResults() {


	h1.innerHTML = "Welke partijen wilt u meenemen in het resultaat?";
	text.innerHTML = "U kunt kiezen voor zittende partijen, die nu in de Tweede Kamer vertegenwoordigd zijn. \n\
			Daarbij nemen we ook de partijen mee die in de peilingen op minimaal één zetel staan. \n\
			U kunt alle partijen meenemen en u kunt een eigen selectie maken van tenminste drie partijen."
	var btn = document.createElement("button");
	var btntext = document.createTextNode("sort");
	btn.appendChild(btntext);
	btn.setAttribute("onclick", "changesecu()");
	btn.id = "savebutton";
	extrasection.appendChild(btn);

	var button = document.createElement("button");
	var t = document.createTextNode("Zie het reultaat");
	button.appendChild(t);
	button.id = "savebutton";
	button.setAttribute("onclick", "checkparties()");
	extrasection.appendChild(button);
	if (secular == "all") {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			var tr = document.createElement('tr');
			tr.id = "trs";
			tr.value = parties[i]['name'];
			extrasection.appendChild(tr);
			var checkbox = document.createElement('input');
			var p = document.createElement('p');
			checkbox.type = 'checkbox';
			checkbox.value = parties[i]['name'];
			tr.appendChild(checkbox);
			var partyname = document.createTextNode(parties[i]['name']);
			tr.appendChild(p);
			p.appendChild(partyname);
		}
	}
	if (secular == "true") {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			if (parties[i]['secular'] == true) {
				var tr = document.createElement('tr');
				tr.id = "trs";
				tr.value = parties[i]['name'];
				extrasection.appendChild(tr);
				var checkbox = document.createElement('input');
				var p = document.createElement('p');
				checkbox.type = 'checkbox';
				checkbox.value = parties[i]['name'];
				tr.appendChild(checkbox);
				var partyname = document.createTextNode(parties[i]['name']);
				tr.appendChild(p);
				p.appendChild(partyname);
			}
		}
	} else {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			if (parties[i]['secular'] == false) {
				var tr = document.createElement('tr');
				tr.id = "trs";
				tr.value = parties[i]['name'];
				extrasection.appendChild(tr);
				var checkbox = document.createElement('input');
				var p = document.createElement('p');
				checkbox.type = 'checkbox';
				checkbox.value = parties[i]['name'];
				tr.appendChild(checkbox);
				var partyname = document.createTextNode(parties[i]['name']);
				tr.appendChild(p);
				p.appendChild(partyname);

			}
		}
	}

	if (checkbox.checked) {
		for (var g = 0; g < getTotalAmountOfPartys(); g++) {
			if (checkbox.value == parties[g]['name']) {
				data.push(checkbox.value);
			}
		}
		return data
	}
}

function checkparties() {
	console.log(data);
	if (data.length < 3) {
		alert("kies alstublieft minimaal 3 partijen");
	} else {
		showResults();
	}

}


function showResults() {
	console.log("data array", data);
	extrasection.style.display = 'none';
	if (skipcounter >= 15) {
		h1.innerHTML = "u heeft teveel vragen overgeslagen wij kunnen u geen goed antwoord geven";
		text.style.display = 'none';
	} else {

		for (var q = 0; q < questionHeaderArray.length; q++) {
			for (var i = 0; i < getTotalAmountOfPartys(); i++) {
				if (partiesThought[q][i]['position'] == awnsers[q]) {
					scoreboard[i]['score']++;
				}
			}
		}
		h1.innerHTML = "Uw mening komt het best overeen met :";
		scoreboard.sort(function (eerste, tweede) {
			return tweede.score - eerste.score;
		});
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			scorearray.push(scoreboard[i]['name']);
		}
		var results = scorearray.slice(0, 3);
		text.innerHTML = results;
	}
	console.log(results);
	console.log(scoreboard);
}