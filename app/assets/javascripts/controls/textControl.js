window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['TextControl'] = {
  initialData: {
      caption:'Enter Some non-editable text here. Enter Some non-editable text here',
      height: 75,
      width: 180,
      color: "#000000"
  },
  propertyWindowCallback: function(ractiveControl){
      $("#free-text").change(function(ev){
            ractiveControl.set("caption", $("#free-text").val());
      });
  }
};
