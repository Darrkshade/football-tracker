<template>
  <nav>
    <v-navigation-drawer app top :permanent="$vuetify.breakpoint.lgAndAbove" class="primary" :value="showDrawer">
      <v-list nav>
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
  }
};
</script>
