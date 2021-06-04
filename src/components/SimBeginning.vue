<template>
  <div>
    <div v-if="showkole">
      <div id="main_div">
        <img
          src="../assets/photo_2021-05-15_05-29-46.png"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/photo_2021-05-15_05-29-48.png"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form
            class="houseform mx-7"
            @submit="onsubmitinsimcard"
            ref="formsimcard"
            v-model="formvaildesim"
          >
            <h1
              class="ml-lg-6  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس سیم کارت
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="شماره همراه"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  min="500000"
                  step="1"
                  shaped
                  v-model.number="formDataSim.number"
                  :rules="metrazrules"
                  reverse
                  clearable
                  :maxlength="12"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer
              ><v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="رند"
                  min="10000000000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDataSim.rond"
                  :rules="tedadeotaghrules"
                  reverse
                  clearable
                  :maxlength="11"
                ></v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="صفر"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDataSim.stock"
                  :rules="salesaketrules"
                  reverse
                  clearable
                  :maxlength="12"
                ></v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="دائمی"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  v-model="formDataSim.daemi"
                  :rules="mataghrulse"
                  shaped
                  reverse
                  clearable
                  :maxlength="12"
                >
                </v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              class="btnformhouse mt-5  mb-2 ml-12 hidden-md-and-down"
              large
              :disabled="!formvaildesim"
            >
              <h3 style="color:#CFD8DC">تخمین قیمت</h3></v-btn
            >
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              class="btnformhouse   hidden-lg-and-up"
              small
              :disabled="!formvaildesim"
            >
              <h3 style="color:#CFD8DC">تخمین قیمت</h3></v-btn
            >
            <v-snackbar
              v-if="nomony"
              :timeout="snackbar.timeout"
              :multi-line="snackbar.mode === 'multi-line'"
              :color="snackbar.color"
              v-model="snackbar.visible"
              auto-height
            >
              <v-layout align-center>
                <v-icon large dark pl-4 color="rgba(45, 59, 71, 1)">{{
                  snackbar.icon
                }}</v-icon>
                <v-layout column>
                  <div class="mx-auto">
                    <strong>{{ snackbar.title }} </strong>
                  </div>
                  <div class="mx-auto">{{ snackbar.text }}</div>
                  <div class="mx-auto">{{ snackbar.text2 }}</div>
                </v-layout>
              </v-layout>
            </v-snackbar>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
          </v-form>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-row>
      </div>
      <div style="background-color:rgba(45, 59, 71, 1)" class="divlasti">
        <v-row align="center" justify="space-around">
          <v-btn
            text
            class="white--text my-12"
            color="blue-grey"
            :to="{ name: 'Home' }"
          >
            <h4 style="color:rgba(255, 255, 255, 1)">برگشت به صفحه اصلی</h4>
            <v-icon right color="rgba(255, 255, 255, 1)">
              mdi-arrow-right-bold
            </v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>
    <div v-else>
      <div id="main_div">
        <img
          src="../assets/photo_2021-05-15_05-29-46.png"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/photo_2021-05-15_05-29-48.png"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form
            class="houseform mx-7"
            @submit="onsubmitinsimcard"
            ref="formsimcard"
          >
            <h1
              class="ml-lg-6  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس سیمکارت
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="شماره همراه"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  min="50"
                  step="1"
                  shaped
                  v-model.number="formDataSim.number"
                  :rules="metrazrules"
                  reverse
                  clearable
                  :maxlength="12"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer
              ><v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="رند"
                  min="1"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDataSim.rond"
                  :rules="tedadeotaghrules"
                  reverse
                  clearable
                  :maxlength="12"
                ></v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="صفر"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDataSim.stock"
                  :rules="salesaketrules"
                  reverse
                  clearable
                  :maxlength="12"
                ></v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="دائمی"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  v-model="formDataSim.location"
                  :rules="mataghrulse"
                  shaped
                  reverse
                  clearable
                  :maxlength="12"
                >
                </v-combobox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
            </v-row>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              class="btnformhouse mt-5  mb-2 ml-12 hidden-md-and-down"
              large
            >
              <h3 style="color:#CFD8DC">تخمین قیمت</h3></v-btn
            >
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              class="btnformhouse   hidden-lg-and-up"
              small
            >
              <h3 style="color:#CFD8DC">تخمین قیمت</h3></v-btn
            >
            <v-snackbar
              v-if="nomony"
              :timeout="snackbar.timeout"
              :multi-line="snackbar.mode === 'multi-line'"
              :color="snackbar.color"
              v-model="snackbar.visible"
              auto-height
            >
              <v-layout align-center>
                <v-icon large dark pl-4 color="rgba(45, 59, 71, 1)">{{
                  snackbar.icon
                }}</v-icon>
                <v-layout column>
                  <div class="mx-auto">
                    <strong>{{ snackbar.title }} </strong>
                  </div>
                  <div class="mx-auto">{{ snackbar.text }}</div>
                  <div class="mx-auto">{{ snackbar.text2 }}</div>
                </v-layout>
              </v-layout>
            </v-snackbar>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
          </v-form>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-row>
      </div>
      <SimResult :formsimcardforali="formsimcardforali" />
      <SimServices :dataforrominaSIM="dataforrominaSIM" />
      <div style="background-color:rgba(45, 59, 71, 1)" class="divlasti">
        <v-row align="center" justify="space-around">
          <v-btn
            text
            class="white--text my-12"
            color="blue-grey"
            :to="{ name: 'Home' }"
          >
            <h4 style="color:rgba(255, 255, 255, 1)">برگشت به صفحه اصلی</h4>
            <v-icon right color="rgba(255, 255, 255, 1)">
              mdi-arrow-right-bold
            </v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import SimResult from "@/components/SimResult.vue";
