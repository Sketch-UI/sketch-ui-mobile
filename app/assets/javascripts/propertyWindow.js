var PropertyWindow = (function() {
    var init = function(){
    };

    var create = function(metadataId, data, controlRactive) {
        var propertyWindowData = new Ractive({
            el: "properties-container",
            template: "#" + metadataId + "-property-template",
            data: data
        });
        ColorPickerBinding.init(controlRactive, propertyWindowData);
        DropdownBinding.init(controlRactive, propertyWindowData);
        ControlsMetadata[metadataId].propertyWindowCallback(controlRactive);
//        Toolbox.openToolbox();
        Toolbox.showPropertyWindow();
        return propertyWindowData;
    };

    return {
        init: init,
        create: create
    };

})();