<template>
  <div>
    <v-data-table :headers="headers" :items="maerskStandings" :items-per-page="15" :loading="this.isTableLoading" :loading-text="loadingText">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.playerName }}</td>
          <td>{{ row.item.position }}</td>
          <td>{{ row.item.gamesPlayed }}</td>
          <td>{{ row.item.wins }}</td>
          <td>{{ row.item.draws }}</td>
          <td>{{ row.item.losses }}</td>
          <td>{{ row.item.winPercentage }}</td>
          <td>{{ row.item.goals }}</td>
          <td>{{ row.item.goalsPerGameAverage }}</td>
          <td>{{ row.item.ownGoals }}</td>
          <td>{{ row.item.goals }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
  methods: {
    ...mapActions({
      getMaerskStandings: 'getMaerskStandings'
    })
  },
  computed: {
    ...mapState({
      maerskStandings: 'maerskStandings'
    }),
    isTableLoading() {
      return this.maerskStandings.length >= 0 ? false : true;
    }
  },
  mounted() {
    this.getMaerskStandings();
  }
};
</script>
