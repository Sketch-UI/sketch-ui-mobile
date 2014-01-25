window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['IconControl'] = {
  initialData: {
      font_size: "30",
      color: "#000000",
      icon_class: "ion-star"
  },
  propertyWindowCallback: function(ractiveControl){
      $("#icons li." + ractiveControl.get("icon_class")).addClass("active");
      $("#icons li").click(function(event){
          var icon = $(event.target);
          var icon_class = icon.attr("class");
          $("#icons li").removeClass("active");
          icon.addClass("active");
          ractiveControl.set("icon_class", icon_class);

      });
  }
};
