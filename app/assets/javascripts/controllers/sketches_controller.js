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

    return {
        show: show
    };

})();