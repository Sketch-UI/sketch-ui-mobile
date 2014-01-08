window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ButtonControl'] = {
    initialData: {
        button_label: "Button",
        background_color: "#428bca",
        text_color: "white"
    },
    propertyWindowCallback: function (ractiveControl) {
        $(".control button").dblclick(function () {
            $("#buttonLabel").focus();
        });

        var colorPicker = function (element, styleProperty) {
            $(element).colpick({
                layout: 'hex',
                submit: 0,
                colorScheme: 'dark',
                onChange: function (hsb, hex, rgb, fromSetColor) {
                    if (!fromSetColor) {
                        $(element).val('#' + hex).css('border-color', '#' + hex)
                        ractiveControl.set(styleProperty, '#' + hex);
                    }
                }
            })
                .keyup(function () {
                    $(this).colpickSetColor(this.value);
                })
        }

        $('#picker').focus(colorPicker($('#backgroundPicker'), "background_color"));
        $('#textPicker').focus(colorPicker($('#textPicker'), "text_color"));
    }
};
