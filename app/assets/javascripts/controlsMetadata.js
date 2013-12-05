var ControlsMetadata = {
    "ButtonControl": {
        template: "button-control-template",
        propertyWindowTemplate: "button-property-template",
        initialData: {
            button_label: "Submit"
        },
        callback: function (control) {
        }
    },

    "TextControl": {
        template: "text-control-template",
        propertyWindowTemplate: "text-property-template",
        initialData: {
            textvalue: "Harsha",
            width: "50"
        },
        callback: function (control) {
        }
    },

    "HeadingControl": {
        template: "heading-control-template",
        propertyWindowTemplate: "heading-property-template",
        initialData: {
            content: "Hello! This is a heading",
            size: "36"
        },
        callback: function (control) {

        }
    },

    "ButtonGroupControl": {
        template: "button-group-control-template",
        propertyWindowTemplate: "button-group-property-template",
        initialData: {
            noOfButtons: 3,
            buttonLabels: ["button1", "button2", "button3"]


        },
        callback: function (control) {
            $("#properties-container .noOfButtons").val($("#properties-container .noOfButtons").data("value"));

            $("#properties-container .noOfButtons").change(function () {
                var noOfButtons = $("#properties-container .noOfButtons").val();
                var buttonLabels = control.get("buttonLabels");
                control.set("noOfButtons", noOfButtons);

                while (noOfButtons > buttonLabels.length) {
                    buttonLabels.push("button" + (buttonLabels.length + 1));
                }
                while (noOfButtons < buttonLabels.length) {
                    buttonLabels.pop();
                }
            });
        }
    },

    "PaginationControl": {
        template: "pagination-control-template",
        propertyWindowTemplate: "pagination-property-template",
        initialData: {
            starting_no: 1,
            no_of_pages: 3
        },
        callback: function (control) {
            control.set("pages", getPages());
            $(".properties .no_of_pages").change(function () {
                control.set("pages", getPages());
            });
            $(".properties .starting_no").change(function () {
                control.set("pages", getPages());
            });

            function getPages() {
                var pages = [],
                    startingNo = +$(".properties .starting_no").val(),
                    noOfPages = +$(".properties .no_of_pages").val(),
                    range = startingNo + noOfPages;
                for (var i = startingNo; i < range; i++) {
                    pages.push(i);
                }
                return pages;
            }
        }
    }
};