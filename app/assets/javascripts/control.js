var Control = (function() {

    var create = function(element, controlId) {
        var initialData = jQuery.extend(true, {}, ControlsMetadata[element.data("metadata-id")].initialData);
        initialData["controlId"] = controlId;

        var controlData = new Ractive({
            el: "drawing-board",
            template: "#" + ControlsMetadata[element.data("metadata-id")].template,
            data: initialData,
            append: true
        });

        this.bindControl();
        return controlData;
    };

    var bindControl = function(){
        var control = $("#drawing-board .control").last();
        new Draggabilly(control[0]);
    };

    return {
        create: create,
        bindControl: bindControl,
    };

})();