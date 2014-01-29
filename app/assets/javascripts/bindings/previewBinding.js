var PreviewBinding = (function() {

    var init = function() {
        var _this = this;
        $(document).keydown(function(ev) {
            if(ev.keyCode == 80 && ev.target.nodeName.toLowerCase() !== 'input'){
                _this.trigger();
            }
        });
    };

    var trigger = function(){
        $("#toolbox-left").toggle();
        $("body").toggleClass("preview");

        var previewMode = false;
        if($("body").hasClass("preview")){
            previewMode = true;
        }
        SketchesController.show(window.location.href.substring(window.location.href.lastIndexOf('#') + 1), previewMode);
    };

    return {
        init: init,
        trigger: trigger
    };

})();