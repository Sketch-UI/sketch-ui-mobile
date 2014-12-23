window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ButtongroupControl'] = {
    initialData: {
        width: 80,
        items: [
            { text: "Item1"},
            { text: "Item2"},
            { text: "Item3"},
        ],
        bg_color: '#4a87ee',
        color: '#e5e5e5', font_weight: "normal",
        font_style: "normal",
        font: "Arial"

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
