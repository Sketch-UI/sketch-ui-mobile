var Control = (function() {

    var create = function(metadataId, position, data, previewMode) {
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
            this.bindControl();
        }

        return controlData;
    };

    var positionControl = function(position){
        var control = $("#drawing-board .control").last();
        var drawingBoardPositions = $("#drawing-board")[0].getBoundingClientRect();
        var drawingBoardRight = 328;
        var controlRight = position.left + control.width();

        if(controlRight>drawingBoardRight){
            position.left = position.left - (controlRight - drawingBoardRight) - 10;
        }

        control.css({position: 'absolute'});
        control.css({top: position.top, left: position.left, position:'absolute'});
    };

    var bindControl = function(){
        var control = $("#drawing-board .control").last();
        controlDraggable = new Draggabilly(control[0], {
            containment: '#drawing-board'
        });
        $("#drawing-board .control").removeClass("active");
        control.addClass("active");
    };

    return {
        create: create,
        bindControl: bindControl,
        positionControl: positionControl
    };

})();