<template>
  <div>
    <div v-if="showkole">
      <div id="main_div">
        <img
          src="../assets/photo_2021-05-12_15-17-46.jpg"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/photo_2021-05-12_15-17-47.jpg"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form
            class="houseform mx-8"
            @submit="onsubmitincar"
            ref="formcar"
            v-model="formvaildecar"
          >
            <h1
              class="ml-lg-12  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس ماشین
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="برند"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  step="1"
                  shaped
                  :rules="metrazrules"
                  v-model.number="FormDatacar.brand"
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
                <v-text-field
                  dense
                  placeholder="مدل"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  :rules="modelrules"
                  v-model.number="FormDatacar.model"
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
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  dense
                  placeholder="(km)کارکرد "
                  min="0"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.mileage"
                  :rules="salesaketrules"
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
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  dense
                  placeholder="سال تولید"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.year"
                  :rules="yearrules"
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
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-combobox
                  :items="itemsm"
                  dense
                  placeholder="وضعیت خودرو"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.body_status"
                  :rules="body_statusrules"
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
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              class="btnformhouse mt-5  mb-2 ml-12 hidden-md-and-down"
              large
              :disabled="!formvaildecar"
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
              :disabled="!formvaildecar"
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
    </div>
    <div v-else>
      <div id="main_div">
        <img
          src="../assets/photo_2021-05-12_15-17-46.jpg"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/photo_2021-05-12_15-17-47.jpg"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form class="houseform mx-7" @submit="onsubmitincar" ref="formcar">
            <h1
              class="ml-lg-12  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس ماشین
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="برند"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  min="50"
                  step="1"
                  shaped
                  v-model.number="FormDatacar.brand"
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
                <v-text-field
                  dense
                  placeholder="مدل"
                  min="1"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.model"
                  :rules="modelrules"
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
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  dense
                  placeholder="(km)کارکرد"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.mileage"
                  :rules="salesaketrules"
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
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  dense
                  type="text"
                  placeholder="سال تولید"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  v-model.number="FormDatacar.year"
                  :rules="yearrules"
                  shaped
                  reverse
                  clearable
                  :maxlength="12"
                >
                </v-text-field>
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
                  placeholder="وضعیت خودرو"
                  type="text"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="FormDatacar.body_status"
                  :rules="body_statusrules"
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
      <CarResult :formcarforali="formcarforali" />
      <CarServices :dataforrominaCar="dataforrominaCar" />
    </div>
    <div>
      <v-carousel cycle dark delimiter-icon="mdi-minus">
        <v-carousel-item v-for="(picitem, i) in slideshowpictahlel" :key="i">
          <h1 style="text-align: center" class="mt-3 mb-0">تحلیل قیمت ماشین</h1>
          <v-sheet
            height="100%"
            color="white"
            style="display: flex ; justify-contetn : space-between"
          >
            <v-row class="fill-height " align="center" justify="center">
              <v-col md="4" sm="5" xs="6">
                <v-card-text
                  class="justify-left  text-left"
                  tile
                  style="color : black ; background-color: white"
                >
                  <div class="property">
                    <span style="font-size : 15px ; margin-left:10px"
                      >{{ picitem.text }}
                    </span>
                  </div>
                </v-card-text>
              </v-col>

              <v-col md="4" sm="3" xs="3" id="picture">
                <v-avatar
                  id="pic"
                  tile
                  size="cover"
                  style="margin-right : 20px "
                >
                  <v-img contain :src="picitem.src" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
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
</template>

