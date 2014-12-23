var StandardPickerBinding = (function() {

    var init = function(controlHandle, propertyHandle) {
        $("#properties-container .standard-color-picker button").each(function(index, element){
            $(element).click(function(ev){
                controlHandle.set($(element).parent().data("value"), $(element).data("color"));
                propertyHandle.set($(element).parent().data("value"), $(element).data("color"));
            });
            $(element).css("background-color", $(element).data("color"));
        });
    };

    return {
        init: init
    };

})();
