window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['AlertControl'] = {
  initialData: {
      alert_message: "Well done! You successfully read this important alert message.",
      alert_type: "success"
  },
  propertyWindowCallback: function(ractiveControl){
      $("#alert-type").change(function(ev){
          ractiveControl.set("alert_type", $("#alert-type").val());
      });
  }
};
