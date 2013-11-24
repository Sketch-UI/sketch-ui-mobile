var PropertyWindow = (function() {

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
            Control.update(_this.getData());
        });
    };

    var activate = function(control) {
        new Ractive({
            el: "sidr-id-properties-container",
            template: "#" + $(control).data("property-template")
        });
        $.sidr('open', 'property-window');
    };

    var getData = function(){
        controlProperties = {};
        $("#property-window .property").each(function(index, element){
             controlProperties[$(element).attr("name")] = $(element).val();
        });
        return controlProperties;
    };


    return {
        init: init,
        activate: activate,
        bindEvents: bindEvents,
        getData: getData
    };

})();