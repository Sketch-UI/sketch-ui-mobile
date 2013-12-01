var PropertyWindow = (function() {
    var init = function(){
    };

    var create = function(metadataId, data) {
        var propertyWindowData = new Ractive({
            el: "properties-container",
            template: "#" + ControlsMetadata[metadataId].propertyWindowTemplate,
            data: data
        });
        ControlsMetadata[metadataId].callback();
        Toolbox.openToolbox();
        Toolbox.showPropertyWindow();
        return propertyWindowData;
    };

    return {
        init: init,
        create: create
    };

})();