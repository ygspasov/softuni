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


