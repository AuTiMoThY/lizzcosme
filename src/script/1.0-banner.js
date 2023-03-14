/**
 * >> lizzUI.banner()
 */

banner: function () {

    // banner
    var swiper = new Swiper(".banner-swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },
        parallax: true,
        on: {
            init: function () {
                // $(".banner-slide").eq(0).find('.slogan').addClass("")
            },
            slideChange: function(e) {
                // console.log(e)
            }
        }
    });
},