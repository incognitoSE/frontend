<template>
  <v-container>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="editItem(item)">
          mdi-arrow-up-bold-box-outline
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: {
    formhouseforali: Object
  },

  data: () => ({
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
      amount: ""
    },
    dataItem: {
      date: "",
      service: "",
      type: "",
      amount: ""
    },
    defaultItem: {
      date: "",
      service: "",
      type: "",
      amount: ""
    }
  }),

  computed: {},

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
    axios
      .get("http://127.0.0.1:8000/User/userhistory/")
      .then(response => {
        this.desserts = response;
      })
      .catch(error => {
        console.log("there was an error" + error.response);
      });
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        },
        {
          date: "1379/2/13",
          service: "-",
          type: "افزایش اعتبار ",
          amount: "1500T "
        }
      ];
    },

    editItem(item) {
      item;
      //   // this.editedIndex = this.desserts.indexOf(item);
      //   // this.dataItem = Object.assign({}, item);
      this.dialog = true;
    }
  }
};
</script>
