<template>
  <div>
    <div class="text-xs-right">
      <v-btn flat outline color="accent" @click="all">expand all</v-btn>
      <v-btn flat outline color="accent" @click="none">hide all</v-btn>
    </div>
    <v-expansion-panel popout v-model="panel" expand>
      <v-expansion-panel-content v-for="item in fiveDays" :item="item" :key="item.dt" @item="item">
        <template v-slot:header>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm8 class="text-xs-center text-sm-left">
                <v-chip color="secondary" flat class="py-1 caption white--text">{{item.dt_txt}}</v-chip>
              </v-flex>
              <v-flex xs12 sm2 class="text-xs-center" align-content-center>
                <img
                  :src="`http://openweathermap.org/img/w/${item.weather[0].icon}.png`"
                  :alt="item.weather[0].description"
                >
              </v-flex>
              <v-flex xs12 sm2 class="text-xs-center" align-content-center>
                <v-chip
                  color="accent"
                  flat
                  class="py-1 caption white--text"
                >{{`${toCelcius(item.main.temp)} °C`}}</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </template>
        <v-card>
          <v-card-text>
            <span>{{`At least ${toCelcius(item.main.temp_min)} °C`}}</span>
            <span>{{`The most ${toCelcius(item.main.temp_max)} °C`}}</span>
            <span class="description">{{item.weather[0].description}}</span>
            <span>{{`Humidity:${item.main.humidity}`}}</span>
            <span>{{`Pressure:${Math.floor(item.main.pressure)} hPa`}}</span>
            <span>{{`Wind's speed: ${Math.floor(item.wind.speed)} mph`}}</span>
            <span>{{`Wind's direction: ${Math.floor(item.wind.deg)}`}}</span>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      items: 5
    };
  },
  props: {
    fiveDays: {
      type: Array,
      required: true
    }
  },
  components: {},
  methods: {
    toCelcius(kelvin) {
      return `${Math.floor(kelvin - 273.15)}`;
    },
    // Create an array the length of our items
    // with all values as true
    // expansion panel methods - buttons - all / none
    all() {
      this.panel = [...Array(this.items).keys()].map(_ => true);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
    item() {
      this.$emit("item", this.item);
    }
  },
  computed: {
    // src() {
    //   return `${this.ApiImageLink}${this.iconId}.png`;
    // }
  }
};
</script>

<style scoped>
</style>