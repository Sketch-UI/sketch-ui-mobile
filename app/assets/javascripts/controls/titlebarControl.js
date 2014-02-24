window.ControlsMetadata = window.ControlsMetadata || {};
window.ControlsMetadata['TitlebarControl'] = {
  groupControl: true,
  controls: [
      {
          metadataId: "ToolbarControl",
          position: {
              left: 0,
              top: 0
          },
          data: {
              bgcolor: "#4a87ee",
              height: "44"
          }
      },
       {
            metadataId: "IconControl",
            position: {
                left: 6,
                top: 2
            },
            data: {
                font_size: "30",
                color: "#ffffff",
                icon_class: "ion-arrow-left-a"
            }
      },
      {
          metadataId: "IconControl",
          position: {
              left: 290,
              top: 0
          },
          data: {
              font_size: "30",
              color: "#ffffff",
              icon_class: "ion-navicon-round"
          }
      },
      {
          metadataId: "LabelControl",
          position: {
              left: 120,
              top: 0
          },
          data: {
              color: "#ffffff",
              size: "22",
              label: "Titlebar",
              font: "Verdana"
          }
      }
  ]
};
