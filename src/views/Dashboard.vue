<template>
  <div class="dashboard">
    <FormInput :inputs="inputs" v-on:submitPlayer="submitPlayer" />
    <v-snackbar class="text-center" :color="playerPost.postStatus" bottom :value="playerPost.showSnackbar">{{ playerPost.statusMessage }}</v-snackbar>
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
          text: 'Games Played',
          model: 'gamesPlayed'
        },
        {
          text: 'Wins',
          model: 'wins'
        },
        {
          text: 'Position',
          model: 'position'
        },
        {
          text: 'Goals',
          model: 'goals'
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
      const postResponse = await Axios.post('http://localhost:2000/api/players/create', form);
      console.log(postResponse);
      if (postResponse.status === 200) {
        this.playerPost.postStatus = 'success';
        this.playerPost.showSnackbar = true;
        this.playerPost.statusMessage = 'Successfully create a new player!';
      } else if (postResponse.status === 404) {
        this.playerPost.postStatus = 'error';
        this.playerPost.showSnackbar = true;
        this.playerPost.statusMessage = 'Something went wrong, please try again';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
