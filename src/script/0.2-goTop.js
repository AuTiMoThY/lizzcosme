/**
 * >> lizzUI.goTop()
 */

goTop: function () {
    $(window).scroll(function() {
        if ($("#top").length < 1) return false;
        var gotop_top = $("#top").offset().top;
        if ($(this).scrollTop() > 300) {
            $("#goTop").addClass('js-show');
        }else {
            $("#goTop").removeClass('js-show');
        }
    });

    $("#goTop").click(function(event) {
        event.preventDefault();
        // var target = $(this).attr('href').offset().top;
        $("html, body").stop().animate({scrollTop:0}, 300);
    });
},