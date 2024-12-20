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
var format_R3_1 = new ol.format.GeoJSON();
var features_R3_1 = format_R3_1.readFeatures(json_R3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3_1.addFeatures(features_R3_1);
var lyr_R3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3_1, 
                style: style_R3_1,
                popuplayertitle: "R3",
                interactive: true,
                title: '<img src="styles/legend/R3_1.png" /> R3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_R3_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_R3_1];
lyr_R3_1.set('fieldAliases', {'controllin': 'controllin', 'planoid': 'planoid', 'plannumber': 'plannumber', 'planlabel': 'planlabel', 'itstitlest': 'itstitlest', 'itslotid': 'itslotid', 'stratumlev': 'stratumlev', 'hasstratum': 'hasstratum', 'classsubty': 'classsubty', 'lotnumber': 'lotnumber', 'sectionnum': 'sectionnum', 'planlotare': 'planlotare', 'planlota00': 'planlota00', 'startdate': 'startdate', 'enddate': 'enddate', 'lastupdate': 'lastupdate', 'msoid': 'msoid', 'centroidid': 'centroidid', 'shapeuuid': 'shapeuuid', 'changetype': 'changetype', 'lotidstrin': 'lotidstrin', 'processsta': 'processsta', 'urbanity': 'urbanity', 'Shape__Len': 'Shape__Len', 'Shape__Are': 'Shape__Are', 'cadid': 'cadid', 'createdate': 'createdate', 'modifiedda': 'modifiedda', 'lganame': 'lganame', 'councilnam': 'councilnam', 'abscode': 'abscode', 'ltocode': 'ltocode', 'vgcode': 'vgcode', 'wbcode': 'wbcode', });
lyr_R3_1.set('fieldImages', {'controllin': 'TextEdit', 'planoid': 'TextEdit', 'plannumber': 'TextEdit', 'planlabel': 'TextEdit', 'itstitlest': 'Range', 'itslotid': 'TextEdit', 'stratumlev': 'Range', 'hasstratum': 'Range', 'classsubty': 'TextEdit', 'lotnumber': 'TextEdit', 'sectionnum': 'TextEdit', 'planlotare': 'TextEdit', 'planlota00': 'TextEdit', 'startdate': 'TextEdit', 'enddate': 'TextEdit', 'lastupdate': 'TextEdit', 'msoid': 'TextEdit', 'centroidid': 'TextEdit', 'shapeuuid': 'TextEdit', 'changetype': 'TextEdit', 'lotidstrin': 'TextEdit', 'processsta': 'TextEdit', 'urbanity': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape__Are': 'TextEdit', 'cadid': 'TextEdit', 'createdate': 'TextEdit', 'modifiedda': 'TextEdit', 'lganame': 'TextEdit', 'councilnam': 'TextEdit', 'abscode': 'TextEdit', 'ltocode': 'TextEdit', 'vgcode': 'TextEdit', 'wbcode': 'TextEdit', });
lyr_R3_1.set('fieldLabels', {'controllin': 'no label', 'planoid': 'no label', 'plannumber': 'no label', 'planlabel': 'inline label - always visible', 'itstitlest': 'no label', 'itslotid': 'no label', 'stratumlev': 'no label', 'hasstratum': 'no label', 'classsubty': 'inline label - always visible', 'lotnumber': 'no label', 'sectionnum': 'hidden field', 'planlotare': 'no label', 'planlota00': 'no label', 'startdate': 'no label', 'enddate': 'no label', 'lastupdate': 'no label', 'msoid': 'no label', 'centroidid': 'no label', 'shapeuuid': 'no label', 'changetype': 'no label', 'lotidstrin': 'no label', 'processsta': 'no label', 'urbanity': 'no label', 'Shape__Len': 'inline label - always visible', 'Shape__Are': 'inline label - always visible', 'cadid': 'no label', 'createdate': 'no label', 'modifiedda': 'no label', 'lganame': 'no label', 'councilnam': 'no label', 'abscode': 'no label', 'ltocode': 'no label', 'vgcode': 'no label', 'wbcode': 'no label', });
lyr_R3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});