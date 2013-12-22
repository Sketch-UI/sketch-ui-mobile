var DrawingBoard = (function() {
    var controls = null;
    var controlId = null;
    var activePropertyWindow = null;

    var init = function() {
        this.controlId = 0;
        this.controls = {};
        this.create();

        Toolbox.init();
        PropertyWindow.init();

        this.setupPropertyWindow();
    };

    var create = function() {
        this.drawingBoardData = new Ractive({
            el: "body",
            template: "#DrawingBoardControl-control-template",
            data: jQuery.extend(true, {}, ControlsMetadata["DrawingBoardControl"].initialData),
            append: true
        });
    };

    var setupPropertyWindow = function() {
        PropertyWindow.create("DrawingBoardControl", this.drawingBoardData.get());

        var _this = this;
//        $("#drawing-board").click(function(ev){
//            if(!$("body").hasClass("toolbox-left-open")){
//                return;
//            }
//
//            PropertyWindow.create("DrawingBoardControl", _this.drawingBoardData.get());
//        });
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

            if(!$("body").hasClass("toolbox-left-open")){
                return;
            }

            _this.openPropertyWindow(element, controlId);
        });

        $(".control[data-control-id=" + controlId + "]").dblclick(function(ev){
            var element = $(ev.currentTarget);
            _this.openPropertyWindow(element, controlId);
        });
    };

    var bindPropertyWindow = function(){
        var _this = this;
        $("#properties-container .properties").on("change", ".property", (function(ev){
            var controlId = $(ev.currentTarget).parent(".properties").data("control-id");
            _this.controls[controlId].set(_this.activePropertyWindow.get());
        }));
    };

    var openPropertyWindow = function(element, controlId){

        if(this.activePropertyWindow.get("controlId") == controlId){
            return;
        }
        this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), this.controls[controlId].get());
        this.bindPropertyWindow();
    };

    return {
        init: init,
        create: create,
        setupPropertyWindow: setupPropertyWindow,
        addControl: addControl,
        bindControl: bindControl,
        bindPropertyWindow: bindPropertyWindow,
        openPropertyWindow: openPropertyWindow
    };

})();