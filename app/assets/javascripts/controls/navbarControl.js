window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['NavbarControl'] = {
  initialData: {
      brand: "Mansi",
      links: ["link", "link"]
  },
  propertyWindowCallback: function(ractiveControl){
      $("#no_of_links").change(function(){
          var noOfLinks = +$("#no_of_links").val();
          var links = [];
          for(var i=1;i<=noOfLinks;i++){
                links.push("link");
          }
          ractiveControl.set("links", links);
      });
  }
};
