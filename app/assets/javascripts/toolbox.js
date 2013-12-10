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
    };

    var bindControls = function() {
       var _this = this;
        $("#drawing-board").droppable({
            accept: '#controls-container ul li a',
            drop: function(event, ui) {
                DrawingBoard.addControl($(ui.draggable));
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