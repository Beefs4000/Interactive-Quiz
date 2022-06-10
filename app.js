const startGamebutton = document.getElementById('start-game');
const headerTimer = document.getElementById('header-banner');
const landingPage = document.getElementById('landing-page');
const sectionQuestion = document.getElementById('section-question')
const sectionStartButton = document.getElementById('start-button')
const hTimer = document.getElementById('timer')
const sectionGameOver = document.getElementById('section-end-game')

const questionTitle = document.getElementById('question-title')
const questionChoices = document.getElementById('question-choices')

const objectLength = Object.keys(questions).length;

let timeRemaining = 5;
let timerId;

// Question
function generateQuestion(questionIndex) {

    // Retrieve the question
    const question = questions[questionIndex]

    // Create the question structure
    // Set Title - Get 1st property 'title'
    questionTitle.textContent = question.title;

    //Set question - Get 2nd property 'choice'
    const choices = question.choices;
    // Clear question choices list before starting loop
    questionChoices.textContent = "";



    // Need a For loop to run through the choices and create <li> in HTML
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        // <li>
        //     <button class="question-choice">A</button>
        // </li>

        // Variables required to create the List and Button elements
        const Li = document.createElement('li');

        const button = document.createElement('button');
        // set button class and text content (choice)

        button.setAttribute('class', 'question-choice');
        button.textContent = choice.title;

        // Add event listener to newly created buttons
        button.addEventListener('click', function (Event){

            // user click on choice

            // if user click on correct answer
            if(choice.isAnswer){
            // give feedback correct

            } else {
             // if user click on wrong answer
            // deduct timer
            timeRemaining -= 10;
            // show feedback wrong   
            }
            // move on to the next question, refer to question index in genQuest function
            // If user click on the final question
            const nextQuestionIndex = questionIndex + 1;

            if(nextQuestionIndex >= questions.length){
                // end game
                return endGame()
            }
            
            // move on to the next question
            generateQuestion(nextQuestionIndex);
            
        
        });

        // Add button to Li
        Li.append(button);

        // Add Li to Question choices(HTML)
        questionChoices.append(Li);

    }
}

// hide landing page after 5 seconds on loading
window.setTimeout(function () {
    landingPage.classList.add('hide');
}, 4000);

window.setTimeout(function () {
    sectionStartButton.classList.remove('hide')
}, 4000);

// When I click on the start button
startGamebutton.addEventListener('click', function (event) {
    // Show the timer
    hTimer.textContent = timeRemaining
    headerTimer.classList.remove('hide');
    // Hide Start button
    sectionStartButton.classList.add('hide');
    // Show the question
    sectionQuestion.classList.remove('hide');
    hTimer.textContent = timeRemaining;
    startTimer();
    generateQuestion(0);

    // Hide the landing
})

function endGame() {

    // (show the end game screen)
    sectionQuestion.classList.add('hide')
    // Hide question section
    sectionGameOver.classList.remove('hide');
    // Hide timer 
    hTimer.classList.add('hide');
    // Stop the timer
    clearInterval(timerId);
}


function startTimer() {
    //Timer
    // Once the timer starts
    timerId = setInterval(function () {
        // we will subtract the 1 from the current timer count
        timeRemaining -= 1;
        // and update the DOM for every passing second
        hTimer.textContent = timeRemaining;
        // if timer expires while the game is not complete yet
        if (timeRemaining <= 0) {
            endGame();
        }

    }, 1000);
}




// if user clicks on the choice of the final question
// end game (see timer end game)

// Render the Highscore in the DOM

// user types in Initals in the input box

// What logic, on every keystroke what did the user enter.

// user hit the enter key
// get the user initals & highscore
// save

// if user didn't type anything in the input box
// do not save, show an error message in the DOM

// user click on the save button
// Get the user initials and & high score
// save

// once we save
// go to highscore page

// Highscore page
// Generate highscore list

// if user clicked the back button