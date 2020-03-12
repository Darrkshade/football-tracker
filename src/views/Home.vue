<template>
  <div class="home">
    <div class="home--middle-section text-center">
      <h1 class="pa-4">Maidenhead Maersk FC</h1>
      <p>100% Win Rate! UNBEATEN SEASON!</p>
      <p>Play us if you dare to lose!</p>
      <img class="home--photo d-none d-lg-block" :src="teamPhoto" alt="Team photo of the team that played against Dynmo FC" />
    </div>

    <div class="home--right-section">
      <h3 class="home--right-section--table text-center mb-2">Top GoalScorers</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <td>Name</td>
              <td>Goals</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in topGoalScorers" :key="player.playerName">
              <td>{{ player.playerName }}</td>
              <td>{{ player.goals }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h3 class="home--right-section--table text-center my-2">Recent Games</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <td>Teams</td>
              <td>Score</td>
              <td>Date Played</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in lastFiveGames" :key="game._id">
              <td>{{ game.teams[0].teamName }} vs {{ game.teams[1].teamName }}</td>
              <td>{{ game.teams[0].score }} - {{ game.teams[1].score }}</td>
              <td>{{ game.datePlayed }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      teamPhoto: require('../assets/team-photo.png'),
      topPlayerLimit: 3,
      gameHistoryLimit: 6
    };
  },
  methods: {
    ...mapActions({
      getRecentGames: 'getRecentGames'
    })
  },
  computed: {
    ...mapState(['outfieldPlayers', 'goalKeepers', 'matchHistory']),
    topGoalScorers() {
      const playersArr = [...this.outfieldPlayers];
      playersArr.sort((a, b) => b.goals - a.goals);
      return playersArr.slice(0, this.topPlayerLimit);
    },
    lastFiveGames() {
      return this.matchHistory.slice(0, this.gameHistoryLimit);
    },
    sortTopPlayers() {
      const players = [...this.outfieldPlayers];
      const sorted = players.sort(function(a, b) {
        return b.goals - a.goals;
      });
      return sorted;
    }
  },
  created() {
    this.getRecentGames();
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}

.display-1 {
  line-height: 4rem !important;
}

@media screen and (min-width: 1265px) {
  .home {
    display: flex !important;
    flex-direction: row !important;
    &--table {
      width: 50%;
      max-width: 400px;
      min-width: 250px;
    }

    &__footer-disclaimer {
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: 0.2;
      text-align: right;
    }

    &--photo {
      width: 800px;
      border-radius: 10px;
    }

    &--middle-section {
      margin-left: 100px;
    }

    &--right-section {
      margin-left: 100px;
      margin-top: 132px;
    }
  }
}
</style>
