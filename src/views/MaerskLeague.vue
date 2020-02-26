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
          text: 'Games Played',
          value: 'gamesPlayed'
        },
        {
          text: 'Wins',
          value: 'wins'
        },
        {
          text: 'Goals',
          value: 'goals'
        },
        {
          text: 'Position',
          value: 'position'
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
