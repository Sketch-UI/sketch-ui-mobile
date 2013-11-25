var PropertyWindow = (function() {
    var init = function(){
        $('#property-window-link').sidr({
            name: 'property-window',
            side: 'left',
            source: '#property-window-container'
        });
    };

    var create = function(metadataId, data) {
        var propertyWindowData = new Ractive({
            el: "sidr-id-properties-container",
            template: "#" + ControlsMetadata[metadataId].propertyWindowTemplate,
            data: data
        });
        $.sidr('open', 'property-window');

        return propertyWindowData;
    };

    return {
        init: init,
        create: create
    };

})();