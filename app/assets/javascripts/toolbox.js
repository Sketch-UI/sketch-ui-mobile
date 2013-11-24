var Toolbox = (function() {

    var init = function() {
        this.bindControls();
    };

    var bindControls = function() {
       $("#toolbox a").click(function(ev){
            Control.create(ev.currentTarget);
       });
    };

    return {
        init: init,
        bindControls: bindControls
    };

})();