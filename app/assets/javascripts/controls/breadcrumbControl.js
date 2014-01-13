window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['BreadcrumbControl'] = {
  initialData: {
      breadcrumbs:"Home, Library, Data",
      breadcrumbLabels: ["Home", "Library"],
      breadcrumbLabelLast:"Data",
      color:"#428bca",
      colorActive:"#999"
  },
  propertyWindowCallback: function(ractiveControl){

      $("#properties-container .breadcrumb").change(function () {
          var breadcrumbs = $("#properties-container .breadcrumb").val();
          var breadcrumbLabels = breadcrumbs.split(',');
          for(var i = 0; i < breadcrumbLabels.length; i++)
          {
              breadcrumbLabels[i] = breadcrumbLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          var breadcrumbLabelLast = breadcrumbLabels.pop();
          ractiveControl.set("breadcrumbLabels", breadcrumbLabels)
          ractiveControl.set("breadcrumbLabelLast", breadcrumbLabelLast)
      });
  }
};
