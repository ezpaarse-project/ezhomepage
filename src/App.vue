<template>
  <v-app>
    <Appbar />
    <div class="content">
      <Ezpaarse />
      <v-divider />
      <Metrics />
      <v-divider />
      <Ezmesure />
      <v-divider />
      <v-container>
        <v-row>
          <v-col>
            <Analogist />
          </v-col>
          <v-col>
            <Readmetrics />
          </v-col>
        </v-row>
      </v-container>
      <v-divider />
      <Bibliomap />
      <v-divider />
    </div>
    <Team />
    <Footer />
  </v-app>
</template>

<script>
import Appbar from './components/skeleton/Appbar.vue';
import Footer from './components/skeleton/Footer.vue';
import Team from './components/skeleton/Team.vue';

import Ezpaarse from './components/application/Ezpaarse.vue';
import Metrics from './components/application/Metrics.vue';
import Analogist from './components/application/Analogist.vue';
import Ezmesure from './components/application/Ezmesure.vue';
import Bibliomap from './components/application/Bibliomap.vue';
import Readmetrics from './components/application/Readmetrics.vue';

export default {
  name: 'App',
  components: {
    Appbar,
    Footer,
    Team,
    Ezpaarse,
    Metrics,
    Analogist,
    Ezmesure,
    Bibliomap,
    Readmetrics,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.content {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
