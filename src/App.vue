<template>
  <v-app class="ma-0">
    <AppBar @drawerUpdate="updateVisibleDrawer()"/>
    <v-main>
      <MobileMenu v-model="visible"/>
      <AppTittle />
      <v-divider class="ma-16" />
      <div>
        <EzmesureApp />
        <EzcounterApp />
        <EzreeportApp />
      </div>
      <v-divider class="ma-16" />
      <div>
        <EzpaarseApp />
        <BibliomapApp />
      </div>
      <v-divider class="ma-16" />
      <div>
        <AnalogistApp />
      </div>
      <v-divider class="ma-16" />
      <div>
        <EzunpaywallApp />
      </div>
      <v-divider class="ma-16" />
      <div>
        <AppTeam />
      </div>
      <AppOrganization />
      <AppFooter />
    </v-main>
    
  </v-app>
</template>

<script setup>
import AppBar from '@/components/skeleton/AppBar.vue';
import MobileMenu from '@/components/skeleton/MobileMenu.vue';
import AppTittle from '@/components/skeleton/AppTittle.vue';

import EzmesureApp from '@/components/applications/EzmesureApp.vue';
import EzcounterApp from '@/components/applications/EzcounterApp.vue';
import EzreeportApp from '@/components/applications/EzreeportApp.vue';
import EzpaarseApp from '@/components/applications/EzpaarseApp.vue';
import BibliomapApp from '@/components/applications/BibliomapApp.vue';
import AnalogistApp from '@/components/applications/AnalogistApp.vue';
import EzunpaywallApp from '@/components/applications/EzunpaywallApp.vue';



import AppFooter from '@/components/skeleton/AppFooter.vue';
import AppOrganization from '@/components/team/AppOrganization.vue';
import AppTeam from '@/components/team/AppTeam.vue';




import {ref} from 'vue';

let visible = ref(false);

const emit = defineEmits({
  updated: () => true
})
  
async function updateVisibleDrawer() {
  visible.value = !visible.value;
  emit('updated');
};

</script>

<style>

</style>
