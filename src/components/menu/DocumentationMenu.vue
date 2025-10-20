<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn dark v-bind="props" append-icon="mdi-menu-down">
          {{ i18n.t('documentation') }}
        </v-btn>
      </template>

      <v-card class="py-2">
        <DocumentationList />
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';

import DocumentationList from '@/components/menu/DocumentationList.vue';

const i18n = useI18n()

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
