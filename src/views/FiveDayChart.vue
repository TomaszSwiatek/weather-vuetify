<template>
  <div></div>
</template>

<script>
export default {
  props: {
    fiveDays: {
      type: Array,
      required: true
    }
  },
  methods: {
    toCelcius(kelvin) {
      return `${Math.floor(kelvin - 273.15)}`;
    }
  }
};
</script>

<style scoped>
</style>