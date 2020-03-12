<template>
  <div>
    <v-data-table :headers="headers" :items="goalkeepers" :items-per-page="15" :loading="this.isTableLoading" :loading-text="loadingText">
      <v-slot></v-slot>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'MaerskLeague',
  data() {
    return {
      loadingText: 'Loading Data, Please wait.........',
      headers: [
        {
          text: 'Player',
          value: 'playerName'
        },
        {
          text: 'Games Played',
          value: 'gamesPlayed'
        },
        {
          text: 'Goals Against',
          value: 'goalsAgainst'
        },
        {
          text: 'Wins',
          value: 'wins'
        },
        {
          text: 'Win %',
          value: 'winPercentage'
        },
        {
          text: 'Goals Against Average',
          value: 'goalsAgainstAverage'
        },
        {
          text: 'Clean Sheets',
          value: 'cleanSheets'
        },
        {
          text: 'Clean Sheet %',
          value: 'cleanSheetPercentage'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      goalkeepers: 'goalKeepers'
    }),
    isTableLoading() {
      return this.goalkeepers.length >= 0 ? false : true;
    }
  },
  methods: {
    ...mapActions({
      getGoalkeepers: 'getGoalkeepers'
    })
  },
  mounted() {
    this.getGoalkeepers();
  }
};
</script>
