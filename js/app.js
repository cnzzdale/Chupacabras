// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');

    // Passing a function into $ delays the execution until the
    // document is ready
    $(function() {
        // List view
        var list = $('.list').get(0);
        list.nextView = 'x-view.details';

        // Detail view
        var details = $('.details').get(0);
        details.render = function(item) {
            $('.rss_title', this).text(item.get('title'));
            $('.rss_content', this).html(item.get('desc'));

            console.log("render", item.get("title"));
            console.log("desc", item.get("desc"));
        };

        start();
    });
});