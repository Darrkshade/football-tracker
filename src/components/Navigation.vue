<template>
  <nav>
    <v-navigation-drawer app :expand-on-hover="isDesktop" :mini-variant="isDesktop" permanent="true" class="primary" :value="showDrawer">
      <v-list v-model="group" nav>
        <v-list-item router :to="item.route" v-for="item in navLinks" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
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
    showDrawer: Boolean
  },
  data() {
    return {
      group: null
    };
  },
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndDown ? true : false;
    }
  }
};
</script>
