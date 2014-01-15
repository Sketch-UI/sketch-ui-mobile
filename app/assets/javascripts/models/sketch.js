var Sketch = (function() {

    var save = function(attrs, callback) {
        $.ajax({
            type: "POST",
            url: "/sketches",
            dataType: "json",
            data: {
                identifier: attrs.identifier,
                data: attrs.data
            },
            success: callback
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