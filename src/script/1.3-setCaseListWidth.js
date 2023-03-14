
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