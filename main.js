let main = document.querySelector(".main");
let homeContent = document.querySelector(".home-content");
let container = document.querySelector(".container");
let quizApp = document.querySelector(".quiz-app");
let startBtn = document.querySelector(".start-btn");
let rulesBox = document.querySelector(".rules-box");
let backBtn = document.querySelector(".back-btn");
let continueBtn = document.querySelector(".continue-btn");
let nextQuizBtn = document.querySelector(".next-quiz-btn");
let beginQuizBtn = document.querySelector(".begin-quiz-btn");
let exitQuizBtn = document.querySelector(".exit-quiz-btn");
let optionList = document.querySelector(".options-list");
let questionIamIN = document.querySelector(".iamhere");



startBtn.onclick = () => {
    homeContent.classList.remove("show");
    rulesBox.classList.add("show");
    main.classList.add("blur");
}

backBtn.onclick = () => {
    homeContent.classList.add("show");
    rulesBox.classList.remove("show");
    main.classList.remove("blur");
}

continueBtn.onclick = () => {
    rulesBox.classList.remove("show");
    container.classList.add("drag");
    optionList.classList.add("pointerclass");
    main.classList.remove("blur");
    quizApp.classList.add("appear");
    nextQuizBtn.classList.add("pointerclass");
}

beginQuizBtn.onclick = () => {
    nextQuizBtn.classList.remove("pointerclass");
    exitQuizBtn.classList.add("pointerclass");
    optionList.classList.remove("pointerclass");
    beginQuizBtn.classList.add("pointerclass");

}

exitQuizBtn.onclick = () => {
    homeContent.classList.add("show");
    container.classList.remove("drag");
}

nextQuizBtn.onclick = () => {
    nextQuizBtn.classList.add("pointerclass")
    if (questionIamIN.innerHTML !== "5") {
        questionIamIN.innerHTML++;
        // option[k].classList.remove("disabled");
    } else {
        questionCount.innerHTML;
    }


    if (questionCount < questions.length - 1) {
        questionCount++;

        showQuestion(questionCount);
    } else {
        // exitQuizBtn.classList.remove("pointerclass");
        console.log("hello");
        // quizApp.classList.remove("appear");
        // nextQuizBtn.classList.add("pointerclass")
        // beginQuizBtn.classList.remove("pointerclass");
        // beginQuizBtn.innerHTML = "Finish"; 
        showResult();
    }

    optionSelected();

}

// beginQuizBtn.onclick = () => {
//     if (beginQuizBtn.innerHTML === "Finish") {
//         quizApp.classList.remove("appear");
//     } else {
//         quizApp.classList.add("appear");
//     }
// }


let questionCount = -1;
let optionCount = 0;

function showQuestion(index) {
    const questionText = document.querySelector(".question-text");
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;
    

    let optoinTag = `<div class="option">${questions[index].options[0]}</div>
    <div class="option">${questions[index].options[1]}</div>
    <div class="option">${questions[index].options[2]}</div>
    <div class="option">${questions[index].options[3]}</div>`;
    
    optionList.innerHTML = optoinTag;
}



function optionSelected(answer) {
    const option = document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
    let pointsOfUser = document.querySelector(".points-of-user");
    pointsOfUser.innerHTML = "0";
    for (let k = 0; k <= option.length; k++) {
        let userAnswer = answer.textContent;
        let correctAnswer = questions[questionCount].answer;
        if (userAnswer === correctAnswer) {
            pointsOfUser.innerHTML++;
            console.log(pointsOfUser);
            answer.classList.add("correct");
            option[k].classList.add("disabled");
            nextQuizBtn.classList.remove("pointerclass");
        } else {
            answer.classList.add("incorrect")
            nextQuizBtn.classList.remove("pointerclass");
            option[k].classList.add("disabled");
        }
    }
    
}




function showResult() {
    quizApp.classList.remove("appear");
    let resultBoxSmall = document.querySelector(".result-box-small")
    resultBoxSmall.classList.add("appear");
    // const scoreText = document.querySelector(".scoretext");
    // scoreText.innerHTML = `Your Score is ${userPoints} From 5`;
}


