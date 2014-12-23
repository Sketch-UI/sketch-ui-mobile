var Sketch = (function() {

    var save = function(attrs, callback) {
        $.ajax({
            type: "POST",
            url: "/projects/" + attrs.projectId + "/sketches/" + attrs.sketchId,
            dataType: "json",
            data: {
                data: attrs.data
            },
            success: callback
        });
    };

    var find = function(attrs, callback){
        $.ajax({
            type: "GET",
            url: "/projects/" + attrs.projectId + "/sketches/" + attrs.sketchId,
            dataType: "json",
            success: callback
        });
    };

    var add = function(attrs, callback){
        $.ajax({
            type: "POST",
            url: "/projects/" + attrs.projectId + "/sketches/add",
            dataType: "json",
            data: {
                sketch_name: attrs.sketchName
            },
            success: callback
        });
    };

    return {
        save: save,
        find: find,
        add: add
    };

})();
