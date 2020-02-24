<template>
  <v-app>
    <v-content>
      <Navigation :navLinks="navLinks" />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      navLinks: [
        {
          title: 'Home',
          icon: 'mdi-home'
        },
        {
          title: 'Maersk Prem League',
          icon: 'mdi-table'
        },
        {
          title: 'Prem League',
          icon: 'mdi-table'
        }
      ]
    };
  }
};
</script>
