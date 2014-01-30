window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['CheckboxControl'] = {
  initialData: {
      selected: true,
      color: "#000000",
      items: 1
  },
    propertyWindowCallback: function (ractiveControl) {
        $("#dropdown-items").change(function (ev) {
            var items = $("#dropdown-items").val().split("\n");
            var formattedItems = [];
            for (var i = 0; i < items; i++) {


                formattedItems.push({
                    selected: true
                });
            }
            ractiveControl.set("items", formattedItems);
        });
    }
};
