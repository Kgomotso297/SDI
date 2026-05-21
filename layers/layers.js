var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_map_exc1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'map_exc1<br />\
    <img src="styles/legend/map_exc1_1_0.png" /> 0<br />\
    <img src="styles/legend/map_exc1_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/map_exc1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3133432.921606, -2986905.225448, 3139417.153108, -2980310.506316]
        })
    });
var format_clip_contours_2 = new ol.format.GeoJSON();
var features_clip_contours_2 = format_clip_contours_2.readFeatures(json_clip_contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_contours_2.addFeatures(features_clip_contours_2);
var lyr_clip_contours_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_contours_2, 
                style: style_clip_contours_2,
                popuplayertitle: 'clip_contours',
                interactive: true,
                title: '<img src="styles/legend/clip_contours_2.png" /> clip_contours'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_map_exc1_1.setVisible(true);lyr_clip_contours_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_map_exc1_1,lyr_clip_contours_2];
lyr_clip_contours_2.set('fieldAliases', {'GID': 'GID', 'CUID': 'CUID', 'FEAT_ID': 'FEAT_ID', 'FEAT_TYPE': 'FEAT_TYPE', 'HEIGHT': 'HEIGHT', 'JOB_NR': 'JOB_NR', 'FEA_R_DATE': 'FEA_R_DATE', 'ATT_R_DATE': 'ATT_R_DATE', 'CAP_SOURCE': 'CAP_SOURCE', 'CAP_METHOD': 'CAP_METHOD', 'SOURCE_CUR': 'SOURCE_CUR', 'ENTITY_NAM': 'ENTITY_NAM', 'SAGD_F_TYP': 'SAGD_F_TYP', 'SAGD_S_TYP': 'SAGD_S_TYP', 'SAGD_F_DES': 'SAGD_F_DES', 'SAGD_S_DES': 'SAGD_S_DES', });
lyr_clip_contours_2.set('fieldImages', {'GID': 'TextEdit', 'CUID': 'TextEdit', 'FEAT_ID': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'HEIGHT': 'TextEdit', 'JOB_NR': 'TextEdit', 'FEA_R_DATE': 'DateTime', 'ATT_R_DATE': 'DateTime', 'CAP_SOURCE': 'TextEdit', 'CAP_METHOD': 'TextEdit', 'SOURCE_CUR': 'DateTime', 'ENTITY_NAM': 'TextEdit', 'SAGD_F_TYP': 'TextEdit', 'SAGD_S_TYP': 'TextEdit', 'SAGD_F_DES': 'TextEdit', 'SAGD_S_DES': 'TextEdit', });
lyr_clip_contours_2.set('fieldLabels', {'GID': 'no label', 'CUID': 'no label', 'FEAT_ID': 'no label', 'FEAT_TYPE': 'no label', 'HEIGHT': 'no label', 'JOB_NR': 'no label', 'FEA_R_DATE': 'no label', 'ATT_R_DATE': 'no label', 'CAP_SOURCE': 'no label', 'CAP_METHOD': 'no label', 'SOURCE_CUR': 'no label', 'ENTITY_NAM': 'no label', 'SAGD_F_TYP': 'no label', 'SAGD_S_TYP': 'no label', 'SAGD_F_DES': 'no label', 'SAGD_S_DES': 'no label', });
lyr_clip_contours_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});