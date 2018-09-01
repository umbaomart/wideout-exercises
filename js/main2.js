// variables
const resetBtn = document.querySelector('.btn-reset');
const resetAnimationElements = document.querySelectorAll('.reset');

// eventListeners
document.addEventListener('DOMContentLoaded', function() {
    resetBtn.addEventListener('click', resetAnimation);
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