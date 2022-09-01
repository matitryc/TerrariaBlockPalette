const navMobile = document.querySelector('.nav-mobile__links')
const navMobileLinks = document.querySelectorAll('.nav-mobile__link')
const navMobileTitle = document.querySelector('.nav-mobile__title')

const navDesktop = document.querySelector('.nav-desktop')
const navDesktopText = document.querySelectorAll('.nav-desktop__link-text')

const header = document.querySelector('.header')
const burgerBtn = document.querySelectorAll('.burger-btn-script')
const burgerBtnBg = document.querySelector('.burger-btn-bg')

const mainSlideElements = document.querySelectorAll('.welcome__text')
const slideElementsHeight = Object.values(mainSlideElements).map(element => (element = element.offsetHeight))
const slideElementsDistance = Object.values(mainSlideElements).map(element => (element = element.offsetTop))

const tutorialsComments = document.querySelectorAll('.tutorials__comment')
const commentsHeight = Object.values(tutorialsComments).map(comment => (comment = comment.offsetHeight))
const commentsDistance = Object.values(tutorialsComments).map(comment => (comment = comment.offsetTop))
const screenProportion = 4 / 5

const chatBoxes = document.querySelectorAll('.about-us__chat')
const chatDotsBox = document.querySelectorAll('.about-us__dots')
const chatDots = document.querySelectorAll('.about-us__dot')
const chatDotsPosition = 80
const aboutUs = document.querySelector('.about-us')

const html = document.querySelector('html')
const main = document.querySelector('main')

let mobileHeight = burgerBtnBg.offsetHeight
let mainDistance = main.offsetTop - mobileHeight

// const sectionHeadings = document.querySelectorAll('.section__heading')
// const headingsContent = Object.values(sectionHeadings).map(headingContent => headingContent = headingContent.innerHTML)

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
	let headerHeight = header.offsetHeight
	let desktopHeight = navDesktop.offsetHeight
	let mobileHeight = burgerBtnBg.offsetHeight
	let mainDistance = main.offsetTop - mobileHeight

	if (mobileHeight === 0) {
		html.style.scrollPaddingTop = desktopHeight + 'px'
	} else {
		html.style.scrollPaddingTop = mobileHeight + 'px'
	}

	if (window.scrollY >= headerHeight) {
		navDesktopText.forEach(link => link.classList.add('scale'))
	} else {
		navDesktopText.forEach(link => link.classList.remove('scale'))
	}

	if (window.scrollY >= mainDistance && !burgerBtn[0].classList.contains('transformation')) {
		burgerBtnBg.classList.add('slide-in')
	} else {
		burgerBtnBg.classList.remove('slide-in')
	}
}

const handleSlideElements = () => {
	let screenPoint = window.screen.height / 10
	for (let i = 0; i < mainSlideElements.length; i++) {
		if (document.documentElement.clientWidth < 768) {
			if (window.scrollY + slideElementsHeight[i] + screenPoint * 2 >= slideElementsDistance[i]) {
				mainSlideElements[i].classList.add('show')
			}
		} else {
			if (window.scrollY + slideElementsHeight[i] + screenPoint * 5 >= slideElementsDistance[i]) {
				mainSlideElements[i].classList.add('show')
			}
		}
	}
	if (mainSlideElements[mainSlideElements.length - 1].classList.contains('show')) {
		window.removeEventListener('scroll', handleSlideElements)
	}
}

const handleTutorialComments = () => {
	let screenPoint = window.screen.height / 7
	let transitionDelay = 0
	for (let i = 0; i < tutorialsComments.length; i++) {
		if (window.scrollY + commentsHeight[i] + screenPoint * 3 >= commentsDistance[i]) {
			tutorialsComments[i].style.transitionDelay = transitionDelay + 's'
			tutorialsComments[i].classList.add('show')
			transitionDelay += 0.05
		}
	}
	if (tutorialsComments[tutorialsComments.length - 1].classList.contains('show')) {
		window.removeEventListener('scroll', handleTutorialComments)
	}
}

const addingTopValues = () => {
	for (let i = 0; i < chatBoxes.length; i++) {
		const chatDistance = chatBoxes[i].offsetTop
		const chatHeight = chatBoxes[i].offsetHeight
		chatDotsBox[i].style.top = chatDistance + chatHeight - chatDotsPosition + 'px'
	}
}

const handleAboutUs = () => {
	for (let i = 0; i < chatBoxes.length; i++) {
		const chatDistance = chatBoxes[i].offsetTop
		const chatHeight = chatBoxes[i].offsetHeight
		const aboutUsDistance = aboutUs.offsetTop
		const chatBoxDistance = aboutUsDistance + chatDistance

		if (document.documentElement.clientWidth < 768) {
			if (window.scrollY + chatHeight / 2 >= chatBoxDistance) {
				chatDotsBox[i].classList.add('vanish')
				chatBoxes[i].classList.add('showX')
			}
		} else {
			if (window.scrollY + chatHeight / 2 + 150 >= chatBoxDistance) {
				chatDotsBox[i].classList.add('vanish')
				chatBoxes[i].classList.add('showX')
			}
		}
	}

	if (chatBoxes[chatBoxes.length - 1].classList.contains('show')) {
		window.removeEventListener('scroll', handleAboutUs)
	}
}


for (let i = 0; i < chatDots.length; i++) {
	chatDots[i].addEventListener('animationend', () => {
		chatDots[i].style.animationDelay = 0.5 + 's'
		chatDots[i].classList.remove('glideReverse')
		void chatDots[i].offsetWidth
		chatDots[i].classList.add('glideReverse')
	})
	if (chatDotsBox[0].style.opacity === 0) break
}

window.addEventListener('scroll', handleAboutUs)
window.addEventListener('scroll', addingTopValues)
window.addEventListener('scroll', handleTutorialComments)
window.addEventListener('scroll', scrollPadding)
window.addEventListener('scroll', handleSlideElements)

navMobileLinks.forEach(link => link.addEventListener('click', handleNav))
burgerBtn.forEach(burger => burger.addEventListener('click', handleNav))
