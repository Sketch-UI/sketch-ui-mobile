var PreviewBinding = (function() {

    var init = function() {
        $(document).keydown(function(ev) {
            if(ev.keyCode == 80){
                $("#toolbox-left").toggle();
                $("body").toggleClass("preview");
            }
        });
    };

    return {
        init: init
    };

})();