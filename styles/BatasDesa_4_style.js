var size = 0;
var placement = "point";

var style_BatasDesa_4 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("WADMKK"); // ambil nilai dari field WADMKK
  var labelFont = "12px sans-serif";
  var labelFill = "#000000";
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
        color: "rgba(35,35,35,1.0)",
        lineDash: [4.94, 0.988, 1.976, 0.988],
        width: 0.988,
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
      zIndex: 9999, // pastikan label ini selalu di atas layer lain
    }),
  ];

  return style;
};
