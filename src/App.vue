<template>
  <v-app>
    <!-- z navbara wyemitować event tak jak zrobic to roman  (tylko trzeba dane wyciagnacz inputa) i potem obsluzyc ten event juz tutaj -->
    <Navbar
      class="mb-4"
      @input="handleNavbarVTextField"
      @inputToday="handleToday"
      v-model="navbarVTextFieldValue"
    />

    <v-content>
      <v-container fluid>
        <Weather :today="today" :fiveDays="fiveDays" v-if="fiveDays && !loading && step === 1"/>
        <Home v-if="step === 0"/>
        <!-- <router-view></router-view> -->
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Weather from "./views/Weather";

import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_today = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_ID = "&appid=8516c35a5aa25a2690f4dca7c0d11239";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Weather
  },
  data() {
    return {
      navbarVTextFieldValue: "",
      loading: false,
      step: 0,
      fiveDays: [],
      today: []
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
          this.fiveDays = response.data.list;
          this.loading = false; //after this line loading again is false. we do it to manage states in tags with v-if directive.
          this.step = 1; //after this line we change to second state.
        })
        .catch(error => {
          console.log(`five days: ${error}`);
        });
    }, 500),
    handleToday: debounce(function() {
      this.loading = true; //when interpreter is exactly here loading turn to true.
      // console.log(this.searchValue);
      axios
        .get(`${API_today}${this.navbarVTextFieldValue}${API_ID}`)
        .then(response => {
          console.log(response.data);
          this.today = response.data;
          this.loading = false; //after this line loading again is false. we do it to manage states in tags with v-if directive.
          this.step = 1; //after this line we change to second state.
        })
        .catch(error => {
          console.log(`today: ${error}`);
        });
    }, 500)
  }
};
</script>
