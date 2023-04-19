$(document).ready(function () {
    var $header = $('header');
    var $nav = $('.nav');
    // console.log(scrollY);
    var flag = false; // true
    function fixed() {
        if (scrollY >= $header.innerHeight() && !flag) {
            $nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1,
            }, 1000);
            flag = true;
        }
        else if (scrollY < $header.innerHeight() && flag) {
            $nav.animate({
                opacity: 0,
            }, 500, function () {
                $nav.removeClass('fixed-top').css('opacity', 1);
            });
            flag = false;
        }
    }

    $(window).on('scroll', fixed);
    fixed();
});