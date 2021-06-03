import { mapGetters } from "vuex";

export const authcomputed = {
  ...mapGetters([
    "loggedin",
    "houseform",
    "userform",
    "historyserviceform",
    "historypaymentform",
    "increasecreditform"
  ])
};
