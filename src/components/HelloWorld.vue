<template>
  <div>
    <v-card tile>
      <v-app-bar app color="#2D3B47" elevate-on-scroll>
<<<<<<< HEAD
        <SingUp />

        <login />

=======
        
          <SingUp v-if="!loggedin" />
          
          <login v-if="!loggedin" />
        
        <div v-else>
          <v-btn @click="logout" rounded small text style="color: #ffffff"
            >خروج</v-btn
          >
        </div>
>>>>>>> aa7154953424b8617029a0fa638825fc8fc1a86b
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn link href="#services" rounded small text style="color:#ffffff"
          >سرویس ها</v-btn
        >
        <v-btn link href="#questions" rounded small text style="color:#ffffff"
          >سوالات متداول</v-btn
        >
        <v-btn small text rounded style="color: #ffffff">درباره ما</v-btn>
        <v-avatar tile size="90px" style="border=0">
          <v-img contain src="@/assets/logo.jpg" />
        </v-avatar>
      </v-app-bar>
    </v-card>
    <v-row dense no-gutters>
      <router-view></router-view>
    </v-row>
    <v-row dense no-gutters>
      <v-col cols="12">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SingUp from "@/components/SingUp.vue";
import login from "@/components/login.vue";
import { authcomputed } from "../store/helper.js";
export default {
  components: {
    SingUp,
    login
  },
  computed: { ...authcomputed },
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
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
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
