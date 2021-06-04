import { mapGetters } from "vuex";

export const authcomputed = {
  ...mapGetters([
    "loggedin",
    "houseform",
    "userform",
    "historyserviceform",
    "historypaymentform",
    "increasecreditform",
    "username",
    "useremail",
    "simcardform",
    "usernameform",
    "useremailform",
    "carresourcegetter",
    "houseresourcegetter",
    "simresourcegetter"
  ])
};
