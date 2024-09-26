$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4600,
        speed: 1600,

        dots: true,
        arrows: false,
        // slidesToShow: 2,
        infinite: true,
        swipe: false,
        fade: true
    });
});

$(document).ready(function(){
    $('.slider_news').slick({
        autoplay: true,
        autoplaySpeed: 4600,
        speed: 1600,

        dots: true,
        arrows: true,
        slidesToShow: 3,
        infinite: true,
        swipe: true,
        fade: false
    });
});