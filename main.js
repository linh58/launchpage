var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

function start() {
    navbarScroll()
    handleClickEvents()
    handleDelayEvents()
    navbarHandle()
}

start()

//functions 
function navbarScroll() {
    window.addEventListener('scroll', function () {
        var header = $('header');
        var homeSection = $('#home').clientHeight
        header.classList.toggle('sticky', window.scrollY > homeSection - 200);
    });
}

function handleClickEvents() {
    var contentBlocks = $$('.slide__content-item')
    var cardHeaders = $$('.card-header')
    var cardBodys = $$('.card-body')
    var navbarElements = $$('.navbar-element')

    //Click event in slide section
    contentBlocks.forEach((contentBlock, index) => {
        var slideImages = $$('.slide-img')
        contentBlock.onclick = function() {
            var slideImage = slideImages[index]
    
            $('.slide__content-item.slide__content-active').classList.remove('slide__content-active')
            $('.slide-img.img-active').classList.remove('img-active')
    
            this.classList.add('slide__content-active')
            slideImage.classList.add('img-active')
        }
    })

    //Click event in feedback section
    cardHeaders.forEach((cardHeader, index) => {
        var cardBody = cardBodys[index]
        cardHeader.onclick = function() {
            $('.card-body.card-body-active').classList.remove('card-body-active')
            
            cardBody.classList.toggle('card-body-active')
        }
    })

    //Navigation bar click 
    navbarElements.forEach((navbarElement) => {
        navbarElement.onclick = function() {
            $('.navbar-element.navbar-active').classList.remove('navbar-active')
            this.classList.add('navbar-active')
        }
    })

}

function navbarHandle() {
    var main = $('.main')
    var navbar = $('.header__navbar-list')
    var navbarIcon = $('.header__navbar-icon')
    var overlay = $('.overlay')

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
    var registerForm = $('.register')
    var discoverImage = $('.discover-img')
    var contactForm = $('.contact__form-container')

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


// function test() {
//     var homeSection = $('#home')
//     var totalHome = homeSection.offsetHeight
//     var partnerSection = $('.partner__section')
//     var aboutSection = $('#about')
//     var totalAbout = aboutSection.offsetTop + aboutSection.offsetHeight

//     window.onscroll = function() {
//         if(window.scrollY > totalHome) {
//             console.log('It is end home section')
//         }
//     }

// }

// test()






