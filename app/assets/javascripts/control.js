var Control = (function() {
    var propertyWindowTmpl = null;
    var controlData = null;

    var create = function(element, controlId) {
        this.propertyWindowTmpl = $(element).data("property-template");
        var initialData = eval($(element).data("id") + ".initialData()");
        initialData["controlId"] = controlId;

        this.controlData = new Ractive({
            el: "drawing-board",
            template: "#" + $(element).data("control-template"),
            data: initialData,
            append: true
        });

        this.activate();
        this.bindControl();
        return this.controlData;
    };

    var activate = function(){
        PropertyWindow.activate(this.propertyWindowTmpl, this.controlData.get());
    };

    var update = function(data){
        this.controlData.set(data);
    };

    var bindControl = function(){
        var control = $("#drawing-board .control").last();
        new Draggabilly(control[0]);

    };

    return {
        create: create,
        bindControl: bindControl,
        update: update,
        activate: activate
    };

})();