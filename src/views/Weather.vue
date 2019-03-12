<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-tabs
          class="mt-4"
          centered
          v-model="active"
          slider-color="accent"
          fixed-tabs
          icons-and-text
        >
          <v-tab class="ml-1">Today
            <v-icon>looks_one</v-icon>
          </v-tab>
          <v-tab class="ml-1">day
            <v-icon>looks_5</v-icon>
          </v-tab>
          <v-tab class="ml-1">
            day
            <span>
              <v-icon>looks_one</v-icon>
              <v-icon>looks_6</v-icon>
            </span>
          </v-tab>

          <!-- TODAY -->
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <Today :today="today"/>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- 5 DAY -->
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <FiveDay :fiveDays="fiveDays" @item="item"></FiveDay>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <!-- 16 DAY -->
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <FiveDayChart :fiveDays="fiveDays"/>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-spacer></v-spacer>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FiveDay from "@/views/FiveDay";
import FiveDayChart from "@/views/FiveDayChart";
import Today from "@/views/Today";
export default {
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  components: {
    FiveDay,
    Today,
    FiveDayChart
  },
  props: {
    fiveDays: {
      type: Array,
      required: true
    },
    today: {
      type: Object,
      required: true
    }
  }
};
</script>

