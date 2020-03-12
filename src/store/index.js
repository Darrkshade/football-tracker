import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    errors: [],
    standings: [],
    outfieldPlayers: [],
    goalKeepers: [],
    matchHistory: []
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
    async GET_OUTFIELD_TABLE(state) {
      const playerResponse = await axios.get('http://localhost:2000/api/players', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });

      state.outfieldPlayers = playerResponse.data.map(player => {
        return {
          playerName: player.playerName,
          winPercentage: `${parseFloat((player.wins / player.gamesPlayed) * 100).toFixed(2)}%`,
          goalsPerGameAverage: `${parseFloat(player.goals / player.gamesPlayed).toFixed()}`,
          ...player
        };
      });
    },
    async GET_GOALKEEPERS(state) {
      const playerResponse = await axios.get('http://localhost:2000/api/players/goalkeepers', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });

      state.goalKeepers = playerResponse.data.map(player => {
        return {
          ...player,
          playerName: player.playerName,
          goalsAgainstAverage: `${parseFloat(player.goalsAgainst / player.gamesPlayed)}`,
          cleanSheetPercentage: `${parseFloat(player.cleanSheets / player.gamesPlayed) * 100}%`,
          winPercentage: `${parseFloat(player.wins / player.gamesPlayed) * 100}%`
        };
      });
    },
    async GET_RECENT_GAMES(state) {
      const gamesResponse = await axios.get('http://localhost:2000/api/matchhistory', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });

      state.matchHistory = gamesResponse.data.sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));
    }
  },
  actions: {
    getStandings({ commit }) {
      commit('GET_PREM_LEAGUE_STANDINGS');
    },
    outfieldPlayers({ commit }) {
      commit('GET_OUTFIELD_TABLE');
    },
    getGoalkeepers({ commit }) {
      commit('GET_GOALKEEPERS');
    },
    getRecentGames({ commit }) {
      commit('GET_RECENT_GAMES');
    }
  },
  modules: {}
});
