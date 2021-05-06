<template style="background: rgba(194, 161, 140, 0.19);">
 <!-- <div v-if="showme">-->
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
                      : قیمت تخمین زده خانه
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
                  متراژ :
                  {{ formhouseforali.currenthouse.area }}
                  متر مربع</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title style="color: white"
                  >منطقه : {{ formhouseforali.currenthouse.location }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title style="color: white"
                  >تعداد اتاق :
                  {{ formhouseforali.currenthouse.room }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title style="color: white"
                  >سال ساخت :
                  {{ formhouseforali.currenthouse.year }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-card>
 <!-- </div>-->
</template>

<script>
export default {
  props: ["formhouseforali"],
  data() {
    return {
      price: null,
      showme: false
    };
  },
  watch: {
    formhouseforali: {
      immediate: true,
      handler() {
        this.showme = true;
      }
    }

  }
};
</script>
<style lang="scss" scoped></style>
