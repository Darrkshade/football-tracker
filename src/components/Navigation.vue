<template>
  <nav>
    <v-icon class="white--text ma-3" large v-on:click="drawer = !drawer">mdi-menu</v-icon>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Maersk Football
          </v-list-item-title>
          <v-list-item-subtitle>
            Welcome to our football hub
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav v-for="item in navLinks" :key="item.title">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content router-link to="/">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navLinks: Array
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>
