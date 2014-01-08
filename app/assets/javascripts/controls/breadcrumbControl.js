window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['BreadcrumbControl'] = {
  initialData: {
      breadcrumbs:"Home,Library,Book",
      breadcrumbLabels: ["Home", "Library", "Book"]
  },
  propertyWindowCallback: function(ractiveControl){

      $("#properties-container .breadcrumb").change(function () {
          var breadcrumbs = $("#properties-container .breadcrumb").val();
          var breadcrumbLabels = breadcrumbs.split(',');
          for(var i = 0; i < breadcrumbLabels.length; i++)
          {
              breadcrumbLabels[i] = breadcrumbLabels[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          ractiveControl.set("breadcrumbLabels", breadcrumbLabels)

      });
  }
};
