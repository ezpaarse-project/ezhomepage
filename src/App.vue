<template>
  <v-app>
    <Appbar />
    <Drawer />
    <div class="content">
      <Ezmesure />
      <v-divider />
      <Ezcounter />
      <v-divider />
      <Ezreeport />
      <v-divider />
      <Bibliomap />
      <v-divider />
      <Ezpaarse />
      <v-divider />
      <Analogist />
      <v-divider />
      <Ezunpaywall />
      <v-divider />
      <Readmetrics />
      <v-divider />
    </div>
    <Team />
    <Footer />
  </v-app>
</template>

<script>
import Drawer from '@/components/skeleton/Drawer.vue';
import Appbar from '@/components/skeleton/Appbar.vue';
import Footer from '@/components/skeleton/Footer.vue';
import Team from '@/components/skeleton/Team.vue';

import Ezmesure from '@/components/application/Ezmesure.vue';
import Ezcounter from '@/components/application/Ezcounter.vue';
import Ezreeport from '@/components/application/Ezreeport.vue';
import Bibliomap from '@/components/application/Bibliomap.vue';
import Ezpaarse from '@/components/application/Ezpaarse.vue';
import Analogist from '@/components/application/Analogist.vue';
import Ezunpaywall from '@/components/application/Ezunpaywall.vue';
import Readmetrics from '@/components/application/Readmetrics.vue';

export default {
  name: 'App',
  components: {
    Drawer,
    Appbar,
    Ezmesure,
    Ezcounter,
    Ezreeport,
    Bibliomap,
    Ezpaarse,
    Analogist,
    Ezunpaywall,
    Readmetrics,
    Team,
    Footer,
  },
};
</script>

<style>
.content {
  margin-left: 5%;
  margin-right: 5%;
}

.text {
  font-size: 16pt;
}
</style>
