var NavigationBar = (function() {

    var init = function() {
        $("#save-sketch-link").click(function(ev){
            SketchesController.save();
        });

        $("#preview-link").click(function(ev){
            PreviewBinding.trigger();
        });

        $( "#sketches-dropdown" ).on( "click", "#new-sketch-link", function() {
            $('#new-sketch-modal').modal("show");
        });

        $("#create-sketch-link").click(function(ev){
            SketchesController.add();
            $('#new-sketch-modal').modal("hide");
        });

        $("#clear-sketch-link").click(function(ev){
            $("#clear-sketch-modal").modal("show");
        });

        $("#clear-sketch-modal-submit").click(function(ev){
            DrawingBoard.clear();
            $("#clear-sketch-modal").modal("hide");
        })
    };

    return {
        init: init
    };

})();