<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn class="hidden-md-and-down" icon v-bind="props">
        {{ i18n.locale.value }}
      </v-btn>
    </template>
    <v-card class="mr-2" min-width="120">
      <LangList />
    </v-card>
  </v-menu>
</template>

<script setup>


import { useI18n } from 'vue-i18n';

import LangList from '@/components/menu/LangList.vue'

const i18n = useI18n()

</script>
