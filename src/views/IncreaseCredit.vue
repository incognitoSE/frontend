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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <v-card-title primary-title class="justify-center"
            ><h1>افزایش اعتبار</h1></v-card-title
          >
          <v-spacer></v-spacer>
          <br />

          <v-card-subtitle style="text-align:center;">
            :اعتبار فعلی شما
          </v-card-subtitle>
          <h2 style="text-align:center;"></h2>
          <h2 style="text-align:center;">مقدار {{ money }} تومان</h2>
          <br />
          <br />

          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col> </v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col
              ><v-btn
                style="background-color: #2d3b47; color:white;"
                dark
                @click="increment"
                >5,000</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                style="background-color: #2d3b47;  color:white;"
                @click="increment1"
                >10,000</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                style="background-color: #2d3b47; color:white;"
                @click="increment2"
                >20,000</v-btn
              ></v-col
            >

            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-text-field
              value="1000"
              prefix="تومان"
              v-model="value"
              type="number"
              :rules="[numberRule]"
            ></v-text-field>

            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-btn color="success" @click="increment4">افزایش اعتبار</v-btn>
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
      notifications: [
        // "Mike John Responded to your email",
        // "You have 5 new tasks",
        // "You're now friends with Andrew",
        // "Another Notification"
      ],
      value: 1000,
      money: 0,
      amount: 0,

      numberRule: val => {
        if (val < 0) return "عدد مثبت وارد کنید";
        return true;
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
    increment() {
      this.value = 5000;
    },
    increment1() {
      this.value = 10000;
    },
    increment2() {
      this.value = 20000;
    },
    increment4() {
      this.money = parseInt(this.money) + parseInt(this.value);
      this.amount = parseInt(this.value);
      this.$store
        .dispatch("usercredit", { amount: this.amount })
        .then(() => console.log("yess money"));
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
