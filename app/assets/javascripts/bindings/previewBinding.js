var PreviewBinding = (function() {

    var init = function() {
        var _this = this;
        $(document).keydown(function(ev) {
            if((window.location.href.indexOf("preview") == -1)) {
                if(ev.keyCode == 80 && ev.target.nodeName.toLowerCase() !== 'input'){
                    _this.trigger();
                }
            }
        });
    };

    var trigger = function(){
        var mode=true;
        if($("body").hasClass("preview")){
            mode = false;
        }
        this.set(mode);
    };

    var set = function(mode){
        if(mode){
            $("#toolbox-left").hide();
            $("body").addClass("preview");
        }else{
            $("#toolbox-left").show();
            $("body").removeClass("preview");
        }

        if((window.location.href.indexOf("preview") != -1) || mode == false){
            SketchesController.show(window.location.href.substring(window.location.href.lastIndexOf('#') + 1), mode);
        }
        else{
         SketchesController.save(function(){
            SketchesController.show(window.location.href.substring(window.location.href.lastIndexOf('#') + 1), mode);
          });
        }
    };

    return {
        init: init,
        trigger: trigger,
        set: set
    };

})();