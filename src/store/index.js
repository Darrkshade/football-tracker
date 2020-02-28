import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    errors: [],
    standings: [],
    maerskStandings: []
  },
  mutations: {
    async GET_PREM_LEAGUE_STANDINGS(state) {
      axios
        .get('https://api.football-data.org/v2/competitions/PL/standings', {
          headers: {
            'X-Auth-Token': 'c322b17b74664e1fa81906708faa8238'
          }
        })
        .then(async data => {
          const standings = data.data.standings.filter(standing => {
            if (standing.type === 'TOTAL') {
              return standing;
            }
          });
          state.standings = standings[0].table;
        })
        .catch(e => {
          state.errors = e;
        });
    },
    async GET_MAERSK_PLAYERS(state) {
      const playerResponse = await axios.get('https://internal-football-app.herokuapp.com/api/players', {
        headers: {
          'Access-Contr-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });

      state.maerskStandings = playerResponse.data.map(player => {
        return {
          ...player,
          winPercentage: `${parseFloat((player.wins / player.gamesPlayed) * 100).toFixed(2)}%`,
          goalsPerGameAverage: `${parseFloat(player.goals / player.gamesPlayed).toFixed()}`
        };
      });
    }
  },
  actions: {
    getStandings({ commit }) {
      commit('GET_PREM_LEAGUE_STANDINGS');
    },
    getMaerskStandings({ commit }) {
      commit('GET_MAERSK_PLAYERS');
    }
  },
  modules: {}
});
