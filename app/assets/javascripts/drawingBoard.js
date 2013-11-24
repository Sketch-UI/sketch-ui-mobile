var DrawingBoard = (function() {
    var controls = null;
    var controlId = null;

    var init = function() {
        this.controls = {};
        this.controlId = 0;
        Toolbox.init();
        PropertyWindow.init();
    };

    var addControl = function(element) {
        this.controlId = this.controlId + 1;
        this.controls[this.controlId] = Control.create(element, this.controlId);
        this.bindControl(this.controlId);
    };

    var bindControl = function(controlId){
        var _this = this;
        $(".control[data-control-id=" + controlId + "]").click(function(ev){
            var element = $(ev.currentTarget);
            _this.controls[element.attr("data-control-id")].activate();
        });
    };

    return {
        init: init,
        addControl: addControl,
        bindControl: bindControl
    };

})();