const navMobile = document.querySelector('.nav-mobile__links')
const navMobileLinks = document.querySelectorAll('.nav-mobile__link')
const navMobileTitle = document.querySelector('.nav-mobile__title')

const navDesktop = document.querySelector('.nav-desktop')
const navDesktopText = document.querySelectorAll('.nav-desktop__link-text')

const burgerBtn = document.querySelectorAll('.burger-btn-script')
const burgerBtnBg = document.querySelector('.burger-btn-bg')

const html = document.querySelector('html')
const main = document.querySelector('main')

let navDistance = navDesktop.offsetTop
let mobileHeight = burgerBtnBg.offsetHeight
let mainDistance = main.offsetTop - mobileHeight

const handleNav = () => {
	burgerBtn.forEach(burger => burger.classList.toggle('transformation'))
	navMobile.classList.toggle('slide-in')
	navMobileTitle.classList.toggle('slide-in')

	burgerBtnBg.classList.remove('slide-in')
	if (window.scrollY > mainDistance && !burgerBtn[0].classList.contains('transformation')) {
		burgerBtnBg.classList.add('slide-in')
	} else {
		burgerBtnBg.classList.remove('slide-in')
	}

	let transitionDelay = 0
	navMobileLinks.forEach(link => {
		link.style.transitionDelay = transitionDelay + 's'
		link.classList.toggle('slide-in')
		transitionDelay += 0.1
	})

	const disableScroll = () => {
		scrollTop = window.scrollY || document.documentElement.scrollTop
		scrollLeft = window.scrollX || document.documentElement.scrollLeft

		window.onscroll = function () {
			window.scrollTo({
				top: scrollTop,
				left: scrollLeft,
				behavior: 'instant',
			})
		}
	}

	const enableScroll = () => {
		window.onscroll = function () {}
	}

	if (burgerBtn[0].classList.contains('transformation') && document.documentElement.clientWidth < 768) {
		window.addEventListener('scroll', disableScroll())
	} else enableScroll()

	const handleResize = () => {
		if (document.documentElement.clientWidth >= 768) {
			enableScroll()
			burgerBtn[0].classList.remove('transformation')
			burgerBtn[1].classList.add('transformation')
			navMobile.classList.remove('slide-in')
			navMobileTitle.classList.remove('slide-in')
			navMobileLinks.forEach(link => {
				link.classList.remove('slide-in')
			})
		}
	}

	window.addEventListener('resize', handleResize)
}
const scrollPadding = () => {
	let navDistance = navDesktop.offsetTop
	let desktopHeight = navDesktop.offsetHeight
	let mobileHeight = burgerBtnBg.offsetHeight
	let mainDistance = main.offsetTop - mobileHeight

	if (mobileHeight === 0) {
		html.style.scrollPaddingTop = desktopHeight + 'px'
	} else {
		html.style.scrollPaddingTop = mobileHeight + 'px'
	}

	if (window.scrollY >= navDistance) {
		navDesktopText.forEach(link => link.classList.add('scale'))
	} else {
		navDesktopText.forEach(link => link.classList.remove('scale'))
	}

	if (window.scrollY >= mainDistance) {
		burgerBtnBg.classList.add('slide-in')
	} else {
		burgerBtnBg.classList.remove('slide-in')
	}
}

window.addEventListener('scroll', scrollPadding)
navMobileLinks.forEach(link => link.addEventListener('click', handleNav))
burgerBtn.forEach(burger => burger.addEventListener('click', handleNav))
