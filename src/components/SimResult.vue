<template style="background: rgba(194, 161, 140, 0.19);">
  <v-card tile style="background: #2D3B47">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-card-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <h2 style="color: white">
                    : قیمت تخمین زده سیم کارت
                  </h2></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title style="text-align: center;">
                  <div class="counter">
                    <i
                      class="fa fa-coffee fa-2x"
                      style="text-align: center;"
                    ></i>
                    <h2
                      class="timer count-title count-number"
                      data-to="1700"
                      data-speed="1500"
                      style="text-align: center; color: white"
                    >
                      {{ formhouseforali.price }}
                      <br />
                      تومان
                    </h2>
                    <p class="count-text "></p>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="color: white">
                شماره همراه :
                {{ formhouseforali.currenthouse.number }}
                متر مربع</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="color: white"
                >نوع : {{ formhouseforali.currenthouse.daemi }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="color: white"
                >نوع روند :
                {{ formhouseforali.currenthouse.rond }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="color: white"
                >وضعیت :
                {{ formhouseforali.currenthouse.stock }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  props: {
    formhouseforali: Object
  },
  data() {
    return {
      price: null
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/HEstimator/House/")
      .then(response => {
        this.price = response.data;
      })
      .catch(error => {
        console.log("there was an error" + error.response);
      });
  }
};
</script>

<style lang="scss" scoped></style>
