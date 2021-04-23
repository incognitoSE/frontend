<template>
  <div>
    <v-card tile>
      <!-- <v-app > -->
      <v-app-bar app color="#2D3B47" elevate-on-scroll>
        <v-btn to="/signup" rounded small text style="color: #ffffff"
          >ثبت نام</v-btn
        >
        <v-btn to="/signin" rounded small text style="color: #ffffff"
          >ورود</v-btn
        >
        <v-spacer></v-spacer>
        <!-- <v-btn small text rounded style="color: #ffffff">
          <a href="/#services">سرویس ها</a>
        </v-btn> -->
        <!-- <router-link :to="{ path: '', hash: '#Services' }"
          >سرویس ها</router-link
        > -->
        <v-btn link href="#services" rounded small text style="color:#ffffff"
          >سرویس ها</v-btn
        >
        <v-btn link href="#questions" rounded small text style="color:#ffffff"
          >سوالات متداول</v-btn
        >
        <!-- <a
          href="#services"
          style="  text-decoration-line: none;
                   color: #ffffff;
                   font-size: 12px;
                   margin: 12px;"
          >سرویس ها</a
        >
        <a
          href="#questions"
          style="  text-decoration-line: none;
                   color: #ffffff;
                   font-size: 12px;
                   margin: 12px;"
          >سوال های متداول</a
        > -->
        <!-- <v-btn small text rounded style="color: #ffffff">سوالات متداول</v-btn> -->
        <v-btn small text rounded style="color: #ffffff">درباره ما</v-btn>
        <v-avatar tile size="90px" style="border=0">
          <v-img contain src="@/assets/logo.jpg" />
        </v-avatar>
        <!-- <v-row dense no-gutters>
        <router-view></router-view>
        </v-row> -->
      </v-app-bar>
      <!-- </v-app> -->
    </v-card>
    <v-row dense no-gutters>
      <router-view></router-view>
    </v-row>
    <!-- <v-content>
      <router-view></router-view>
    </v-content> -->
    <!-- <v-container> -->
    <v-row dense no-gutters >
      <v-col cols="12" >
        <!-- <v-container> -->
        <v-carousel
          cycle
          class="myslideshow"
          show-arrows-on-hover
          hide-delimiter-background
          
        >
          <v-carousel-item
            v-for="(pic, i) in slideshowpic"
            :key="i"
            :src="pic.src"
            elevation="24"
            style="boxshadow: 5px #2d3b47 ; border: groove"
          >
          
          </v-carousel-item>
        </v-carousel>
        <!-- </v-container> -->
      </v-col>
    </v-row>
    <!-- <v-row dense no-gutters>
      <router-view></router-view>
    </v-row> -->
    <!-- </v-container> -->
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

<style scoped>
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
