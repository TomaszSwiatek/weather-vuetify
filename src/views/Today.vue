<template>
  <div class="today">
    <v-list class="mt-4">
      <!-- 1 item start -->
      <v-list-tile
        v-for="link in links"
        :key="link.content"
        router
        :to="link.route"
        active-class="red--text"
      >
        <v-list-tile-action>
          <v-icon class>{{link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content class="text-capitalize">{{link.content}}</v-list-tile-content>
      </v-list-tile>
      <!-- 1 item end -->
    </v-list>
  </div>
</template>
