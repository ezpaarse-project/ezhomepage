<template>
  <v-app>
    <Appbar @drawerUpdate="updateVisibleDrawer()"/>
    <Drawer v-model="visible"/>
    <div class="content">
      <Title />
    </div>
    <div>
      <v-divider class="ma-16 purple" style="border-width: 15px"/>
      <Ezmesure />
      <v-divider class="ma-16"/>
      <Ezcounter />
      <v-divider class="ma-16"/>
      <Ezreeport />
      <v-divider class="ma-16"/>
    </div>
    <div>
      <v-divider class="ma-16 indigo" style="border-width: 15px" />
      <Ezpaarse />
      <v-divider class="ma-16" />
      <Bibliomap />
      <v-divider class="ma-16"/>
    </div>
    <div>
      <v-divider class="ma-16 red" style="border-width: 15px" />
      <Analogist />
      <v-divider class="ma-16"/>
    </div>
    <div>
      <v-divider class="ma-16 green" style="border-width: 15px" />
      <Ezunpaywall />
      <v-divider class="ma-16"/>
    </div>
      <!-- <Readmetrics /> -->
    <div class="grey darken-4">
      <v-divider class="ma-16" dark />
      <Team />
      <Organization />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Appbar from '@/components/skeleton/Appbar.vue';
import Drawer from '@/components/skeleton/Drawer.vue';
import Title from '@/components/skeleton/Title.vue';
import Team from '@/components/skeleton/Team.vue';
import Organization from '@/components/skeleton/Organization.vue';
import Footer from '@/components/skeleton/Footer.vue';

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
    Appbar,
    Drawer,
    Title,
    Team,
    Organization,
    Footer,

    Ezmesure,
    Ezcounter,
    Ezreeport,
    Bibliomap,
    Ezpaarse,
    Analogist,
    Ezunpaywall,
    Readmetrics,
  },
  data: () => ({
    visible: false,
  }),
  methods: {
    updateVisibleDrawer() {
      this.visible = !this.visible;
      this.$emit('input', this.visible);
    },
  },
};
</script>

<style>

.text {
  font-size: 1.2em;
}
</style>
