$(document).ready(function () {
    $(".slider").bxSlider();
});

const slider = $(".slider").bxSlider({
    pager: false,
    controls: false
});

$(".slider__arrow--right").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});

$(".slider__arrow--left").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
});