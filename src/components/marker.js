import React, { useEffect, useRef } from "react";
import './earth.css';
import L from "leaflet";
var volcanoIcon = L.icon({
    iconUrl: 'volcano.png',
    iconSize:[20, 20]
});

export  class Marker{
    constructor(name, country, type, last_eruption, latitude, longitude, elevation){
        this.name = name;
        this.country = country;
        this.type = type;
        this.last_eruption = last_eruption;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;
    };
    setIcon = function(map){
        var markerpoint = L.marker([this.latitude, this.longitude], {icon: volcanoIcon})
        this.markerpoint = markerpoint;
        return markerpoint.addTo(map);
    }
    definition = function(){
        this.markerpoint.bindPopup('<b>'+this.name+'</b>' +'<br>'
                                        +'<u>country:</u> ' + this.country + '<br>'
                                        + '<u>type:</u> ' + this.type + '<br>'
                                        + '<u>last eruption:</u> ' + this.last_eruption + '<br>'
                                        + '<u>elevation:</u> ' +this.elevation +'m');
        this.markerpoint.on('mouseover', function (e) {
            this.openPopup();
        });
        this.markerpoint.on('mouseout', function (e) {
            this.closePopup();
        });
    }
}

export  function CreateListMarker(){
    var listMarker = [];
    var marker = new Marker('West Eifel Volcanic Field','Germany','Volcanic field','8300 BCE', 50.17, 6.85, 600);
    var marker1 = new Marker('Chaine des Puys','France','Lava dome(s)','4040 BCE', 45.786, 2.981, 1464);


    listMarker.push(marker);
    listMarker.push(marker1);
    /*
    listMarker.forEach(element => {
        var marker = new Marker()//Rajouter la lecture du json
        listMarker.push(marker)
    });*/
    return listMarker;
}

export  function DisplayMarker(listMarker, map){
    listMarker.forEach(element => {
        element.setIcon(map);
        element.definition();
    });
}





