var PropertyWindow = (function() {
    var init = function(){
    };

    var create = function(metadataId, data) {
        var propertyWindowData = new Ractive({
            el: "properties-container",
            template: "#" + metadataId + "-property-template",
            data: data
        });
        ControlsMetadata[metadataId].propertyWindowCallback(propertyWindowData);
        Toolbox.openToolbox();
        Toolbox.showPropertyWindow();
        return propertyWindowData;
    };

    return {
        init: init,
        create: create
    };

})();