/**
* Created by Yavor on 31/01/2017.
*/
jQuery(function() {
    // jQuery('li').click( function() {
    //     jQuery(this).addClass('active').siblings().removeClass('active');
    // });

    //highlight the current nav
    $("#index a:contains('Вкъщи')").parent().addClass('active');
    $("#winners a:contains('Победители')").parent().addClass('active');
    $("#team a:contains('Екип')").parent().addClass('active');
});
