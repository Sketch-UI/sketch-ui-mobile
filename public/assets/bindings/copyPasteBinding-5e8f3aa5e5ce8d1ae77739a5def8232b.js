var CopyPasteBinding = (function() {

    var init = function() {
        Mousetrap.bind(['command+c', 'ctrl+c'], function(e) {
            if($(".control.active").length > 0){
                var copiedControls = [];

                for(var i=0; i<$(".control.active").length; i++){
                    var control = $($(".control.active")[i]);

                    copiedControls.push({
                        properties: DrawingBoard.controls[control.data("control-id")].get(),
                        metadataId: control.data("metadata-id"),
                        position: control.position()
                    })
                }

                window.controlClipBoard = copiedControls
            }
            return false;
        });

        Mousetrap.bind(['command+v', 'ctrl+v'], function(e) {
            if(window.controlClipBoard){
                $(".control").removeClass("active");
                for(var i=0; i<window.controlClipBoard.length; i++){
                    var control = window.controlClipBoard[i];
                    var data = control.properties;
                    var position = {
                        left: control.position.left + 5,
                        top: control.position.top + 25
                    }
                    DrawingBoard.addControl(control.metadataId, position, jQuery.extend(true, {}, data), false, false);
                }
            }
            return false;
        });
    };

    return {
        init: init
    };

})();
