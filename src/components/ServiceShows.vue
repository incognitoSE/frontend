<template>
  <div>
    <v-row v-for="(item, index) in items" :key="index" dense no-gutters>
      <v-col cols="12">
        <v-card :color="item.color" tile>
          <div v-if="item.id !== 2">
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
                      class="white--text mt-8 mr-10"
                      block
                      large
                      elevation="17"
                      outlined
                      :to="{ name: 'servicehouse' }"
                    >
                      <h3>استفاده از سرویس</h3>
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
          <div v-else class="d-flex">
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
                  class="mt-8  ml-6"
                  style="color: rgba(45, 59, 71, 1)"
                  block
                  large
                  outlined
                  elevation="17"
                >
                  <h3>استفاده از سرویس</h3>
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
export default {
  data() {
    return {
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
  font-family: IRANSans !important;
  text-align: right;
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
</style>
