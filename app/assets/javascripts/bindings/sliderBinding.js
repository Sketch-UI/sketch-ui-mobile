var SliderBinding = (function() {

    var init = function(controlHandle, propertyHandle) {
        $("#properties-container .slider-property").each(function(index, element){
            $(element).addClass("bfh-slider");
            $(element).bfhslider({
                name: "slider",
                value: controlHandle.get($(element).data("key")),
                min: $(element).data("min"),
                max: $(element).data("max")
        });

        $(element).bind('change.bfhslider', function(e) {
            controlHandle.set($(element).data("key"),  $(e.target).val());
        });
       });
    };

    return {
        init: init
    };

})();