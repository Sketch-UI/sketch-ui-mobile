var CopyPasteBinding = (function() {

    var init = function() {
        Mousetrap.bind(['command+c', 'ctrl+c'], function(e) {
            if($(".control.active").length > 0){
                window.controlClipBoard = {
                    properties: DrawingBoard.controls[$(".control.active").data("control-id")].get(),
                    metadataId: $(".control.active").data("metadata-id")
                }
            }
            return false;
        });

        Mousetrap.bind(['command+v', 'ctrl+v'], function(e) {
            if(window.controlClipBoard){
                var position = {
                    left: 0,
                    top: 0
                }
                var data = window.controlClipBoard.properties;
                DrawingBoard.addControl(window.controlClipBoard.metadataId, position, jQuery.extend(true, {}, data), false, true);
            }
            return false;
        });
    };

    return {
        init: init
    };

})();