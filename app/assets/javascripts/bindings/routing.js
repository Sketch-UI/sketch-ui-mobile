var Routing = (function() {

    var init = function() {
        window.onhashchange = function(){
            PreviewBinding.set(window.location.href.indexOf("preview") != -1);
        };
        window.onhashchange();
    };

    return {
        init: init
    };

})();