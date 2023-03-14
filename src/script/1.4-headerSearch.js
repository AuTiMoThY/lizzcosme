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