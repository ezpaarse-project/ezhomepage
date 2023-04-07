<template>
  <v-footer dark bottom padless>
    <v-row>
      <v-col class="pa-0" cols=12>
        <v-card class="white pa-5" flat tile>
          <v-row align="center" class="ma-2">
            <a
              v-for="partner in partners"
              :key="partner.name"
              :href="partner.link"
            >
              <img
                :style="partner.style"
                class="ma-2"
                :src="require(`../../../public/images/${partner.imageFilename}`)"
                :alt="`${partner.name}-img`"
              />
            </a>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols=12>
        <v-card class="pa-5 pb-1 pl-10" flat tile>
          <p>
            © ezPAARSE {{ new Date().getFullYear() }} —
            <strong> {{ $t("footer.signature") }} </strong>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    partners: [
      {
        name: 'couperin',
        imageFilename: 'couperin-text.png',
        style: 'max-width: 160px; max-height: 50px',
        link: 'https://ezmesure.couperin.org/',
      },
      {
        name: 'counter',
        imageFilename: 'counter-text.png',
        style: 'max-width: 150px; max-height: 50px',
        link: 'https://www.projectcounter.org/',
      },
      {
        name: 'cnrs',
        imageFilename: 'inist-cnrs-logo.png',
        style: 'max-width: 100px; max-height: 100px',
        link: 'https://www.inist.fr/',
      },
      {
        name: 'ministery',
        imageFilename: 'ministry-text.png',
        style: 'max-width: 170px; max-height: 170px',
        link: 'https://www.gouvernement.fr/le-ministere-de-l-enseignement-superieur-de-la-recherche-et-de-l-innovation',
      },
    ],
  }),
};
</script>
