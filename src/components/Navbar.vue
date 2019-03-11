<template>
  <nav>
    <!-- app daje position:fixed, flat-likwiduje cień -->
    <v-toolbar app dark color="primary lighten-2 pa-4">
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Weather</span>
        <span>forecast</span>
      </v-toolbar-title>
      <!-- vspacer gives space between this two tags - title&iconlogout -->
      <v-spacer></v-spacer>

      <v-text-field
        placeholder="Enter the name of the city"
        append-icon="search"
        autofocus
        clearable
        color="secondary lighten-4"
        :rules="inputRules"
        dark
        :value="computedValue"
        @input="handleChange"
        @inputToday="handleChange"
        type="text"
        v-model="value"
      ></v-text-field>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputRules: [
        //length is equal or more than 3 oraz show message: 'Type at least 3 characters'
        v => v.length >= 3 || "Type at least 3 characters"
      ]
    };
  },
  methods: {
    handleChange() {
      // console.log(`to jest value: ${this.value}`);
      //(name of emmited event, value)
      // nazwa "input" tutaj jak i event w v-text field i event w app.vue na komponencie Navbar musi być taki sam
      this.$emit("input", this.computedValue);
      this.$emit("inputToday", this.computedValue);
      // this.$emit("input", e.target.value);
    }
  },
  computed: {
    computedValue() {
      return this.value;
    }
  }
};
</script>

