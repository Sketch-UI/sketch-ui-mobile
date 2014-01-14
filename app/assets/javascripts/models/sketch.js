var Sketch = (function() {

    var save = function(attrs) {
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

    var find = function(id, callback){
        $.ajax({
            type: "GET",
            url: "/sketches/" + id + "/data",
            dataType: "json",
            success: callback
        });
    };

    return {
        save: save,
        find: find
    };

})();