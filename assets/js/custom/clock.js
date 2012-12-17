$(document).ready(function() {
    $('.pause-button').click(function() {
        $('.digit').toggleClass('paused');
    });

    $('.reset-button').click(function() {
        // http://css-tricks.com/restart-css-animation/
        var el = $('#screen');
        el.before(el.clone(true)).remove();
        $('.digit').removeClass('paused');
    });
});