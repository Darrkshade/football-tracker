<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mb-2" v-on="on">Add Player</v-btn>
      </template>

      <v-card>
        <v-card-title class="text-lg-center">What position is the player?</v-card-title>
        <v-tabs>
          <v-tab>GoalKeeper</v-tab>
          <v-tab>Outfield</v-tab>
        </v-tabs>
      </v-card> -->

      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Choose Position</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'DialogCard',
  data() {
    return {
      formTitle: 'Create Player Form',
      dialog: '',
      e1: 1,
      newPlayer: {
        playerName: '',
        keeper: {
          position: 'Keeper',
          gamesPlayed: null,
          goalsAgainst: null,
          wins: null,
          cleanSheets: null
        },
        outfield: {
          position: '',
          ownGoals: null,
          wins: null,
          draws: null,
          losses: null,
          gamesPlayed: null,
          goals: null
        }
      },
      errorMessages: [],
      rules: [v => !!v || 'Field is required!']
    };
  },
  methods: {
    async save() {
      const playerPost = await Axios.post('http://localhost:2000/api/players/create', this.newPlayer);
      console.log(playerPost);
      this.close();
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    checkForInput(input, errorMessage) {
      if (!input && !this.errorMessages.includes(errorMessage)) {
        this.errorMessages.push(errorMessage);
      }
    },
    validateForm() {
      console.log('You submitted a form');
    },
    checkForErrors(value) {
      if (!value) {
        this.errorMessages.push('Please enter a value');
        return true;
      } else {
        this.errorMessage = '';
        return false;
      }
    }
  },
  computed: {
    isError() {
      return this.errorMessages.length >= 1 ? true : false;
    }
  }
};
</script>
