<template>
  <v-app>
    <!-- z navbara wyemitować event tak jak zrobic to roman  (tylko trzeba dane wyciagnacz inputa) i potem obsluzyc ten event juz tutaj -->
    <Navbar class="mb-4"/>

    <v-content>
      <v-container fluid>
        <!-- tu <routes> mozna wrzucic wszystkie linki i je wyswietlacw kazdym widoku ale v-if ="step === 1" </routes> -->
        <!-- strzelam ze ten step mozna przekazac jako prop do innych componentow ktore dzialaja w routerze i tez nimi w ten sposob sterowac i w ten sposób zaznaczyc ze today ma sie wyswietlac jak step === 1  -->
        <router-link to="/today">Weather</router-link>
        <router-link to="/today">Weather</router-link>
        <router-link to="/today">Weather</router-link>
        <Home/>
        <!-- tu zrobic tez v-if="step === 0"               a może !== 1-->
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Navbar,
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
