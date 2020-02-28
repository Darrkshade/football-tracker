<template>
  <div>
    <v-data-table :headers="headers" :items="maerskStandings"></v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'MaerskLeague',
  data() {
    return {
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
      ],
      players: []
    };
  },
  methods: {
    ...mapActions({
      getMaerskStandings: 'getMaerskStandings'
    })
  },
  computed: {
    ...mapState({
      maerskStandings: 'maerskStandings'
    })
  },
  mounted() {
    this.getMaerskStandings();
  }
};
</script>
