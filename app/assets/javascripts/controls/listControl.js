window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['CheckboxListControl'] = {
  initialData: {
      height: "50",
      width: "328",
      rows: "4",
      items: [
          { item: ""},
          { item: ""},
          { item: ""},
          { item: ""}
      ]
  },
  propertyWindowCallback: function(ractiveControl){
      $("#list-rows").bind('change.bfhslider', function(ev) {
          var items = $("#list-rows").val();
          var formattedItems = [];
          for (var i = 0; i < items; i++) {


              formattedItems.push({
                  item: ""
              });
          }
          ractiveControl.set("items", formattedItems);
      });
  }
};
