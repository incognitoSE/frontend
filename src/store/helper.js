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
    "increasemoney",
    "ismonyform",
    "carresourcegetter",
    "houseresourcegetter",
    "simresourcegetter"
  ])
};
