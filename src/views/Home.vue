<template>
  <div class="home d-sm-inline-flex justify-space-between flex-wrap">
    <div class="home__top-goals home--table px-12">
      <h3 class="white--text text-center">Top 5 Games Played</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Player</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daniel</td>
              <td>10</td>
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <div class="home__top-games px-12 home--table">
      <h3 class="white--text text-center">Top 5 Goal Scorers</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Player</th>
              <th>Games Played</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daniel</td>
              <td>10</td>
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <div class="home__top-games px-12 home--table">
      <h3 class="white--text text-center">Last 5 Game Results</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Teams</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Colours v Bibs</td>
              <td>4 - 2</td>
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: require('../assets/desktop-background.jpg'),
      mobileBackgroundImage: require('../assets/mobile-background.jpg')
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
}

.display-1 {
  line-height: 4rem !important;
}

@media screen and (min-width: 600px) {
  .home {
    &--table {
      width: 50%;
      max-width: 400px;
      min-width: 250px;
    }
  }
}
</style>
