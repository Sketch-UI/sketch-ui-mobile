var Routing = (function() {

    var init = function() {
        window.onhashchange = function(){
            SketchesController.show(window.location.href.substring(window.location.href.lastIndexOf('#') + 1), false);
        };
        window.onhashchange();
    };

    return {
        init: init
    };

})();