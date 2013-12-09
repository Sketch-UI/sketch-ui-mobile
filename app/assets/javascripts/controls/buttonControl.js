window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ButtonControl'] = {
  initialData: {
      button_label: "Submit"
  },
  propertyWindowCallback: function(ractiveControl){
        $(".control button").dblclick(function(){
            $("#buttonLabel").focus();
        });
  }
};
