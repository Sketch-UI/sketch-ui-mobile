
  var combined_data= [];

window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['TabControl'] = {
  initialData: {
    tab_headers: ["Tab1","Tab2"],
    tab_content: ["First Tab","Another Tab"],
    combined_data: []
  },
  propertyWindowCallback: function(ractiveControl){
    $('#myTab a').click(function (e) {
      if($(this).parent('li').hasClass('active')){
          $( $(this).attr('href') ).hide();
      }
      else {
          e.preventDefault();
          $(this).tab('show');
      }
  });

    $("#properties-container .headers").change(function () {
        combined_data =[]
        var headers = $("#properties-container .headers").val();
        var headerLabels = headers.split(',');
        var i=0;
        for(; i < headerLabels.length; i++)
        {
            headerLabels[i] = headerLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
            // combined_data.push({
            //   href:   "#"+headerLabels[i],
            //   content: headerLabels[i]
            // });
        }
        ractiveControl.set("headerLabels", headerLabels);
    });

    $("#properties-container .content").change(function () {
        combined_data =[]
        var headers = $("#properties-container .headers").val();
        var headerLabels = headers.split(',');
        var content = $("#properties-container .content").val();
        var contentLabels = content.split(',');
        var i=0;
        for(; i < contentLabels.length; i++)
        {
            contentLabels[i] = contentLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
            combined_data.push({
              heading: headerLabels[i],
              href:   "#"+headerLabels[i],
              content: contentLabels[i]
            });
        }
        ractiveControl.set("combined_data", combined_data);
    });
  }

};
