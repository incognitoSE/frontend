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
                <span>5</span>
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
            style="width:80%"
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
                هیچ <strong>پرداختی</strong> صورت نگرفته است
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
                  >تاریخچه پرداخت ها</v-toolbar-title
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
                              v-model="editedItem.date"
                              label="date"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.service"
                              label="service"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.type"
                              label="type"
                            ></v-text-field>
                          </v-col>
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
import { authcomputed } from "../store/helper.js";
export default {
  computed: { ...authcomputed },
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
        text: "تاریخ",
        align: "center",
        sortable: false,
        value: "date"
      },
      {
        text: "هزینه",
        value: "amount",
        align: "center",
        sortable: false
      },

      {
        text: "نام سرویس",
        value: "service",
        align: "center",
        sortable: false
      },
      { text: "نوع پرداخت", value: "type", align: "center", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      date: "",
      service: "",
      type: "",
      amount: null,
      id: null,
      user_id: null
    },
    dataItem: {
      date: "",
      service: "",
      type: "",
      amount: null,
      id: null,
      user_id: null
    },
    defaultItem: {
      date: "",
      service: "",
      type: "",
      amount: null,
      id: null,
      user_id: null
    }
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
    this.$store
      .dispatch("historyofpayment")
      .then(() => {
        this.desserts = this.historypaymentform;
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
                .dispatch("historyofpayment")
                .then(() => {
                  this.desserts = this.historypaymentform;
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
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // },
        // {
        //   date: "1379/2/13",
        //   service: "-",
        //   type: "افزایش اعتبار ",
        //   amount: "1500T "
        // }
      ];
    },

    editItem(item) {
      item;
      this.editedIndex = this.desserts.indexOf(item);
      this.dataItem = Object.assign({}, item);
      this.dialog = true;
    }
  }
};
</script>
