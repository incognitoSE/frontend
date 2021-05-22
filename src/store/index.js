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
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userdata.access}`;
    },
    DEL_DATA_USER() {
      localStorage.removeItem("user");
      location.reload();
    },
    SET_HOUSE_DATA(state, datahouse) {
      state.house = datahouse;
    },
    SET_NEW_TOKENS(state, newuserdata) {
      localStorage.removeItem("user");
      state.user = newuserdata;
      localStorage.setItem("user", JSON.stringify(newuserdata));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newuserdata.access}`;
    }
  },

  actions: {
    login({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/User/login/", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_DATA_USER", data);
        });
    },
    register({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/User/profile/", credentials)
        .then(({ data }) => {
          console.log(data);
          commit("SET_DATA_USER", data);
          console.log(data);
        });
    },
    logout({ commit }) {
      commit("DEL_DATA_USER");
    },
    senddatahouse({ commit }, housedata) {
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
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
    },
    refreshtoken({ commit }) {
      const myrefreshtoken = JSON.parse(localStorage.getItem("user")).refresh;
      return axios
        .post("http://127.0.0.1:8000/User/refresh/", {
          refresh: myrefreshtoken
        })
        .then(({ data }) => {
          commit("SET_NEW_TOKENS", data);

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
