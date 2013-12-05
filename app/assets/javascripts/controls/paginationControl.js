window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['PaginationControl'] = {
  initialData: {
      starting_no: 1,
      no_of_pages: 3,
      pages: [1,2,3]
  },
  propertyWindowCallback: function(ractiveControl){
      var _this = this;
      $(".properties .no_of_pages").change(function () {
          ractiveControl.set("pages", _this.getPages());
      });
      $(".properties .starting_no").change(function () {
          ractiveControl.set("pages", _this.getPages());
      });
  },

  getPages: function() {
      var pages = [],
          startingNo = +$(".properties .starting_no").val(),
          noOfPages = +$(".properties .no_of_pages").val(),
          range = startingNo + noOfPages;
      for (var i = startingNo; i < range; i++) {
          pages.push(i);
      }
      return pages;
  }
};
