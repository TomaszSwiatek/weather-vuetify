<template>
  <v-app>
    <Navbar class="mb-4"/>
    <!-- <v-toolbar app></v-toolbar> -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
