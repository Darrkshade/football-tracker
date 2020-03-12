<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-card-title>Outfield Form</v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="newPlayer.playerName" label="Players name" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4" v-for="(value, key) in newPlayer.outfield" :key="key">
            <v-text-field v-model="newPlayer.outfield[key]" :label="key" :rules="rules"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

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

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="validateForm()">Save</v-btn>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>
