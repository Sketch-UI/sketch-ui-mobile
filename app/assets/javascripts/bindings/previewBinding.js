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
    };

    return {
        init: init,
        trigger: trigger
    };

})();