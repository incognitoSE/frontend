<template>
  <div>
    <v-row v-for="(item, index) in items" :key="index" dense no-gutters>
      <v-col cols="12">
        <v-card :color="item.color" tile>
          <div v-if="item.id !== 2 && item.id !== 3">
            <div class="d-flex align-center">
              <v-spacer></v-spacer>
              <v-col cols="6">
                <div>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <h1
                      v-html="item.title"
                      style="color: rgba(255, 255, 255, 1)"
                    ></h1>
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <div>
                    <h3
                      style="color: rgba(255, 255, 255, 1)"
                      v-html="item.text"
                    ></h3>
                  </div>
                </div>
                <div>
                  <v-card-actions>
                    <v-btn
                      v-if="!loggedin"
                      class=" mt-8 mr-10"
                      style="color: rgba(255, 255, 255, 1)"
                      block
                      large
                      outlined
                      elevation="17"
                      @click="SnackbarShow('warning')"
                    >
                      <h3 style="color: rgba(255, 255, 255, 1)">
                        استفاده از سرویس
                      </h3>
                    </v-btn>

                    <v-snackbar
                      v-if="!loggedin"
                      v-model="snackbar1.visible"
                      auto-height
                      :color="snackbar1.color"
                      :multi-line="snackbar1.mode === 'multi-line'"
                      :timeout="snackbar1.timeout"
                    >
                      <v-layout align-center pr-4>
                        <v-icon
                          class="pl-3"
                          large
                          dark
                          color="rgba(45, 59, 71, 1)"
                          >{{ snackbar1.icon }}</v-icon
                        >
                        <v-layout column>
                          <div>
                            <strong>{{ snackbar1.title }}</strong>
                          </div>
                          <div>{{ snackbar1.text }}</div>
                        </v-layout></v-layout
                      >
                    </v-snackbar>
                    <v-btn
                      v-if="loggedin"
                      class=" mt-8 mr-10"
                      style="color: rgba(255, 255, 255, 1)"
                      block
                      large
                      outlined
                      elevation="17"
                      :to="{ name: 'servicehouse' }"
                    >
                      <h3 style="color: rgba(255, 255, 255, 1)">
                        استفاده از سرویس
                      </h3>
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-col>
              <v-col cols="5">
                <v-avatar class="modal-dialog  ml-6 my-3" size="cover" tile>
                  <v-img :src="item.src"> </v-img>
                </v-avatar>
              </v-col>
            </div>
          </div>
          <div v-if="item.id !== 2 && item.id !== 1">
            <div class="d-flex align-center">
              <v-spacer></v-spacer>
              <v-col cols="6">
                <div>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <h1
                      v-html="item.title"
                      style="color: rgba(255, 255, 255, 1)"
                    ></h1>
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <div>
                    <h3
                      style="color: rgba(255, 255, 255, 1)"
                      v-html="item.text"
                    ></h3>
                  </div>
                </div>
                <div>
                  <v-card-actions>
                    <v-btn
                      v-if="!loggedin"
                      class=" mt-8 mr-10"
                      style="color: rgba(255, 255, 255, 1)"
                      block
                      large
                      outlined
                      elevation="17"
                      @click="SnackbarShow('warning')"
                    >
                      <h3 style="color: rgba(255, 255, 255, 1)">
                        استفاده از سرویس
                      </h3>
                    </v-btn>
                    <v-snackbar
                      v-if="!loggedin"
                      v-model="snackbar1.visible"
                      auto-height
                      :color="snackbar1.color"
                      :multi-line="snackbar1.mode === 'multi-line'"
                      :timeout="snackbar1.timeout"
                    >
                      <v-layout align-center pr-4>
                        <v-icon
                          class="pl-3"
                          dark
                          large
                          color="rgba(45, 59, 71, 1)"
                          >{{ snackbar1.icon }}</v-icon
                        >
                        <v-layout column>
                          <div>
                            <strong>{{ snackbar1.title }}</strong>
                          </div>
                          <div>{{ snackbar1.text }}</div>
                        </v-layout>
                      </v-layout>
                    </v-snackbar>
                    <v-btn
                      v-else
                      class=" mt-8 mr-10"
                      style="color: rgba(255, 255, 255, 1)"
                      block
                      large
                      outlined
                      elevation="17"
                      :to="{ name: 'ServiceSim' }"
                    >
                      <h3 style="color: rgba(255, 255, 255, 1)">
                        استفاده از سرویس
                      </h3>
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-col>
              <v-col cols="5">
                <v-avatar class="modal-dialog  ml-6 my-3" size="cover" tile>
                  <v-img :src="item.src"> </v-img>
                </v-avatar>
              </v-col>
            </div>
          </div>
          <div v-if="item.id != 1 && item.id != 3" class="d-flex">
            <v-col cols="5">
              <v-avatar class="modal-dialog-car my-3 mr-6" size="cover" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="6">
              <div>
                <v-card-title class="mt-6" style="color: rgba(45, 59, 71, 1)">
                  <v-spacer></v-spacer>
                  <h1 v-html="item.title"></h1>
                  <v-spacer></v-spacer>
                </v-card-title>
                <div>
                  <h3
                    v-html="item.text"
                    style="color: rgba(45, 59, 71, 1)"
                  ></h3>
                </div>
              </div>
              <v-card-actions>
                <v-btn
                  v-if="!loggedin"
                  class=" mt-8 mr-10"
                  style="color:  rgba(45, 59, 71, 1)"
                  block
                  large
                  outlined
                  elevation="17"
                  @click="SnackbarShow('warning')"
                >
                  <h3 style="color:  rgba(45, 59, 71, 1)">
                    استفاده از سرویس
                  </h3>
                </v-btn>
                <v-snackbar
                  v-if="!loggedin"
                  v-model="snackbar1.visible"
                  auto-height
                  :color="snackbar1.color"
                  :multi-line="snackbar1.mode === 'multi-line'"
                  :timeout="snackbar1.timeout"
                >
                  <v-layout align-center pr-4>
                    <v-icon
                      class="pl-3"
                      dark
                      large
                      color="rgba(45, 59, 71, 1)"
                      >{{ snackbar1.icon }}</v-icon
                    >
                    <v-layout column>
                      <div>
                        <strong>{{ snackbar1.title }}</strong>
                      </div>
                      <div>{{ snackbar1.text }}</div>
                    </v-layout>
                  </v-layout>
                </v-snackbar>
                <v-btn
                  v-else
                  class=" mt-8 mr-10"
                  style="color:  rgba(45, 59, 71, 1)"
                  block
                  large
                  outlined
                  elevation="17"
                  :to="{ name: 'ServiceCar' }"
                >
                  <h3 style="color:  rgba(45, 59, 71, 1)">
                    استفاده از سرویس
                  </h3>
                </v-btn>
              </v-card-actions>
            </v-col>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { authcomputed } from "../store/helper.js";
