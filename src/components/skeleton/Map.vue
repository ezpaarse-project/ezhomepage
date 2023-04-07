<template>
  <div id="mapContainer"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import inistcnrs from '../../../public/images/inist-cnrs.png';

export default {
  name: 'leaflet',
  data() {
    return {
      map: null,
      latlng: [48.6552777, 6.1498841],
      zoom: 16,
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  mounted() {
    this.map = L.map('mapContainer').setView(
      this.latlng,
      this.zoom,
    );
    L.tileLayer(this.url, {
      attribution: this.attribution,
    }).addTo(this.map);

    L.Marker.prototype.setIcon(L.icon({
      iconUrl: markerIconPng,
      iconSize: [24, 36],
      iconAnchor: [12, 36],
    }));

    L.marker(this.latlng).addTo(this.map);
    L.popup({ closeButton: false }).setLatLng(this.latlng)
      .setContent(`<img style="width: 100%;"src="${inistcnrs}"/> <p style="margin: 0; text-align: center; font-weight: bold">Inist-CNRS</p>`)
      .openOn(this.map);
    this.$emit('ready');
  },
};
</script>

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
