var SketchSaver = (function() {

    var save = function(controls) {
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

        $.ajax({
            type: "POST",
            url: "/sketches",
            dataType: "json",
            data: {
                identifier: $("#identifier").val(),
                data: sketchData
            }
        });
    };

    return {
        save: save
    };

})();