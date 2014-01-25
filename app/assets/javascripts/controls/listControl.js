window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ListControl'] = {
  initialData: {
    list_items:"Item1,Item2",
    listLabels: ["Item1","Item2"]
  },
    propertyWindowCallback: function(ractiveControl){

      $("#properties-container .buttons").change(function () {
          var listItems = $("#properties-container .list-items").val();
          var listLabels = listItems.split(',');
          for(var i = 0; i < listLabels.length; i++)
          {
              listLabels[i] = listLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          ractiveControl.set("listLabels", listLabels)

      });
    }

};
