// variables
const resetBtn = document.querySelector('.btn-reset');
// top
const topSocial = document.querySelector('.social');
const topAssemble = document.querySelector('.assemble');
// mid
const circle = document.querySelector('.circle');
const ironMan = document.querySelector('.mid-iron');
// bot
const avengersText = document.querySelector('.bot-avengtitle');
const bigLetterA = document.querySelector('.bot-big-a');


// eventListener
document.addEventListener('DOMContentLoaded', function() {
    // resetBtn eventListener for reset
    resetBtn.addEventListener('click', resetAnimation);
});


// functions
function resetAnimation() {
    // reset for the assemble text
    topAssemble.style.animation = 'none';
    topAssemble.offsetHeight;
    topAssemble.style.animation = null;
    // reset for social icons
    topSocial.style.animation = 'none';
    topSocial.offsetHeight;
    topSocial.style.animation = null;
    // reset for circle
    circle.style.animation = 'none';
    circle.offsetHeight;
    circle.style.animation = null;
    // reset for ironman
    ironMan.style.animation = 'none';
    ironMan.offsetHeight;
    ironMan.style.animation = null;
    // reset for avengers marvel
    avengersText.style.animation = 'none';
    avengersText.offsetHeight;
    avengersText.style.animation = null;
    // reset for bot big a
    bigLetterA.style.animation = 'none';
    bigLetterA.offsetHeight;
    bigLetterA.style.animation = null;
}