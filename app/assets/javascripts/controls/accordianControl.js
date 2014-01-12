window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['AccordianControl'] = {
  initialData: {
      items: [{ item: "Item1", index: 0, active: true}, { item: "Item2", index: 1, active: false},
          { item: "Item3", index: 2, active: false}, { item: "Item4", index: 3, active: false}],
      width: 500,
      height: 300
  },
  propertyWindowCallback: function(ractiveControl){
      $("#accordian-items").val("Item1***\nItem2\nItem3\nItem4");
      $("#accordian-items").change(function(ev){
            var items = $("#accordian-items").val().split("\n");
            var formattedItems = [];
            for(var i=0;i<items.length;i++){
                var item = items[i];
                var active=false;
                if(item.substr(item.length - 3) == "***"){
                    item = item.substring(0, item.length-3);
                    active=true;
                }
                formattedItems.push({
                    index: i,
                    item: item,
                    active: active
                });
            }
            ractiveControl.set("items", formattedItems);
      });
  }
};
