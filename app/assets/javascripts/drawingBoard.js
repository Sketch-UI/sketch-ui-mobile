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

    var addControl = function(element, position) {
        this.controlId = this.controlId + 1;

        this.controls[this.controlId] = Control.create(element, this.controlId, position);
        this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), this.controls[this.controlId].get());
        this.bindControl(this.controlId);
        this.bindPropertyWindow();
    };

    var bindControl = function(controlId){
        var _this = this;
        $(".control[data-control-id=" + controlId + "]").click(function(ev){
            var element = $(ev.currentTarget);
            $("#drawing-board .control").removeClass("active");
            element.addClass("active");
            if(_this.activePropertyWindow.get("controlId") == controlId){
                return;
            }
            _this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), _this.controls[controlId].get());
            _this.bindPropertyWindow();
        });
    };

    var bindPropertyWindow = function(){
        var _this = this;
        $("#properties-container .properties").on("change", ".property", (function(ev){
            var controlId = $(ev.currentTarget).parent(".properties").data("control-id");
            _this.controls[controlId].set(_this.activePropertyWindow.get());
        }));
    };

    return {
        init: init,
        addControl: addControl,
        bindControl: bindControl,
        bindPropertyWindow: bindPropertyWindow
    };

})();