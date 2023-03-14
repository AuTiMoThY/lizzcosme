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