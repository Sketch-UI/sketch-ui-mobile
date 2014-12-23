window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['DrawingBoardControl'] = {
  initialData: {
      bgcolor: "#ffffff",
      phone: "iphone",
      layers: []
  },
  propertyWindowCallback: function(ractiveControl){
      $( "#sortable" ).sortable({
          update: function(event, ui){
              var updatedLayers = [];
              for(var i=0; i<$('.ui-state-default').length;i++){
                  console.log($(".control[data-control-id=" + $('.ui-state-default')[i].value + "]"), $('.ui-state-default').length-i+1)
                  $(".control[data-control-id=" + $('.ui-state-default')[i].value + "]").css({'z-index': $('.ui-state-default').length-i+1})

                  updatedLayers[i]={
                    metadataId: $('.ui-state-default')[i].innerHTML,
                    controlId: $('.ui-state-default')[i].value
                  };
              }
              ractiveControl.set("layers", updatedLayers);
          }
      });

  }
};
