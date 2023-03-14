

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