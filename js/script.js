/**
* Created by Yavor on 31/01/2017.
*/

//Active button for the menu

jQuery(function() {
    //highlight the current nav
    $("#index a:contains('Вкъщи')").parent().addClass('active');
    $("#winners a:contains('Победители')").parent().addClass('active');
    $("#team a:contains('Екип')").parent().addClass('active');
});


// The back to top button

jQuery(document).ready(function() {

    var offset = 250;

    var duration = 600;

    jQuery(window).scroll(function() {

        if (jQuery(this).scrollTop() > offset) {

            jQuery('.back-to-top').fadeIn(duration);

        } else {

            jQuery('.back-to-top').fadeOut(duration);

        }

    });



    jQuery('.back-to-top').click(function(event) {

        event.preventDefault();

        jQuery('html, body').animate({scrollTop: 0}, duration);

        return false;

    })

});