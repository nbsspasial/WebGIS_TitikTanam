var size = 0;
var placement = "point";
function categories_Titik_9(
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
    case "Camp":
      return [
        new ol.style.Style({
          image: new ol.style.RegularShape({
            radius: 5.6 + size,
            points: 3,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(255,255,255,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 1.52,
            }),
            fill: new ol.style.Fill({ color: "rgba(0,0,0,1.0)" }),
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
        }),
      ];
      break;
    case "Sumber air":
      return [
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 4.4 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(0,0,0,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.76,
            }),
            fill: new ol.style.Fill({ color: "rgba(86,206,250,1.0)" }),
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
        }),
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 1.4 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(0,0,0,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 1.52,
            }),
            fill: new ol.style.Fill({ color: "rgba(0,0,0,1.0)" }),
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
        }),
      ];
      break;
  }
}

var style_Titik_9 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("keterangan");
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

  var style = categories_Titik_9(
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
