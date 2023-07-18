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
          href="mailto:ezteam@couperin.org"
          link
          target="_blank"
        >
          <v-list-item-avatar tile="false">
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
          <v-list-item-avatar tile="false">
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
          <v-list-item-avatar tile="false">
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
          <v-list-item-avatar tile="false">
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
          <v-list-item-avatar tile="false">
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
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
a {
    text-decoration: none;
}

</style>
