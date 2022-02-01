$(() => {
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            document.querySelector('.header').style.backgroundColor = "#b62f2f";
            document.querySelector('.header__button ').style.backgroundColor = "#fff";
            document.querySelector('.header__button ').style.color = "#b62f2f";
        } else {
            document.querySelector('.header').style.backgroundColor = "transparent";
            document.querySelector('.header__button ').style.backgroundColor = "#b62f2f";
            document.querySelector('.header__button ').style.color = "#fff";
        }
    })

    $('.category-item').on('click', function () {
        $('.burger-menu').hide();
        $('html,body').animate({scrollTop: $('.category').offset().top - 150 + "px"}, {duration: 1E3});
    });

    $('.document-item').on('click', function () {
        $('.burger-menu').hide();
        $('html,body').animate({scrollTop: $('.documents').offset().top - 150 + "px"}, {duration: 1E3});
    });

    $('.price-item').on('click', function () {
        $('.burger-menu').hide();
        $('html,body').animate({scrollTop: $('.price').offset().top - 150 + "px"}, {duration: 1E3});
    });

    $('.ask-item').on('click', function () {
        $('.burger-menu').hide();
        $('html,body').animate({scrollTop: $('.questions').offset().top - 150 + "px"}, {duration: 1E3});
    });

    $('.contact-item').on('click', function () {
        $('.burger-menu').hide();
        $('html,body').animate({scrollTop: $('.map').offset().top - 150 + "px"}, {duration: 1E3});
    });

    $('.header__burger').on('click', (e) => {
        $('.burger-menu').show();
        $('body').css('overflowY', 'hidden')
    })

    $('.burger-menu__close').on('click', (e) => {
        $('.burger-menu').hide();
        $('body').css('overflowY', 'auto')
    })
})