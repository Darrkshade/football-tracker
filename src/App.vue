<template>
  <v-app>
    <v-content>
      <v-toolbar dense>
        <v-app-bar-nav-icon v-on:click.stop="showDrawer = !showDrawer" v-show="$vuetify.breakpoint.mdAndDown"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-center">Maersk Football</v-toolbar-title>
      </v-toolbar>
      <Navigation :navLinks="navLinks" :showDrawer="showDrawer" />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      showDrawer: false,
      navLinks: [
        {
          title: 'Home',
          icon: 'mdi-home',
          route: '/'
        },
        {
          title: 'Maersk Prem League',
          icon: 'mdi-table',
          route: '/league'
        },
        {
          title: 'Prem League',
          icon: 'mdi-table',
          route: '/prem-league'
        }
      ]
    };
  },
  components: {
    Navigation
  },
  methods: {
    ...mapActions({
      getOutfieldPlayers: 'outfieldPlayers',
      getGoalkeepers: 'getGoalkeepers'
    })
  },
  created() {
    this.getOutfieldPlayers();
    this.getGoalkeepers();
  }
};
</script>
