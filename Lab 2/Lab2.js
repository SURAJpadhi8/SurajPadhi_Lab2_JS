
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text, options, answer) {
    this.questionText = text;
    this.options = options;
    this.answer = answer;
}

Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function (ans) {
    if (this.getQuestionByIndex().answer == ans) {
        this.score++;
    }
    this.questionIndex++;

}
Quiz.prototype.isEnded = function () {
    return this.questionIndex == this.questions.length;
}
let questions = [
    new Question('Javascript Suppports:-',
        ['Function', 'XHTML','CSS', 'HTML'], 'Function'),

    new Question('Which Language used for styling Web pages:-',
        ['HTML', 'JQuery','CSS', 'XML'], 'CSS'),

    new Question('Which is not a Javascript Language:-',
        ['Python', 'JQuery', 'Django', 'NodeJS'], 'Python'),

    new Question('Which is used to connect to Database:-',
        ['PHP', 'HTML' ,'JS', 'ALL'], 'PHP'),

    new Question('JavaScript is a:-',
        ['Language', 'Programming Language', 'Development', 'ALL'], 'Programming Language')
];

let quiz = new Quiz(questions);

/* Load Questions on HTML */

function displayQuestions() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionByIndex().questionText;
        let choices = quiz.getQuestionByIndex().options;
        for (let i = 0; i < choices.length; i++) {
            var elem = document.getElementById("choice" + i);
            elem.innerText = choices[i];
            handleClickOnButton("btn" + i, choices[i]);
        }

    }


}

function handleClickOnButton(id, choice) {
    let buttonElement = document.getElementById(id)
    buttonElement.onclick = function () {
        quiz.checkOptionWithAnswer(choice);
        displayQuestions();
    }


 
    showProgres();

}
displayQuestions();

function showProgres() {
    let currentIndex = quiz.questionIndex + 1;
    let questionProgressElement = document.getElementById("progress");
    questionProgressElement.innerText = `Question ${currentIndex} of ${quiz.questions.length}`;
}


function showScores() {
    let result = `<h1>RESULT</h1><h2 id="score">Your Score ${quiz.score}.<br><br>Marks Percetage is ${(quiz.score / questions.length) * 100}%</h2>`;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = result;

}