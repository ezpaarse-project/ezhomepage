<template>
  <v-navigation-drawer
    :value="value"
    disable-resize-watcher
    width="300"
    @input="updateVisible($event)"
  >
    <v-list>
      <v-list-item link :href="blogURL">
        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="$t('blog')" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item link :href="ezpaarseDocURL">
        <v-list-item-icon>
          <v-icon>mdi-file-document-multiple</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="$t('documentation')" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="application in applications"
        :key="application.name"
        :href="application.link"
        link
      >
        <img
          style="max-width: 30px"
          :src="require(`../../../public/images/${application.pathImage}`)"
          class="mr-6"
          :alt="`${application.name}-img`"
        />

        <v-list-item-content>
          <v-list-item-title v-text="application.name" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="socialNetwork in socialNetworks"
        :key="socialNetwork.name"
        :href="socialNetwork.link"
        link
      >
        <v-list-item-icon>
          <v-icon> {{ socialNetwork.icon }} </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="socialNetwork.name" />
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
        <v-list-item-title class="body-2" v-text="$t('language')" />
      </template>

      <v-list-item
        v-for="lang in langs"
        :key="lang.locale"
        @click="$i18n.locale = lang.locale">
        <v-list-item-title class="body-2" v-text="$t(lang.language)" />
        <v-list-item-icon>
          <img
            width="24"
            :src="require(`../../../public/images/lang/${lang.locale}.png`)"
            :alt="lang.locale"
          />
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
      ezpaarseDocURL: 'https://ezpaarse-project.github.io/ezpaarse/',
      blogURL: 'https://blog.ezpaarse.org/',
      applications: [
        {
          name: 'ezMESURE',
          pathImage: 'ezmesure-logo.svg',
          link: 'https://ezmesure.couperin.org/',
        },
        {
          name: 'ezCOUNTER',
          pathImage: 'ezcounter-logo.png',
          link: '',
        },
        {
          name: 'ezREEPORT',
          pathImage: 'ezmesure-logo.svg',
          link: '',
        },
        {
          name: 'bibliomap',
          pathImage: 'bibliomap-logo.svg',
          link: 'https://bibliomap.inist.fr/',
        },
        {
          name: 'ezPAARSE',
          pathImage: 'ezpaarse-logo.png',
          link: 'http://demo.ezpaarse.org/',
        },
        {
          name: 'analogist',
          pathImage: 'analogist-logo.png',
          link: 'http://analyses.ezpaarse.org/',
        },
        {
          name: 'ezUNPAYWALL',
          pathImage: 'circle.png',
          link: 'https://unpaywall.inist.fr/',
        },
        {
          name: 'readmetrics',
          pathImage: 'readmetrics-logo.png',
          link: '',
        },
      ],
      socialNetworks: [
        {
          name: 'Mail',
          icon: 'mdi-email',
          link: 'mailto:ezteam@couperin.org',
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          link: 'https://github.com/ezpaarse-project',
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/ezpaarse',
        },
        {
          name: 'Youtube',
          icon: 'mdi-youtube',
          link: 'https://www.youtube.com/channel/UCcR-0UE9WjYiwS4fMG2T4tQ',
        },
      ],
      langs: [
        {
          locale: 'fr',
          language: 'french',
        },
        {
          locale: 'en',
          language: 'english',
        },
      ],
    };
  },
  methods: {
    updateVisible(visible) {
      this.$emit('input', visible);
    },
  },
};
</script>
