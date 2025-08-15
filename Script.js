// --- DOM ELEMENTS ---
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const loadingSpinner = document.getElementById('loading-spinner');
const resultsContent = document.getElementById('results-content');
const feelingInput = document.getElementById('feeling-input');
const feelingError = document.getElementById('feeling-error');
const startQuizBtn = document.getElementById('start-quiz-btn');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const quizError = document.getElementById('quiz-error');
const nextQuestionBtn = document.getElementById('next-question-btn');
const detectedEmotion = document.getElementById('detected-emotion');
const emotionConfidence = document.getElementById('emotion-confidence');
const quizScore = document.getElementById('quiz-score');
const mentalStatus = document.getElementById('mental-status');
const recommendation = document.getElementById('recommendation');
const restartBtn = document.getElementById('restart-btn');

// --- QUIZ DATA ---
const questions = [
    { q: "How often have you felt little interest or pleasure in doing things?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often have you felt nervous or anxious without a specific reason?", o: [["A. Rarely", 1], ["B. Occasionally", 2], ["C. Frequently", 3], ["D. Almost always", 4]] },
    { q: "How often have you felt sad, hopeless, or down?", o: [["A. Rarely", 1], ["B. Occasionally", 2], ["C. Frequently", 3], ["D. Almost every day", 4]] },
    { q: "Do you find yourself having difficulty concentrating or focusing on tasks?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Frequently", 3], ["D. Almost always", 4]] },
    { q: "How often have you felt physically exhausted or lacking energy?", o: [["A. Rarely", 1], ["B. Occasionally", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Have you felt overly critical of yourself or experienced frequent negative thoughts?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost always", 4]] },
    { q: "How would you describe your appetite recently?", o: [["A. Normal or consistent", 1], ["B. Mild changes", 2], ["C. Noticeable changes", 3], ["D. Significant changes", 4]] },
    { q: "How often have you felt detached or withdrawn from others?", o: [["A. Rarely", 1], ["B. Occasionally", 2], ["C. Frequently", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you feel a sense of purpose or find meaning in your activities?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "Have you experienced any disturbances in your sleep patterns?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost every night", 4]] },
    { q: "How often do you feel overwhelmed by your responsibilities?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you find it hard to enjoy activities that you used to enjoy?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you feel restless or fidgety?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you feel irritable or angry?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you find it difficult to relax or unwind?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you have trouble making decisions?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you feel like you are a burden to others?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you engage in self-care activities?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "Do you find yourself ruminating on negative experiences?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you feel a lack of control over your life?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you compare yourself to others?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you feel connected to friends or family?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel a sense of achievement in your daily tasks?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you avoid social situations?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you feel that you are growing and learning in life?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel like your problems are too much to handle?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "How often do you experience feelings of guilt or shame?", o: [["A. Rarely", 1], ["B. Sometimes", 2], ["C. Often", 3], ["D. Almost all the time", 4]] },
    { q: "Do you have a support system you can rely on?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel that you have the skills to cope with stress?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel that you are living in the moment?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel optimistic about the future?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] },
    { q: "How often do you feel that you are being true to yourself?", o: [["A. Almost always", 1], ["B. Frequently", 2], ["C. Occasionally", 3], ["D. Rarely", 4]] }
];
const emotionLabels = ["sadness", "joy", "love", "anger", "fear", "surprise"];

// --- APP STATE ---
let selectedQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let userEmotion = { emotion: "N/A", confidence: 0 };
let selectedChoiceValue = null;

// --- FUNCTIONS ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeQuiz() {
    selectedQuestions = shuffleArray([...questions]).slice(0, 10);
    currentQuestionIndex = 0;
    totalScore = 0;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.q;
        questionCounter.textContent = currentQuestionIndex + 1;
        choicesContainer.innerHTML = '';
        selectedChoiceValue = null;
        quizError.classList.add('hidden');

        currentQuestion.o.forEach(([choiceText, points]) => {
            const button = document.createElement('button');
            button.textContent = choiceText;
            button.classList.add('option-btn');
            button.dataset.points = points;
            button.onclick = () => selectChoice(button, points);
            choicesContainer.appendChild(button);
        });
    }
}

function selectChoice(selectedButton, points) {
    const buttons = choicesContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');
    selectedChoiceValue = points;
    quizError.classList.add('hidden');
}

function handleNextQuestion() {
    if (selectedChoiceValue === null) {
        quizError.classList.remove('hidden');
        return;
    }
    totalScore += selectedChoiceValue;
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

async function detectEmotionWithAI(text) {
    // Simulated AI detection (Replace with API call if needed)
    const randomEmotion = emotionLabels[Math.floor(Math.random() * emotionLabels.length)];
    const randomConfidence = Math.random() * (0.98 - 0.75) + 0.75;
    userEmotion = { 
        emotion: randomEmotion.charAt(0).toUpperCase() + randomEmotion.slice(1), 
        confidence: randomConfidence 
    };
}

async function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    loadingSpinner.style.display = 'flex';
    resultsContent.classList.add('hidden');
    
    await detectEmotionWithAI(feelingInput.value);

    let status = "";
    let recommendationText = "";

    if (totalScore <= 15) {
        status = "Positive Mental State";
        recommendationText = "You likely have a stable mental state with manageable stress levels. Keep up with your positive habits!";
    } else if (totalScore <= 25) {
        status = "Moderate Signs of Stress";
        recommendationText = "You may have mild symptoms of stress or low mood. Consider incorporating stress management practices like mindfulness or exercise.";
    } else if (totalScore <= 35) {
        status = "Elevated Mental Health Concerns";
        recommendationText = "You're showing noticeable signs of mental strain. It may be beneficial to speak with friends, family, or a counselor.";
    } else {
        status = "Significant Distress";
        recommendationText = "Your results indicate high levels of distress. We strongly recommend seeking support from a mental health professional.";
    }

    detectedEmotion.textContent = userEmotion.emotion;
    emotionConfidence.textContent = `(Confidence: ${userEmotion.confidence.toFixed(2)})`;
    quizScore.textContent = `${totalScore} / 40`;
    mentalStatus.textContent = status;
    recommendation.textContent = recommendationText;
    
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        resultsContent.classList.remove('hidden');
    }, 1500);
}

function restartApp() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    feelingInput.value = '';
}

// --- EVENT LISTENERS ---
startQuizBtn.addEventListener('click', () => {
    if (feelingInput.value.trim() === '') {
        feelingError.classList.remove('hidden');
    } else {
        feelingError.classList.add('hidden');
        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        initializeQuiz();
    }
});
nextQuestionBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', restartApp);
