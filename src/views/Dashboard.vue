<template>
  <div class="dashboard">
    <FormInput :inputs="inputs" v-on:submitPlayer="submitPlayer" />
    <v-snackbar class="text-center" :color="playerPost.postStatus" bottom :value="playerPost.showSnackbar" :timeout="0">
      {{ playerPost.statusMessage }}
      <v-btn color="white" text v-on:click="playerPost.showSnackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import Axios from 'axios';
import FormInput from '@/components/FormInput.vue';
export default {
  name: 'Dashboard',
  components: {
    FormInput
  },
  data() {
    return {
      inputs: [
        {
          text: 'Player Name',
          model: 'playerName'
        },
        {
          text: 'Position',
          model: 'position'
        },
        {
          text: 'Games Played',
          model: 'gamesPlayed'
        },
        {
          text: 'Wins',
          model: 'wins'
        },
        {
          text: 'Draws',
          model: 'draws'
        },
        {
          text: 'Losses',
          model: 'losses'
        },
        {
          text: 'Goals',
          model: 'goals'
        },
        {
          text: 'Own Goals',
          model: 'ownGoals'
        }
      ],
      playerPost: {
        postStatus: '',
        showSnackbar: false,
        statusMessage: ''
      }
    };
  },
  methods: {
    async submitPlayer(form) {
      let url;
      if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:2000/api/players/create';
      } else {
        url = 'https://internal-football-app.herokuapp.com/api/players/create';
      }

      const response = await Axios.post(url, form);
      this.playerPost.statusMessage = response.data.message;
      this.playerPost.postStatus = response.data.status;
      this.playerPost.showSnackbar = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
