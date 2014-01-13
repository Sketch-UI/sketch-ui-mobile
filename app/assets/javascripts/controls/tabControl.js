window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['TabControl'] = {
  initialData: {
    itemsString: "Item1***,Item2",
    items: [
        { item: "Item1", index: 0, active: true}, 
        { item: "Item2", index: 1, active: false}
    ],
    width: 500,
    height: 300
  },
  propertyWindowCallback: function(ractiveControl){
      $("#properties-container .headers").change(function(){
            var itemsString = $("#properties-container .headers").val();
            var items = itemsString.split(",");
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
