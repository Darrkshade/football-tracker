<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <v-toolbar dense>
        <v-toolbar-title class="text-center">Maersk Football</v-toolbar-title>
      </v-toolbar>
      <Navigation :navLinks="navLinks" />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'App',
  data() {
    return {
      navLinks: [
        {
          title: 'Home',
          icon: 'mdi-home',
          route: '/'
        },
        {
          title: 'Maersk Prem League',
          icon: 'mdi-table',
          route: '/maersk-table'
        },
        {
          title: 'Prem League',
          icon: 'mdi-table',
          route: '/prem-league'
        },
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          route: '/dashboard'
        }
      ]
    };
  },
  components: {
    Navigation
  }
};
</script>
