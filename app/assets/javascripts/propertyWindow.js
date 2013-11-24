var PropertyWindow = (function() {
    var propertyTemplate = null;

    var init = function(){
        $('#property-window-link').sidr({
            name: 'property-window',
            side: 'left',
            source: '#property-window-container'
        });
      this.bindEvents();
    };

    var bindEvents = function(){
        var _this = this;
        $("#property-window").on( "change", ".property", function() {
            Control.update(_this.propertyTemplate.get());
        });
    };

    var activate = function(template, data) {
        this.propertyTemplate = new Ractive({
            el: "sidr-id-properties-container",
            template: "#" + template,
            data: data
        });
        $.sidr('open', 'property-window');
    };

    return {
        init: init,
        activate: activate,
        bindEvents: bindEvents
    };

})();