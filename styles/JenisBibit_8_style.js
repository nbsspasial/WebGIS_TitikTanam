var size = 0;
var placement = "point";
function categories_JenisBibit_8(
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
    case "Medang Sirih_NS":
      return [
        new ol.style.Style({
          image: new ol.style.RegularShape({
            radius: 4 + size,
            points: 5,
            radius2: 2,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(80,78,78,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.76,
            }),
            fill: new ol.style.Fill({ color: "rgba(255,211,127,1.0)" }),
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
    case "Medang Sirih_S":
      return [
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2.5 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(35,35,35,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.0,
            }),
            fill: new ol.style.Fill({ color: "rgba(255,211,127,1.0)" }),
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
    case "Meranti_NS":
      return [
        new ol.style.Style({
          image: new ol.style.RegularShape({
            radius: 4 + size,
            points: 5,
            radius2: 2,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(80,78,78,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.76,
            }),
            fill: new ol.style.Fill({ color: "rgba(227,26,28,1.0)" }),
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
    case "Meranti_S":
      return [
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2.5 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(35,35,35,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.0,
            }),
            fill: new ol.style.Fill({ color: "rgba(227,26,28,1.0)" }),
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
    case "Pinus_Mati":
      return [
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2.5 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(35,35,35,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.0,
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
    case "Pinus_NS":
      return [
        new ol.style.Style({
          image: new ol.style.RegularShape({
            radius: 4 + size,
            points: 5,
            radius2: 2,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(80,78,78,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.76,
            }),
            fill: new ol.style.Fill({ color: "rgba(51,160,44,1.0)" }),
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
    case "Pinus_S":
      return [
        new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2.5 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
              color: "rgba(35,35,35,1.0)",
              lineDash: null,
              lineCap: "butt",
              lineJoin: "miter",
              width: 0.0,
            }),
            fill: new ol.style.Fill({ color: "rgba(51,160,44,1.0)" }),
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

var style_JenisBibit_8 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };

  var labelText = "";
  var value = feature.get("q2wHide_simbology");
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

  var style = categories_JenisBibit_8(
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
