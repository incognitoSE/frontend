<template>
  <v-row align="center" justify="center" style="height:100vh" dense>
    <v-col
      class=" lighten-2 fill-height d-flex flex-column justify-center align-center"
    >
      <v-card style="width:95%; height:100%; right:6%">
        <v-container>
          <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
          >
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
                <v-badge color="red" overlap bordered>
                  <template v-slot:badge>
                    <span>{{ notifications.length }}</span>
                  </template>

                  <v-icon>mdi-bell</v-icon>
                </v-badge>
              </v-btn>
            </template>

            <v-list :tile="false" nav>
              <div>
                <app-bar-item
                  v-for="(n, i) in notifications"
                  :key="`item-${i}`"
                >
                  <v-list-item-title
                    v-text="
                      n.text +
                        '   ' +
                        '   ' +
                        '   ' +
                        '   ' +
                        '   ' +
                        '   ' +
                        n.date
                    "
                  />
                </app-bar-item>
              </div>
            </v-list>
          </v-menu>
          <br />
          <br />

          <v-card class="mx-auto" elevation="2" max-width="700" outlined shaped>
            <v-list-item three-line>
              <v-list-item-content>
                <div
                  class="text-overline mb-4"
                  style="  text-align: right;
"
                >
                  <h1>!کاربر {{ username }} به رابین خوش آمدید</h1>
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  <p>
                    در این قسمت شما امکان دیدن اطلاعات کاربری خود می‌باشید
                    همچنین قابلیت تغییر رمز را دارا می‌باشید
                    <br />
                    مجموعه رابین برای شما ارزوی موفقیت میکند
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-spacer></v-spacer>
          <br />

          <v-card-title class="justify-center"
            ><h1>اطلاعات کاربری</h1></v-card-title
          >
          <v-form>
            <v-container>
              <v-row>
                <v-col></v-col>
                <v-col cols="12" sm="6">
                  <p
                    label="نام کاربری"
                    filled
                    shaped
                    class="centered-input"
                    reverse
                    readonly
                  >
                    {{ username }}&nbsp;&nbsp;&nbsp;:نام کاربری
                  </p>
                </v-col>
                <v-col></v-col>
              </v-row>
              <v-row>
                <v-col></v-col>
                <v-col cols="12" sm="6">
                  <p
                    label="ایمیل"
                    filled
                    shaped
                    class="centered-input"
                    reverse
                    readonly
                  >
                    {{ email }}&nbsp;&nbsp;&nbsp;:ایمیل
                  </p>
                </v-col>
                <v-col></v-col>
              </v-row>
              <v-row>
                <v-col></v-col>
                <v-col cols="12" sm="6">
                  <v-form ref="singupform" v-model="formvalidi">
                    <v-text-field
                      v-model="formDatasingup.password"
                      label=" رمز عبور جدید"
                      filled
                      shaped
                      class="centered-input"
                      reverse
                      :type="showpassword ? 'text' : 'password'"
                      required
                      prepend-inner-icon="mdi-lock"
                      :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showpassword = !showpassword"
                      solo
                      :rules="[passwordrules.required, passwordrules.password]"
                    ></v-text-field>
                    <div class="text-center">
                      <v-btn
                        color="primary"
                        @click="change"
                        :disabled="!formvalidi"
                        type="submit"
                      >
                        تغییر رمز عبور
                      </v-btn>

                      <v-snackbar
                        color="green"
                        v-model="snackbar"
                        :timeout="timeout"
                      >
                        {{ text }}

                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="white"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                            بستن
                          </v-btn>
                        </template>
                      </v-snackbar>
                    </div>
                  </v-form>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>

            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
          <v-row
            ><div><br /></div
          ></v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { authcomputed } from "../store/helper.js";
import axios from "axios";
export default {
  computed: { ...authcomputed },
  data() {
    return {
      username: "ali",
      email: "alimahvash@yahoo.ca",
      formDatasingup: {
        password: ""
      },
      formvalidi: false,
      showpassword: false,
      snackbar: false,
      text: "رمز با موفقیت تغییر پیدا کرد",
      timeout: 2000,
      notifications: [],

      passwordrules: {
        required: value =>
          !!value ||
          "در صورت تمایل به تغییر رمز لطفا رمز جدید خود را وارد کنید",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "رمز شما باید حداقل 8 حرف با حداقل یک حرف بزرگ ، یک عدد و یک کاراکتر خاص باشد"
          );
        }
      }
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/User/notifications/").then(response => {
      this.notifications = response.data;
    });
    this.$store
      .dispatch("increasecredit")
      .then(() => {
        this.money = this.increasecreditform.current_amount;
      })
      .catch(error => {
        console.log("there was an error" + error.response);
      });
  },
  methods: {
    change() {
      /*  axios
        .post("http://127.0.0.1:8000/User/changepassword/", {
          email: this.email
        })
        .then(response => {
          console.log(response.data);
        });*/
      console.log(this.useremailform);
      this.$store
        .dispatch("changepassworld", {
          email: this.useremailform
        })
        .then(() => {
          this.snackbar = true;
        })
        .catch(err => {
          console.log(err.response);
          if (err.response.status === 401 && this.loggedin) {
            this.$store
              .dispatch("refreshtoken")
              .then(() => {
                console.log("yes it ok");
                this.$store
                  .dispatch("changepassworld", {
                    email: this.useremailform
                  })
                  .then(() => {
                    console.log("yes im done");
                    this.snackbar = true;
                  })
                  .catch(errrr => console.log(errrr.response));
              })
              .catch(er => {
                console.log(er);
                this.$store.dispatch("logout");
                this.$router.push({ name: "Home" });
              });
          }
        });
    }
  }
};

/* onsubmitinfsingup(event) {
      event.preventDefault();
      if (this.$refs.singupform.validate()) {
        this.$store
          .dispatch("register", {
            name: this.formDatasingup.name,
            email: this.formDatasingup.email,
            password: this.formDatasingup.password
          })
          .then(() => {
            console.log("im in then");
            this.succ = ".ثبت نام با موفقیت انجام شد";
          })
          .catch(error => {
            console.log(error.response);
            console.log("im in err");
            this.errors = "  کاربری با این ایمیل وجود دارد";
          });
        this.formDatasingup.name = "";
        this.formDatasingup.email = "";
        this.formDatasingup.password = "";
        this.errors = "";
        this.succ = "";
        this.$refs.singupform.resetValidation();
      }
    },
    onclosesingup() {
      this.dialog = false;
      this.formDatasingup.name = "";
      this.formDatasingup.email = "";
      this.formDatasingup.password = "";
      this.errors = "";
      this.succ = "";
      this.$refs.singupform.resetValidation();
    }
  }
};*/
</script>

<style scoped>
.centered-input >>> input {
  text-align: right;
}

@font-face {
  font-family: IRANSans;
  src: url("../../public/fonts/BYekan.ttf");
}
* {
  font-family: IRANSans;
  color: #2d3b47;
}
</style>
