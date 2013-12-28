window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ButtonGroupControl'] = {
  initialData: {
      buttons:"button1,button2,button3",
      buttonLabels: ["button1", "button2", "button3"]
  },
  propertyWindowCallback: function(ractiveControl){

      $("#properties-container .buttons").change(function () {
          var buttons = $("#properties-container .buttons").val();
          var buttonLabels = buttons.split(',');
          for(var i = 0; i < buttonLabels.length; i++)
          {
              buttonLabels[i] = buttonLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          ractiveControl.set("buttonLabels", buttonLabels)

      });
  }
};
