var Toolbox = (function() {

    var init = function() {
        $('#toolbox-link').sidr({
            name: 'toolbox-left',
            side: 'left',
            source: '#toolbox-container'
        });
        this.bindControls();
    };

    var bindControls = function() {
       $("#toolbox-left a").click(function(ev){
           DrawingBoard.addControl($(ev.currentTarget));
           $.sidr('close', 'toolbox-left');
       });
    };

    return {
        init: init,
        bindControls: bindControls
    };

})();