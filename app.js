const quizData = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Entomology is the science that studies",
        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks",
        correct: "b",
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",
        correct: "b",
    },
    {
        question: "Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        correct: "b",
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        a: "Physics and Chemistry",
        b: "Physiology or Medicine",
        c: "Literature, Peace and Economics",
        d: "All of the above",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){


    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText =  currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};
function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked =false);
};

function getSelected(){
    let answer;
    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer = answerEl.id
        };
    });
    return answer;
};



submitBtn.addEventListener('click',()=> 
{
    const answer = getSelected()
    if(answer){
        if(answer== quizData[currentQuiz].correct){
            score++;

        }
        currentQuiz++;
        if(currentQuiz< quizData.length)
        {
            loadQuiz();
        }
        else {
            quiz.innerHTML = ` <h2>Your Answer ${score}/${quizData.length}question correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }


    }
        
    

});
