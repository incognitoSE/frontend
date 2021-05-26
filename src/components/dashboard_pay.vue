<template>
  <v-container
    ><v-card
      ><v-card-title primary-title class="justify-center"
        ><h1>افزایش اعتبار</h1></v-card-title
      >
      <v-spacer></v-spacer>
            <br/>
            
      <v-card-subtitle style="text-align:center;">
        :اعتبار فعلی شما
      </v-card-subtitle>
      <h2 style="text-align:center;"></h2>
      <h2 style="text-align:center;">مقدار {{money}} تومان</h2>
      <br />
      <br />

      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col> </v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col
          ><v-btn
            style="background-color: #2d3b47; color:white;"
            dark
            @click="increment"
            >5,000</v-btn
          ></v-col
        >
        <v-col
          ><v-btn
            style="background-color: #2d3b47;  color:white;"
            @click="increment1"
            >10,000</v-btn
          ></v-col
        >
        <v-col
          ><v-btn
            style="background-color: #2d3b47; color:white;"
            @click="increment2"
            >20,000</v-btn
          ></v-col
        >
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-text-field
          value="1000"
          prefix="تومان"
          v-model="value"
        ></v-text-field>

        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-btn color="success" @click="increment4">افزایش اعتبار</v-btn>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row
        ><div><br /></div
      ></v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      value: 1000,
      money:0
    };
  },
  components: {},
  methods: {
    increment() {
      this.value = 5000;
    },
    increment1() {
      this.value = 10000;
    },
    increment2() {
      this.value = 20000;
    },
    increment4() {
      this.money = this.money + this.value;
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
  color: #2d3b47;
}
</style>
