var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lots_selection_1 = new ol.format.GeoJSON();
var features_lots_selection_1 = format_lots_selection_1.readFeatures(json_lots_selection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lots_selection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lots_selection_1.addFeatures(features_lots_selection_1);
var lyr_lots_selection_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lots_selection_1, 
                style: style_lots_selection_1,
                popuplayertitle: "lots_selection",
                interactive: true,
                title: '<img src="styles/legend/lots_selection_1.png" /> lots_selection'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_lots_selection_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lots_selection_1];
lyr_lots_selection_1.set('fieldAliases', {'controllin': 'controllin', 'planoid': 'planoid', 'plannumber': 'plannumber', 'planlabel': 'planlabel', 'itstitlest': 'itstitlest', 'itslotid': 'itslotid', 'stratumlev': 'stratumlev', 'hasstratum': 'hasstratum', 'classsubty': 'classsubty', 'lotnumber': 'lotnumber', 'sectionnum': 'sectionnum', 'planlotare': 'planlotare', 'planlota00': 'planlota00', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'msoid': 'msoid', 'centroidid': 'centroidid', 'shapeuuid': 'shapeuuid', 'changetype': 'changetype', 'lotidstrin': 'lotidstrin', 'processsta': 'processsta', 'urbanity': 'urbanity', 'Shape__Len': 'Shape__Len', 'Shape__Are': 'Shape__Are', 'cadid': 'cadid', 'createdate': 'createdate', 'modifiedda': 'modifiedda', 'lganame': 'lganame', 'councilnam': 'councilnam', 'abscode': 'abscode', 'ltocode': 'ltocode', 'vgcode': 'vgcode', 'wbcode': 'wbcode', });
lyr_lots_selection_1.set('fieldImages', {'controllin': 'Hidden', 'planoid': 'Hidden', 'plannumber': 'Hidden', 'planlabel': 'Hidden', 'itstitlest': 'Hidden', 'itslotid': 'Hidden', 'stratumlev': 'Hidden', 'hasstratum': 'Hidden', 'classsubty': 'TextEdit', 'lotnumber': 'Hidden', 'sectionnum': 'Hidden', 'planlotare': 'Hidden', 'planlota00': 'Hidden', 'startdate': 'Hidden', 'enddate': 'Hidden', 'lastupdate': 'Hidden', 'msoid': 'Hidden', 'centroidid': 'JsonEdit', 'shapeuuid': 'Hidden', 'changetype': 'Hidden', 'lotidstrin': 'JsonEdit', 'processsta': 'Hidden', 'urbanity': 'Hidden', 'Shape__Len': 'TextEdit', 'Shape__Are': 'TextEdit', 'cadid': 'Hidden', 'createdate': 'Hidden', 'modifiedda': 'Hidden', 'lganame': 'Hidden', 'councilnam': 'Hidden', 'abscode': 'Hidden', 'ltocode': 'JsonEdit', 'vgcode': 'Hidden', 'wbcode': 'Hidden', });
lyr_lots_selection_1.set('fieldLabels', {'controllin': 'no label', 'planoid': 'no label', 'plannumber': 'no label', 'planlabel': 'no label', 'itstitlest': 'no label', 'itslotid': 'no label', 'stratumlev': 'no label', 'hasstratum': 'no label', 'classsubty': 'inline label - visible with data', 'lotnumber': 'no label', 'sectionnum': 'no label', 'planlotare': 'no label', 'planlota00': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'msoid': 'no label', 'centroidid': 'no label', 'shapeuuid': 'no label', 'changetype': 'no label', 'lotidstrin': 'no label', 'processsta': 'no label', 'urbanity': 'no label', 'Shape__Len': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'cadid': 'no label', 'createdate': 'no label', 'modifiedda': 'no label', 'lganame': 'no label', 'councilnam': 'no label', 'abscode': 'no label', 'ltocode': 'no label', 'vgcode': 'no label', 'wbcode': 'no label', });
lyr_lots_selection_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});