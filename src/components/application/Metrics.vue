<template>
  <v-container class="my-10">
    <h2 class="text-center">{{ $t("metrics") }}</h2>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    metrics: {},
  }),
  methods: {
    async getMetrics() {
      const response = await fetch('https://ezmesure.couperin.org/api/metrics');
      this.metrics = await response.text();
      console.log(this.metrics);
    },
  },
  mounted() {
    this.getMetrics();
  },
};
</script>
