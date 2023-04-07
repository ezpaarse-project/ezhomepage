<template>
  <v-app-bar class="blue-grey" dark>
    <v-app-bar-nav-icon dark @click.stop="updateVisibleDrawer($event)" class="hidden-lg-and-up" />
    <img
      style="max-width: 150px"
      :src="require('../../../public/images/ezmesure-text.png')"
      class="ma-4 img-white"
      alt="ezpaarse-img"
    />

    <ApplicationsMenu class="hidden-md-and-down" />

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-down" :href="blogURL" v-on="on" icon>
          <v-icon>mdi-post</v-icon>
        </v-btn>
      </template>
      <span>Blog ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-down" :href="mailURL" v-on="on" icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </template>
      <span>Mail ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-down" :href="githubURL" v-on="on" icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>Github ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-down" :href="twitterURL" v-on="on" icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitter ezPAARSE</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-down" :href="youtubeURL" v-on="on" icon>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
      <span>Youtube ezPAARSE</span>
    </v-tooltip>

    <Lang />
  </v-app-bar>
</template>

<script>

import ApplicationsMenu from '@/components/skeleton/ApplicationsMenu.vue';
import Lang from '@/components/skeleton/Lang.vue';
import frFlag from '../../../public/images/lang/fr.png';
import enFlag from '../../../public/images/lang/en.png';

export default {
  components: {
    ApplicationsMenu,
    Lang,
  },
  data: () => ({
    frFlag,
    enFlag,
    blogURL: 'https://blog.ezpaarse.org/',
    analogistURL: 'http://analyses.ezpaarse.org/',
    ezpaarseDemoURL: 'http://demo.ezpaarse.org/',
    ezmesureURL: 'https://ezmesure.couperin.org/',
    bibliomapURL: 'https://bibliomap.inist.fr/',

    mailURL: 'mailto:ezteam@couperin.org',
    githubURL: 'https://github.com/ezpaarse-project',
    twitterURL: 'https://twitter.com/ezpaarse',
    youtubeURL: 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ',
  }),
  methods: {
    updateVisibleDrawer() {
      this.$emit('drawerUpdate');
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style scoped>

.img-white {
  filter: brightness(0) invert(1);
}

</style>
