<template>
  <v-navigation-drawer
    :value="value"
    disable-resize-watcher
    app
    class="hidden-lg-and-up"
    width="300"
    @input="updateVisible($event)"
  >
    <v-list
      nav
      dense
    >
      <p class="my-4">{{ $t('softwares') }}</p>

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
          <v-list-item-title> {{ application.name }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4" />

      <p class="my-4">{{ $t('blog') }}</p>

      <v-list-item
        href="https://blog.ezpaarse.org/"
        link
      >
        <v-list-item-icon>
           <v-icon left>mdi-message-text</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Blog </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4" />

      <p class="my-4">{{ $t('contact') }}</p>

      <v-list-item
          href="mailto:ezteam@couperin.org"
          link
          target="_blank"
        >
          <v-list-item-avatar :tile="false">
             <v-icon left>mdi-account-group</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('contact') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://groupes.renater.fr/sympa/info/ezpaarse-users"
          link
          target="_blank"
        >
          <v-list-item-avatar :tile="false">
            <img
              style="max-width: 60px"
              :src="require('../../../public/images/ezpaarse-logo.png')"
              :alt="`ezpaarse-img`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> ezPAARSE </v-list-item-title>
            <v-list-item-subtitle> {{ $t('subscribe') }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://groupes.renater.fr/sympa/info/ezmesure-users"
          link
          target="_blank"
        >
          <v-list-item-avatar :tile="false">
            <img
              style="max-width: 60px"
              :src="require('../../../public/images/ezmesure-logo.png')"
              :alt="`ezmesure-img`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> ezMESURE </v-list-item-title>
            <v-list-item-subtitle> {{ $t('subscribe') }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="mailto:ezteam-dev@couperin.org"
          link
          target="_blank"
        >
          <v-list-item-avatar :tile="false">
             <v-icon left>mdi-account-supervisor</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('supportEzcounter') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          href="https://groupes.renater.fr/sympa/info/ezunpaywall-users"
          link
          target="_blank"
        >
          <v-list-item-avatar :tile="false">
            <img
              style="max-width: 60px"
              :src="require('../../../public/images/unpaywall-logo.svg')"
              :alt="`ezunpaywall-img`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> ezUNPAYWALL </v-list-item-title>
            <v-list-item-subtitle> {{ $t('subscribe') }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-divider class="my-4" />

      <p class="my-4">{{ $t('socialNetworks') }}</p>

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
          <v-list-item-title> {{ socialNetwork.name }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="ma-2" />

    <v-list-group
      no-action
      append-icon="mdi-chevron-down"
      prepend-icon="mdi-translate"
    >
      <template #activator>
        <v-list-item-title class="body-2"> {{ $t('language') }} </v-list-item-title>
      </template>

      <v-list-item
        v-for="lang in langs"
        :key="lang.locale"
        @click="$i18n.locale = lang.locale">
        <v-list-item-title class="body-2"> {{ $t(lang.language) }} </v-list-item-title>
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
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
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
          pathImage: 'unpaywall-logo.svg',
          link: 'https://unpaywall.inist.fr/',
        },
      ],
      socialNetworks: [
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
