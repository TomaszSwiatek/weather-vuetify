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
      ></v-text-field>
      <!--
      <v-btn flat color>
        <span>sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>-->
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      inputRules: [
        //length is equal or more than 3 oraz show message: 'Type at least 3 characters'
        v => v.length >= 3 || "Type at least 3 characters"
      ]
    };
  }
};
</script>

