<template>
  <v-card>
    <v-card-text>
      <v-card-title>GoalKeeper Form</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.keeper.position" label="Position" value="Keeper" disabled></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.keeper.gamesPlayed" label="Games Played"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.keeper.goalsAgainst" label="Goals Against"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.keeper.wins" label="Wins"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.keeper.cleanSheets" label="Clean Sheets"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'GoalKeeperForm'
};
</script>
