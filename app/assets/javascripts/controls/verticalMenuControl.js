window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['VerticalMenuControl'] = {
  initialData: {
      items: ["Home", "Profile", "Messages"],
      itemsString: "Home***\nProfile\nMessages",
      items: [{ item: "Home", active: true}, { item: "Profile", active: false},
          { item: "Messages", active: false}],
      color:"#428bca",
      bgcolor:"#428bca",
      width: 90
  },
  propertyWindowCallback: function(ractiveControl){
      $("#menu-items").change(function () {
          var itemsString = $("#menu-items").val();
          var items = itemsString.split("\n");
          var formattedItems = [];
          for(var i=0;i<items.length;i++){
              var item = items[i];
              var active=false;
              if(item.substr(item.length - 3) == "***"){
                  item = item.substring(0, item.length-3);
                  active=true;
              }
              formattedItems.push({
                  item: item,
                  active: active
              });
          }
          ractiveControl.set("items", formattedItems);
      });
  }
};
