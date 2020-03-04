<template>
  <div class="card white--text">
    <h2>{{ player[index].playerName }}</h2>
    <p>Goals: {{ player[index].goals }} <input class="card__input" v-model="updatedPlayer.goals" /></p>
    <p>Own Goals: {{ player[index].ownGoals }} <input class="card__input" v-model="updatedPlayer.ownGoals" /></p>
    <p>Games Played: {{ player[index].gamesPlayed }} <input class="card__input" v-model="updatedPlayer.gamesPlayed" /></p>
    <p>Wins: {{ player[index].wins }} <input class="card__input" v-model="updatedPlayer.wins" /></p>
    <p>Draws: {{ player[index].draws }} <input class="card__input" v-model="updatedPlayer.draws" /></p>
    <p>Losses: {{ player[index].losses }} <input class="card__input" v-model="updatedPlayer.losses" /></p>
    <v-btn v-on:click="updatePlayer">Submit Update</v-btn>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Array,
    index: Number
  },
  data() {
    return {
      updatedPlayer: {
        goals: 0,
        ownGoals: 0,
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0
      }
    };
  },
  methods: {
    updatePlayer() {
      this.$emit('updatePlayer', { playerStats: this.updatedPlayer, playerName: this.player[this.index].playerName });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 8px;
  box-shadow: 0 0 4px #cecece;
  color: black;
  max-width: 400px;
  text-align: center;

  &__input {
    color: black;
    background: white;
    width: 50px;
    float: right;
  }
}
</style>
