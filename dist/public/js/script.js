/*// 最新消息清單
class newsBlock extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Element functionality written in here
  }
}
customElements.define('module-news-block', newsBlock);*/


const lizzUI = (function (window, jQuery) {
  if (!window.jQuery) { throw new Error("requires jQuery") }

  let $ = window.jQuery;

  let breakpoints = {
    "xxs": 0,
    "xs": 375,
    "sm": 576,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1366,
    "uxl": 1680
  };

  let mqUp = {
    "xxs": window.matchMedia("(min-width: " + breakpoints.xxs + "px)"),
    "xs": window.matchMedia("(min-width: " + breakpoints.xs + "px)"),
    "sm": window.matchMedia("(min-width: " + breakpoints.sm + "px)"),
    "md": window.matchMedia("(min-width: " + breakpoints.md + "px)"),
    "lg": window.matchMedia("(min-width: " + breakpoints.lg + "px)"),
    "xl": window.matchMedia("(min-width: " + breakpoints.xl + "px)"),
    "xxl": window.matchMedia("(min-width: " + breakpoints.xxl + "px)"),
    "uxl": window.matchMedia("(min-width: " + breakpoints.uxl + "px)"),
  };


  let mqDown = {
    "xxs": window.matchMedia("(max-width: " + breakpoints.xs + "px)"),
    "xs": window.matchMedia("(max-width: " + breakpoints.sm + "px)"),
    "sm": window.matchMedia("(max-width: " + breakpoints.md + "px)"),
    "md": window.matchMedia("(max-width: " + breakpoints.lg + "px)"),
    "lg": window.matchMedia("(max-width: " + breakpoints.xl + "px)"),
    "xl": window.matchMedia("(max-width: " + breakpoints.xxl + "px)"),
    "xxl": window.matchMedia("(max-width: " + breakpoints.uxl + "px)"),
    // "uxl" : window.matchMedia("(max-width: "+breakpoints.+"px)"),
  };

  return {

/**
 * >> lizzUI.init()
 */

init: function () {
    const _ = this;

    _.goTop();
    _.headerSearch();
    _.navToggle();


    // _.mmenu().init();

    // console.log(mqDown.sm.matches);
    // function windowResize() {
    //     console.log(mqDown.sm.matches);
    // }

    // window.onresize = windowResize;
},
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
/**
 * >> lizzUI.getDateTime()
 */

getDateTime: function (format) {
    let _ = this;

    let today = new Date();
    let y = today.getFullYear();
    let m = ("0"+(today.getMonth()+1)).slice(-2);
    let d = ("0"+today.getDate()).slice(-2);
    let hrs = ("0"+today.getHours()).slice(-2);
    let mins = ("0"+today.getMinutes()).slice(-2);

    let datetime = {
        'date': `${y}/${m}/${d}`,
        'time':  `${hrs}:${mins}`
    }
    return datetime;
},


/**
 * >> lizzUI.highlight(navItem, name)
 */

highlight: function (navItem, name) {
    const _ = this;
    $(navItem).each(function(index, el) {
        if ($(el).data('highlight') == name) {
            $(el).addClass('js-highlight');
        }
    });
},
/**
 * ---------------------------------------------------------------------------------
 * >> lizzUI.mmenu()  手機版menu 動作
 */
mmenu:function(){
    return {
        init: function() {
            console.log("mmenu start");
            let _this = this;

            let $body = $("body");

            (!$body.hasClass("js-open-mobile-menu")) ? _this.open($body): _this.close($body);
        },

        // mmenu.open
        open: function(el) {
            // console.log('open');
            el.addClass("js-open-mobile-menu");
        },

        // mmenu.close
        close: function(el) {
            // console.log('close');
            el.removeClass("js-open-mobile-menu");
        }
    }
},

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
/**
 * >> lizzUI.navAddArrow()
 */

navAddArrow: (function () {
    // console.log("navAddArrow start");
    // nav 加入arrow
    $(".page_nav-item .sub_page_nav").each(function (i, elm) {
        let $item = $(this).parent(".page_nav-item");
        let $link = $item.find(".page_nav-item-link");
        $item.addClass("js-has-childen");
        $link.attr("href", "javascript:;").append(`<svg id="arrIcon${i}" class="arr-icon"></svg>`);

        let _icon = Snap(`#arrIcon${i}`);
        _icon.attr("viewbox", "0 0 12 7");

        let _path = "M0.799988 0.5L5.79999 5.5L10.8 0.5";
        let _len = Snap.path.getTotalLength(_path);
        let _draw = _icon.path(_path);

        _draw.attr({
            "stroke-linecap": "round",
            "stroke": "#ffffff",
            "stroke-width": 1,
            "fill": "none"
        });
    });
})(),
/**
 * >> lizzUI.navToggle()
 */

 navToggle: function () {
   const _ = this;



   function navToggleSetup() {
      $("body").on('click', ".js-has-childen .page_nav-item-link", function (e) {
         event.preventDefault();

         var $_this = $(e.target).parents(".page_nav-item");
         if (window.matchMedia("(max-width: 1200px)").matches) {
            console.log(e);
            if ($($_this).hasClass("js-has-childen") && !$($_this).hasClass("js-active")) {
               $(".page_nav-item").removeClass('js-active');
               $($_this).addClass('js-active');
            } else {
               $($_this).removeClass('js-active');
            }
         }
         else {
            $(".page_nav-item").removeClass('js-active');
         }
      });
   }

   navToggleSetup();
   // window.onresize = navToggleSetup(1);
   // window.addEventListener("change", navToggleSetup());





   // $(".page_nav-item").on('mouseout', function () {
   //    if ($(this).hasClass("js-has-childen") && !$(this).hasClass("js-active")) {
   //       $(this).removeClass('js-active');
   //    }
   // });
},
/**
 * >> lizzUI.linkAddArrow()
 */

 linkAddArrow: (function () {
    // link 加入 arrow
    $(".lizz_link:not(.lizz_link-no_arrow)").each((i, elm) => {
        var $this = $(elm);

        $this.append(`<svg id="linkArrow${i}" class="link-arrow"></svg>`);

        var _icon = Snap(`#linkArrow${i}`);
        _icon.attr("viewbox", "0 0 10.5 7.4");

        var _path = `M10.4,3.3L7.2,0.1C7,0,6.7,0,6.5,0.1c-0.2,0.2-0.2,0.5,0,0.7l2.3,2.3H0v1h8.8L6.5,6.5C6.3,6.7,6.3,7,6.5,7.2
        s0.5,0.2,0.7,0L10.4,4C10.5,3.8,10.5,3.5,10.4,3.3z`;
        var _len = Snap.path.getTotalLength(_path);
        var _draw = _icon.path(_path);

        _draw.attr({
            "fill": "#72705B"
        });
    });

})(),

/**
 * >> lizzUI.setCaseListWidth()
 */

setCaseListWidth: (function () {

    // const $case_list = $(".case_list");
    // const $case_item = $(".case_item");
    // const caseItemLen = $case_item.length;
    // const caseItemWidth = $(".case_item").width();
    // const caseTotalWidth = caseItemLen * caseItemWidth;

    // $case_list.find("ul").width(caseTotalWidth);

    $("[data-setting]").each(function(i, e){

        const $list = $(e).find("ul") ?  $(e).find("ul") : $(e);
        const $item = $(e).find("[class*=item]");
        const itemLen = $item.length;
        const itemWidth = $item.width();

        $list.width(itemWidth * itemLen);

    })


})(),
/**
 * >> lizzUI.headerSearch()
 */

headerSearch: function () {
    const _ = this;

    $(".tools_search").click(function() {
        let $toolBlock = $(this).parents(".tools");

        $toolBlock.addClass('js-open-search');
    });

    $(".tools_close").click(function() {
        let $toolBlock = $(this).parents(".tools");

        $toolBlock.removeClass('js-open-search');
    });


},
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
/**
 * >> lizzUI.test()
 */

test: function (elm) {
    console.log(elm);
},
    }
}(window, jQuery));
$(function () {
	lizzUI.init();
	// $("body").addClass("js-open-mobile-menu");


});
