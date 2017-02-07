/**
 * Created by Yavor on 31/01/2017.
 */
$('.nav li a').click(function(e) {
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});