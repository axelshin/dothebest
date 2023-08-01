// Define our viewportWidth variable
let viewportWidth;
let prdNavTrigger = document.querySelector(".prd-nav-trigger");
let prdNavWrap = document.querySelector(".prd-nav-wrap");
let prdNavOverlay = document.querySelector(".prd-nav-overlay");
let prdNavLink = $(".prd-nav__anchor-link");
let visibleMenu = false;
let layoutHeaderHeight = '';

let tl = new TimelineMax({ paused: true});

// Set/update the viewportWidth value
let setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// Log the viewport width into the console
let logWidth = function () {
	if (viewportWidth > 1024) {
        prdNavTrigger.addEventListener("mouseenter", showMenu, false);
        prdNavWrap.addEventListener("mouseleave", hideMenu, false);
        tl.to(".prd-nav-wrap", 0.5, { x: 0, ease: Power2.easeInOut });
		
	} else {
        tl.to(".prd-nav-wrap", 0.1, { x: "0", ease: Power2.easeInOut });
        prdNavTrigger.addEventListener("click", () => {
            showMenu();
            bodyOVHidden();
        }, false);
        prdNavOverlay.addEventListener("click", () => {
            hideMenu(); 
            bodyOVAuto();
        }, false);
        prdNavWrap.addEventListener("click", () => {
            hideMenu(); 
            bodyOVAuto();
        }, false);
	}
}

function setMenuTop() {
    layoutHeaderHeight = document.querySelector(".layout-header").offsetHeight;
    document.getElementsByTagName("body")[0].style.setProperty('--l-header-height', layoutHeaderHeight + "px");
} 

const bodyOVHidden = () => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].classList.add('body-overflow-hidden')
}
const bodyOVAuto = () => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    document.getElementsByTagName("body")[0].classList.remove('body-overflow-hidden')
}

// Set our initial width and log it
setViewportWidth();
logWidth();
setMenuTop();

document.querySelector(".layout-header").addEventListener("click", function() {
    setMenuTop();
});

let setMenuTopInterval = setInterval(() => setMenuTop(), 1000);


function showMenu(event) {   
    // highlight the mouseenter target
    if (viewportWidth > 1024) {
        tl.play(0);    
    }

    prdNavOverlay.classList.add("prd-nav-overlay--visible");
    prdNavWrap.classList.add("prd-nav-wrap--visible");
}

function hideMenu(event) {   
    // highlight the mouseenter target  
    if (viewportWidth > 1024) {
        tl.reversed( !tl.reversed() );
    }
    
    prdNavOverlay.classList.remove("prd-nav-overlay--visible");
    prdNavWrap.classList.remove("prd-nav-wrap--visible");
}

// вычисление высоты вьюпорта для мобильных start
const changeMobSideMenuHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.getElementsByTagName("body")[0].style.setProperty('--vh', `${vh}px`);
}

changeMobSideMenuHeight();
// вычисление высоты вьюпорта для мобильных end

//ресайз
window.addEventListener('resize', () => {
    setViewportWidth();
	logWidth();
    setMenuTop();
    changeMobSideMenuHeight();
});

//появление триггера меню на второй секции
gsap.registerPlugin(ScrollTrigger);
const tlsct = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      scrub: 1,
      start: "top top",
      end:"top top",
      toggleActions: "play none none reverse",
    }
});

tlsct.to(".prd-nav-trigger", {
    opacity: 1,
    duration: 1,
    visibility: "visible"
});
