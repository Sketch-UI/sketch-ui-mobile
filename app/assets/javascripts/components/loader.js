var Loader = (function() {

    var start = function() {
        this.stop();

        $.sidr('close', 'toolbox-left');

        var waitLoaderDOM = '<div id="wait-loader-backdrop"><div class="spinner-new"></div></div>';
        $('body').append(waitLoaderDOM);
        $('body').addClass('no-pointer-events');
    };

    var stop = function() {
        $('body').removeClass('no-pointer-events');
        $('#wait-loader-backdrop').remove();
    };

    return {
        start: start,
        stop: stop
    };

})();