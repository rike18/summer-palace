$(document).ready(function () {

    // Main slider
    $('.cards__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        appendDots: $('.navigation__dots'),
        prevArrow: $('.navigation__prev'),
        nextArrow: $('.navigation__next'),
        responsive: [
            {
                breakpoint: 1056,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Instagram carousel
    $('.inst-carousel__body').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        veriableWidth: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Бургер меню
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // IBG класс
    function ibg() {
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
    ibg();

});