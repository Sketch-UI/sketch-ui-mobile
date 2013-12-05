window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ButtonGroupControl'] = {
  initialData: {
      noOfButtons: 3,
      buttonLabels: ["button1", "button2", "button3"]
  },
  propertyWindowCallback: function(ractiveControl){
      $("#properties-container .noOfButtons").val($("#properties-container .noOfButtons").data("value"));

      $("#properties-container .noOfButtons").change(function () {
          var noOfButtons = $("#properties-container .noOfButtons").val();
          var buttonLabels = ractiveControl.get("buttonLabels");
          ractiveControl.set("noOfButtons", noOfButtons);

          while (noOfButtons > buttonLabels.length) {
              buttonLabels.push("button" + (buttonLabels.length + 1));
          }
          while (noOfButtons < buttonLabels.length) {
              buttonLabels.pop();
          }
      });
  }
};
