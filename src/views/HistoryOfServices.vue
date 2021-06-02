<template>
  <v-card style="right:6%">
    <v-container>
      <v-menu
        bottom
        left
        offset-y
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
            <v-badge color="red" overlap bordered>
              <template v-slot:badge>
                <span>{{ notifications.length }}</span>
              </template>

              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list :tile="false" nav>
          <div>
            <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
              <v-list-item-title v-text="n" />
            </app-bar-item>
          </div>
        </v-list>
      </v-menu>
      <v-row align="center" justify="center" style="height:100vh " dense>
        <v-col class=" lighten-2 fill-height d-flex flex-column  align-center">
          <v-data-table
            style="width:80% "
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small @click="editItem(item)">
                mdi-arrow-up-bold-box-outline
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-alert dense outlined type="error">
                هیچ <strong>سرویسی</strong> استفاده نشده است
              </v-alert>
            </template>
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-toolbar-title style="text-align:center;"
                  >تاریخچه سرویس ها</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-title>
                      <span class="headline"></span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.data"
                              label="data"
                            ></v-text-field>
                          </v-col>
                          <!-- <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.price"
                              label="price"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.model"
                              label="model"
                            ></v-text-field>
                          </v-col> -->
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification"
    ],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "مشاهده اطلاعات ورودی",
        value: "actions",
        align: "center",
        sortable: false
      },
      {
        text: "تاریخ",
        align: "center",
        sortable: false,
        value: "date"
      },
      {
        text: "قیمت تخمین زده",
        value: "price",
        align: "center",
        sortable: false
      },
      { text: "نام سرویس", value: "model", align: "center", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      date: "",
      price: null,
      model: "",
      data: "",
      id: null,
      user_id: null
    },
    dataItem: {
      date: "",
      price: null,
      model: "",
      data: "",
      id: null,
      user_id: null
    },
    defaultItem: {
      date: "",
      price: null,
      model: "",
      data: "",
      id: null,
      user_id: null
    }
  }),

  computed: {},

  watch: {
    dialog(val) {
      val;
    },
    dialogDelete(val) {
      val;
    }
  },

  created() {
    this.initialize();
    axios
      .get("http://127.0.0.1:8000/User/userhistory/")
      .then(response => {
        this.desserts = response.data;
        // this.desserts = response.data[0].data;
        // this.desserts = response.data[0].date;
        // this.desserts = response.data[0].price;
        // this.desserts = response.data[0].model;
        console.log(this.editedItem);
        console.log(this.desserts);
      })
      .catch(error => {
        console.log("there was an error" + error.response);
      });
  },

  methods: {
    initialize() {
      this.desserts = [
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // },
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین"
        // }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.dataItem = Object.assign({}, item);
      this.dialog = true;
    }
  }
};
</script>
