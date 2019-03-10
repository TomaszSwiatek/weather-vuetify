<template>
  <v-app>
    <!-- z navbara wyemitować event tak jak zrobic to roman  (tylko trzeba dane wyciagnacz inputa) i potem obsluzyc ten event juz tutaj -->
    <Navbar class="mb-4" @input="handleNavbarVTextField" v-model="navbarVTextFieldValue"/>

    <v-content>
      <v-container fluid>
        <!-- tu <routes> mozna wrzucic wszystkie linki i je wyswietlacw kazdym widoku ale v-if ="step === 1" </routes> -->
        <!-- strzelam ze ten step mozna przekazac jako prop do innych componentow ktore dzialaja w routerze i tez nimi w ten sposob sterowac i w ten sposób zaznaczyc ze today ma sie wyswietlac jak step === 1  -->
        <!-- <router-link to="/today">Weather</router-link>
        <router-link to="/today">Weather</router-link>
        <router-link to="/today">Weather</router-link>-->
        <!-- results -->
        <div class="item-wrapper" v-if="results && !loading && step === 1">
          <router-link to="fiveDay">5 day / 3 hour forecast</router-link>
          <router-link to="/sixteenDay">16 day / daily forecast</router-link>
          <Item v-for="item in results" :item="item" :key="item.dt"/>
        </div>

        <!-- results end -->
        <Home v-if="step === 0"/>
        <!-- tu zrobic tez v-if="step === 0"               a może !== 1-->
        <!-- <router-view></router-view> -->
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Item from "./components/Item";

import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_ID = "&appid=8516c35a5aa25a2690f4dca7c0d11239";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Item
  },
  data() {
    return {
      navbarVTextFieldValue: "",
      loading: false,
      step: 0,
      results: []
    };
  },
  methods: {
    handleNavbarVTextField: debounce(function() {
      this.loading = true; //when interpreter is exactly here loading turn to true.
      // console.log(this.searchValue);
      axios
        .get(`${API}${this.navbarVTextFieldValue}${API_ID}`)
        .then(response => {
          console.log(response.data.list);
          this.results = response.data.list;
          this.loading = false; //after this line loading again is false. we do it to manage states in tags with v-if directive.
          this.step = 1; //after this line we change to second state.
        })
        .catch(error => {
          console.log(`erorrrrr: ${error}`);
        });
    }, 500)
  }
};
</script>
