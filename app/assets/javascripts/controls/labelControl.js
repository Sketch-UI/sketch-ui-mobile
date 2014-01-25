window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['LabelControl'] = {
  initialData: {
    placeholder_text: "",
    placeholder_display: "none",
    label_value: "Label",
    text_value: "Text"
  },
  propertyWindowCallback: function(ractiveControl){

      $("#label-type").change(function(ev){
          if ($("#label-type").val() != "placeholder"){
            $("#label_group").show();
            ractiveControl.set("placeholder_display", true );
          }
          else{
            $("#label_group").hide();
            ractiveControl.set("placeholder_display", "none" );
          }

          if ($("#label-type").val() == "stacked"){
            $(".item-input").addClass("item-stacked-label");
          }
          else{
            $(".item-input").removeClass("item-stacked-label");
          }
          ractiveControl.set("label_type", $("#label-type").val());
      });

  }
};
