// Initializes tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Fades components on scroll
$(window).scroll(function () {
    $("#header").css("opacity", 1 - $(window).scrollTop() / 250);
    $("#latest-projects").css("opacity", 0 + $(window).scrollTop() / 400);
})
