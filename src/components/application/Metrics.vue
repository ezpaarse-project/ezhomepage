<template>
  <v-container class="my-10">
    <h2
      class="text-center"
      v-html="
        $t('metrics', {
          days: data.metrics.days,
          docs: data.docs,
          platforms: data.metrics.platforms,
          titles: data.metrics.titles,
        })
      "
    />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    data: {
      docs: 0,
      metrics: {
        days: 0,
        indices: 0,
        platforms: 0,
        titles: 0,
      },
    },
  }),
  methods: {
    async getMetrics() {
      const response = await fetch('https://ezmesure.couperin.org/api/metrics');
      this.data = await response.text();
      this.data = JSON.parse(this.data);
      //this.animateMetrics2();
    },
    animateMetrics2() {
      const valueDisplay = document.getElementById('metric-days');
      console.log(valueDisplay);
      const interval = 2;
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute('data-val'));
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    },
  },
  mounted() {
    this.getMetrics();
  },
};
</script>
