var Control = (function() {

    var create = function(metadataId, position, data, previewMode, unselect) {
        var controlData = new Ractive({
            el: "drawing-board",
            template: "#" + metadataId + "-control-template",
            data: data,
            append: true
        });

        if(!previewMode){
            var control = $("#drawing-board .control").last();
            control.prepend("<div class='actions'><span class='delete'>X</span></div>")
        }

        this.positionControl(position);

        if(!previewMode){
            this.bindControl(unselect);
        }

        return controlData;
    };

    var positionControl = function(position){
        var control = $("#drawing-board .control").last();
        control.css({position: 'absolute'});
        control.css({top: position.top, left: position.left, position:'absolute'});
    };

    var bindControl = function(unselect){
        var control = $("#drawing-board .control").last();
        control.draggable({ containment: "parent", cancel: null});
        if(unselect){
            $("#drawing-board .control").removeClass("active");
        }
        control.addClass("active");
    };

    return {
        create: create,
        bindControl: bindControl,
        positionControl: positionControl
    };

})();