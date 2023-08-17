/*global $,document*/
$(document).ready(function () {
    'use strict';
    //start navbar
    $(".nav ul li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#' + $(this).data("scroll")).offset().top
        }, 1000);
            
    });
    //show and hide the scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1200) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }
    });
    //start scrolling to top
    $(".scroll-to-top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 500);
    });
    //start fixed-menue
    var menueWidth = $(".fixed-menue").innerWidth();
    $(".fixed-menue-icon").click(function () {
        $(".fixed-menue").toggleClass("visible");
        if ($(".fixed-menue").hasClass("visible")) {
            $(".fixed-menue").animate({
                left: 0
            });
        } else {
            $(".fixed-menue").animate({
                left: '-' + menueWidth
            });
        }
    });
    
});