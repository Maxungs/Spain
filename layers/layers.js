var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_densidadpoblacionalporprovincia_1 = new ol.format.GeoJSON();
var features_densidadpoblacionalporprovincia_1 = format_densidadpoblacionalporprovincia_1.readFeatures(json_densidadpoblacionalporprovincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_densidadpoblacionalporprovincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_densidadpoblacionalporprovincia_1.addFeatures(features_densidadpoblacionalporprovincia_1);
var lyr_densidadpoblacionalporprovincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_densidadpoblacionalporprovincia_1, 
                style: style_densidadpoblacionalporprovincia_1,
                interactive: false,
    title: 'densidad poblacional por provincia<br />\
    <img src="styles/legend/densidadpoblacionalporprovincia_1_0.png" /> 9 - 73 <br />\
    <img src="styles/legend/densidadpoblacionalporprovincia_1_1.png" /> 73 - 167 <br />\
    <img src="styles/legend/densidadpoblacionalporprovincia_1_2.png" /> 167 - 240 <br />\
    <img src="styles/legend/densidadpoblacionalporprovincia_1_3.png" /> 240 - 523 <br />\
    <img src="styles/legend/densidadpoblacionalporprovincia_1_4.png" /> 523 - 844 <br />'
        });
var format_lagos_2 = new ol.format.GeoJSON();
var features_lagos_2 = format_lagos_2.readFeatures(json_lagos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagos_2.addFeatures(features_lagos_2);
var lyr_lagos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagos_2, 
                style: style_lagos_2,
                interactive: false,
                title: '<img src="styles/legend/lagos_2.png" /> lagos'
            });
var format_trenes_3 = new ol.format.GeoJSON();
var features_trenes_3 = format_trenes_3.readFeatures(json_trenes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trenes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trenes_3.addFeatures(features_trenes_3);
var lyr_trenes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trenes_3, 
                style: style_trenes_3,
                interactive: false,
                title: '<img src="styles/legend/trenes_3.png" /> trenes'
            });
var format_aeropuertos_4 = new ol.format.GeoJSON();
var features_aeropuertos_4 = format_aeropuertos_4.readFeatures(json_aeropuertos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aeropuertos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aeropuertos_4.addFeatures(features_aeropuertos_4);
var lyr_aeropuertos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aeropuertos_4, 
                style: style_aeropuertos_4,
                interactive: false,
                title: '<img src="styles/legend/aeropuertos_4.png" /> aeropuertos'
            });
var format_carreteras_5 = new ol.format.GeoJSON();
var features_carreteras_5 = format_carreteras_5.readFeatures(json_carreteras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carreteras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carreteras_5.addFeatures(features_carreteras_5);
var lyr_carreteras_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_carreteras_5, 
                style: style_carreteras_5,
                interactive: false,
                title: '<img src="styles/legend/carreteras_5.png" /> carreteras'
            });
var format_capital_6 = new ol.format.GeoJSON();
var features_capital_6 = format_capital_6.readFeatures(json_capital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_6.addFeatures(features_capital_6);
var lyr_capital_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capital_6, 
                style: style_capital_6,
                interactive: false,
                title: '<img src="styles/legend/capital_6.png" /> capital'
            });
