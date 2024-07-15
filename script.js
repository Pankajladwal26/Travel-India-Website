/*SHOW MENU*/
const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*ADD BLUR TO HEADER*/
const blurHeader = () => {
    const header = document.querySelector('#header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*SHOW SCROLL UP*/ 
const scrollUp = () =>{
    const scrollUp = document.querySelector('#scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive) 

/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})
sr.reveal('.home-data, .explore-data, .explore-user, .footer-container')
sr.reveal('.home-card', {delay: 500, distance: '100px', interval: 100})
sr.reveal('.about-data, .join-image', {origin: 'right'})
sr.reveal('.about-image, .join-data', {origin: 'left'})
sr.reveal('.popular-card', {interval: 200})