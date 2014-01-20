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

        $(".share-link").click(function(ev){
            $('#share-url-modal').modal("show");
            var port = "";
            if(window.location.port != ""){
                port = ":" + window.location.port;
            }

            $("#share-url").val("http://" + window.location.hostname + port + $(ev.currentTarget).data("href"));
        });
    };

    return {
        init: init
    };

})();