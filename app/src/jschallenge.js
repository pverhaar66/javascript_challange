

var start = 0;
var questionNumber = 0;
var awnsers = [];
var questionHeaderArray = ["Bindend referendum", "Maatschappelijke dienstplicht", "Anoniem solliciteren", "Groepsbelediging", "Teelt en verkoop wiet", " Vervroegde vrijlating", "Vennootschapsbelasting",
	"Belasting hoogste inkomens", "Tijdelijke arbeidscontracten", "AOW-leeftijd 65", "Verzekering zzp'ers", "Leenstelsel studenten", "Geld cultuur", "Islamitische immigranten", "Kinderpardon", "Onderdak illegalen", "Hypotheekrente",
	"Verhuurdersheffing", "Schiphol", "Kilometerheffing", "Nieuwe wegen", "Kolencentrales", "Btw-tarief vlees", "Voltooid leven", "Landelijk zorgfonds", "Defensie-uitgaven", "Europees leger", "Ontwikkelingshulp", "EU-lidmaatschap"];
var questionTextArray = [
	"Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
	"Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
	"Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
	"Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.",
	"De teelt en verkoop van wiet moet legaal worden.",
	"De vervroegde vrijlating onder voorwaarden van gevangenen moet stoppen. Zij moeten hun straf helemaal uitzitten.",
	"De belasting over de winst van ondernemingen (vennootschapsbelasting) moet omlaag.",
	"De hoogste inkomensgroepen moeten meer belasting gaan betalen.",
	"De periode waarbinnen je meerdere tijdelijke arbeidscontracten na elkaar kunt afsluiten, moet langer worden dan twee jaar.",
	"De AOW-leeftijd moet weer 65 jaar worden.",
	"Er moet een verplichte verzekering tegen arbeidsongeschiktheid en ziekte komen voor alle zelfstandigen zonder personeel (zzp'ers).",
	"Het leenstelsel voor studenten moet worden afgeschaft. De basisbeurs moet weer terugkomen.",
	"Er moet meer geld naar kunst en cultuur.",
	"Nederland moet de grenzen sluiten voor islamitische immigranten.",
	"In Nederland opgegroeide kinderen van asielzoekers moeten hier kunnen blijven (kinderpardon).",
	"De regering moet gemeenten verbieden illegale vreemdelingen onderdak te geven.",
	"De regeling voor de aftrek van de hypotheekrente moet niet verder worden aangetast.",
	"Woningcorporaties moeten meer goedkope huurwoningen bouwen. Daarom moet de belasting die zij betalen over huurwoningen (verhuurdersheffing) worden afgeschaft.",
	"Luchthaven Schiphol moet kunnen uitbreiden.",
	"De regering moet niet het bezit van de auto, maar het aantal gereden kilometers belasten.",
	"Er moet meer geld naar de aanleg van nieuwe wegen.",
	"Alle kolencentrales mogen voorlopig open blijven.",
	"Voor vlees moet het hoge btw-tarief van 21 procent gaan gelden.",
	"Ouderen die vinden dat hun leven voltooid is moeten hulp kunnen krijgen om een einde aan hun leven te maken.",
	"Er moet een landelijk zorgfonds komen, zodat het stelsel van particuliere zorgverzekeraars kan verdwijnen.",
	"De uitgaven voor defensie moeten de komende jaren fors omhoog naar 2 procent van het nationale inkomen (de NAVO-norm).",
	"Er moet een Europees leger komen.",
	"Nederland moet meer geld uitgeven voor de ontwikkeling van arme landen.",
	"Nederland moet uit de Europese Unie (EU) stappen."
];


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
		backbutton.style.display = 'none';
		option1.style.display = 'none';
		option2.style.display = 'none';
		option3.style.display = 'none';
		optionskip.style.display = 'none';
		startbutton.style.display = 'block ';
	} else {
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
	if (questionNumber < 30) {
		return questionNumber++, NextQuestion();
	}

}

function downQuestion() {
	if (questionNumber > 0) {
		return questionNumber--, NextQuestion();
	}
}

function awnser(givenAwnser) {
	console.log(givenAwnser);
	return awnsers[questionNumber] = givenAwnser;
}

function NextQuestion() {

	if (start === 0) {
		upStart();
	}
	onloadHead();
	h1.innerHTML = questionHeaderArray[questionNumber];
	text.innerHTML = questionTextArray[questionNumber];
	backbutton.setAttribute("onClick", "minQuestion();");
	option1.setAttribute("onClick", "upQuestion(1)"); // option 1 = eens
	option2.setAttribute("onClick", "upQuestion(2)"); // option 2 = geen van beide
	option3.setAttribute("onClick", "upQuestion(3)"); // option 3 = niet eens
	optionskip.setAttribute("onClick", "upQuestion(4)"); // option 4 = skip
}