window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['VerticalMenuControl'] = {
  initialData: {
      verticalMenuLabelActive: "Home",
      verticalMenuLabels: ["Profile", "Messages"],
      items: "Home, Profile, Messages",
      color:"#428bca",
      bgcolor:"#428bca",
      width: 90
  },
  propertyWindowCallback: function(ractiveControl){
      $("#properties-container .menu-items").change(function () {
          var items = $("#properties-container .menu-items").val();
          var verticalMenuLabels = items.split(',');
          for(var i = 0; i < verticalMenuLabels.length; i++)
          {
              verticalMenuLabels[i] = verticalMenuLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          var verticalMenuLabelActive = verticalMenuLabels.reverse().pop();
          verticalMenuLabels.reverse();
          ractiveControl.set("verticalMenuLabelActive", verticalMenuLabelActive)
          ractiveControl.set("verticalMenuLabels", verticalMenuLabels)
      });
  }
};
