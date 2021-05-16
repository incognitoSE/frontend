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
                  رابین خیلی به درد میخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین خیلی به درد میخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین خیلی به درد میخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین خیلی به درد میخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-lg-right"
                  ><v-spacer></v-spacer> رابین چیست و به چه دردی
                  میخورد</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-lg-right ">
                  رابین خیلی به درد میخورد
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-col>
      </v-row>
      <br />
      <br />
      <br />
    </v-container>
    <v-footer padless static style="position:relative">
      <v-row justify="center" no-gutters class="myclassify">
        <v-card color="#2d3b47">
          <v-card-text style="text-align: center">
            <v-btn
              text
              rounded
              style="color:#ffffff ; left:40px ; position:absolute"
              href="https://www.quera.ir"
              icon
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <p
              style="margin: 20px ;color:#ffffff ; position:absolute ; top:4px ; left:60px"
            >
              unknown@gmail.com
            </p>

            <v-btn
              text
              rounded
              style="color:#ffffff ; left:40px ; top: 50px; position:absolute"
              href="https://www.quera.ir"
              icon
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <p
              style="margin: 20px ;color:#ffffff ; position:absolute ; top:40px ; left:60px"
            >
              031-123456
            </p>

            <v-btn
              text
              rounded
              style="color:#ffffff ; left:5px"
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
            می توانید در این شبکه های اجتماعی با ما در ارتباط باشید
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
@font-face {
  font-family: IRANSans;
  src: url("../../public/fonts/BYekan.ttf");
}
* {
  font-family: IRANSans;
  color: #2d3b47;
}

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
