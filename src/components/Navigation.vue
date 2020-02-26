<template>
  <nav>
    <v-navigation-drawer app permanent expand-on-hover v-model="isDrawerOpen" class="primary">
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
      <v-list>
        <v-list-item router :to="item.route" v-for="item in navLinks" :key="item.title">
          <v-list-item-icon left>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
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
    navLinks: Array,
    isDrawerOpen: Boolean
  }
};
</script>
