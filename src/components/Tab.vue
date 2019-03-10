
<template>
  <v-container>
    <v-layout>
      <v-tabs class v-model="active" slider-color="accent">
        <v-tab class="ml-4">Today</v-tab>
        <v-tab class="ml-4">5 day</v-tab>
        <v-tab class="ml-4">16 day</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <!-- <span>{{`${toCelcius(temp)} °C`}}</span> -->
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Item v-for="item in results" :item="item" :key="item.dt"/>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>{{ text }}ccccccccccc</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <!-- <div class="text-xs-center mt-3">
        <v-btn @click="next">next tab</v-btn>
      </div>-->
    </v-layout>
  </v-container>
</template>


<script>
import Item from "@/components/Item";
export default {
  components: {
    Item
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
};
</script>