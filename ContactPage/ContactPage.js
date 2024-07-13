var script = document.createElement("SCRIPT");
script.src = '../jquery-3.7.1.min.js';
script.type = 'text/javascript';

$(document).ready(function() {
    var viewportWidth = $(window).width()


    $(".toAbout").click(function() {
        window.location.href = "../index.html#about";
        // TODO: redirect to front page then slow scroll to about
        scrollToAbout();
    });

    if(viewportWidth < 1415) {
        $('.mobileNav').hide()
    }

    // TODO: fix mobile nav bar still appearing after page expanded
    // TODO: finish mobile navigation menu
    $(".icon").click(function() {
        if($('.mobileNav').css('display') === 'none') {
            $( ".mobileNav" ).slideDown( "slow");
            console.log("reached")
        }
        else if($('.mobileNav').css('display') === 'flex') {
            $( ".mobileNav" ).slideUp( "slow");
        }
    });

});
