const navMobile = document.querySelector('.nav-mobile__links')
const navMobileLinks = document.querySelectorAll('.nav-mobile__link')
const navMobileTitle = document.querySelector('.nav-mobile__title')
const burgerBtn = document.querySelectorAll('.burger-btn-script')


const handleNav = () => {
    void navMobile.offsetWidth;
    void navMobileTitle.offsetWidth;
    navMobileLinks.forEach(link => void link.offsetWidth)
    burgerBtn.forEach(burger => void burger.offsetWidth)

    if (!burgerBtn[0].classList.contains('transformation-active') && (!burgerBtn[0].classList.contains('transformation-inactive'))){
        burgerBtn[0].classList.add('transformation-active')
        burgerBtn[1].classList.add('visible')
        burgerBtn[1].classList.add('transformation-inactive')

       
    }
    else {
        burgerBtn.forEach(burger => burger.classList.toggle('transformation-active'))
        burgerBtn.forEach(burger => burger.classList.toggle('transformation-inactive'))
    }



    if (!navMobile.classList.contains('slide-in-active') && (!navMobile.classList.contains('slide-in-inactive'))){
        navMobile.classList.add('slide-in-active')
        navMobileTitle.classList.add('slide-in-active')
    }
    else {
        navMobile.classList.toggle('slide-in-active')
        navMobileTitle.classList.toggle('slide-in-active')
        
        navMobile.classList.toggle('slide-in-inactive')
        navMobileTitle.classList.toggle('slide-in-inactive')
    }



    if (!navMobileLinks[0].classList.contains('slide-in-links-active') && (!navMobileLinks[0].classList.contains('slide-in-links-inactive'))){
        let animationDelay = 0
        navMobileLinks.forEach(link => {
            link.style.animationDelay += animationDelay + 's'
            link.classList.add('slide-in-links-active')
            animationDelay += 0.1
        })
    }
    else {
        let animationDelay = 0
        navMobileLinks.forEach(link => {
            link.style.animationDelay += animationDelay + 's'
            link.classList.toggle('slide-in-links-active')
            link.classList.toggle('slide-in-links-inactive')
            animationDelay += 0.1
        })
    }
    
}

navMobileLinks.forEach(link => link.addEventListener('click', handleNav))

burgerBtn.forEach(burger => burger.addEventListener('click', handleNav))
