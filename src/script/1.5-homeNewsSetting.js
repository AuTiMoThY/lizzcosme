/**
 * >> lizzUI.homeNewsSetting()
 */

homeNewsSetting: function () {
    const _ = this;

    let $item = $(".news_card");
    let $news_wrapper = $item.parents(".news_list_wrapper");
    let $news_container = $item.parents(".page_section-cnt");

    function newsSwiper() {
        return new Swiper(".news .page_section-cnt", {
            slidesPerView: 1,
            grabCursor: true,
            loop: true,
            // autoHeight: true,
            spaceBetween: 24,
            autoplay: {
                delay: 3000,
                // pauseOnMouseEnter: true
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
        });
    }

    return {
        // >>> lizzUI.homeNewsSetting().init()
        init: function () {
            const _this = this;
            let rtime;
            let timeout = false;
            let delta = 200;

            // _this.setup();
            // $(window).on('resize', function(){
                // _this.setup();
                // rtime = new Date();
                // if (timeout === false) {
                //     timeout = true;
                //     setTimeout(resizeend, delta);
                // }
            // });

            // function resizeend() {
            //     console.log("resizeend");
            //     if (new Date() - rtime < delta) {
            //         setTimeout(resizeend, delta);
            //     }
            //     else {
            //         timeout = false;
            //         _this.setup();

            //     }
            // }
            // window.onresize = 
            // _this.windowResize();
        },

        // >>> lizzUI.homeNewsSetting().setup()
        setup: function () {
            const _this = this;
            // console.log("homeNewsSetting().setup()");
            if ( mqDown.sm.matches ) {
                // 寬度小於768px
                // $news_wrapper.addClass("js-scrollbar");
                $news_wrapper.parents(".page_section-cnt").addClass("swiper-container");
                $news_wrapper.addClass("swiper-wrapper");
                $item.addClass("swiper-slide");
                // $item.width("320px").height("auto");

                try {
                    newsSwiper().init();
                } catch (error) {
                    console.log(error);
                }

                // console.log("newsSwiper().init();");
            }
            else {
                $news_wrapper.parents(".page_section-cnt").removeClass("swiper-container");
                $news_wrapper.removeClass("swiper-wrapper");
                $item.removeClass("swiper-slide");
                // $news_wrapper.removeClass("js-scrollbar");
                try {
                    newsSwiper().destroy();
                } catch (error) {
                    console.log(error);
                }
                // console.log("newsSwiper().destroy();");
            }
        },
    }




},