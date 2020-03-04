<template>
  <v-form>
    <v-container>
      <v-row align="center" justify="center" v-for="input in inputs" :key="input.text">
        <v-col cols="auto" sm="auto" md="3">
          <v-text-field required :label="input.text" outlined clearable v-model="formData[input.model]"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="text-center" col="12" sm="6" md="3">
          <v-btn class="primary" :ripple="true" large v-on:click="$emit('submitPlayer', formData)">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'NewPlayerForm',
  props: {
    inputs: Array
  },
  data() {
    return {
      formData: {
        playerName: '',
        gamesPlayed: null,
        wins: null,
        position: '',
        goals: null
      }
    };
  }
};
</script>
