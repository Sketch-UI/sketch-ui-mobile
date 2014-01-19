var SketchesController = (function() {

    var show = function(){
        sketchId = $("#identifier").val();
        Sketch.find(sketchId, function(data){
            if(data.controls_data){
                DrawingBoard.controls[1].set(data.controls_data[0].properties);
                var drawingBoardPositions = $("#drawing-board")[0].getBoundingClientRect();

                for(var i=1; i<data.controls_data.length; i++){
//                    var sidebarLeft = 0;
//                    if($("#toolbox-left").is(":visible")){
//                        sidebarLeft = 260;
//                    }
//
                    var postion = {
                        top: drawingBoardPositions.top + parseInt(data.controls_data[i].position.top),
                        left: drawingBoardPositions.left + parseInt(data.controls_data[i].position.left)
                    }

                    DrawingBoard.addControl(data.controls_data[i].type, postion, data.controls_data[i].properties);
                }
            }
        });
    };

    var save = function(){
        Loader.start();

        var controls = DrawingBoard.controls,
            sketchData = [],
            drawingBoardPositions = $("#drawing-board")[0].getBoundingClientRect();

        for(var key in controls){
            if(key=="1"){
                var controlData = {
                    id: key,
                    properties: controls[key].get()
                }
                sketchData.push(controlData);
            }
            else{
                var $control = $("#drawing-board .control[data-control-id='"+key+"']");

                var sidebarLeft = 0;
                if($("#toolbox-left").is(":visible")){
                    sidebarLeft = 260;
                }

                var position = {
                    top: $control.position().top - drawingBoardPositions.top,
                    left: $control.position().left - (drawingBoardPositions.left - sidebarLeft)
                }

                var controlData = {
                    id: key,
                    type: $control.data("metadata-id"),
                    properties: controls[key].get(),
                    position: position
                }
                sketchData.push(controlData);
            }
        }

        Sketch.save({ identifier: $("#identifier").val(), data: sketchData}, function(data){
            Loader.stop();
        });
    };

    return {
        show: show,
        save: save
    };

})();