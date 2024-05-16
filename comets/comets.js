

const slides = document.querySelectorAll(".slide");
let current = 0;

function hideSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
}

const leftArrows = document.querySelectorAll('.left');
const rightArrows = document.querySelectorAll('.right');

rightArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        hideSlides();
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
        slides[current].style.opacity = 0.4;
        
        var x = 0.4;
        var intX = setInterval(function(){
            x+=0.1
            slides[current].style.opacity = x;
            if (x>=1){
                clearInterval(intX);
                x = 0.4
            }
        },100);
    });
});

leftArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        hideSlides();
        current = (current - 1 + slides.length) % slides.length;
        slides[current].classList.add('active');
        slides[current].style.opacity = 0.4;
        
        var x = 0.4;
        var intX = setInterval(function(){
            x+=0.1
            slides[current].style.opacity = x;
            if (x>=1){
                clearInterval(intX);
                x = 0.4
            }
        },100);
    });
});

function start() {
    hideSlides();
    slides[current].classList.add('active');
}

start();