var Control = (function() {

    var create = function(element, controlId, position) {
        var initialData = jQuery.extend(true, {}, ControlsMetadata[element.data("metadata-id")].initialData);
        initialData["controlId"] = controlId;

        var controlData = new Ractive({
            el: "drawing-board",
            template: "#" + element.data("metadata-id") + "-control-template",
            data: initialData,
            append: true
        });

        this.bindControl(position);
        return controlData;
    };

    var bindControl = function(position){
        var control = $("#drawing-board .control").last();
        control.css({top: position.top, left: position.left - 200, position:'absolute'});
        new Draggabilly(control[0]);
        $("#drawing-board .control").removeClass("active");
        control.addClass("active");
    };

    return {
        create: create,
        bindControl: bindControl
    };

})();