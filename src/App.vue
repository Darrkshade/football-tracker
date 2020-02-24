<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
