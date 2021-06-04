<template>
  <div>
    <v-card style="background: rgba(194, 161, 140, 0.19);">
      <v-container>
        <v-row>
          <v-spacer></v-spacer>

          <v-col
            ><v-card-title>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title style="text-align: center;">
                    <div class="counter">
                      <i class="fa fa-coffee fa-2x" style="text-align: center;"
                        ><h1>{{ users }}</h1></i
                      >
                      <h1
                        class="timer count-title count-number"
                        data-to="1700"
                        data-speed="1500"
                        style="text-align: center; "
                      >
                        <v-card-text><p>تعداد کاربران سامانه</p></v-card-text>
                      </h1>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item></v-card-title
            ></v-col
          >
          <v-spacer></v-spacer> <v-divider class="mx-1" vertical> </v-divider>
          <v-spacer></v-spacer>
          <v-col
            ><v-card-title>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title style="text-align: center;">
                    <div class="counter">
                      <i class="fa fa-coffee fa-2x" style="text-align: center;"
                        ><h1>{{ history }}</h1></i
                      >
                      <h1
                        class="timer count-title count-number"
                        data-to="1700"
                        data-speed="1500"
                        style="text-align: center; "
                      >
                        <v-card-text
                          ><p>تعداد استفاده از سامانه</p></v-card-text
                        >
                      </h1>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item></v-card-title
            >

            <v-card-text></v-card-text>
          </v-col>

          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: null,
      history: history,
      created() {
        axios.get("http://127.0.0.1:8000/User/stats/").then(response => {
          this.users = response.data.users;
          this.history = response.data.history;
          console.log(response.data);
          console.log("sdasdasd");
        });
      }
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
}
</style>
