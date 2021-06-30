const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const paragraph =document.querySelector('.hide_h1')
const quiz =document.querySelector('.hide_p')
const controls=document.querySelector('.controls')
const list=document.querySelector('.input_name')
const inputName=document.querySelector('.list')
const output=document.querySelector('.output')

let counter =0;
let score =0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
 
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  paragraph.classList.add('hide')
  quiz.classList.add('hide')
  list.classList.add('hide')
  inputName.classList.add('hide')

  controls.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  if(counter<=10){
    output.innerHTML =counter++ + '/10';
  
    
  }else{
    counter=0;
    controls.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    output.classList.add('hide')
    controls.style.background="#B281A2"
    const finalScore= document.createElement('div')
    controls.appendChild(finalScore)
    finalScore.innerHTML="You score is"+" " + score;
    finalScore.classList.add('score')
  }
  
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    
    button.innerText = answer.text
    button.classList.add('btn')

    if (answer.correct) {
      button.dataset.correct = answer.correct
   
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
   score++;
   
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '5', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: false },
      { text: 'Dev Ed', correct: false },
      { text: 'Fun Fun Function', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, {
    question: 'What is 3 * 3?',
    answers: [
      { text: '6', correct: false },
      { text: '9', correct: true },
      { text: '11', correct: false },
      { text: '20', correct: false },
    ]
  }, {
    question: 'What is 5*5 ?',
    answers: [
      { text: '25', correct: true },
      { text: '35', correct: false },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, {
    question: 'What is 4 * 4?',
    answers: [
      { text: '6', correct: false },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '16', correct: true },
    ]
  }, {
    question: 'What is 6 * 6?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '55', correct: false },
      { text: '36', correct: true },
    ]
  }, {
    question: 'What is 1 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '2', correct: true },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, 
]











