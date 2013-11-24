var Control = (function() {
    var element = null;
    var propertyWindow = null;
    var controlTmpl = null;

    var create = function(element) {
        this.element = element;
        this.propertyWindow = PropertyWindow.activate(this.element);
        this.activateControl();
        this.bindControl();
    };

    var activateControl = function(){
       this.controlTmpl = new Ractive({
           el: "drawing-board",
           template: "#" + $(this.element).data("control-template"),
           data: PropertyWindow.getData(),
           append: true
       });
    };

    var update = function(data){
        this.controlTmpl.set(data);
    };

    var bindControl = function(){
        var control = $("#drawing-board .control").last();
        new Draggabilly(control[0]);
        control.click(function(ev){
            console.log("ss");
        });
    };

    return {
        create: create,
        activateControl: activateControl,
        bindControl: bindControl,
        update: update
    };

})();