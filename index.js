$(window).scroll(function () {
    $("#header").css("opacity", 1 - $(window).scrollTop() / 250);
});