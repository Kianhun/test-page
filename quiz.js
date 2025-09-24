const questions = [
    {
        question: "1. 當你感到壓力時，你會怎麼做？",
        answers: [
            { text: "找朋友聊天", score: 1 },
            { text: "自己獨處一會兒", score: -1 }
        ]
    },
    {
        question: "2. 在團體活動中，你通常是？",
        answers: [
            { text: "主動發言的人", score: 1 },
            { text: "默默聽大家說話的人", score: -1 }
        ]
    },
    {
        question: "3. 你比較喜歡哪種工作方式？",
        answers: [
            { text: "團隊合作", score: 1 },
            { text: "獨立作業", score: -1 }
        ]
    },
    {
        question: "4. 週末假期，你更傾向於？",
        answers: [
            { text: "去參加派對或聚會", score: 1 },
            { text: "在家追劇或看書", score: -1 }
        ]
    },
    {
        question: "5. 認識新朋友時，你通常是？",
        answers: [
            { text: "會主動搭話", score: 1 },
            { text: "等別人來找你", score: -1 }
        ]
    }
];

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultMessage = document.getElementById('result-message');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.dataset.score = answer.score;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedScore = parseInt(e.target.dataset.score);
    score += selectedScore;
    
    currentQuestionIndex++;
    
    showQuestion();
}

function showResult() {
    questionText.style.display = 'none';
    answerButtons.style.display = 'none';
    resultMessage.style.display = 'block';

    let result = score >= 0 ? "外向 (E) 型人" : "內向 (I) 型人";
    resultMessage.innerText = `你的測驗結果是：${result}`;
}

showQuestion();
