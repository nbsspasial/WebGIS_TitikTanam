var size = 0;
var placement = "point";

var style_BatasBlok_1 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("ID_Petak");
  var labelFont = "12px sans-serif";
  var labelFill = "rgba(0, 0, 0, 0.8)";
  var bufferColor = "#ffffff";
  var bufferWidth = 2;
  var textAlign = "center";
  var offsetX = 0;
  var offsetY = 0;

  if (value !== null) {
    labelText = String(value);
  }

  var style = [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(255,204,1,1.0)",
        width: 3.8,
      }),
      text: createTextStyle(
        feature,
        resolution,
        labelText,
        labelFont,
        labelFill,
        placement,
        bufferColor,
        bufferWidth
      ),
      zIndex: 9999, // order paling atas
    }),
  ];

  return style;
};
