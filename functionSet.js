const html = document.querySelector('html')
const body = document.querySelector('body');
const nav = document.querySelector('#nav');
const navText = document.querySelector('#navText')
const aboutText = document.querySelector('#aboutText');
const dropIcon = document.querySelector('#dropIcon');
const robotIcon = document.querySelector('#robotIcon');
const closeIcon = document.querySelector('#closeIcon');
const dropMenu = document.querySelector('#drop-down-list');
const dropItem = document.querySelectorAll('#drop-down-item > p');
const works = document.querySelector('#works')

let dropMenuIsOpen = false;


const toggleDropDownMenu = () => {
    if (dropMenuIsOpen) {
        dropMenuIsOpen = false;

        nav.classList.remove('day');
        nav.classList.add('night');
        nav.classList.add('max-height-20');
        nav.style.height = '20vh';

        robotIcon.classList.remove('bg-day');
        robotIcon.classList.remove('text-night');
        robotIcon.classList.add('bg-night');
        robotIcon.classList.add('text-day');

        dropIcon.classList.remove('d-none');
        dropIcon.classList.add('d-md-block');
        closeIcon.classList.add('d-none');


        dropMenu.classList.add('fade-in')
        dropMenu.classList.add('from-top')
    } else {
        dropMenuIsOpen = true;

        nav.classList.remove('night');
        nav.classList.remove('max-height-20');
        nav.classList.add('day');
        nav.style.height = '120vh';


        robotIcon.classList.remove('bg-night');
        robotIcon.classList.remove('text-day');
        robotIcon.classList.add('bg-day');
        robotIcon.classList.add('text-night');

        dropIcon.classList.add('d-none')
        dropIcon.classList.remove('d-md-block');
        closeIcon.classList.remove('d-none');

        dropMenu.classList.remove('fade-in');
        dropMenu.classList.remove('from-top');
    }

}

dropIcon.addEventListener('click', toggleDropDownMenu);
closeIcon.addEventListener('click', toggleDropDownMenu);
dropItem.forEach(el=>el.addEventListener('click',toggleDropDownMenu));

window.addEventListener('load', () => {
    navText.classList.remove('fade-in');
    navText.classList.remove('from-top');
    aboutText.classList.remove('fade-in');
    aboutText.classList.remove('from-bottom');

})

const handleFadeIn = () => {
    const left = document.querySelectorAll('.from-left');
    const right = document.querySelectorAll('.from-right');
    
    if (left.length == 0 && right.length == 0) {
        window.removeEventListener('scroll', handleFadeIn)
    }

    if (left) {
        left.forEach(el => {
            if (window.innerHeight + window.scrollY >= (el.offsetTop + el.offsetHeight / 2)) {
                el.classList.remove('fade-in');
                el.classList.remove('from-left');
            }
        })
    }
    if (right) {
        right.forEach(el => {
            if (window.innerHeight + window.scrollY >= (el.offsetTop + el.offsetHeight / 2)) {
                el.classList.remove('fade-in');
                el.classList.remove('from-right');
            }
        })
    }

    // if(left.length ==0 && right.length ==0){
    //     console.log('done');
    // }

}

const handleDropMenu = () =>{
    if(dropMenuIsOpen){
        toggleDropDownMenu();
    }
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('scroll', handleDropMenu);