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