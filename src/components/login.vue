<template>
  <div>
    <v-dialog max-width="600px" v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          small
          text
          style="color: #ffffff"
          v-bind="attrs"
          v-on="on"
        >
          ورود
        </v-btn>
      </template>
      <v-form @submit="submitinfo" ref="userinfo" v-model="formvalidi">
        <v-container style="background-color:#c4c4c4">
          <v-card>
            <v-card-title class="justify-center">
              <h1>ورود</h1>
            </v-card-title>
            <v-card-text>
              <v-container style="background-color:#ffffff">
                <v-row>
                  <v-col cols="12">
                    <v-form
                      @submit="submitinfo"
                      ref="userinfo"
                      v-model="formemail"
                    >
                      <v-text-field
                        solo
                        style="padding:20px"
                        color="#2d3b47"
                        placeholder=" ایمیل"
                        type="email"
                        reverse
                        prepend-inner-icon="mdi-email"
                        v-model="logininfo.email"
                        :rules="emailRules"
                        required
                      >
                      </v-text-field>
                    </v-form>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      solo
                      placeholder="رمز عبور"
                      style="padding:20px"
                      color="#2d3b47"
                      label=" رمز عبور"
                      reverse
                      prepend-inner-icon="mdi-lock"
                      :append-icon="passfield ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="passfield ? 'text' : 'password'"
                      v-model="logininfo.password"
                      :rules="passrules"
                      @click:append="passfield = !passfield"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <div v-if="errors.length != 0">
              <v-alert dense outlined type="error">
                .ایمیل/رمزعبور شما اشتباه است یا قبلا ثبت نام نکرده اید</v-alert
              >
            </div>
            <div v-if="success.length != 0">
              <v-alert dense outlined type="success"> {{ success }}</v-alert>
            </div>
            <v-divider></v-divider>
            <v-card-actions>
              <!-- <v-btn
                type="submit"
                large
                style="color: #ffffff ; background-color : #2d3b47;"
              >
                فراموشی رمز
              </v-btn> -->
              <v-btn
                large
                style="color: #ffffff ; background-color : #2d3b47;"
                @click="sendemail, (snackbar = true)"
              
                href="http://127.0.0.1:8000/User/password_reset/"
                target="_blank"
              >
                فراموشی رمز
              </v-btn>
              <!-- <v-snackbar v-model="snackbar" color="green">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar> -->
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                large
                style="color: #ffffff ; background-color : #2d3b47"
                :disabled="!formvalidi"
              >
                ورود
              </v-btn>
              <v-btn
                large
                style="color: #ffffff ; background-color : #2d3b47"
                @click="closelogin"
              >
                بستن
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      snackbar: false,
      text: `ایمیل خود را در لینک باز شده وارد کنید`,
      formvalidi: false,
      formemail: false,
      passfield: false,
      dialog: false,
      errors: "",
      success: "",
      logininfo: {
        email: "",
        password: ""
      },
      emailRules: [
        value => !!value || "لطفا ایمیل خود را وارد کنید",
        value =>
          value.indexOf("@") !== 0 ||
          "ایمیل شما باید حاوی یک نام کاربری معتبر باشد",
        value => value.includes("@") || "ایمیل شما باید شامل @ باشد",
        value =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "ایمیل شما باید حاوی یک دامنه معتبر باشد",
        value =>
          value.indexOf(".") <= value.length - 3 ||
          "  ..., com ایمیل شما باید حاوی یک پسوند دامنه معتبر باشد مثلا "
      ],
      passrules: [
        value => !!value || "پسورد خود را وارد کنید",
        value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "رمز شما باید حداقل 8 حرف با حداقل یک حرف بزرگ ، یک عدد و یک کاراکتر خاص باشد"
          );
        }
      ]
    };
  },
  methods: {
    sendemail() {
      axios
        .post("http://127.0.0.1:8000/User/password_reset/", {
          email: this.logininfo.email
        })
        .then(response => {
          console.log(response.data);
        });
    },
    submitinfo(e) {
      console.log("this is login");
      console.log(this.emailRules);
      e.preventDefault();
      if (this.$refs.userinfo.validate()) {
        this.$store
          .dispatch("login", {
            email: this.logininfo.email,
            password: this.logininfo.password
          })
          .then(() => {
            console.log("im in then");
            this.success = ".با موفقیت وارد شدید";
          })
          .catch(error => {
            console.log("im in err");
            console.log(error.response);
            this.errors = ".ایمیل/پسورداشتباه است یا قبلا ثبت نام نکرده اید";
          });
        this.$store.commit("SAVE_EMAIL", this.logininfo.email);
        this.logininfo.email = "";
        this.logininfo.password = "";
        this.errors = "";
        this.success = "";
        this.$refs.userinfo.resetValidation();
      }
    },
    closelogin() {
      this.dialog = false;
      this.logininfo.email = "";
      this.logininfo.password = "";
      this.errors = "";
      this.success = "";
      this.$refs.userinfo.resetValidation();
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: IRANSans;
  src: url("../../public/fonts/BYekan.ttf");
}
* {
  font-family: IRANSans;
  color: #2d3b47;
}
</style>
