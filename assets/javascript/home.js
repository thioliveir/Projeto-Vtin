/*============ play music ==========*/
function playAudio() {
    var x = document.getElementById("song");
    x.play();
}

/*============ play music ==========*/
function pauseAudio() {
    var x = document.getElementById("song");
    x.pause();
}

/*========================  SCROLL REVEAL ANIMATION =============================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.graffiti, #header, .footer__container`, {delay: 900, origin: 'center'})
sr.reveal(`#header`, {delay: 900, origin: 'top'})
sr.reveal(`.footer__container`, {delay: 900, origin: 'bottom'})

/*sr.reveal(`.founder__article`, {origin: 'left', interval: 100})
sr.reveal(`.founders__text`, {origin: 'right'})
sr.reveal(`.footer, .carroussel`, {origin: 'bottom'})
sr.reveal(`.footer__logo, .footer__content, footer__copyright`, {origin: 'top', interval: 100})*/