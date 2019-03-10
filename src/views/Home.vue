<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 class="ma-4">
        <v-avatar size="200" color="grey lighten-4">
          <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
        </v-avatar>
      </v-flex>

      <v-flex mb-4>
        <h1
          class="display-2 font-weight-bold mb-3 primary--text darken-3"
        >Welcome to weather forecast</h1>
        <p
          class="subheading font-weight-regular secondary--text darken-2"
        >Please type city you would like to check weather and click search button above.</p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3 primary--text darken-2">Technologies used</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            class="subheading mx-3 secondary--text darken-2"
            target="_blank"
          >{{ link.text }}</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "Data source",
        href: "https://openweathermap.org/api"
      },
      {
        text: "UI Framework",
        href: "https://vuetifyjs.com/en/"
      },
      {
        text: "JS Framework",
        href: "https://vuejs.org/"
      }
    ]
  })
};
</script>
