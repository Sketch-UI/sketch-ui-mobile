var DrawingBoard = (function() {
    var controls = null;
    var controlId = null;
    var activePropertyWindow = null;

    var init = function() {
        this.controlId = 0;
        this.controls = {};

        Toolbox.init();
        PropertyWindow.init();
    };

    var addControl = function(element) {
        this.controlId = this.controlId + 1;

        this.controls[this.controlId] = Control.create(element, this.controlId);
        this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), this.controls[this.controlId].get());
        this.bindControl(this.controlId);
        this.bindPropertyWindow();
    };

    var bindControl = function(controlId){
        var _this = this;
        $(".control[data-control-id=" + controlId + "]").click(function(ev){
            var element = $(ev.currentTarget);
            _this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), _this.controls[controlId].get());
            _this.bindPropertyWindow();
        });
    };

    var bindPropertyWindow = function(){
        var _this = this;
        $("#property-window .property").change(function(ev){
            var controlId = $(ev.currentTarget).parent(".properties").data("control-id");
            _this.controls[controlId].set(_this.activePropertyWindow.get());
        });
    };

    return {
        init: init,
        addControl: addControl,
        bindControl: bindControl,
        bindPropertyWindow: bindPropertyWindow
    };

})();