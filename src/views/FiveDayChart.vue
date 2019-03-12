<template>
  <v-container fluid>
    <v-sparkline
      :value="temp"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      auto-draw
      show-labels
      :labels="labels"
    ></v-sparkline>
    <v-btn @click="sparklineClick">click</v-btn>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: ["#f72047", "#ffd200", "#1feaea"],
      gradientDirection: "top",
      temp: this.fiveDays.map(({ main }) => main.temp),
      labels: this.fiveDays.map(({ dt_txt }) => dt_txt)
    };
  },
  props: {
    fiveDays: {
      type: Array,
      required: true
    }
  },
  methods: {
    toCelcius(kelvin) {
      return `${Math.floor(kelvin - 273.15)}`;
    },
    sparklineClick() {
      //mapowanie: this.fiveDays.map(({ nazwa nowej tablicy }) => podanie struktury obiektu do ktorej chcemy sie dostac)
      console.log(`click ${this.fiveDays.map(({ main }) => main.temp)}`);
      console.log(`click ${this.fiveDays.map(({ dt_txt }) => dt_txt)}`);
    }
  },
  computed: {
    tempCelcius() {
      return this.toCelcius(this.temp);
    }
  }
};
</script>