var format_puertos_7 = new ol.format.GeoJSON();
var features_puertos_7 = format_puertos_7.readFeatures(json_puertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puertos_7.addFeatures(features_puertos_7);
var lyr_puertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puertos_7, 
                style: style_puertos_7,
                interactive: false,
                title: '<img src="styles/legend/puertos_7.png" /> puertos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_densidadpoblacionalporprovincia_1.setVisible(true);lyr_lagos_2.setVisible(true);lyr_trenes_3.setVisible(true);lyr_aeropuertos_4.setVisible(true);lyr_carreteras_5.setVisible(true);lyr_capital_6.setVisible(true);lyr_puertos_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_densidadpoblacionalporprovincia_1,lyr_lagos_2,lyr_trenes_3,lyr_aeropuertos_4,lyr_carreteras_5,lyr_capital_6,lyr_puertos_7];
lyr_densidadpoblacionalporprovincia_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'INSPIREID': 'INSPIREID', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'nombre', 'pob_tot_es': 'población total año 2016', 'area': 'área km2', 'densidad': 'hab/km2', });
lyr_lagos_2.set('fieldAliases', {'nommasa': 'nombre', 'supkm2': 'superficie en km2', 'nomtipona': 'zona', 'embalse': 'embalse', });
lyr_trenes_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'tipotramoD': 'tipo de tramo', 'estadofisD': 'estadofisD', 'n_viasD': 'n_viasD', 'situacionD': 'situacionD', 'uso_ppalD': 'uso_ppalD', 'fecha_alta': 'fecha de alta', 'nombre': 'nombre', 'tipo_lineD': 'tipo de tendido', 'Shape__Len': 'extención', });
lyr_aeropuertos_4.set('fieldAliases', {'OBJECTID': 'numobjeto', 'Texto': 'aeropuerto', });
lyr_carreteras_5.set('fieldAliases', {'MED_DESCRI': 'descripción', 'RTT_DESCRI': 'tipo', 'F_CODE_DES': 'clase', });
lyr_capital_6.set('fieldAliases', {'CITY_NAME': 'Ciudad', 'ADMIN_NAME': 'Capital', 'CNTRY_NAME': 'país', 'STATUS': 'tipo', 'pob': 'población año 2016', 'fundacion': 'año de fundación', 'moneda': 'moneda', 'idioma': 'idioma', });
lyr_puertos_7.set('fieldAliases', {'PORT_ID': 'código portuario', 'DATA_SRC_C': 'DATA_SRC_C', 'PORT_COOR_': 'PORT_COOR_', });
lyr_densidadpoblacionalporprovincia_1.set('fieldImages', {'fid': 'Hidden', 'cat': 'Hidden', 'INSPIREID': 'Hidden', 'NATCODE': 'Hidden', 'NAMEUNIT': 'TextEdit', 'pob_tot_es': 'TextEdit', 'area': 'TextEdit', 'densidad': 'TextEdit', });
lyr_lagos_2.set('fieldImages', {'nommasa': 'TextEdit', 'supkm2': 'TextEdit', 'nomtipona': 'TextEdit', 'embalse': 'TextEdit', });
lyr_trenes_3.set('fieldImages', {'OBJECTID': 'Hidden', 'tipotramoD': 'TextEdit', 'estadofisD': 'Hidden', 'n_viasD': 'Hidden', 'situacionD': 'Hidden', 'uso_ppalD': 'Hidden', 'fecha_alta': 'TextEdit', 'nombre': 'TextEdit', 'tipo_lineD': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_aeropuertos_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', });
lyr_carreteras_5.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', });
lyr_capital_6.set('fieldImages', {'CITY_NAME': 'TextEdit', 'ADMIN_NAME': 'Hidden', 'CNTRY_NAME': 'Hidden', 'STATUS': 'Hidden', 'pob': 'TextEdit', 'fundacion': 'Range', 'moneda': 'TextEdit', 'idioma': 'TextEdit', });
lyr_puertos_7.set('fieldImages', {'PORT_ID': 'TextEdit', 'DATA_SRC_C': 'Hidden', 'PORT_COOR_': 'Hidden', });
lyr_densidadpoblacionalporprovincia_1.set('fieldLabels', {'NAMEUNIT': 'inline label', 'pob_tot_es': 'inline label', 'area': 'inline label', 'densidad': 'inline label', });
lyr_lagos_2.set('fieldLabels', {'nommasa': 'inline label', 'supkm2': 'inline label', 'nomtipona': 'inline label', 'embalse': 'inline label', });
lyr_trenes_3.set('fieldLabels', {'tipotramoD': 'inline label', 'fecha_alta': 'inline label', 'nombre': 'inline label', 'tipo_lineD': 'inline label', 'Shape__Len': 'inline label', });
lyr_aeropuertos_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'inline label', });
lyr_carreteras_5.set('fieldLabels', {'MED_DESCRI': 'inline label', 'RTT_DESCRI': 'inline label', 'F_CODE_DES': 'no label', });
lyr_capital_6.set('fieldLabels', {'CITY_NAME': 'inline label', 'pob': 'inline label', 'fundacion': 'inline label', 'moneda': 'inline label', 'idioma': 'inline label', });
lyr_puertos_7.set('fieldLabels', {'PORT_ID': 'inline label', });
lyr_puertos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});