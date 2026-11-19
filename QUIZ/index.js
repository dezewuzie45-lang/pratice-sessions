const questions = [
  {
    question: "Which tag creates aa link in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
     answer:1,
  },
 
    {
    question: "What tag is used for interactivity on the web page?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer:2,
  },



];

let questionNumber = 1;

const h2Question = document.querySelector(".question-h2");
const questionList = document.querySelector(".options-box");
const btnOptions = document.querySelectorAll(".option");
const progress = document.querySelector(".progress p:first-child");
const nxt = document.querySelector(".nxt");
const answerMessage = document.querySelector(".nxt");
let scoreValue = document.querySelector(".score-value");



function showContent() {
  progress.textContent = "Question" + questionNumber  + "of " + questions.length;

  let current = questions[questionNumber];
  h2Question.textContent = current.question;

  for (let i = 0; i < btnOptions.length; i++) {
     btnOptions[i].textContent = current.options[i];

  }
}
// btnOptions.forEach((item) => {
//   item.addEventListener("click", function () {
//     nxt.classList.toggle("hidden");
//   });
//   });





questionList.addEventListener("click", (e) => {
  let btnClick = e.target.closest(".option");
  let ansIndex = Array.from(btnOptions).indexOf(btnClick);
  let currentQuestion = questions[questionNumber];
  
  if (ansIndex === currentQuestion.answer) {
    score++;
    scoreValue.textContent = score;
    btnOptions[ansIndex].style.backgroundColor = "green";
    btnOptions[ansIndex].style.color = "white";
    nxt.classList.add("hidden");

  }else{
    nxt.classList.add("hidden")
    answerMessage.textContent = `Not quite! The answer is ${btnOptions[currentQuestion.answer].textContent}`;
    btnOptions[ansIndex].style.backgroundColor = "red";
    btnOptions[currentQuestion.answer].style.backgroundColor = "green";
  }
  for(let index = 0; index < btnOptions.length; index++){
    btnOptions[index].disabled = true;
  }
}
);
showContent();

