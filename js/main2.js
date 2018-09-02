// variables
const resetBtn = document.querySelector('.btn-reset');
const resetAnimationElements = document.querySelectorAll('.reset');
const avengersContainer = document.querySelector('.container');

// eventListeners
document.addEventListener('DOMContentLoaded', function() {
    resetBtn.addEventListener('click', resetAnimation);
    avengersContainer.addEventListener('click', goNewTab);
});

// functions
function resetAnimation() {
    // set into array all the elements with animation and use the forEach function
    resetAnimationElements.forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
    });
}

// function for new tab when the image is cick
function goNewTab() {
    window.open('https://www.google.com.ph');
}
