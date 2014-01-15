window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['DropdownControl'] = {
    initialData: {
        dropdownLabel: "Item1",
        items: [{ item: "Item2", index: 1},
            { item: "Item3", index: 2}, { item: "Item4", index: 3}],
        dropdownType: "",
        width: 80,
        bgcolor: "#428bca",
        color: "#ffffff"
    },
    propertyWindowCallback: function (ractiveControl) {
        $("#dropdown-items").val("Item1\nItem2\nItem3\nItem4");
        $("#dropdown-items").change(function (ev) {
            var items = $("#dropdown-items").val().split("\n");
            var formattedItems = [];
            for (var i = 0; i < items.length; i++) {
                if(i==0)
                {
                    dropdownLabel=items[i]
                }
                else{
                var item = items[i];
                }

                formattedItems.push({
                    index: i,
                    item: item
                });
            }
            ractiveControl.set("dropdownLabel", dropdownLabel);
            ractiveControl.set("items", formattedItems);
        });
        $(".btn-group").on('hide.bs.dropdown', function () {
            return false;
        });
    }
};
