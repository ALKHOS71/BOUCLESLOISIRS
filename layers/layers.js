var wms_layers = [];

var lyr_Ortho50cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/inspire/inspire/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 50 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho50cm_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VOIEBLEUE_2 = new ol.format.GeoJSON();
var features_VOIEBLEUE_2 = format_VOIEBLEUE_2.readFeatures(json_VOIEBLEUE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEBLEUE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEBLEUE_2.addFeatures(features_VOIEBLEUE_2);
var lyr_VOIEBLEUE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIEBLEUE_2, 
                style: style_VOIEBLEUE_2,
                popuplayertitle: "VOIE BLEUE",
                interactive: false,
                title: '<img src="styles/legend/VOIEBLEUE_2.png" /> VOIE BLEUE'
            });
var format_VIARHONA_3 = new ol.format.GeoJSON();
var features_VIARHONA_3 = format_VIARHONA_3.readFeatures(json_VIARHONA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_3.addFeatures(features_VIARHONA_3);
var lyr_VIARHONA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_3, 
                style: style_VIARHONA_3,
                popuplayertitle: "VIARHONA",
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_3.png" /> VIARHONA'
            });
var format_PROJETANNEAUBLEU_4 = new ol.format.GeoJSON();
var features_PROJETANNEAUBLEU_4 = format_PROJETANNEAUBLEU_4.readFeatures(json_PROJETANNEAUBLEU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJETANNEAUBLEU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETANNEAUBLEU_4.addFeatures(features_PROJETANNEAUBLEU_4);
var lyr_PROJETANNEAUBLEU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJETANNEAUBLEU_4, 
                style: style_PROJETANNEAUBLEU_4,
                popuplayertitle: "PROJET ANNEAU BLEU",
                interactive: false,
                title: '<img src="styles/legend/PROJETANNEAUBLEU_4.png" /> PROJET ANNEAU BLEU'
            });
var format_LIAISONVIARHONAVOIEBLEUE_5 = new ol.format.GeoJSON();
var features_LIAISONVIARHONAVOIEBLEUE_5 = format_LIAISONVIARHONAVOIEBLEUE_5.readFeatures(json_LIAISONVIARHONAVOIEBLEUE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONVIARHONAVOIEBLEUE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONVIARHONAVOIEBLEUE_5.addFeatures(features_LIAISONVIARHONAVOIEBLEUE_5);
var lyr_LIAISONVIARHONAVOIEBLEUE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIAISONVIARHONAVOIEBLEUE_5, 
                style: style_LIAISONVIARHONAVOIEBLEUE_5,
                popuplayertitle: "LIAISON VIARHONA / VOIE BLEUE",
                interactive: true,
                title: '<img src="styles/legend/LIAISONVIARHONAVOIEBLEUE_5.png" /> LIAISON VIARHONA / VOIE BLEUE'
            });
var format_BOUCLESAMENAGEMENTSPRECONISES_6 = new ol.format.GeoJSON();
var features_BOUCLESAMENAGEMENTSPRECONISES_6 = format_BOUCLESAMENAGEMENTSPRECONISES_6.readFeatures(json_BOUCLESAMENAGEMENTSPRECONISES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUCLESAMENAGEMENTSPRECONISES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUCLESAMENAGEMENTSPRECONISES_6.addFeatures(features_BOUCLESAMENAGEMENTSPRECONISES_6);
var lyr_BOUCLESAMENAGEMENTSPRECONISES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUCLESAMENAGEMENTSPRECONISES_6, 
                style: style_BOUCLESAMENAGEMENTSPRECONISES_6,
                popuplayertitle: "BOUCLES : AMENAGEMENTS PRECONISES",
                interactive: true,
    title: 'BOUCLES : AMENAGEMENTS PRECONISES<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_0.png" /> Voie verte<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_1.png" /> Piste cyclable<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_2.png" /> Site propre mixte<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_3.png" /> voie interdite aux véhicules motorisés sauf ayants droit<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_4.png" /> Chaussée à voie centrale banalisée<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_5.png" /> Chaussée à voie centrale banalisée + zone 30<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_6.png" /> Double sens cyclable<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_7.png" /> route en zone 30<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_8.png" /> Vélorue<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_9.png" /> Impasse avec débouché cyclable<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_10.png" /> Vélorue + zone 30<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_11.png" /> voie partagée avec simple jalonnement<br />\
    <img src="styles/legend/BOUCLESAMENAGEMENTSPRECONISES_6_12.png" /> Variantes<br />'
        });
