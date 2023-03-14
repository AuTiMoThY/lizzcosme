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