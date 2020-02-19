// Initializes tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Fades header on scroll
$(window).scroll(function () {
    $("#header").css("opacity", 1 - $(window).scrollTop() / 250);
});