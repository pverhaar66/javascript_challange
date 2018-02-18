

var start = 0;
var questionNumber = 28;
var showPartysThought = 1;
var skipCounter = 0;
var scoreArray = [];
var awnsers = [];
var awnsersMultiplier = [];
var data = [];
var secularity	 = "all";

var extraSection = document.getElementById('startsection');
var othersSection = document.getElementById('others');
var partyTextButton = document.getElementById('partytextbutton');
var partiesTextSection = document.getElementById('partiestext');
var backButton = document.getElementById('back');
var startButton = document.getElementById('start');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var optionSkip = document.getElementById('optionskip');
var text = document.getElementById('text');
var h1 = document.getElementById('h1');

function onloadHead() {
	if (start === 0) {
		backButton.style.display = 'none';
		startButton.style.display = 'block ';
		othersSection.style.display = 'none';
		partiesTextSection.style.display = 'none';
	}
	if (start === 1) {
		backButton.style.display = 'block';
		startButton.style.display = 'none ';
		othersSection.style.display = 'block';
		partiesTextSection.style.display = 'none';
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
		backButton.style.display = 'none';
		startButton.style.display = 'none '
		othersSection.style.display = 'none';
		partiesTextSection.style.display = 'none';
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
	if (givenAwnser === "skip") {
		return skipCounter++;
	} else {
		return awnsers[questionNumber] = givenAwnser;
	}
}

function nextQuestion() {
	if (start === 0) {
		upStart();
	}
	onloadHead();
	h1.innerHTML = questionHeaderArray[questionNumber];
	text.innerHTML = questionTextArray[questionNumber];
	partiesTextSection.innerHTML = partiesThought[questionNumber];
	backButton.setAttribute("onClick", "downQuestion();");
	option1.setAttribute("onClick", "upQuestion('pro')"); // option 1 = eens == pro
	option2.setAttribute("onClick", "upQuestion('ambivalent')"); // option 2 = geen van beide == none of both
	option3.setAttribute("onClick", "upQuestion('contra')"); // option 3 = niet eens == against
	optionSkip.setAttribute("onClick", "upQuestion('skip')"); // option 4 = skip == none
	partyTextButton.setAttribute("onClick", "switchButtonPartyText()");//


}
function switchButtonPartyText() {
	if (showPartysThought == 0) {
		partiesTextSection.style.display = 'none';
		return showPartysThought = 1;
	}
	if (showPartysThought == 1) {
		partiesTextSection.style.display = 'block';
		return showPartysThought = 0;
	}
}
function changesecu() {
	// extrasection.innerHTML = ""; makes the section empty so it wont duplicate on sort
	extraSection.innerHTML = "";
	if (secularity == "all") {
		return secularity = "true", getResults();
	}
	if (secularity == "true") {
		return secularity = "false", getResults();
	}
	if (secularity == "false") {
		return secularity = "all", getResults();
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
	extraSection.appendChild(btn);

	var button = document.createElement("button");
	var t = document.createTextNode("Zie het reultaat");
	button.appendChild(t);
	button.id = "savebutton";
	button.setAttribute("onclick", "checkparties()");
	extraSection.appendChild(button);
	if (secularity == "all") {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			var tr = document.createElement('tr');
			tr.id = "trs";
			tr.value = parties[i]['name'];
			extraSection.appendChild(tr);
			var checkbox = document.createElement('input');
			var p = document.createElement('p');
			checkbox.type = 'checkbox';
			checkbox.value = parties[i]['name'];
			checkbox.classList.add("resultCheckbox");
			tr.appendChild(checkbox);
			var partyname = document.createTextNode(parties[i]['name']);
			tr.appendChild(p);
			p.appendChild(partyname);
			checkbox.addEventListener("change", function (event) {
				if (event.target.checked == true) {
					console.log("true")
					data.push(event.target.value)
					console.log(data);
				}
				if (event.target.checked == false) {
					var dtaalength = data.length;
					for (var datainfo = 0; datainfo < dtaalength; datainfo++) {
						if (event.target.value == data[datainfo]) {
							data[datainfo] = null;
							console.log(data);
						}
					}
				}
			});

		}
	}
	if (secularity == "true") {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			if (parties[i]['secular'] == true) {
				var tr = document.createElement('tr');
				tr.id = "trs";
				tr.value = parties[i]['name'];
				extraSection.appendChild(tr);
				var checkbox = document.createElement('input');
				var p = document.createElement('p');
				checkbox.type = 'checkbox';
				checkbox.value = parties[i]['name'];
				tr.appendChild(checkbox);
				var partyname = document.createTextNode(parties[i]['name']);
				tr.appendChild(p);
				p.appendChild(partyname);
				checkbox.addEventListener("change", function (event) {
					if (event.target.checked == true) {
						console.log("true")
						data.push(event.target.value)
						console.log(data);
					}
					if (event.target.checked == false) {
						var dtaalength = data.length;
						for (var datainfo = 0; datainfo < dtaalength; datainfo++) {
							if (event.target.value == data[datainfo]) {
								data[datainfo] = null;
								console.log(data);
							}
						}
					}
				});
			}
		}
	} else {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			if (parties[i]['secular'] == false) {
				var tr = document.createElement('tr');
				tr.id = "trs";
				tr.value = parties[i]['name'];
				extraSection.appendChild(tr);
				var checkbox = document.createElement('input');
				var p = document.createElement('p');
				checkbox.type = 'checkbox';
				checkbox.value = parties[i]['name'];
				tr.appendChild(checkbox);
				var partyname = document.createTextNode(parties[i]['name']);
				tr.appendChild(p);
				p.appendChild(partyname);
				checkbox.addEventListener("change", function (event) {
					if (event.target.checked == true) {
						console.log("true")
						data.push(event.target.value)
						console.log(data);
					}
					if (event.target.checked == false) {
						var dtaalength = data.length;
						for (var datainfo = 0; datainfo < dtaalength; datainfo++) {
							if (event.target.value == data[datainfo]) {
								data[datainfo] = null;
								console.log(data);
							}
						}
					}
				});

			}
		}
	}
}

function checkparties() {
	if (data.length < 3) {
		alert("kies alstublieft minimaal 3 partijen");
	} else {
		showResults();
	}
}


function showResults() {
	extraSection.style.display = 'none';
	if (skipCounter >= 15) {
		h1.innerHTML = "u heeft teveel vragen overgeslagen wij kunnen u geen goed antwoord geven";
		text.style.display = 'none';
	} else {
		//checks if party name is in the data array, if so then there score gets +5;
		for (var p = 0; p < data.length; p++) {
			for (var i = 0; i < getTotalAmountOfPartys(); i++) {
				if (parties[i]['name'] == data[p]) {
					scoreboard[i]['score'] = +5;
				}
			}
		}
		// checks if the awnsers of the partys is the same as the given awnsers, if so they get a +1 score for every awnser thats the same
		for (var q = 0; q < questionHeaderArray.length; q++) {
			for (var i = 0; i < getTotalAmountOfPartys(); i++) {
				if (partiesThought[q][i]['position'] == awnsers[q]) {
					scoreboard[i]['score']++;
				}
			}
		}
		//sorts the partys on score and displays the top 3
		h1.innerHTML = "Uw mening komt het best overeen met :";
		scoreboard.sort(function (eerste, tweede) {
			return tweede.score - eerste.score;
		});
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			scoreArray.push(scoreboard[i]['name']);
		}
		var results = scoreArray.slice(0, 3);
		text.innerHTML = results;
	}
	console.log(results);
	console.log(scoreboard);
}