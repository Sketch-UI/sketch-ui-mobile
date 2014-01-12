window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['LabelControl'] = {
  initialData: {
    label_type:'info',
    label_text: "Sample Label"
  },
  propertyWindowCallback: function(ractiveControl){
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
  $("#label-type").change(function(ev){
      ractiveControl.set("label_type", $("#label-type").val());
  });
  $('#picker').focus(colorPicker($('#backgroundPicker'), "background_color"));
  $('#textPicker').focus(colorPicker($('#textPicker'), "text_color"));
  }
};
