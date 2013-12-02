var ControlsMetadata = {
    "ButtonControl": {
        template: "button-control-template",
        propertyWindowTemplate: "button-property-template",
        initialData: {
            button_label: "Submit"
        },
        callback: function(control){
        }
    },

    "TextControl": {
        template: "text-control-template",
        propertyWindowTemplate: "text-property-template",
        initialData: {
            textvalue: "Harsha",
            width: "50"
        },
        callback: function(control){
        }
    },

    "HeadingControl": {
        template: "heading-control-template",
        propertyWindowTemplate: "heading-property-template",
        initialData: {
            content: "Hello! This is a heading",
            size: "36"
        },
        callback: function(control){
        }
    },

    "ButtonGroupControl": {
        template: "button-group-control-template",
        propertyWindowTemplate: "button-group-property-template",
        initialData: {
            noOfButtons:3,
            buttonLabels: ["button1", "button2","button3"]


        },
        callback: function(control){
            $("#properties-container .noOfButtons").val($("#properties-container .noOfButtons").data("value"));

            $("#properties-container .noOfButtons").change(function(){
                var noOfButtons = $("#properties-container .noOfButtons").val();
                var buttonLabels = control.get("buttonLabels");
                control.set("noOfButtons", noOfButtons);

                    while(noOfButtons>buttonLabels.length){
                        buttonLabels.push("button" + (buttonLabels.length + 1) );
                    }
                    while(noOfButtons<buttonLabels.length){
                       buttonLabels.pop();
                    }
            });
        }
    }
};