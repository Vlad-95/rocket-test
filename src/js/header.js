$(window).scroll(function () {
    if ($(window).scrollTop() >= 76) {
        $('.header__fixed').addClass('active');
    } else {
        $('.header__fixed').removeClass('active');
    }
});

$(document).ready(function() {
    $('.header__wrap_burger').click(function() {
        $(this).toggleClass('active');
        $('.header__wrap_menu').fadeToggle().toggleClass('active');
    })
})
