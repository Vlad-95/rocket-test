$(document).ready(function() {
    $('.product__item_content').matchHeight();

    $('.product__sort').click(function() {
        $('.product__sort_dropdown').fadeToggle();
        $(this).toggleClass('active');
    })
})