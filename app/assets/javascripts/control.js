var Control = (function() {

    var create = function(element, controlId) {
        var initialData = jQuery.extend(true, {}, ControlsMetadata[element.data("metadata-id")].initialData);
        initialData["controlId"] = controlId;

        var controlData = new Ractive({
            el: "drawing-board",
            template: "#" + element.data("metadata-id") + "-control-template",
            data: initialData,
            append: true
        });

        this.bindControl();
        return controlData;
    };

    var bindControl = function(){
        var control = $("#drawing-board .control").last();
        new Draggabilly(control[0]);
        $("#drawing-board .control").removeClass("active");
        control.addClass("active");
    };

    return {
        create: create,
        bindControl: bindControl
    };

})();