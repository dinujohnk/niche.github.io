var popcont = {};
popcont.opacityIn = [0,1];
popcont.scaleIn = [0.9, 1];
popcont.scaleOut = 1;
popcont.durationIn = 500;
popcont.durationOut = 200;
popcont.delay = 200;

anime.timeline({loop: true})
    .add({
    targets: '.pop-container .pop-1',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-1',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-2',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-2',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-3',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-3',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-4',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-4',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-5',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-5',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-6',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-6',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-7',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-7',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-8',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-8',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-9',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-9',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: popcont.delay
}).add({
    targets: '.pop-container .pop-10',
    opacity: popcont.opacityIn,
    scale: popcont.scaleIn,
    duration: popcont.durationIn
}).add({
    targets: '.pop-container .pop-10',
    opacity: 0,
    scale: popcont.scaleOut,
    duration: popcont.durationOut,
    easing: "easeInExpo",
    delay: 800
}).add({
    targets: '.pop-container',
    opacity: 0,
    duration: 500,
    delay: 400
});