var format_BOUCLESPOINTSDURSPOINTSDINTERET_7 = new ol.format.GeoJSON();
var features_BOUCLESPOINTSDURSPOINTSDINTERET_7 = format_BOUCLESPOINTSDURSPOINTSDINTERET_7.readFeatures(json_BOUCLESPOINTSDURSPOINTSDINTERET_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUCLESPOINTSDURSPOINTSDINTERET_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUCLESPOINTSDURSPOINTSDINTERET_7.addFeatures(features_BOUCLESPOINTSDURSPOINTSDINTERET_7);
var lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUCLESPOINTSDURSPOINTSDINTERET_7, 
                style: style_BOUCLESPOINTSDURSPOINTSDINTERET_7,
                popuplayertitle: "BOUCLES : POINTS DURS & POINTS D'INTERET",
                interactive: true,
    title: 'BOUCLES : POINTS DURS & POINTS D\'INTERET<br />\
    <img src="styles/legend/BOUCLESPOINTSDURSPOINTSDINTERET_7_0.png" /> Point dur<br />\
    <img src="styles/legend/BOUCLESPOINTSDURSPOINTSDINTERET_7_1.png" /> Point d\'intérêt<br />'
        });
var format_AIREDEDEPART_8 = new ol.format.GeoJSON();
var features_AIREDEDEPART_8 = format_AIREDEDEPART_8.readFeatures(json_AIREDEDEPART_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIREDEDEPART_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIREDEDEPART_8.addFeatures(features_AIREDEDEPART_8);
var lyr_AIREDEDEPART_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIREDEDEPART_8, 
                style: style_AIREDEDEPART_8,
                popuplayertitle: "AIRE DE DEPART",
                interactive: false,
                title: '<img src="styles/legend/AIREDEDEPART_8.png" /> AIRE DE DEPART'
            });

