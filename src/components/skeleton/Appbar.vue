<template>
  <v-app-bar class="blue-grey" dark>
    <v-app-bar-nav-icon dark @click.stop="updateVisibleDrawer($event)" class="hidden-lg-and-up" />
    <img
      style="max-width: 40px"
      :src="require('../../../public/images/readmetrics-logo.png')"
      class="ma-4"
      alt="readmetrics logo"
    />
    <b> ReadMETRICS </b>

    <v-btn class="hidden-md-and-down ml-6" :href="blogURL" text>
      <v-icon left>mdi-message-text</v-icon>
      Blog
    </v-btn>

    <ApplicationsMenu class="hidden-md-and-down" />

    <MailMenu class="hidden-md-and-down"/>

    <v-spacer></v-spacer>

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
import MailMenu from '@/components/skeleton/MailMenu.vue';
import Lang from '@/components/skeleton/Lang.vue';
import frFlag from '../../../public/images/lang/fr.png';
import enFlag from '../../../public/images/lang/en.png';

export default {
  components: {
    ApplicationsMenu,
    MailMenu,
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
