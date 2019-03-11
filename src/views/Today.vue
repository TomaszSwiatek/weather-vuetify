<template>
  <div>
    <h1>{{today.coord.lat}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    today: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>