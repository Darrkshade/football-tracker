<template>
  <nav>
    <v-navigation-drawer app permanent class="primary">
      <v-list>
        <v-list-item router :to="item.route" v-for="item in navLinks" :key="item.title">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" left>{{ item.icon }}</v-icon>
              <span v-on="on">{{ item.title }}</span>
            </template>
          </v-tooltip>
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
  }
};
</script>
