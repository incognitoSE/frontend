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
                  <h1>!کاربر علی ماهوش به رابین خوش آمدید</h1>
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
                  <v-text-field
                    v-model="username"
                    label="نام کاربری"
                    filled
                    shaped
                    class="centered-input"
                    reverse
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col></v-col>
              </v-row>
              <v-row>
                <v-col></v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    label="ایمیل"
                    filled
                    shaped
                    class="centered-input"
                    reverse
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col></v-col>
              </v-row>
              <v-row>
                <v-col></v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password"
                    label=" رمز عبور جدید"
                    filled
                    shaped
                    class="centered-input"
                    reverse
                  ></v-text-field>
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

            <div class="text-center">
              <v-btn color="primary" @click="increment4, (snackbar = true)">
                تغییر رمز عبور
              </v-btn>

              <v-snackbar color="green" v-model="snackbar" :timeout="timeout">
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
      snackbar: false,
      text: "رمز با موفقیت تغییر پیدا کرد",
      timeout: 2000,
      notifications: [
        // "Mike John Responded to your email",
        // "You have 5 new tasks",
        // "You're now friends with Andrew",
        // "Another Notification"
      ],
      username: "alimahvash",
      email: "alimahvashm@yahoo.ca",
      password: ""
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
      axios
        .post("http://127.0.0.1:8000/User/changepassword/", this.password)
        .then(console.log(this.password));
    }
  }
};
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
