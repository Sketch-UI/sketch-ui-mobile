var FontPickerBinding = (function() {

    var init = function(controlHandle, propertyHandle) {
        $("#properties-container .font-property").each(function(index, element){
            $(element).bfhfonts();
            $(element).addClass("bfh-fonts");

            $(element).change(function(event){
                var font = $(element).val();
                controlHandle.set($(element).data("key"), font);
            });
            $(element).val(controlHandle.get($(element).data("key")));
        });
    };

    return {
        init: init
    };

})();