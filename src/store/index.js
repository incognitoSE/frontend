import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    house: null
  },
  mutations: {
    SET_DATA_USER(state, userdata) {
      state.user = userdata;
      localStorage.setItem("user", JSON.stringify(userdata));
      localStorage.setItem("token", JSON.stringify(userdata.access));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userdata.access}`;
    },
    DEL_DATA_USER() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
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
          console.log(data);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/User/login/", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_DATA_USER", data);
        });
    },
    logout({ commit }) {
      commit("DEL_DATA_USER");
    },
    senddatahouse({ commit }, housedata) {
      const mytoken = JSON.parse(localStorage.getItem("token"));
      return axios
        .post("http://127.0.0.1:8000/HEstimator/House/", housedata, {
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(({ data }) => {
          commit("SET_HOUSE_DATA", data);
          console.log(data);
        });
    }
  },
  getters: {
    loggedin(state) {
      return !!state.user;
    },
    houseform(state) {
      return state.house;
    }
  },
  modules: {}
});
