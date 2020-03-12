<template>
  <div>
    <v-container>
      <v-form>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <h2 class="text-center">Which Player Do You Want To Update?</h2>
            <v-text-field v-model="playerName" style="width: 50%" placeholder="Enter players full name..."></v-text-field>
            <v-btn v-on:click="findPlayer(playerName)">Find Player</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex flex-row flex-wrap">
        <PlayerCard :player="foundPlayers" v-for="(player, key) in foundPlayers" :key="key" :index="key" v-show="foundPlayers.length > 0" v-on:updatePlayer="sendUpdatedPlayer" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Axios from 'axios';
import PlayerCard from '@/components/PlayerCard.vue';
import { mapActions } from 'vuex';
export default {
  name: 'UpdatePlayerForm',
  components: {
    PlayerCard
  },
  data() {
    return {
      playerName: '',
      foundPlayers: []
    };
  },
  methods: {
    async findPlayer(player) {
      const fetchedPlayer = await Axios.get(`http://localhost:2000/api/players/${player}`);

      this.foundPlayers = fetchedPlayer.data;
    },
    async sendUpdatedPlayer({ playerStats, playerName }) {
      await Axios.patch(`http://localhost:2000/api/players/update/${playerName}`, { ...playerStats });

      await this.getMaerskStandings();
      await this.findPlayer(playerName);
    },
    ...mapActions({
      getMaerskStandings: 'getMaerskStandings'
    })
  }
};
</script>
