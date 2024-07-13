var script = document.createElement("SCRIPT");
script.src = '../jquery-3.7.1.min.js';
script.type = 'text/javascript';

$(document).ready(function() {
    var viewportWidth = $(window).width()

    $("#toAbout").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},
            'slow');
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


