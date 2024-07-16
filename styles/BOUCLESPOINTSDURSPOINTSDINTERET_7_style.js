var size = 0;
var placement = 'point';
function categories_BOUCLESPOINTSDURSPOINTSDINTERET_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Point dur':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(249,2,7,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Point d\'intérêt':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(250,250,6,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(84,176,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BOUCLESPOINTSDURSPOINTSDINTERET_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TYPE ELEME");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafa06";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("ID") !== null) {
        labelText = String(feature.get("ID"));
    }
    
var style = categories_BOUCLESPOINTSDURSPOINTSDINTERET_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
