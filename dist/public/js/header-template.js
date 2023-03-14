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

    _.headerSearch();
    _.navToggle();

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

    }
}(window, jQuery));
$(function () {
	lizzUI.init();
});
