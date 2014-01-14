//= require jQuery/jquery-2.0.3
//= require jQuery/jquery-migrate-1.2.1
//= require jQuery/jquery-ui-1.10.3.custom.min
//= require jQuery/jquery.mCustomScrollbar.min
//= require jQuery/jquery.serializeJSON
//= require bootstrap/bootstrap.min
//= require Ractive/Ractive
//= require draggabilly/draggabilly
//= require sidr/jquery.sidr.min
//= require_tree .

$(document).ready(function() {
    if($("#toolbox-template").length>0){
        DrawingBoard.init();
    }
});