var SketchesController = (function() {

    var url = window.location.href;
    var projectId = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('#'));

    var show = function(sketchId, previewMode){
        Sketch.find({sketchId: sketchId, projectId: this.projectId}, function(data){
            SketchDropdown.create(data.sketches);
            DrawingBoard.clear();
            if(data.controls_data){
                DrawingBoard.controls[1].set(data.controls_data[0].properties);
                var drawingBoardPositions = $("#drawing-board")[0].getBoundingClientRect();

                for(var i=1; i<data.controls_data.length; i++){
                    var postion = {
                        top: parseInt(data.controls_data[i].position.top),
                        left: parseInt(data.controls_data[i].position.left)
                    }

                    DrawingBoard.addControl(data.controls_data[i].type, postion, data.controls_data[i].properties, previewMode);
                }
            }
        });
    };

    var save = function(callback){
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

                var position = {
                    top: $control.position().top,
                    left: $control.position().left
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

        Sketch.save({sketchId: window.location.href.substring(window.location.href.lastIndexOf('#') + 1), projectId: this.projectId, data: sketchData}, function(data){
            Loader.stop();
            $("#no-of-sketches").val(parseInt($("#no-of-sketches").val()) + 1);
            callback();
        });
    };

    var add = function(){
        Loader.start();

        Sketch.add({projectId: this.projectId, sketchName: $("#new-sketch-name").val()}, function(data){
            Loader.stop();
            $("li #new-sketch-link").prepend("<li><a href='#" + data.sketchId + "'> " + data.name + " </a></li>")
            window.location.hash = data.sketch_id;
        });
    };

    return {
        show: show,
        projectId: projectId,
        save: save,
        add: add
    };

})();