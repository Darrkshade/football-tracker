import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    errors: [],
    standings: []
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
    }
  },
  actions: {
    keepPlayersUpdated({ commit }) {
      commit('KEEP_PLAYERS_UPDATED_LIVE');
    },
    getStandings({ commit }) {
      commit('GET_PREM_LEAGUE_STANDINGS');
    }
  },
  modules: {}
});
