var Toolbox = (function() {

    var init = function() {
        $('#toolbox-link').sidr({
            name: 'toolbox-left',
            side: 'left'
        });
        new Ractive({
            el: "toolbox-left",
            template: "#toolbox-template"
        });
        this.bindToolBox();
        this.bindControls();

        $("#controls-container ul li a").draggable({ helper:'clone'});

        $.sidr('open', 'toolbox-left');
    };

    var bindControls = function() {
       var _this = this;
        $("#drawing-board").droppable({
            accept: '#controls-container ul li a',
            drop: function(event, ui) {
                var drawingBoardPositions = $("#drawing-board")[0].getBoundingClientRect();
                var position = {
                    top: ui.position.top - drawingBoardPositions.top,
                    left: ui.position.left - drawingBoardPositions.left
                }

                var metadataId = $(ui.draggable).data("metadata-id");

                if(ControlsMetadata[metadataId].groupControl){
                    var controls = ControlsMetadata[metadataId].controls;
                    for(var i=0; i<controls.length; i++){
                        var updated_position = {
                            top: position.top + controls[i].position.top,
                            left: position.left + controls[i].position.left
                        }

                        var data = jQuery.extend(true, {}, controls[i].data);

                        DrawingBoard.addControl(controls[i].metadataId, updated_position, data, false, false);
                    }
                    if($(".control.active").hasClass("ui-draggable")){
                        $(".control.active").draggable("destroy");
                    }
                    $(".control.active").multiDraggable({ containment: "parent", cancel: null ,group: $(".control.active")});
                }
                else{
                    DrawingBoard.addControl(metadataId, position, null, false, true);
                }


                _this.showPropertyWindow();
            }
        });
    };

    var bindToolBox = function() {
        $("#toolbox-left ul.toolbox-tab li a").click(function(ev){
            $("#toolbox-left .toolbox-tab-container").hide();
            $("#toolbox-left ul.toolbox-tab li").removeClass("active");
            $("#" + $(ev.currentTarget).data("id")).show();
            $(ev.currentTarget).parent("li").addClass("active");
        });
        this.showControlWindow();
    };

    var showControlWindow = function(){
        $("#toolbox-left ul.toolbox-tab li a[data-id='controls-container']").trigger("click");
    };

    var showPropertyWindow = function(){
        $("#toolbox-left ul.toolbox-tab li a[data-id='properties-container']").trigger("click");
    };

    var openToolbox = function(){
        $.sidr('open', 'toolbox-left');
    }

    return {
        init: init,
        bindControls: bindControls,
        bindToolBox: bindToolBox,
        showControlWindow: showControlWindow,
        showPropertyWindow: showPropertyWindow,
        openToolbox: openToolbox
    };

})();