lyr_Ortho50cm_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_VOIEBLEUE_2.setVisible(true);lyr_VIARHONA_3.setVisible(true);lyr_PROJETANNEAUBLEU_4.setVisible(true);lyr_LIAISONVIARHONAVOIEBLEUE_5.setVisible(true);lyr_BOUCLESAMENAGEMENTSPRECONISES_6.setVisible(true);lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7.setVisible(true);lyr_AIREDEDEPART_8.setVisible(true);
var layersList = [lyr_Ortho50cm_0,lyr_OpenStreetMap_1,lyr_VOIEBLEUE_2,lyr_VIARHONA_3,lyr_PROJETANNEAUBLEU_4,lyr_LIAISONVIARHONAVOIEBLEUE_5,lyr_BOUCLESAMENAGEMENTSPRECONISES_6,lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7,lyr_AIREDEDEPART_8];
lyr_VOIEBLEUE_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'stroke': 'stroke', 'stroke_opa': 'stroke_opa', 'fill_opaci': 'fill_opaci', });
lyr_VIARHONA_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_PROJETANNEAUBLEU_4.set('fieldAliases', {'id': 'id', });
lyr_LIAISONVIARHONAVOIEBLEUE_5.set('fieldAliases', {'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'LIAISON': 'LIAISON', 'SDC': 'SDC', 'STATUT': 'STATUT', 'AGGLO': 'AGGLO', 'EMPRISE': 'EMPRISE', 'REVETEMENT': 'REVETEMENT', 'ETAT REV': 'ETAT REV', 'PRATICABIL': 'PRATICABIL', 'LINEAIRE': 'LINEAIRE', 'TRAFIC': 'TRAFIC', 'COMMENTAIR': 'COMMENTAIR', 'FONCTION': 'FONCTION', 'AMGT_PRECO': 'AMGT_PRECO', 'DIRECTION': 'DIRECTION', 'REVETEMT_C': 'REVETEMT_C', 'LARGEUR_AM': 'LARGEUR_AM', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'ACQ_FONC': 'ACQ_FONC', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_BOUCLESAMENAGEMENTSPRECONISES_6.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'BOUCLE': 'BOUCLE', 'LINEAIRE E': 'LINEAIRE E', 'TYPE EP': 'TYPE EP', 'POINTDUR': 'POINTDUR', 'INTERET': 'INTERET', 'SDC': 'SDC', 'LIAISON': 'LIAISON', 'STATUT': 'STATUT', 'AGGLO': 'AGGLO', 'EMPRISE': 'EMPRISE', 'LARG_AMGT': 'LARG_AMGT', 'REVETEMENT': 'REVETEMENT', 'ETAT REV': 'ETAT REV', 'PRATICABIL': 'PRATICABIL', 'L_ACCOT1': 'L_ACCOT1', 'NAT_ACCOT1': 'NAT_ACCOT1', 'L_ACCOT2': 'L_ACCOT2', 'NAT_ACCOT2': 'NAT_ACCOT2', 'JALON': 'JALON', 'LINEAIRE': 'LINEAIRE', 'TRAFIC': 'TRAFIC', 'COMMENTAIR': 'COMMENTAIR', 'FONCTION': 'FONCTION', 'AMGT_PRECO': 'AMGT_PRECO', 'DIRECTION': 'DIRECTION', 'REVETEMT_C': 'REVETEMT_C', 'LARGEUR_AM': 'LARGEUR_AM', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'ACQ_FONC': 'ACQ_FONC', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'AMGT_PRE_1': 'AMGT_PRE_1', 'DIRECTION2': 'DIRECTION2', 'REVETEMT2': 'REVETEMT2', 'LARGEUR__1': 'LARGEUR__1', 'TRAVAUX2': 'TRAVAUX2', 'PROFIL_T_1': 'PROFIL_T_1', 'PU€HT2': 'PU€HT2', '.+/-VALUE2': '.+/-VALUE2', 'TOTAL ��_1': 'TOTAL ��_1', 'ACQ_FONC2': 'ACQ_FONC2', 'MOE_ALEAS2': 'MOE_ALEAS2', 'TOTAL_HT2': 'TOTAL_HT2', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'BOUCLE': 'BOUCLE', 'TYPE ELEME': 'TYPE ELEME', 'POINTDUR': 'POINTDUR', 'INTERET': 'INTERET', 'REMARQUES': 'REMARQUES', 'SDC': 'SDC', 'AMGT_PRECO': 'AMGT_PRECO', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_AIREDEDEPART_8.set('fieldAliases', {'NOM': 'NOM', 'ID': 'ID', 'PHOTOS': 'PHOTOS', });
lyr_VOIEBLEUE_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'stroke': 'TextEdit', 'stroke_opa': 'TextEdit', 'fill_opaci': 'TextEdit', });
lyr_VIARHONA_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_PROJETANNEAUBLEU_4.set('fieldImages', {'id': 'TextEdit', });
lyr_LIAISONVIARHONAVOIEBLEUE_5.set('fieldImages', {'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'LIAISON': 'TextEdit', 'SDC': 'TextEdit', 'STATUT': 'TextEdit', 'AGGLO': 'TextEdit', 'EMPRISE': 'TextEdit', 'REVETEMENT': 'TextEdit', 'ETAT REV': 'TextEdit', 'PRATICABIL': 'TextEdit', 'LINEAIRE': 'TextEdit', 'TRAFIC': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'FONCTION': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'REVETEMT_C': 'TextEdit', 'LARGEUR_AM': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'ACQ_FONC': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_BOUCLESAMENAGEMENTSPRECONISES_6.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'BOUCLE': 'TextEdit', 'LINEAIRE E': 'TextEdit', 'TYPE EP': 'TextEdit', 'POINTDUR': 'TextEdit', 'INTERET': 'TextEdit', 'SDC': 'TextEdit', 'LIAISON': 'TextEdit', 'STATUT': 'TextEdit', 'AGGLO': 'TextEdit', 'EMPRISE': 'TextEdit', 'LARG_AMGT': 'TextEdit', 'REVETEMENT': 'TextEdit', 'ETAT REV': 'TextEdit', 'PRATICABIL': 'TextEdit', 'L_ACCOT1': 'TextEdit', 'NAT_ACCOT1': 'TextEdit', 'L_ACCOT2': 'TextEdit', 'NAT_ACCOT2': 'TextEdit', 'JALON': 'TextEdit', 'LINEAIRE': 'TextEdit', 'TRAFIC': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'FONCTION': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'REVETEMT_C': 'TextEdit', 'LARGEUR_AM': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'ACQ_FONC': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'AMGT_PRE_1': 'TextEdit', 'DIRECTION2': 'TextEdit', 'REVETEMT2': 'TextEdit', 'LARGEUR__1': 'TextEdit', 'TRAVAUX2': 'TextEdit', 'PROFIL_T_1': 'TextEdit', 'PU€HT2': 'TextEdit', '.+/-VALUE2': 'TextEdit', 'TOTAL ��_1': 'TextEdit', 'ACQ_FONC2': 'TextEdit', 'MOE_ALEAS2': 'TextEdit', 'TOTAL_HT2': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'BOUCLE': 'TextEdit', 'TYPE ELEME': 'TextEdit', 'POINTDUR': 'TextEdit', 'INTERET': 'TextEdit', 'REMARQUES': 'TextEdit', 'SDC': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_AIREDEDEPART_8.set('fieldImages', {'NOM': 'TextEdit', 'ID': 'TextEdit', 'PHOTOS': 'TextEdit', });
lyr_VOIEBLEUE_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'stroke': 'no label', 'stroke_opa': 'no label', 'fill_opaci': 'no label', });
lyr_VIARHONA_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_PROJETANNEAUBLEU_4.set('fieldLabels', {'id': 'no label', });
lyr_LIAISONVIARHONAVOIEBLEUE_5.set('fieldLabels', {'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITI': 'inline label - always visible', 'LIAISON': 'inline label - always visible', 'SDC': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'AGGLO': 'inline label - always visible', 'EMPRISE': 'inline label - always visible', 'REVETEMENT': 'inline label - always visible', 'ETAT REV': 'inline label - always visible', 'PRATICABIL': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'TRAFIC': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'FONCTION': 'inline label - always visible', 'AMGT_PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'REVETEMT_C': 'inline label - always visible', 'LARGEUR_AM': 'inline label - always visible', 'TRAVAUX': 'inline label - always visible', 'PROFIL_TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '.+/-VALUE': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'ACQ_FONC': 'inline label - always visible', 'MOE_ALEAS': 'inline label - always visible', 'TOTAL_HT': 'inline label - always visible', 'MO': 'inline label - always visible', 'SOURCE': 'inline label - always visible', });
lyr_BOUCLESAMENAGEMENTSPRECONISES_6.set('fieldLabels', {'ID': 'inline label - visible with data', 'COMMUNE': 'inline label - always visible', 'TYPE ITI': 'inline label - always visible', 'BOUCLE': 'inline label - always visible', 'LINEAIRE E': 'inline label - always visible', 'TYPE EP': 'inline label - always visible', 'POINTDUR': 'inline label - always visible', 'INTERET': 'inline label - always visible', 'SDC': 'inline label - always visible', 'LIAISON': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'AGGLO': 'inline label - always visible', 'EMPRISE': 'inline label - always visible', 'LARG_AMGT': 'inline label - always visible', 'REVETEMENT': 'inline label - always visible', 'ETAT REV': 'inline label - always visible', 'PRATICABIL': 'inline label - always visible', 'L_ACCOT1': 'inline label - always visible', 'NAT_ACCOT1': 'inline label - always visible', 'L_ACCOT2': 'inline label - always visible', 'NAT_ACCOT2': 'inline label - always visible', 'JALON': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'TRAFIC': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'FONCTION': 'inline label - always visible', 'AMGT_PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'REVETEMT_C': 'inline label - always visible', 'LARGEUR_AM': 'inline label - always visible', 'TRAVAUX': 'inline label - always visible', 'PROFIL_TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '.+/-VALUE': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'ACQ_FONC': 'inline label - always visible', 'MOE_ALEAS': 'inline label - always visible', 'TOTAL_HT': 'inline label - always visible', 'AMGT_PRE_1': 'inline label - always visible', 'DIRECTION2': 'inline label - always visible', 'REVETEMT2': 'inline label - always visible', 'LARGEUR__1': 'inline label - always visible', 'TRAVAUX2': 'inline label - always visible', 'PROFIL_T_1': 'inline label - always visible', 'PU€HT2': 'inline label - always visible', '.+/-VALUE2': 'inline label - always visible', 'TOTAL ��_1': 'inline label - always visible', 'ACQ_FONC2': 'inline label - always visible', 'MOE_ALEAS2': 'inline label - always visible', 'TOTAL_HT2': 'inline label - always visible', 'MO': 'inline label - always visible', 'SOURCE': 'inline label - always visible', });
lyr_BOUCLESPOINTSDURSPOINTSDINTERET_7.set('fieldLabels', {'ID': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITI': 'inline label - always visible', 'BOUCLE': 'inline label - always visible', 'TYPE ELEME': 'inline label - always visible', 'POINTDUR': 'inline label - always visible', 'INTERET': 'inline label - always visible', 'REMARQUES': 'inline label - always visible', 'SDC': 'inline label - always visible', 'AMGT_PRECO': 'inline label - always visible', 'TRAVAUX': 'inline label - always visible', 'PROFIL_TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '.+/-VALUE': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'MOE_ALEAS': 'inline label - always visible', 'TOTAL_HT': 'inline label - always visible', 'MO': 'inline label - always visible', 'SOURCE': 'inline label - always visible', });
lyr_AIREDEDEPART_8.set('fieldLabels', {'NOM': 'no label', 'ID': 'no label', 'PHOTOS': 'no label', });
lyr_AIREDEDEPART_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});