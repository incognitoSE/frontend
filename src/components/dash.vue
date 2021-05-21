<template>
  <v-card height="100%">
    <v-navigation-drawer
      absolute
      permanent
      right
      style="background-color:#2D3B47"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>علی ماهوش</v-list-item-title>
            <v-list-item-subtitle style="color: white;"
              >Alimahvashm@yahoo.ca</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><p style="font-size: 18px;">اعتبار: 0 ریال</p></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>افزایش اعتبار</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <img src="../assets/credit-card-outline.png" />
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>تاریخچه پرداخت</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <img src="../assets/cash.png" />
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>تاریخچه سرویس ها</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <img src="../assets/history.png" />
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-1">
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>برگشت به خانه</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <img src="../assets/keyboard-return.png" />
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container class="px-6 p7-6" style="width:80%; float:left;" >
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-container>
    </v-main>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          filterable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "../assets/credit-card-outline.png" },
        { title: "Users", icon: "mdi-account-group-outline" }
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
  color: white;
}
</style>
