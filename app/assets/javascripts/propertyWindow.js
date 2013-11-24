var PropertyWindow = (function() {

    var init = function(){
      this.bindEvents();
    };

    var bindEvents = function(){
        var _this = this;
        $("#property-window").on( "change", ".property", function() {
            Control.update(_this.getData());
        });
    };

    var activate = function(control) {
        return new Ractive({
            el: "property-window",
            template: "#" + $(control).data("property-template")
        });
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