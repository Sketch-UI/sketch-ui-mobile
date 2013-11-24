var Control = (function() {
    var element = null;
    var propertyWindow = null;
    var controlTmpl = null;

    var create = function(element) {
        this.element = element;
        this.propertyWindow = PropertyWindow.activate(this.element);
        this.activateControl();

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

    return {
        create: create,
        activateControl: activateControl,
        update: update
    };

})();