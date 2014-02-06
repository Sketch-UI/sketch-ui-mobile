var Routing = (function() {

    var init = function() {
        window.onhashchange = function(){
            if(window.location.href.indexOf("preview") != -1){
                PreviewBinding.set(true);
            }
            else{
                SketchesController.show(window.location.href.substring(window.location.href.lastIndexOf('#') + 1), false);
            }
        };
        window.onhashchange();
    };

    return {
        init: init
    };

})();