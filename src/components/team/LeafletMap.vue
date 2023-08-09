<template>
  <div id="mapContainer"></div>
</template>

<script setup>

import { onMounted } from 'vue';

import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import inistcnrs from '@/images/organization/inist-cnrs.png';

let map = null
const latlngMap = [48.6571921, 6.149913]
const latlng = [48.6552777, 6.1498841]
const zoom = 16
const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

onMounted(() => {
  map = L.map('mapContainer').setView(
    latlngMap,
    zoom,
  );
  L.tileLayer(url, {
    attribution: attribution,
  }).addTo(map);

  L.Marker.prototype.setIcon(L.icon({
    iconUrl: markerIconPng,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  }));

  L.marker(latlng).addTo(map)
    .bindPopup(`<img style="width: 100%;"src="${inistcnrs}"/> 
        <p style="margin: 0; text-align: center; font-weight: bold">Inist-CNRS</p>
        <p style="margin: 0; text-align: center">2 rue Jean Zay</p>
        <p style="margin: 0; text-align: center"> 54519 Vandœuvre-lès-Nancy </p>
        <p style="margin: 0; text-align: center">+33 (0)3 83 50 46 00 </p>`)
    .openPopup();
})

</script >

<style>
#mapContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.leaflet-popup-content-wrapper {
  width: 250px;
  margin-bottom: 30px;
}

.leaflet-popup-tip {
  width: 0px;
  height: 0px;
}
</style>
