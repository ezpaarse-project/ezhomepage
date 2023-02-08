<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    fixed
    disable-resize-watcher
    width="300"
  >
    <v-list>
      <v-list-item link :href="blogURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="$t('blog')" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="analogistURL" ripple>
        <img
          style="max-width: 30px"
          :src="require('../../../public/images/analogist-logo.png')"
          class="mr-6 logo-white"
          alt="analogist-img"
        />

        <v-list-item-content>
          <v-list-item-title> Analogist </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="ezpaarseDemoURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-chevron-double-right</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="$t('demonstration')"> </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="ezmesureURL" ripple>
        <img
          style="max-width: 32px"
          :src="require('../../../public/images/ezmesure-logo.svg')"
          class="mr-6 logo-white"
          alt="ezmesure-img"
        />

        <v-list-item-content>
          <v-list-item-title> Ezmesure </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="bibliomapURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-web</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> bibliomap </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="ezpaarseDocURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-file-document-multiple</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="$('documentation')" />
        </v-list-item-content>
      </v-list-item>

       <v-list-item link :href="mailURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Mail </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-item link :href="githubURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-github</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Github </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-item link :href="twitterURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-twitter</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Twitter </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-list-item link :href="youtubeURL" ripple>
        <v-list-item-icon>
          <v-icon>mdi-youtube</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Youtube </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-spacer></v-spacer>

    <v-list-group
      no-action
      append-icon="mdi-chevron-down"
      prepend-icon="mdi-translate"
    >
      <template #activator>
        <v-list-item-title
          class="body-2"
          v-text="$t('language')"
        />
      </template>

      <v-list-item
        @click="$i18n.locale = 'fr'"
      >
        <v-list-item-title class="body-2" v-text="$t('french')"/>
        <v-list-item-icon>
          <img width="24" :src="require('../../../public/images/lang/fr.png')" alt="fr">
        </v-list-item-icon>
      </v-list-item>

      <v-list-item
        @click="$i18n.locale = 'en'"
      >
        <v-list-item-title class="body-2" v-text="$t('english')"/>
        <v-list-item-icon>
          <img width="24" :src="require('../../../public/images/lang/en.png')" alt="en">
        </v-list-item-icon>
      </v-list-item>
    </v-list-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      appVersion: '1.0.0',

      blogURL: 'https://blog.ezpaarse.org/',
      analogistURL: 'http://analyses.ezpaarse.org/',
      ezpaarseDemoURL: 'http://demo.ezpaarse.org/',
      ezmesureURL: 'https://ezmesure.couperin.org/',
      bibliomapURL: 'https://bibliomap.inist.fr/',
      ezpaarseDocURL: 'https://ezpaarse-project.github.io/ezpaarse/',

      mailURL: 'mailto:ezteam@couperin.org',
      githubURL: 'https://github.com/ezpaarse-project',
      twitterURL: 'https://twitter.com/ezpaarse',
      youtubeURL: 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ',
    };
  },
  computed: {
    drawer: {
      get() {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return false;
        }
        return this.$store.state.drawer;
      },
      set(newVal) {
        this.$store.dispatch('setDrawer', newVal);
      },
    },
  },
};
</script>