import SimServices from "@/components/SimServices.vue";
import { authcomputed } from "../store/helper.js";
export default {
  components: {
    SimResult,
    SimServices
  },
  computed: {
    ...authcomputed
  },
  data() {
    return {
      formvaildesim: false,
      formDataSim: {
        number: null,
        daemi: null,
        rond: null,
        stock: null
      },
      snackbar: {
        color: null,
        icon: null,
        text: null,
        mode: null,
        title: null,
        visibale: false,
        text2: null,
        timeout: 5000
      },
      nomony: false,
      formsimcardstore: {},
      showkole: true,
      itemsm: ["بله", "خیر"],
      formsimcardforali: {},
      dataforrominaSIM: { currentsimcard: {}, price: "", simcards: [] },
      metrazrules: [
        value => !!value || "شماره مورد نظر را وارد کنید",
        value => value >= 1000000000 || "تعداد ارقام شماره تلفن صحیح نمیباشد"
      ],
      mataghrulse: [
        value => !!value || "نوع سیمکارت مورد نظر خود را مشخص کنید"
      ],
      tedadeotaghrules: [value => !!value || "نوع رند مورد نظر را مشخص کنید"],
      salesaketrules: [
        value => !!value || "وضعیت شماره مورد نظر خود را مشخص کنید"
      ]
    };
  },
  methods: {
    onsubmitinsimcard(event) {
      event.preventDefault();
      this.formsimcardstore = {
        number: this.formDataSim.number,
        daemi: this.formDataSim.daemi,
        rond: this.formDataSim.rond,
        stock: this.formDataSim.stock
      };
      if (this.$refs.formsimcard.validate()) {
        this.$store
          .dispatch("senddatasimcard", {
            number: this.formDataSim.number,
            daemi: this.formDataSim.daemi,
            rond: this.formDataSim.rond,
            stock: this.formDataSim.stock
          })
          .then(() => {
            this.dataforrominaSIM = this.simcardform;
            this.formsimcardforali = this.simcardform;
          })
          .catch(err => {
            console.log(err.response);
            if (err.response.status === 401 && this.loggedin) {
              this.$store
                .dispatch("refreshtoken")
                .then(() => {
                  this.$store
                    .dispatch("senddatasimcard", {
                      number: this.formDataSim.number,
                      daemi: this.formDataSim.daemi,
                      rond: this.formDataSim.rond,
                      stock: this.formDataSim.stock
                    })
                    .then(() => {
                      this.dataforrominaSIM = this.simcardform;
                      this.formsimcardforali = this.simcardform;
                    })
                    .catch(errrr => console.log(errrr.response));
                })
                .catch(er => {
                  console.log(er);
                  console.log("im in last error");
                  this.$store.dispatch("logout");
                  this.$router.push({ name: "Home" });
                });
            }
            if (err.response.status === 402 && this.loggedin) {
              this.nomony = true;
              this.snackbar = {
                color: "warning",
                icon: "mdi-alert",
                mode: "multi-line",
                timeout: 5000,
                title: "توجه",
                text: "شما اعتبار کافی برای استفاده از سرویس ندارید",
                text2: "شما را به صفحه افزایش اعتبار هدایت می کنیم",
                visible: true
              };
              setTimeout(() => {
                this.$router.push({ name: "IncreaseCredit" });
              }, 5000);
            }
          });

        this.formDataSim.number = null;
        this.formDataSim.daemi = null;
        this.formDataSim.rond = null;
        this.formDataSim.stock = null;
        this.$refs.formsimcard.resetValidation();
        this.showkole = false;
      }
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
.h1class {
  text-align: center;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
#main_div {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.divlasti {
  max-height: 162px;
  height: 162px;
}
#main_div img {
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.houseform {
  text-align: center;
}
.mymetraz {
  margin-top: 3px;
  margin-bottom: 3px;
}
.divform {
  position: absolute;
  float: right;
  right: 155px;
  background-color: #cfd8dc;
  padding: 5px;
  width: 340px;
  height: 480px;
  max-width: 50%;
  max-height: 87%;
  z-index: 30;
  text-align: center;
  box-shadow: 12px 12px 2px 1px rgba(101, 101, 122, 0.2);
  /**  overflow: auto;*/
}
.mytext {
  width: 200px;
}
.btnformhouse {
  width: 180px;
}
::placeholder {
  text-align: center;
  color: rgb(127, 148, 167);
}
#textholderi::placeholder {
  text-align: center;
  color: rgb(127, 148, 167);
}
input {
  border: none;
  direction: rtl;
  text-align: center;
  width: 80%;
}
input[type="number"] {
  width: 80%;
}
*:focus {
  outline: none;
  background-color: rgb(169, 173, 177);
}
input:hover {
  background-color: rgb(169, 173, 177);
}
@media screen and (min-width: 230px) and (max-width: 660px) {
  .divform {
    position: absolute;
    float: right;
    right: 25px;
    top: 15px;
    width: 280px;
    height: 400px;
    max-height: 90%;
    max-width: 45%;
  }
  .mytext {
    width: 120px;
    text-align: center;
    margin-left: 5px;
    margin-top: 0%;
    margin-bottom: 0%;
  }
  .h1class {
    font-size: 20px;
    margin-right: 4px;
    margin-left: 10px;
    margin-bottom: 0%;
  }
  .btnformhouse {
    margin-top: 0%;
    width: 100px;
    margin-left: 16px;
  }
}
@media screen and (min-width: 760px) and (max-width: 980px) {
  .divform {
    position: absolute;
    float: right;
    right: 35px;
    top: 80px;
    width: 340px;
    height: 490px;
    max-height: 80%;
    max-width: 45%;
  }
  .mytext {
    width: 250px;
    text-align: center;
    margin-left: 10px;
  }
  .h1class {
    font-size: 40px;
    margin-right: 4px;
    margin-left: 10px;
  }
  .btnformhouse {
    margin-bottom: 4px;
    width: 230px;
    margin-left: 16px;
    margin-top: 10px;
    height: 100px;
  }
}
@media screen and (max-width: 760px) and (min-width: 660px) {
  .divform {
    position: absolute;
    float: right;
    right: 40px;
    top: 55px;
    width: 290px;
    height: 470px;
    max-height: 95%;
    max-width: 45%;
  }
  .mytext {
    width: 205px;
  }
  .h1class {
    font-size: 30px;
    margin-right: 4px;
  }
  .btnformhouse {
    margin-bottom: 2px;
    width: 190px;

    margin-left: 17px;
  }
}
</style>
