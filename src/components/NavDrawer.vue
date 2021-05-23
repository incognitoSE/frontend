<template>
  <v-navigation-drawer
    v-model="drawer"
    permanent
    absolute
    right
    height="100%"
    src="../assets/p3.jpg"
    style="background-color:#2D3B47 "
  >
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
          <v-list-item-subtitle style="color: rgba(255, 255, 255, 1)">{{
            email
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon
          ><v-icon color="rgba(255, 255, 255, 1)"
            >mdi-account</v-icon
          ></v-list-item-icon
        >
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list class="menu-items">
      <v-list-item v-for="item in ItemNavDrawer" :key="item.title" link>
        <v-list-item-content>
          <router-link
            :to="item.path"
            active-class="active"
            tag="button"
            class="side-btn"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon color="rgba(255, 255, 255, 1)">{{ item.icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-1">
        <v-list>
          <v-list-item link :to="{ name: 'Home' }">
            <v-list-item-content>
              <v-list-item-title>برگشت به صفحه اصلی</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon
              ><v-icon color="rgba(255, 255, 255, 1)"
                >mdi-exit-to-app</v-icon
              ></v-list-item-icon
            >
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { authcomputed } from "../store/helper.js";
export default {
  computed: {
    ...authcomputed
  },
  data() {
    return {
      name: "nilou",
      email: "niloufar@g.com",
      drawer: true,
      ItemNavDrawer: [
        {
          title: "افزایش اعتبار",
          icon: "mdi-cash-plus",
          path: "/dashboardIncreaseCredit"
        },
        {
          title: "تاریخچه سرویس ها",
          icon: "mdi-history",
          path: "/dashboard"
        },
        {
          title: "تاریخچه پرداخت",
          icon: "mdi-credit-card-clock-outline",
          path: "/dashboardHistoryOfPayment"
        }
      ]
    };
  },
  methods: {
    myuser() {
      this.name = this.userform.name;
      this.email = this.userform.email;
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
  color: white;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.menu-items > * {
  margin-top: 60px;
}
</style>
