<template>
  <div class="style1">
    <v-container>
      <v-row>
        <v-col>
          <v-card-title
            ><v-spacer></v-spacer>
            <h1 style="font-family: IRANSans!important;">سوالات متداول</h1>
            <img width="110px" height="90px" src="@/assets/Qimage.png" />
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین به هیچ دردی نمیخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین به هیچ دردی نمیخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین به هیچ دردی نمیخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین به هیچ دردی نمیخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-footer padless static>
      <v-row justify="center" no-gutters class="myclassify">
        <v-card color="#2d3b47">
          <v-card-text style="text-align: center">
            <v-btn
              text
              rounded
              style="color:#ffffff"
              v-for="icon in icons"
              :key="icon.iconname"
              class="mx-4 white--text"
              :href="icon.link"
              icon
            >
              <v-icon size="24px">
                {{ icon.iconname }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text style="text-align: center ; color:#ffffff">
            می توانید در این سوشال مدیاها با ما در ارتباط باشید
          </v-card-text>
        </v-card>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { iconname: "mdi-facebook", link: "https://www.quera.ir" },
        { iconname: "mdi-twitter", link: "https://www.quera.ir" },
        { iconname: "mdi-instagram", link: "https://www.quera.ir" },
        { iconname: "mdi-linkedin", link: "https://www.quera.ir" }
      ],

      slideshowpic: [
        {
          src: require("../assets/chartone.png")
        },
        {
          src: require("../assets/charttwo.png")
        },
        {
          src: require("../assets/chartthree.png")
        }
      ]
    };
  }
};
</script>

<style scope>
div {
  font-family: IRANSans !important;
  text-align: right;
}
.sitename {
  color: #ffffff;
  margin: 5px;
  padding: 7px;
  border-left: inset #ffffff;
}

.logo {
  height: auto;
  width: auto;
  border-radius: 50%;
}

.myclassify {
  display: block;
  background-size: cover;
  justify-content: center;
}

.myslideshow {
  border: 5px solid rgba(45, 59, 71, 1);
  box-shadow: 5px 5px 4px #aaaaaa;
  padding: 3px;
}

div {
  font-family: IRANSans !important;
  text-align: right;
}
</style>
