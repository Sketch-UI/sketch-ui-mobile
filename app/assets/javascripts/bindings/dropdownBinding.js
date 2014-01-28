var DropdownBinding = (function() {

    var init = function(controlHandle, propertyHandle) {
        $("#properties-container select.property:not(.font-property)").each(function(index, element){
            $(element).change(function (ev) {
                propertyHandle.set($(element).attr("data-value"), $(element).val());
                controlHandle.set(propertyHandle.get());
            });
            $(element).val(propertyHandle.get($(element).attr("data-value")));
            $(element).trigger("change");
        });
    };

    return {
        init: init
    };

})();