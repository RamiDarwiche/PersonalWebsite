var script = document.createElement("SCRIPT");
script.src = 'jquery-3.7.1.min.js';
script.type = 'text/javascript';

$(document).ready(function() {
    $("#toAbout").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},
            'slow');
    });
    $("#toProjects").click(function() {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            'slow');
    });
});