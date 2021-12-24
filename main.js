const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function start() {
    navbarSticky()
    handleClickEvents()
    handleDelayEvents()
    navbarOnMobile()
    modalHandle()
    scrollBarActive()
}

start()

//functions 
function navbarSticky() {
    window.addEventListener('scroll', () => {
        const header = $('header');
        const homeSection = $('#home').clientHeight
        header.classList.toggle('sticky', window.scrollY > homeSection - 200);
    });
}

function handleClickEvents() {
    const contentBlocks = $$('.slide__content-item')
    const cardHeaders = $$('.card-header')
    const cardBodys = $$('.card-body')

    //Click event in slide section
    contentBlocks.forEach((contentBlock, index) => {
        const slideImages = $$('.slide-img')
        contentBlock.onclick = function() {
            const slideImage = slideImages[index]
    
            $('.slide__content-item.slide__content-active').classList.remove('slide__content-active')
            $('.slide-img.img-active').classList.remove('img-active')
    
            this.classList.add('slide__content-active')
            slideImage.classList.add('img-active')
        }
    })

    //Click event in feedback section
    cardHeaders.forEach((cardHeader, index) => {
        const cardBody = cardBodys[index]
        cardHeader.onclick = function() {
            $('.card-body.card-body-active').classList.remove('card-body-active')
            
            cardBody.classList.toggle('card-body-active')
        }
    })
}

function navbarOnMobile() {
    const main = $('.main')
    const navbar = $('.header__navbar-list')
    const navbarIcon = $('.header__navbar-icon')
    const overlay = $('.navbar__overlay')

    function hideNavbar() {
        navbar.classList.remove('header__navbar-active')
        overlay.classList.remove('overlay-block')
    }

    function showNavbar() {
        navbar.classList.add('header__navbar-active')
        overlay.classList.add('overlay-block')
    }

    main.addEventListener('click', hideNavbar)
    navbar.addEventListener('click', function(e) {
        e.stopPropagation()
    })
    navbarIcon.addEventListener('click', showNavbar)
    navbarIcon.addEventListener('click', function(e) {
        e.stopPropagation()
    })  
}

function handleDelayEvents() {
    const registerForm = $('.register')
    const discoverImage = $('.discover-img')
    const contactForm = $('.contact__form-container')

    //Register
    setTimeout(() => {
        registerForm.classList.add('bounce-in')
        registerForm.style.opacity = 1
    }, 1000)

    //Image in discover section
    setTimeout(() => {
        discoverImage.style.transform = 'translate(0)'
        discoverImage.style.opacity = 1
    }, 2000)

    //
    setTimeout(() => {
        contactForm.classList.add('bounce-in')
        contactForm.style.opacity = 1
    }, 1000)
}


function scrollBarActive() {
    const sections = $$('section')   
    const navItems = $$('.navbar-element')
    window.addEventListener('scroll', () => {
        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id')
            }
        })
        navItems.forEach(navItem => {
            navItem.classList.remove('navbar-active')
            if(navItem.classList.contains(current)) {
                navItem.classList.add('navbar-active')
            }
        }) 
    })
}


function modalHandle() {
    const main = $('.main')
    const workCardImgs = $$('.work__card-img')
    const workCards = $$('.card-wrap')
    const modal = $('.modal')
    const modalImg = $('.modal-content')
    const modalContents = $$('.modal-content')
    const closeBtn = $('.close-btn')

    workCards.forEach((workCard, index) => {
        const workCardImg = workCardImgs[index]
        workCard.onclick = (e) => {
            modal.style.display = 'block'
            modalImg.src = workCardImg.src
            e.stopPropagation()
        }
    })

    main.onclick = () => {
        modal.style.display = 'none'
    }

    modalContents.forEach((modalContent) => {
        modalContent.onclick = (e) => {
            e.stopPropagation()
        }
    })

    closeBtn.onclick = () => {
        modal.style.display = 'none'
    }
}






