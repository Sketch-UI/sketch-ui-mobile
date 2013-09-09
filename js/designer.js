$(document).ready(function() {
    var globalControlID = 1;
    var controlProperties = [];

    $("#control-properties-modal").draggable();
    $("#control-properties-modal").css({'top': 120, 'left' : 900});

    $("#controls").mCustomScrollbar({
        horizontalScroll:true
    });

    $(".sketch-control-selector").click(function(event){
        event.preventDefault();

        var element = $(event.currentTarget);

        globalControlID = globalControlID + 1;
        controlProperties[globalControlID] = {};

        var html = Mustache.to_html($("#" + element.attr("data-template-id")).text(), {id: globalControlID});
         $("#content").append("<div class='component-wrapper draggable'>" + html + "</div>");

        var propertiesTemplateID = $("#control" + globalControlID).attr("data-properties-template-id");
        var properties = Mustache.to_html($("#" + propertiesTemplateID).text(), {id: globalControlID, properties: controlProperties[globalControlID]});
        $("#model-properties-placeholder").html(properties);

        $("#control" + globalControlID).parent(".draggable").draggable({
//          containment: "parent"
        });
        $("#control-properties-modal").show();
    });

    $("#content").on("click", ".draggable", function(event){
        var element = $(event.currentTarget);
        var controlID = $(element.find(".control")).attr("data-id");

        var propertiesTemplateID = $("#control" + controlID).attr("data-properties-template-id");
        var properties = Mustache.to_html($("#" + propertiesTemplateID).text(), {id: controlID, properties: controlProperties[controlID]});
        $("#model-properties-placeholder").html(properties);
        $("#control-properties-modal").show();
    });

    $("#properties-apply-button").click(function(ev){
        ev.preventDefault();
        var formValues = $("#propertiesForm").serializeJSON();
        var controlID = formValues.controlID;
        controlProperties[controlID] = formValues;

        var html = Mustache.to_html($("#" + formValues.controlTemplateID).text(), {id: controlID, properties: controlProperties[controlID]});
        $("#control" + controlID).parent(".draggable").html(html);
        $("#control-properties-modal").hide();
    });

    $("#properties-delete-button").click(function(ev){
        ev.preventDefault();
        var formValues = $("#propertiesForm").serializeJSON();

        var controlID = formValues.controlID;
        $("#control" + controlID).parent(".draggable").remove();
        $("#control-properties-modal").hide();
    });

    $("#close-modal").click(function(){
        $("#control-properties-modal").hide();
    });

    var fullScreenToggle = function(event) {
        event.preventDefault();
//        var fullScreenBarHeight = $("content").css("margin-top") == "0px" ? "60px" : 0;
        $("#header").toggle();
        $("#full-screen-bar").toggle();
        $("#title-bar").toggle();
//        $("#content").css("margin-top", fullScreenBarHeight)
    }

    $("body").keypress(function(event) {
        if (event.which == 13) {
            fullScreenToggle(event);
        }
    });

    $(".full-screen-icon").click(function(event) {
        fullScreenToggle(event);
    });


});