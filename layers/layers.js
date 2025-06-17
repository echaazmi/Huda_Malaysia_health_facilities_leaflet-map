var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_my_1 = new ol.format.GeoJSON();
var features_my_1 = format_my_1.readFeatures(json_my_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_my_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_my_1.addFeatures(features_my_1);
var lyr_my_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_my_1, 
                style: style_my_1,
                popuplayertitle: 'my',
                interactive: true,
    title: 'my<br />\
    <img src="styles/legend/my_1_0.png" /> Johor<br />\
    <img src="styles/legend/my_1_1.png" /> Kedah<br />\
    <img src="styles/legend/my_1_2.png" /> Kelantan<br />\
    <img src="styles/legend/my_1_3.png" /> Kuala Lumpur<br />\
    <img src="styles/legend/my_1_4.png" /> Labuan<br />\
    <img src="styles/legend/my_1_5.png" /> Melaka<br />\
    <img src="styles/legend/my_1_6.png" /> Negeri Sembilan<br />\
    <img src="styles/legend/my_1_7.png" /> Pahang<br />\
    <img src="styles/legend/my_1_8.png" /> Perak<br />\
    <img src="styles/legend/my_1_9.png" /> Perlis<br />\
    <img src="styles/legend/my_1_10.png" /> Pulau Pinang<br />\
    <img src="styles/legend/my_1_11.png" /> Putrajaya<br />\
    <img src="styles/legend/my_1_12.png" /> Sabah<br />\
    <img src="styles/legend/my_1_13.png" /> Sarawak<br />\
    <img src="styles/legend/my_1_14.png" /> Selangor<br />\
    <img src="styles/legend/my_1_15.png" /> Terengganu<br />\
    <img src="styles/legend/my_1_16.png" /> <br />' });
var format_hotosm_mys_health_facilities_points_shp_2 = new ol.format.GeoJSON();
var features_hotosm_mys_health_facilities_points_shp_2 = format_hotosm_mys_health_facilities_points_shp_2.readFeatures(json_hotosm_mys_health_facilities_points_shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotosm_mys_health_facilities_points_shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotosm_mys_health_facilities_points_shp_2.addFeatures(features_hotosm_mys_health_facilities_points_shp_2);
var lyr_hotosm_mys_health_facilities_points_shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hotosm_mys_health_facilities_points_shp_2, 
                style: style_hotosm_mys_health_facilities_points_shp_2,
                popuplayertitle: 'hotosm_mys_health_facilities_points_shp',
                interactive: true,
                title: '<img src="styles/legend/hotosm_mys_health_facilities_points_shp_2.png" /> hotosm_mys_health_facilities_points_shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_my_1.setVisible(true);lyr_hotosm_mys_health_facilities_points_shp_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_my_1,lyr_hotosm_mys_health_facilities_points_shp_2];
lyr_my_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'source': 'source', });
lyr_hotosm_mys_health_facilities_points_shp_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'amenity': 'amenity', 'building': 'building', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'operator_t': 'operator_t', 'capacity_p': 'capacity_p', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'source': 'source', 'name_ms': 'name_ms', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_my_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'source': 'TextEdit', });
lyr_hotosm_mys_health_facilities_points_shp_2.set('fieldImages', {'name': '', 'name_en': '', 'amenity': '', 'building': '', 'healthcare': '', 'healthca_1': '', 'operator_t': '', 'capacity_p': '', 'addr_full': '', 'addr_city': '', 'source': '', 'name_ms': '', 'osm_id': '', 'osm_type': '', });
lyr_my_1.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'source': 'inline label - always visible', });
lyr_hotosm_mys_health_facilities_points_shp_2.set('fieldLabels', {'name': 'inline label - always visible', 'name_en': 'inline label - always visible', 'amenity': 'inline label - always visible', 'building': 'inline label - always visible', 'healthcare': 'inline label - always visible', 'healthca_1': 'inline label - always visible', 'operator_t': 'inline label - always visible', 'capacity_p': 'inline label - always visible', 'addr_full': 'inline label - always visible', 'addr_city': 'inline label - always visible', 'source': 'inline label - always visible', 'name_ms': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', });
lyr_hotosm_mys_health_facilities_points_shp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});