<script>
import CarResult from "@/components/CarResult.vue";
import CarServices from "@/components/CarServices.vue";
import { authcomputed } from "../store/helper.js";
export default {
  computed: { ...authcomputed },
  components: {
    CarResult,
    CarServices
  },
  data() {
    return {
      carresource: [],
      slideshowpictahlel: [],
      formvaildecar: false,
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
      FormDatacar: {
        brand: null,
        year: null,
        model: null,
        mileage: null,
        body_status: null
      },
      itemsm: [
        "بدون رنگ",
        "صافکاری بدون رنگ",
        "یک لکه رنگ",
        "دو لکه رنگ",
        "چند لکه رنگ",
        "گلگیر رنگ",
        "گلگیر تعویض",
        "یک درب رنگ",
        "دو درب رنگ",
        "درب تعویض",
        "کاپوت رنگ",
        "کاپوت تعویض",
        "دور رنگ",
        "کامل رنگ",
        "تصادفی",
        "اتاق تعویض",
        "سوخته",
        "اوراقی"
      ],
      showkole: true,
      formcarstore: {},
      formcarforali: {},
      dataforrominaCar: { currentcar: {}, price: "", cars: [] },
      metrazrules: [value => !!value || "برند خودرو موردنظر را وارد کنید"],
      modelrules: [value => !!value || "مدل خودرو موردنظر را وارد کنید"],
      mataghrulse: [value => !!value || "منطقه مورد نظر خود را وارد کنید"],
      tedadeotaghrules: [value => !!value || "منطقه مورد نظر خود را وارد کنید"],
      salesaketrules: [
        value => !!value || "میزان کارکرد خودرو را برحسب کیلومتر وارد کنید",
        value => value >= 0
      ],
      body_statusrules: [
        value => !!value || "وضعیت خودرو مورد نظر را وارد کنید"
      ],
      yearrules: [
        value => !!value || "سال تولید خودرو را وارد کنید",
        value => value >= 1200
      ]
    };
  },
  created() {
    this.$store
      .dispatch("getcarresource")
      .then(() => {
        this.carresource = this.carresourcegetter.imagesAndTexts;
        console.log("im here");
        console.log(this.carresource);
        this.onimageinslideshow();
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401 && this.loggedin) {
          this.$store
            .dispatch("refreshtoken")
            .then(() => {
              console.log("yes it ok");
              this.$store
                .dispatch("getcarresource")
                .then(() => {
                  this.carresource = this.carresourcegetter.imagesAndTexts;
                  console.log("im here");
                  console.log(this.carresource);
                  this.onimageinslideshow();
                })
                .catch(errrr => console.log(errrr.response));
            })
            .catch(er => {
              console.log(er);
              this.$store.dispatch("logout");
              this.$router.push({ name: "Home" });
            });
        }
      });
  },
  methods: {
    onsubmitincar(event) {
      event.preventDefault();
      console.log("im in store data car");
      console.log(this.FormDatacar.brand);
      this.formcarstore = {
        brand: this.FormDatacar.brand,
        year: this.FormDatacar.year,
        model: this.FormDatacar.model,
        mileage: this.FormDatacar.mileage,
        body_status: this.FormDatacar.body_status
      };
      console.log("im out of store data car");
      console.log(this.formcarstore.brand);
      if (this.$refs.formcar.validate()) {
        console.log("im in if");
        this.$store
          .dispatch("senddatacar", {
            brand: this.FormDatacar.brand,
            year: this.FormDatacar.year,
            model: this.FormDatacar.model,
            mileage: this.FormDatacar.mileage,
            body_status: this.FormDatacar.body_status
          })
          .then(() => {
            console.log("im hereeee");
            this.dataforrominaCar = this.$store.getters.carform;
            this.formcarforali = this.$store.getters.carform;
          })
          .catch(err => {
            console.log(err.response);
            console.log(err.response.status);
            if (err.response.status === 401 && this.$store.getters.loggedin) {
              console.log("im in err 1");
              this.$store
                .dispatch("refreshtoken")
                .then(() => {
                  console.log("im in refresh");
                  this.$store
                    .dispatch("senddatacar", {
                      brand: this.FormDatacar.brand,
                      year: this.FormDatacar.year,
                      model: this.FormDatacar.model,
                      mileage: this.FormDatacar.mileage,
                      body_status: this.FormDatacar.body_status
                    })
                    .then(() => {
                      this.dataforrominaCar = this.$store.getters.carform;
                      this.formcarforali = this.$store.getters.carform;
                    })
                    .catch(errrr => console.log(errrr.response));
                })
                .catch(er => {
                  console.log(er.response);
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

              //clearTimeout(cleartime);
            }
          });
        this.FormDatacar.brand = null;
        this.FormDatacar.year = null;
        this.FormDatacar.mileage = null;
        this.FormDatacar.model = null;
        this.FormDatacar.body_status = null;
        this.$refs.formcar.resetValidation();
        this.showkole = false;
      }
    },
    carresourceimage(mysrc) {
      return `data:image/png;base64, ${mysrc}`;
    },
    onimageinslideshow() {
      var mysrces;
      var myobject;
      console.log("im in func");
      for (let i = 0; i < this.carresource.length; i++) {
        mysrces = this.carresourceimage(this.carresource[i].image);
        console.log(mysrces);
        console.log(i);
        myobject = {
          src: mysrces,
          text: this.carresource[i].text
        };
        this.slideshowpictahlel.push(myobject);
        console.log(this.slideshowpictahlel);
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
#pic {
  display: inline;
  width: 450px;
  height: 450px;
  max-height: 100%;
  max-width: 100%;
}

.property {
  margin: 30px;
  display: flex;
  justify-content: space-between;
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
  height: 540px;
  max-width: 50%;
  max-height: 100%;
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
    height: 460px;
    max-height: 93%;
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
