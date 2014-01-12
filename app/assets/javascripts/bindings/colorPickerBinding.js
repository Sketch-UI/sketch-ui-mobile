var ColorPickerBinding = (function() {

    var init = function(controlHandle, propertyHandle) {
        $("#properties-container .color-property").each(function(index, element){
            $(element).colpick({
                layout: 'hex',
                submit: 0,
                colorScheme: 'dark',
                onChange: function (hsb, hex, rgb, fromSetColor) {
                    if (!fromSetColor) {
                        $(element).val('#' + hex).css('border-color', '#' + hex);
                        propertyHandle.updateModel();
                        controlHandle.set(propertyHandle.get());
                    }
                }
            }).keyup(function () {
                    $(this).colpickSetColor(this.value);
                    $(this).css('border-color', this.value);
            });
            $(element).trigger("keyup");
        });
    };

    return {
        init: init
    };

})();