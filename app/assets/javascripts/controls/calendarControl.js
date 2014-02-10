window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['CalendarControl'] = {
  initialData: {},
  propertyWindowCallback: function(ractiveControl){
      $("#date").click(function (ev) {
        $( '.datepicker' ).pickadate()
      })
  }
};
