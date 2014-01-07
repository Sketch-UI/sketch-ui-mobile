window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['ProgressBarControl'] = {
  initialData: {
    width: '300',
    percent: '50',
    progress_bar_type:'info'
  },
  propertyWindowCallback: function(ractiveControl){
      $("#progressbar-type").change(function(ev){
          ractiveControl.set("progress_bar_type", $("#progressbar-type").val());
      });
  }
};
