var SketchesController = (function() {

    var show = function(){
        sketchId = $("#identifier").val();
        Sketch.find(sketchId, function(data){
            if(data.controls_data){
                for(var i=0; i<data.controls_data.length; i++){
                    DrawingBoard.addControl(data.controls_data[i].type, data.controls_data[i].position, data.controls_data[i].properties);
                }
            }
        });
    };

    var save = function(){
        var controls = DrawingBoard.controls,
            sketchData = [];

        for(var key in controls){
            if(key=="1"){

            }
            else{
                var $control = $("#drawing-board .control[data-control-id='"+key+"']");
                var controlData = {
                    id: key,
                    type: $control.data("metadata-id"),
                    properties: controls[key].get(),
                    position: $control.position()
                }
                sketchData.push(controlData)
            }
        }

        Loader.start();
        Sketch.save({ identifier: $("#identifier").val(), data: sketchData}, function(data){
            Loader.stop();
        });
    };

    return {
        show: show,
        save: save
    };

})();