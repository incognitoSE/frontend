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
              <v-list-item-title
                v-text="
                  n.text +
                    '   ' +
                    '   ' +
                    '   ' +
                    '   ' +
                    '   ' +
                    '   ' +
                    n.date
                "
              />
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
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="name"
            show-expand
          >
            <!-- <template v-slot:item.actions="{ item }">
              <v-icon small @click="editItem(item)">
                mdi-arrow-up-bold-box-outline
              </v-icon>
            </template> -->
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
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                {{ item.data }}
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { authcomputed } from "../store/helper.js";
import axios from "axios";
export default {
  computed: { ...authcomputed },
  data: () => ({
    notifications: [
      // "Mike John Responded to your email",
      // "You have 5 new tasks",
      // "You're now friends with Andrew",
      // "Another Notification"
    ],

    expanded: [],
    singleExpand: false,

    dialog: false,
    dialogDelete: false,
    headers: [
   
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
  watch: {
    dialog(val) {
      val;
    },
    dialogDelete(val) {
      val;
    }
  },

  created() {
    axios.get("http://127.0.0.1:8000/User/notifications/").then(response => {
      this.notifications = response.data;
    });
    this.initialize();
    this.$store
      .dispatch("historyofservices")
      .then(() => {
        this.desserts = this.historyserviceform;
      })
      .catch(error => {
        console.log("there was an error" + error.response);
        if (error.response.status === 401 && this.loggedin) {
          console.log("im in err 1");
          this.$store
            .dispatch("refreshtoken")
            .then(() => {
              console.log("im in refresh");
              this.$store
                .dispatch("historyofservices")
                .then(() => {
                  this.desserts = this.historyserviceform;
                })
                .catch(errrr => console.log(errrr.response));
            })
            .catch(er => {
              console.log(er.response);
              this.$store.dispatch("logout");
              this.$router.push({ name: "Home" });
            });
        }
      });
  },

  methods: {
    initialize() {
      this.desserts = [
        // {
        //   date: "13/2/1379",
        //   price: "1200T",
        //   model: "ماشین",
        //   data: "sdasdasda"
        // }
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
