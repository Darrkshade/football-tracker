<template>
  <nav>
    <v-navigation-drawer app permanent mini-variant class="primary">
      <v-list-item>
        <v-list-item-content>
          <v-icon>mdi-soccer</v-icon>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item router :to="item.route" v-for="item in navLinks" :key="item.title">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">{{ item.icon }}</v-icon>
            </template>
            <span>{{ item.title }}</span>
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
