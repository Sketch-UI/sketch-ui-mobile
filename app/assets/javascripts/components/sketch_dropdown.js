var SketchDropdown = (function() {

    var create = function(sketches) {
        new Ractive({
            el: "sketches-dropdown",
            template: "#sketches-dropdown-template",
            data: {sketches: sketches}
        });
    };


    return {
        create: create
    };

})();