$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        $(this).toggleClass("toggled");
        if ($(this).hasClass("toggled") == false) {
            $(this).text("Toggle Menu");
            $(this).stop().animate({width: 166}, 250);
        } else {
            $(this).html("<span id='menu-hamburger' class='glyphicon glyphicon-menu-hamburger'></span>");
            $(this).stop().animate({width: 34}, 250);
        }
    });
});

