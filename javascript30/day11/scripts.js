//get all elements
const player = document.querySelector('.player');
const viewer = document.querySelector('.viewer');
// const viewer = document.querySelectorAll('video')
const control = document.querySelector('.player__controls');
const progress = document.querySelector('.progress');
const filled = document.querySelector('.progress__filled');
const button = document.querySelector('.toggle');
const ranges = document.querySelectorAll('input[type="range"]');
const skips = document.querySelectorAll('[data-skip]');
//complete function
function togglePlay() {
    if (viewer.paused) {
        viewer.play();
        button.innerHTML = '&#x23F8;';

    } else {
        viewer.pause();
        button.innerHTML = '&#x25B6;';
    }
}

function handleRangeUpdate() {
    viewer[this.name] = this.value;
}

function handleTimeUpdate() {
    viewer.currentTime += parseFloat(this.dataset.skip);

}

function handleProgress() {
    const precent = viewer.currentTime / viewer.duration * 100;
    filled.style.flexBasis = `${precent}%`;
}

function updateTime(e) {
    if (editProgress) {
        newTime = e.offsetX / progress.offsetWidth * viewer.duration;
        viewer.currentTime = newTime;
    }

}
//add event listener
viewer.addEventListener('click', togglePlay);
button.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
skips.forEach(skip => skip.addEventListener('click', handleTimeUpdate));
viewer.addEventListener('timeupdate', handleProgress);

let editProgress = false;
progress.addEventListener('mousedown', (e) => {
    editProgress = true;
    updateTime(e);
});
progress.addEventListener('mouseup', () => editProgress = false);
progress.addEventListener('mousemove', updateTime);