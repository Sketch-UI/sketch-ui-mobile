var PageSwitchBinding = (function() {

    var init = function() {
        $("#left-page-button").click(function(ev){
            var currentSketchId = parseInt(window.location.href.substring(window.location.href.lastIndexOf('#') + 1));
            if(currentSketchId != 1){
                currentSketchId = currentSketchId - 1;
            }
            window.location.hash = "#" + currentSketchId;
        });
        $("#right-page-button").click(function(ev){
            var currentSketchId = parseInt(window.location.href.substring(window.location.href.lastIndexOf('#') + 1));
            if(currentSketchId != parseInt($("#no-of-sketches").val())){
                currentSketchId = currentSketchId + 1;
            }
            window.location.hash = "#" + currentSketchId;
        });
    };

    return {
        init: init
    };

})();