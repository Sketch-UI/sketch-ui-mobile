window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ToggleControl'] = {
    initialData: {
        width: 320,
        items: [
            { text: "Item1"},
            { text: "Item2"},
            { text: "Item3"},
            { text: "Item4"}
        ]                     ,
        on_color: '#4a87ee' ,
        off_color: '#e5e5e5'

    },
    propertyWindowCallback: function (ractiveControl) {
        $("#dropdown-items").val("Item1\nItem2\nItem3\nItem4");
        $("#dropdown-items").change(function (ev) {
            var items = $("#dropdown-items").val().split("\n");
            var formattedItems = [];
            for (var i = 0; i < items.length; i++) {


                formattedItems.push({
                    text: items[i]
                });
            }
            ractiveControl.set("items", formattedItems);
        });

    }
};
