import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: { user: null, housedata: null },
  mutations: {
    SET_USER_DATA(state, userdata) {
      state.user = userdata;
      localStorage.setItem("user", JSON.stringify(userdata));
      axios.defaults.headers.common[
        "Authorization"
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
  modules: {}
});
