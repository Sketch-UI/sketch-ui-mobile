var NavigationBar = (function() {

    var init = function() {
        $("#save-sketch-link").click(function(ev){
            SketchSaver.save(DrawingBoard.controls);
        });

        $("#preview-link").click(function(ev){
            PreviewBinding.trigger();
        });
    };

    return {
        init: init
    };

})();