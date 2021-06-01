import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    house: null,
    simcard: null,
    car: null
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
    SET_SIMCARD_DATA(state, simcarddata) {
      state.simcard = simcarddata;
    },
    SET_CAR_DATA(state, cardata) {
      state.car = cardata;
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
    senddatasimcard({ commit }, simcarddata) {
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .post("http://127.0.0.1:8000/HEstimator/simcard/", simcarddata, {
          //check url
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(({ data }) => {
          commit("SET_SIMCARD_DATA", data);
          console.log(data);
        });
    },
    senddatacar({ commit }, cardata) {
      console.log("im in send data car");
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .post("http://127.0.0.1:8000/CEstimator/Car/", cardata, {
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(({ data }) => {
          console.log("im in then of send data car");
          commit("SET_CAR_DATA", data);
          console.log(data);
          console.log(data.cars);
        });
    },
    refreshtoken({ commit }) {
      console.log("im in refreshtoken");
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
    },
    carform(state) {
      return state.car;
    },
    simcardform(state) {
      return state.simcard;
    }
  },
  modules: {}
});
