<template>
  <div>
    <v-data-table :headers="headers" :items-per-page="20" :items="premStandings">
      <template v-slot:item.team.crestUrl="{ item }">
        <div>
          <v-img :src="item.team.crestUrl" height="25px" width="25px"></v-img>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'PremLeague',
  data() {
    return {
      headers: [
        {
          value: 'team.crestUrl'
        },
        {
          text: 'Position',
          sortable: 'true',
          value: 'position'
        },
        {
          text: 'Team',
          sortable: true,
          value: 'team.name'
        },
        {
          text: 'Points',
          sortable: true,
          value: 'points'
        },
        {
          text: 'Games Played',
          sortable: true,
          value: 'playedGames'
        },
        {
          text: 'Wins',
          sortable: true,
          value: 'won'
        },
        {
          text: 'Losses',
          sortable: true,
          value: 'lost'
        }
      ]
    };
  },
  mounted() {
    this.getPremStandings();
  },
  methods: {
    ...mapActions({
      getPremStandings: 'getStandings'
    })
  },
  computed: {
    ...mapState({
      premStandings: 'standings'
    })
  }
};
</script>
