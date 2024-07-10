var script = document.createElement("SCRIPT");
script.src = 'jquery-3.7.1.min.js';
script.type = 'text/javascript';

$(document).ready(function() {
    $("#toAbout").click(function() {
        window.location.href = "../FrontPage/FrontPage.html#about";
        // TODO: redirect to front page then slow scroll to about
        scrollToAbout();
    });
});

function scrollToAbout() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
};