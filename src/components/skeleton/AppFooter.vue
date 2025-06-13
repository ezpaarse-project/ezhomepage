<template>
  <v-footer class="py-5 pl-10 bg-grey-darken-4" bottom>
    © Readmetrics {{ new Date().getFullYear() }} — <strong> {{ i18n.t("footer.signature") }} </strong>
  </v-footer>
</template>


<script setup>

import { useI18n } from 'vue-i18n';

const i18n = useI18n();

</script>