$(function () {
    $('[data-toggle="datepicker"]').datepicker({
        language: 'zh-CN',
        format: 'yyyy/mm/dd',
        date: lizzUI.getDateTime().date
    });


    lizzUI.highlight(".page_nav-item", "contact");
});