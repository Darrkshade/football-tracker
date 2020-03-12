<template>
  <div>
    <v-data-table :headers="headers" isMobile="true" :items="outfieldPlayers" :items-per-page="15" :loading="this.isTableLoading" :loading-text="loadingText"> </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
          text: 'Position',
          value: 'position'
        },
        {
          text: 'Games Played',
          value: 'gamesPlayed'
        },
        {
          text: 'Wins',
          value: 'wins'
        },
        {
          text: 'Draws',
          value: 'draws'
        },
        {
          text: 'Losses',
          value: 'losses'
        },
        {
          text: 'Win %',
          value: 'winPercentage'
        },
        {
          text: 'Goals',
          value: 'goals'
        },
        {
          text: 'GPGA',
          value: 'goalsPerGameAverage'
        },
        {
          text: 'Own Goals',
          value: 'ownGoals'
        },
        {
          text: 'Goals',
          value: 'goals'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      outfieldPlayers: 'outfieldPlayers'
    }),
    isTableLoading() {
      return this.outfieldPlayers.length >= 0 ? false : true;
    }
  }
};
</script>
