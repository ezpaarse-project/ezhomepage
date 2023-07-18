<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y >
      <template v-slot:activator="{ on, attrs }">
       <v-btn dark v-bind="attrs" text v-on="on">
          {{ $t('contact') }}
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-card class="py-4">
        <v-list-item
          v-for="email in emails"
          :key="email.name"
          :href="email.link"
          link
        >
          <v-list-item-avatar tile="false">
             <v-icon left>{{ email.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ email.name }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ email.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="application in applications"
          :key="application.name"
          :href="application.link"
          link
        >
          <v-list-item-avatar tile="false">
            <img
              style="max-width: 60px"
              :src="require(`../../../public/images/${application.pathImage}`)"
              :alt="`${application.name}-img`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> {{ application.name }} </v-list-item-title>
            <v-list-item-subtitle> {{ application.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  computed: {
    emails() {
      return [
        {
          name: this.$t('contact'),
          icon: 'mdi-account-group',
          link: 'mailto:ezteam@couperin.org',
        },
        {
          name: this.$t('supportEzcounter'),
          icon: 'mdi-account-supervisor',
          link: 'mailto:ezteam-dev@couperin.org',
        },
      ];
    },
    applications() {
      return [
        {
          name: 'ezMESURE',
          pathImage: 'ezmesure-logo.svg',
          text: this.$t('subscribe'),
          link: 'https://groupes.renater.fr/sympa/info/ezmesure-users',
        },
        {
          name: 'ezPAARSE',
          pathImage: 'ezpaarse-logo.png',
          text: this.$t('subscribe'),
          link: 'https://groupes.renater.fr/sympa/info/ezpaarse-users',
        },
        {
          name: 'ezUNPAYWALL',
          pathImage: 'unpaywall-logo.svg',
          text: this.$t('subscribe'),
          link: 'https://groupes.renater.fr/sympa/info/ezunpaywall-users',
        },
      ];
    },
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
}

</style>
