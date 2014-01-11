  function formatData(){
    tbody= "",
    theader="",
    headerData= ""
    };

  function insertTable() {
      formatData();
      var result = document.getElementById("userInput").value.split('/');
      headerData = result.splice(0, 1)[0].split(',');
      var num_rows = result.length;

      //markup for table header
      var j = 0;
      for (; j < headerData.length; j++) {
          theader += "<th>" + headerData[j] + " </th>";
      }
      theader += "</thead>";

      //markup for the rows
      for (var i = 0; i < num_rows; i++) {
          makeNewRow(result[i]);
      }

      return table_data = theader+tbody;
  };

  function makeNewRow(rowData) {
      var cells = rowData.split(',');
      tbody += "<tr>";
      var j=0;
      for (; j < cells.length; j++) {
          tbody += "<td>";
          tbody += cells[j];
          tbody += "</td>"
      }
      tbody += "</tr><br />";
  };

window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['TableControl'] = {
  initialData: {
    table_type: "table bordered",
    border_color: "2px solid black",
    text_color: "black"
  },
  propertyWindowCallback: function(ractiveControl){
    $("#userInput").change(function () {
      ractiveControl.set("table_data",insertTable());
    });

    var colorPicker = function (element, styleProperty) {
       $(element).colpick({
           layout: 'hex',
           submit: 0,
           colorScheme: 'dark',
           onChange: function (hsb, hex, rgb, fromSetColor) {
               if (!fromSetColor) {
                   $(element).val('#' + hex).css('border-color', '#' + hex)
                   ractiveControl.set(styleProperty, '#' + hex);
               }
           }
       })
    .keyup(function () {
          $(this).colpickSetColor(this.value);
    })
  }

  $('#textPicker').focus(colorPicker($('#textPicker'), "text_color"));
  }
};