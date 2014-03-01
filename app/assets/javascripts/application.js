//= require jQuery/jquery-2.0.3
//= require jQuery/jquery-migrate-1.2.1
//= require jQuery/jquery-ui-1.10.3.custom.min
//= require multidraggable/multidraggable.js
//= require jQuery/jquery.mCustomScrollbar.min
//= require jQuery/jquery.serializeJSON
//= require bootstrap/bootstrap.min
//= require bootstrap/bootstrap-datetimepicker.min
//= require Ractive/Ractive
//= require picker/picker
//= require picker/picker.date
//= require picker/legacy
//= require sidr/jquery.sidr.min
//= require formhelpers/bootstrap-formhelpers
//= require mousetrap/mousetrap
//= require_tree .

$(document).ready(function() {
    if($("#toolbox-template").length>0){
        DrawingBoard.init();
        Routing.init();
    }
});