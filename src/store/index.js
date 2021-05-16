import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
<<<<<<< HEAD
  state: { user: null, housedata: null },
  mutations: {
    SET_USER_DATA(state, userdata) {
=======
  state: {
    user: null,
    house: null
  },
  mutations: {
    SET_DATA_USER(state, userdata) {
>>>>>>> aa7154953424b8617029a0fa638825fc8fc1a86b
      state.user = userdata;
      localStorage.setItem("user", JSON.stringify(userdata));
      axios.defaults.headers.common[
        "Authorization"
<<<<<<< HEAD
      ] = `bearer ${userdata.token}`;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/User/login/", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_USER_DATA", data);
        });
    }
  },
=======
      ] = `Bearer ${userdata.token}`;
    },
    DEL_DATA_USER() {
      localStorage.removeItem("user");
      location.reload();
    },
    SET_HOUSE_DATA(state, datahouse) {
      state.house = datahouse;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/User/profile/", credentials)
        .then(({ data }) => {
          commit("SET_DATA_USER", data);
        });
    },
    logout({ commit }) {
      commit("DEL_DATA_USER");
    },
    senddatahouse({ commit }, housedata) {
      return axios
        .post("http://127.0.0.1:8000/HEstimator/House/", housedata)
        .then(({ data }) => {
          commit("SET_HOUSE_DATA", data);
        });
    }
  },
  getters: {
    loggedin(state) {
      return !!state.user;
    }
  },
>>>>>>> aa7154953424b8617029a0fa638825fc8fc1a86b
  modules: {}
});
