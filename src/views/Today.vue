<template>
  <div class="today">
    <div class="item-wrapper">
      <!-- <router-link to="fiveDay">5 day / 3 hour forecast</router-link>
      <router-link to="/sixteenDay">16 day / daily forecast</router-link>-->
      <Tab :results="results"/>
    </div>
  </div>
</template>

<script>
// import Item from "@/components/Item";
import Tab from "@/components/Tab";
export default {
  components: {
    // Item,
    Tab
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  }
};
</script>

