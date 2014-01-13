var DrawingBoard = (function() {
    var controls = null;
    var controlId = null;
    var activePropertyWindow = null;

    var init = function() {
        this.controlId = 0;
        this.controls = {};
        this.create();
        var _this = this;

        Toolbox.init();
        PropertyWindow.init();

        this.setupPropertyWindow();
        PreviewBinding.init();

        $("#save-sketch-btn").click(function(ev){
            SketchSaver.save(_this.controls);
        });
    };

    var create = function() {
        this.controlId = this.controlId + 1;

        var initialData = jQuery.extend(true, {}, ControlsMetadata["DrawingBoardControl"].initialData);
        initialData["controlId"] = this.controlId;

        this.controls[this.controlId] = new Ractive({
            el: "body",
            template: "#DrawingBoardControl-control-template",
            data: initialData,
            append: true
        });
    };

    var setupPropertyWindow = function() {
        this.activePropertyWindow = PropertyWindow.create("DrawingBoardControl", this.controls[1].get(), this.controls[1]);
        this.bindPropertyWindow();

        var _this = this;
        $("#drawing-board").click(function(ev){
            $("#drawing-board .control").removeClass("active");
            
            if(!$("body").hasClass("toolbox-left-open")){
                return;
            }

            _this.activePropertyWindow = PropertyWindow.create("DrawingBoardControl", _this.controls[1].get(), _this.controls[1]);
            _this.bindPropertyWindow();
        });

        $("#drawing-board").dblclick(function(ev){
            _this.activePropertyWindow = PropertyWindow.create("DrawingBoardControl", _this.controls[1].get(), _this.controls[1]);
            _this.bindPropertyWindow();
        });

    };

    var addControl = function(element, position) {
        this.controlId = this.controlId + 1;

        this.controls[this.controlId] = Control.create(element, this.controlId, position);
        this.bindDeleteControl(this.controlId);
        this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), this.controls[this.controlId].get(), this.controls[this.controlId]);
        this.bindControl(this.controlId);
        this.bindPropertyWindow();
    };

    var bindControl = function(controlId){
        var _this = this;

        $(".control[data-control-id=" + controlId + "]").click(function(ev){
            ev.stopPropagation();
            var element = $(ev.currentTarget);

            $("#drawing-board .control").removeClass("active");
            element.addClass("active");

            if(!$("body").hasClass("toolbox-left-open")){
                return;
            }

            _this.openPropertyWindow(element, controlId);
        });

        $(".control[data-control-id=" + controlId + "]").dblclick(function(ev){
            ev.stopPropagation();
            var element = $(ev.currentTarget);
            _this.openPropertyWindow(element, controlId);
        });
    };

    var bindPropertyWindow = function(){
        var _this = this;
        $("#properties-container .properties").on("change", ".property", (function(ev){
            var controlId = $(ev.currentTarget).closest(".properties").data("control-id");
            _this.controls[controlId].set(_this.activePropertyWindow.get());
        }));
    };

    var openPropertyWindow = function(element, controlId){

        if(this.activePropertyWindow.get("controlId") == controlId){
            return;
        }
        this.activePropertyWindow = PropertyWindow.create(element.data("metadata-id"), this.controls[controlId].get(), this.controls[controlId]);
        this.bindPropertyWindow();
    };

    var bindDeleteControl = function(controlId){
        var _this=this;
        $("#drawing-board .control[data-control-id='" + controlId + "'] .delete").click(function(ev){
            ev.stopPropagation();
            $("#drawing-board .control[data-control-id='" + controlId + "']").remove();
            delete _this.controls[controlId];
        });
    };

    return {
        init: init,
        create: create,
        setupPropertyWindow: setupPropertyWindow,
        addControl: addControl,
        bindControl: bindControl,
        bindPropertyWindow: bindPropertyWindow,
        openPropertyWindow: openPropertyWindow,
        bindDeleteControl: bindDeleteControl
    };

})();