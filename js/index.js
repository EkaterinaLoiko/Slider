let offset = 0;
const sliderLine = document.querySelector('.slider-line');

function changePicture() {
    offset += 650;
    if (offset > 2600) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
}

document.querySelector('.right').addEventListener('click',changePicture);

document.querySelector('.left').addEventListener('click', function() {
    offset = offset - 650;
    if (offset < 0) {
        offset = 2600;
    }
    sliderLine.style.right = offset + 'px';
    clearInterval(newInterval);
})

let time = 5000;
newInterval = setInterval(changePicture, time);