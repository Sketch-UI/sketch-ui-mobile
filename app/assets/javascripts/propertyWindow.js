var PropertyWindow = (function() {
    var element = null;

    var init = function(){
      this.element = $("#property-window");
      this.bindEvents();
      var draggie = new Draggabilly(this.element[0], {
          handle: '.handle'
      });

      this.element.hide();
    };

    var bindEvents = function(){
        var _this = this;
        $("#property-window").on( "change", ".property", function() {
            Control.update(_this.getData());
        });
    };

    var activate = function(control) {
        this.element.show();
        return new Ractive({
            el: "property-window-container",
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