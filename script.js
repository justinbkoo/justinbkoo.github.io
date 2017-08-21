$(document).ready(function () {
    if ($(window).scrollTop() == 0) {
        $("#menu").css("background-color", "rgba(0,0,0,0");
    }

    $(window).scroll(function () {
        var targetPercentage = 1;
        var navBarHeight = 90;
        var targetID = "#menu";

        var scrollTo = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();

        scrollPercent = (scrollTo / (docHeight)) * 100;
        scrollPercent = scrollPercent.toFixed(1);

        if (scrollPercent <= targetPercentage) {
            $(targetID).css("background-color", "rgba(0,0,0,0)");
            $(targetID).css("padding-top", "16px");
            $(targetID).css("padding-botom", "16px");
            $(".navbar-brand").css("color", "white");
            $(".nav-link").css("color", "white");
        }

        if (scrollPercent > targetPercentage) {
            $(targetID).css("padding-top", "0px");
            $(targetID).css("padding-bottom", "0px");
            $(targetID).css("background-color", "black");
        }
    }).trigger('scroll');



    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});