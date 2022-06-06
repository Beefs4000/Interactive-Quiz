const startGamebutton = document.getElementById('start-game');
const sectionTimer = document.getElementById('section-timer');
const landingPage = document.getElementById('landing-page');
const sectionQuestion = document.getElementById('section-question')
const sectionStartButton = document.getElementById('start-button')

// hide landing page after 5 seconds on loading
window.setTimeout(function(){
    landingPage.classList.add('hide');
}, 4000);

window.setTimeout(function(){
    sectionStartButton.classList.remove('hide')
}, 4000);

// When I click on the start button
startGamebutton.addEventListener('click', function(event){
// Show the timer
// Show the question
// Hide the landing
})
//Timer
// Once the timer starts
// we will subtract the 1 from the current timer count
// and update the DOM for every passing sec

// if timer expires while the game is not complete yet
// (show the end game screen)
// Stop the timer


// Question

// user click on choice

// if user click on correct answer
// give feedback correct
// move on to the next question

// if user click on wrong answer
// deduct timer
// show feedback wrong
// move on

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