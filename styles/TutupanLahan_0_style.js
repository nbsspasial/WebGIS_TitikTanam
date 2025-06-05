var size = 0;
var placement = "point";
function categories_TutupanLahan_0(
  feature,
  value,
  size,
  resolution,
  labelText,
  labelFont,
  labelFill,
  bufferColor,
  bufferWidth,
  placement
) {
  var valueStr =
    value !== null && value !== undefined ? value.toString() : "default";
  switch (valueStr) {
    case "Tt":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(255,255,190,1.0)" }),
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
        }),
      ];
      break;
    case "Sm":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(211,255,190,1.0)" }),
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
        }),
      ];
      break;
    case "Hlks":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(76,230,0,1.0)" }),
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
        }),
      ];
      break;
    case "Hlkp":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(56,168,15,1.0)" }),
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
        }),
      ];
      break;
    case "Bt":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(137,205,102,1.0)" }),
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
        }),
      ];
      break;
    case "Bm":
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,1.0)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0.988,
          }),
          fill: new ol.style.Fill({ color: "rgba(255,255,255,1.0)" }),
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
        }),
      ];
      break;
  }
}

var style_TutupanLahan_0 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("LC_ver");
  var labelFont = "10px, sans-serif";
  var labelFill = "#000000";
  var bufferColor = "";
  var bufferWidth = 0;
  var textAlign = "left";
  var offsetX = 0;
  var offsetY = 0;
  var placement = "point";
  if ("" !== null) {
    labelText = String("");
  }

  var style = categories_TutupanLahan_0(
    feature,
    value,
    size,
    resolution,
    labelText,
    labelFont,
    labelFill,
    bufferColor,
    bufferWidth,
    placement
  );

  return style;
};
