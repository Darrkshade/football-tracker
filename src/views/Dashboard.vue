<template>
  <div class="dashboard">
    <ul class="dashboard__tabs">
      <v-btn class="dashboard__tabs--tab" v-for="tab in tabs" :key="tab.key" v-on:click="changeCurrentTab(tab)">{{ tab.title }}</v-btn>
    </ul>

    <div class="dashboard--active-tab">
      <NewPlayerForm v-show="currentTab === 0" :inputs="inputs" />
      <UpdatePlayerForm v-show="currentTab === 1"></UpdatePlayerForm>
      <h3 v-show="currentTab === 2">Hello Third Tab</h3>
    </div>

    <v-snackbar class="text-center" :color="playerPost.postStatus" bottom :value="playerPost.showSnackbar" :timeout="0">
      {{ playerPost.statusMessage }}
      <v-btn color="white" text v-on:click="playerPost.showSnackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { NewPlayerForm, UpdatePlayerForm } from '../components.js';
import Axios from 'axios';
export default {
  name: 'Dashboard',
  components: {
    NewPlayerForm,
    UpdatePlayerForm
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          key: 0,
          title: 'New Player Form'
        },
        {
          key: 1,
          title: 'Update Player'
        }
      ],
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
    changeCurrentTab(tab) {
      this.currentTab = tab.key;
    },
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
  &__tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &--tab {
      margin-top: 12px;
      padding: 24px;
    }
  }

  &--active-tab {
    margin: 0 auto;
  }
}

li {
  list-style-type: none;
}
</style>