export default {
  computed: { ...authcomputed },
  data() {
    return {
      snackbar1: {
        color: null,
        icon: null,
        mode: null,
        text: null,
        timeout: 3000,
        title: null,
        visible: false
      },

      timeout: 3000,
      text: `.شما اول  باید ثبت نام/ورود کنید`,
      items: [
        {
          id: 1,
          title: "سرویس خانه",
          color: "rgba(45, 59, 71, 1)",
          src: require("../assets/houseicon.png"),
          text:
            " سرویس تخمین قیمت خانه به این صورت است که ویژگی های مورد نظر کاربر را دریافت کرده وقیمت حدودی این خانه را به کاربر می گوید علاوه براین که قیمت خانه های مشابه هم نمایش میدهد."
        },
        {
          id: 2,
          title: "سرویس ماشین",
          color: "rgba(255, 255, 255, 1)",
          src: require("../assets/image (6).png"),
          text:
            "سرویس تخمین قیمت ماشین  به این صورت است که ویژگی های مورد نظر کاربر را دریافت کرده وقیمت حدودی این خانه را به کاربر می گوید علاوه براین که قیمت ماشین  های مشابه هم نمایش میدهد."
        },
        {
          id: 3,
          title: "سرویس سیم کارت",
          color: "rgba(45, 59, 71, 1)",
          src: require("../assets/simcardicon .png"),
          text:
            " سرویس تخمین قیمت سیم کارت به این صورت است که ویژگی های مورد نظر کاربر را دریافت کرده وقیمت حدودی این خانه را به کاربر می گوید علاوه براین که قیمت سیم کارت های مشابه هم نمایش میدهد. در این سرویس ما ویژگی های مورد نیاز هر کاربر را دریافت کرده وطابق با اون ویژگی ها تخمین قیمت ونمودار وجدول های مربوطه را نمایش میدهیم ."
        }
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goTohousing() {
      this.$router.push({ name: "servicehouse" });
    },
    goTocar() {
      this.$router.push({ name: "ServiceCar" });
    },
    SnackbarShow(type) {
      if (!type) return;
      this.snackbar1 = {
        color: "warning",
        icon: "mdi-alert",
        mode: "multi-line",
        timeout: 3000,
        title: "توجه",
        text: "شما باید اول ثبت نام /ورود کنید",
        visible: true
      };
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
}
div {
  font-family: IRANSans !important;
  text-align: right;
}
h3 {
  text-align: right;
  font-family: IRANSans !important;
}
.myflex {
  float: right;
}
.mystylec {
  background-size: contain;
  /***background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0.02),
    rgba(0, 0, 0, 0.25)
  );***/
}
.modal-dialog {
  width: 1000px;
  max-width: 100%;
}
.modal-dialog-car {
  width: 800px;
  height: 400px;
  max-width: 100%;
}
.fadedrop-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.fadedrop-enter-active,
.fadedrop-leave-active {
  transition: all 0.3s ease;
}
.fadedrop-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
