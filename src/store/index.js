import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    email: null,
    house: null,
    simcard: null,
    car: null,
    houseresource: null,
    carresource: null,
    simresource: null,
    historyofservices: null,
    historyofpayment: null,
    increaseofcredit: null,
    username: null,
    useremail: null
  },
  mutations: {
    SET_HOUSE_RESOURCES(state, houseresourcedata) {
      state.houseresource = houseresourcedata;
    },
    SET_DATA_USER(state, userdata) {
      console.log(userdata);
      state.user = userdata;
      state.username = userdata.name;
      state.useremail = userdata.email;
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
    },
    SET_HISTORY_SERVICE(state, historyservice) {
      state.historyofservices = historyservice;
    },
    SET_HISTORY_PAYMENT(state, historypayment) {
      state.historyofpayment = historypayment;
    },
    SET_INCREASE_CREDIT(state, creditdata) {
      state.increaseofcredit = creditdata;
    },
    SAVE_EMAIL(state, credentioal) {
      state.email = credentioal;
      console.log("im in saveemail");
      console.log(state.email);
    },

    SET_CAR_RESOURCES(state, carresurse) {
      state.carresource = carresurse;
    },
    SET_SIM_RESOURCES(state, simresurse) {
      state.simresource = simresurse;
    }
  },

  actions: {
    gethouseresource({ commit }) {
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/HEstimator/House/", {
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(({ data }) => {
          commit("SET_HOUSE_RESOURCES", data);
        });
    },
    getcarresource({ commit }) {
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/CEstimator/Car/", {
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(({ data }) => {
          commit("SET_CAR_RESOURCES", data);
        });
    },
    getsimresource({ commit }) {
      const mytoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/SEstimator/Simcard/", {
          headers: {
            Authorization: `Bearer ${mytoken}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(({ data }) => {
          commit("SET_SIM_RESOURCES", data);
        });
    },
    login({ commit }, credentials) {
      console.log(credentials);
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
        .post("http://127.0.0.1:8000/SEstimator/Simcard/", simcarddata, {
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
    },
    historyofservices({ commit }) {
      const myaccesstoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/User/userhistory/", {
          headers: {
            Authorization: `Bearer ${myaccesstoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(({ data }) => {
          console.log(data);
          commit("SET_HISTORY_SERVICE", data);
        });
    },
    historyofpayment({ commit }) {
      const myaccesstoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/User/usertransactions/", {
          headers: {
            Authorization: `Bearer ${myaccesstoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(({ data }) => {
          console.log(data);
          commit("SET_HISTORY_PAYMENT", data);
        });
    },
    increasecredit({ commit }) {
      const myaccesstoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .get("http://127.0.0.1:8000/User/userwallet/", {
          headers: {
            Authorization: `Bearer ${myaccesstoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(({ data }) => {
          console.log(data);
          commit("SET_INCREASE_CREDIT", data);
        });
    },
    usercredit(useramount) {
      const myaccesstoken = JSON.parse(localStorage.getItem("user")).access;
      return axios
        .post("http://127.0.0.1:8000/User/userwallet/", useramount, {
          headers: {
            Authorization: `Bearer ${myaccesstoken}`,
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
        .then(data => {
          console.log(data);
        });
    }
  },
  getters: {
    houseresourcegetter(state) {
      return state.houseresource;
    },
    carresourcegetter(state) {
      return state.carresource;
    },
    simresourcegetter(state) {
      return state.simresource;
    },
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
    },
    usernameform(state) {
      return state.username;
    },
    useremailform(state) {
      return state.useremail;
    },
    userform(state) {
      return state.user;
    },
    historyserviceform(state) {
      return state.historyofservices;
    },
    historypaymentform(state) {
      return state.historyofpayment;
    },
    increasecreditform(state) {
      return state.increaseofcredit;
    },
    getemail(state) {
      return state.email;
    }
  },
  modules: {}
});
