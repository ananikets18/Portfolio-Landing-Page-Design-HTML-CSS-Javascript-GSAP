const navLink = document.querySelectorAll('.nav_link');
function linkAct() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAct));

// Left-Menu
TweenMax.from('.left_menu', 1, {
    delay:2.5,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

// Nav-Links
TweenMax.staggerFrom('.nav_links_content ul li', 1, {
    delay:3,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
}, 0.08)

// Search-Icon
TweenMax.from('.search_icon', 1, {
    delay:2.5,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

// Larger-Text Content
TweenMax.from('.larger_text_content', 1, {
    delay:3,
    opacity:0,
    y:-100,
    ease:Expo.easeInOut
})

// Desc Content
TweenMax.from('.desc_content', 1, {
    delay:3,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
})

// Overlay
TweenMax.to(".overlay", 2, {
    delay:1,
    top:"-100%",
    ease:Expo.easeInOut
})

TweenMax.to('.overlay span', 2, {
    delay:.3,
    opacity:0,
    y:-60,
    ease:Expo.easeInOut
})

TweenMax.to('.overlay h1', 2, {
    opacity:0,
    y:-60,
    ease:Expo.easeInOut
})