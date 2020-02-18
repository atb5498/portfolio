$(window).scroll(function () {
    $("#logo").css("opacity", 1 - $(window).scrollTop() / 250);
});