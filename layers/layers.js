var wms_layers = [];

var format_Villages_Parc_Marin_Magroves_0 = new ol.format.GeoJSON();
var features_Villages_Parc_Marin_Magroves_0 = format_Villages_Parc_Marin_Magroves_0.readFeatures(json_Villages_Parc_Marin_Magroves_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_Parc_Marin_Magroves_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_Parc_Marin_Magroves_0.addFeatures(features_Villages_Parc_Marin_Magroves_0);cluster_Villages_Parc_Marin_Magroves_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Villages_Parc_Marin_Magroves_0
});
var lyr_Villages_Parc_Marin_Magroves_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Villages_Parc_Marin_Magroves_0, 
                style: style_Villages_Parc_Marin_Magroves_0,
                interactive: true,
                title: '<img src="styles/legend/Villages_Parc_Marin_Magroves_0.png" /> Villages_Parc_Marin_Magroves'
            });

lyr_Villages_Parc_Marin_Magroves_0.setVisible(true);
var layersList = [lyr_Villages_Parc_Marin_Magroves_0];
lyr_Villages_Parc_Marin_Magroves_0.set('fieldAliases', {'Village': 'Village', });
lyr_Villages_Parc_Marin_Magroves_0.set('fieldImages', {'Village': 'TextEdit', });
lyr_Villages_Parc_Marin_Magroves_0.set('fieldLabels', {'Village': 'inline label', });
lyr_Villages_Parc_Marin_Magroves_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});