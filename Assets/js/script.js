/// sticky nav////////////////
window.onscroll = () => {
    let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};
////////////////

// navigation bar 
burger = document.querySelector('.burger')
header = document.querySelector('.header')
navBar = document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
    navBar.classList.toggle('v-class-resp');
    header.classList.toggle('h-nav-resp');
})
/////////////////////////////////