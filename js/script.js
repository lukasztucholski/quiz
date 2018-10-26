var validatingButton = document.querySelector(".validating-button");
var showCorrectAnswersButton = document.querySelector(".show-correct-answers");
var resetButton = document.querySelector(".reset-button");
var pointsDiv = document.querySelector(".default-points");
var pointsSpan = document.querySelector(".points");
var points = 0;
var inputs = document.querySelectorAll(".questions input");

var valuesOfAnswers = [];
for (var i = 0; i < inputs.length; i++) {
    valuesOfAnswers.push(inputs[i].value)
}

var correctAnswers = [
    inputs[valuesOfAnswers.indexOf("1906-foundedyear")],
    inputs[valuesOfAnswers.indexOf("reyman-stadiumnamed")],
    inputs[valuesOfAnswers.indexOf("lopez-latesttopscorer")],
    inputs[valuesOfAnswers.indexOf("bialagwiazda-nickname")],
    inputs[valuesOfAnswers.indexOf("13-totalchampions")],
    inputs[valuesOfAnswers.indexOf("1927-firstchampion")],
    inputs[valuesOfAnswers.indexOf("glowacki-performances")],
    inputs[valuesOfAnswers.indexOf("33k-capacity")],
    inputs[valuesOfAnswers.indexOf("1997-telefonika")],
    inputs[valuesOfAnswers.indexOf("2-alltimetable")]
];

function refreshInputs() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}
refreshInputs();

function addPoints() {
    for (var i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i].checked == true) points++;
    }
}
function cleanPoints() {
    points = 0;
}
function showPoints() {
    pointsSpan.textContent = points + "/" + correctAnswers.length;
}
function checkPoints() {
    cleanPoints();
    addPoints();
    showPoints();
    pointsDiv.classList.add("show-points");
}
function showCorrectAnswers() {
    for (var i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].nextElementSibling.classList.add("correct-answer");
    }
}
function resetQuiz() {
    refreshInputs();
    cleanPoints();
    showPoints();
    pointsDiv.classList.remove("show-points");
    for (var i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].nextElementSibling.classList.remove("correct-answer");
    }
}
validatingButton.addEventListener("click", checkPoints);
showCorrectAnswersButton.addEventListener("click", showCorrectAnswers);
resetButton.addEventListener("click", resetQuiz);
