var CategoryListBinding = (function() {

    var init = function() {
        $("#category-list").change(function(ev){
            $("#controls-container ul li").hide();
            var selectedCategory = $("#category-list").val();
            $("#controls-container ul li." + selectedCategory).show();
        });
        $("#category-list").trigger("change");
    };

    return {
        init: init
    };

})();