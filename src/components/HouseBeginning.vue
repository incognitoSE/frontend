<template>
  <div>
    <div v-if="showkole">
      <div id="main_div">
        <img
          src="../assets/Hnet.com-image (17).jpg"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/Hnet.com-image (22).jpg"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form
            class="houseform mx-7"
            @submit="onsubmitinfohouse"
            ref="formhouse"
            v-model="formvaildehome"
          >
            <h1
              class="ml-lg-16  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس خانه
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="متراژ"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  min="50"
                  step="1"
                  shaped
                  v-model.number="formDatahouse.area"
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
                  placeholder="تعداد اتاق"
                  min="1"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDatahouse.room"
                  :rules="tedadeotaghrules"
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
                  placeholder="سال ساخت"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDatahouse.year"
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
                <v-combobox
                  :items="itemsm"
                  dense
                  type="text"
                  placeholder="منطقه"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  v-model="formDatahouse.location"
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
              :disabled="!formvaildehome"
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
              :disabled="!formvaildehome"
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
          src="../assets/Hnet.com-image (17).jpg"
          alt="house"
          class="imgcls  hidden-md-and-down"
        />
        <img
          src="../assets/Hnet.com-image (22).jpg"
          alt="house"
          class="imgcls  hidden-lg-and-up"
        />
        <v-row class="divform">
          <v-form
            class="houseform mx-7"
            @submit="onsubmitinfohouse"
            ref="formhouse"
          >
            <h1
              class="ml-lg-16  ml-md-9 ml-sm-2 mt-2 h1class"
              style="color:rgba(45, 59, 71, 1)"
            >
              سرویس خانه
            </h1>

            <v-row>
              <v-spacer></v-spacer>
              <v-spacer class="hidden-lg-and-up"></v-spacer>
              <v-spacer class="hidden-md-and-down"></v-spacer>
              <v-col cols="11" md="10" lg="11">
                <v-text-field
                  placeholder="متراژ"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  min="50"
                  step="1"
                  shaped
                  v-model.number="formDatahouse.area"
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
                  placeholder="تعداد اتاق"
                  min="1"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDatahouse.room"
                  :rules="tedadeotaghrules"
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
                  placeholder="سال ساخت"
                  min="1200"
                  max="5000"
                  step="1"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  shaped
                  v-model.number="formDatahouse.year"
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
                <v-combobox
                  :items="itemsm"
                  dense
                  type="text"
                  placeholder="منطقه"
                  class="mytext ml-lg-6 ml-md-4 ml-sm-3"
                  v-model="formDatahouse.location"
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
      <HouseResult :formhouseforali="formhouseforali" />
      <houseservices :dataforromina="dataforromina" />
    </div>
    <div>
      <v-card outlined tile >
        <v-card-text style="border-style: groove ; border-color:#2d3b47" >
          <div
            style="text-align: center ; font-size : 20px ; font-weight: bold ; margin: 12px"
          >
            درباره قیمت خانه
          </div>
          <div style="font-size : 16px; margin: 20px ; padding:12px">
            {{ housemaintext }}
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div>
      <v-carousel cycle dark delimiter-icon="mdi-minus">
        <v-carousel-item v-for="(picitem, i) in slideshowpictahlel" :key="i">
          <h1 style="text-align: center" class="mt-3 mb-0">تحلیل قیمت خانه</h1>
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
    <!-- 
    <div>
      <v-row no-gutters>
        <v-col cols="12">
          <v-carousel
            cycle
            class="myslideshow"
            show-arrows-on-hover
            hide-delimiter-background
            height="auto"
          >
            <v-carousel-item
              v-for="(pic, i) in slideshowpictahlel"
              :key="i"
              :src="pic.src"
              contain
              elevation="24"
              class="sildeshowimg"
              style="boxshadow: 5px #2d3b47 ; border: groove"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div> -->
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
import HouseResult from "@/components/HouseResult.vue";
import houseservices from "@/components/houseservices.vue";
import { authcomputed } from "../store/helper.js";
export default {
  components: {
    HouseResult,
    houseservices
  },
  computed: {
    ...authcomputed
    /*  houseresourceimage(mysrc) {
      return `data:image/png;base64, ${mysrc}`;
    }*/
  },
  data() {
    return {
      houseimage: null,
      houseresource: [],
      housemaintext: null,
      formvaildehome: false,
      slideshowpictahlel: [],
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
      formDatahouse: {
        area: null,
        location: "",
        room: null,
        year: null
      },
      formhosestore: {},
      showkole: true,
      itemsm: [
        "پارس",
        "فرمانیه",
        "بریانک ",
        "زرگنده",
        "ایوانک شهرک غرب",
        "سیدخندان ",
        "قصر ",
        "هفت تیر",
        "سردار جنگل پونک ",
        "گیشا",
        "شهران ",
        "الهیه",
        "تجریش ",
        "بلوار فکوری پونک ",
        "پونک ",
        "جلفا سیدخندان ",
        "جنت آباد مرکزی ",
        "جی ",
        "آذربایجان ",
        "جمهوری ",
        "شهران جنوبی شهران ",
        "بلوار فرهنگ سعادت آباد ",
        "کامرانیه ",
        "فرجام ",
        "محمودیه ",
        "آیت الله کاشانی ",
        "سعادت آباد",
        "فردوس شرق بلوار فردوس ",
        "دریاچه چیتگر ",
        "جمالزده",
        "سنگلج ",
        "شاهین ",
        "جیحون ",
        "پلیس ",
        "مجیدیه جنوبی ",
        "زعفرانیه ",
        "میرداماد ",
        "سازمان برنامه جنوبی سازمان برنامه",
        "بهار ",
        "نارمک ",
        "حکیمیه ",
        "لواسانی فرمانیه ",
        "خیابان امام خمینی سلسبیل جنوبی",
        "اسکندری",
        "مرزداران",
        "پل مدیریت سعادت آباد ",
        "امیریه",
        "شمیران نو",
        "دارآباد",
        "اراج ازگل",
        "سیمون بولیوار پونک",
        "سلسبیل شمالی",
        "وردآورد",
        "قنات کوثر",
        "بلوار فردوس",
        "شهرک راه آهن (گلستان)",
        "خانی آباد",
        "قبا",
        "چهارصد دستگاه پیروزی",
        "ایرانشهر",
        "اباذر آیت الله کاشانی",
        "میرزا بابایی پونک",
        "ظفر ",
        "شهرک ژاندارمری مرزداران ",
        "سوهانک",
        "هاشمی",
        "پرستار پیروزی",
        "فرشته",
        "شهرک غرب",
        "ولنجک",
        "سبلان",
        "خانی آباد نو",
        "لویزان",
        "توحید",
        "عباس آباد",
        "بوکان نیاوران ",
        "آرژانتین",
        "بلوار عدل پونک",
        "شمس آباد ",
        "جماران نیاوران",
        "پیروزی",
        "نو",
        "همیلا پونک",
        "خاوران",
        "سر",
        "باغ فیض",
        "مولوی",
        "افسریه",
        "خراسان",
        "کوهسار",
        "سلسبیل جنوبی",
        "حسین آباد",
        "مسعودیه",
        "قلهک",
        "شهرک شهید باقری",
        "نیاوران",
        "سازمان آب صادقیه",
        "اوین درکه",
        "دولت",
        "بلوار شهرداری سعادت آباد",
        "پل رومی",
        "ازگل",
        "گاندی",
        "شهرک فردوس ",
        "منیریه ",
        "نواب",
        "دهکده المپیک ",
        "ونک",
        "بلوار ارتش",
        "کاشانک",
        "بلوار کشاورز",
        "فردوسی",
        "چیتگر",
        "نبرد شمالی",
        "میدان حر",
        "سازمان برنامه شمالی سازمان برنامه ",
        "پرواز سعادت آباد ",
        "سازمان برنامه",
        "دستغیب ",
        "شهر زیبا ",
        "جردن ",
        "رودکی جنوبی سلسبیل جنوبی ",
        "هاشم آباد",
        "زنجان ",
        "صاحبقرانیه",
        "هروی",
        "شهران شمالی شهران",
        "انقلاب",
        "استاد معین",
        "مینی سیتی",
        "ضرابخانه پاسداران",
        "پاسداران",
        "دربند",
        "چیذر ",
        "کوهک",
        "یاسر نیاوران ",
        "خیابان آزادی",
        "اندرزگو فرمانیه",
        "جمشیدیه نیاوران",
        "یوسف آباد",
        "دروس",
        "درب دوم",
        "دیباجی شمالی",
        "شهرک اکباتان ",
        "ستارخان",
        "شهرآرا",
        "کرمان",
        "دبستان",
        "دولتخواه",
        "توانیر",
        "درختی شهرک غرب",
        "فاطمی",
        "پاستور کارگر جنوبی",
        "قیطریه",
        "صادقیه",
        "اقدسیه",
        "کوی فراز سعادت آباد",
        "ساقدوش پاسداران",
        "شهید عراقی پاسداران",
        "دزاشیب",
        "آجودانیه",
        "باغ فردوس",
        "امیرآباد",
        "اختیاریه",
        "جنت آباد شمالی",
        "جنت آباد جنوبی",
        "طرشت",
        "مجیدیه شمالی",
        "مخبری پونک"
      ],
      formhouseforali: {},
      dataforromina: { currenthouse: {}, price: "", houses: [] },
      metrazrules: [
        value => !!value || "متراژ مورد نظر خود را وارد کنید",
        value => value >= 50 || "متراژ شما باید بزرگتر یا مساوی 50 متر باشد"
      ],
      mataghrulse: [value => !!value || "منطقه مورد نظر خود را وارد کنید"],
      tedadeotaghrules: [
        value => !!value || "تعداد اتاق  مورد نظر خود را وارد کنید",
        value => value >= 1 || "تعداد اتاق ها باید حداقل 1 باشد"
      ],
      salesaketrules: [
        value => !!value || "سال ساخت مورد نظر خود را وارد کنید",
        value =>
          value >= 1200 || "سال ساخت مورد نظر شما باید از سال 1200 به بعد باشد"
      ]
    };
  },
  created() {
    this.$store
      .dispatch("gethouseresource")
      .then(() => {
        this.houseresource = this.houseresourcegetter.imagesAndTexts;
        console.log("im here");
        this.housemaintext = this.houseresourcegetter.mainText;
        //  console.log(this.houseresource.Texts.imagesAndTexts);
        // console.log(this.houseresource.mainText);
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
                .dispatch("gethouseresource")
                .then(() => {
                  this.houseresource = this.houseresourcegetter.imagesAndTexts;
                  console.log("im here");
                  console.log(this.houseresource);
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
    onsubmitinfohouse(event) {
      event.preventDefault();
      //var cleartime;
      this.formhosestore = {
        area: this.formDatahouse.area,
        room: this.formDatahouse.room,
        year: this.formDatahouse.year,
        location: this.formDatahouse.location
      };
      if (this.$refs.formhouse.validate()) {
        this.$store
          .dispatch("senddatahouse", {
            area: this.formDatahouse.area,
            room: this.formDatahouse.room,
            year: this.formDatahouse.year,
            location: this.formDatahouse.location
          })
          .then(() => {
            console.log("yesssss");
            this.formhouseforali = this.houseform;
            console.log(this.formhouseforali);
            this.dataforromina = this.houseform;
          })
          .catch(err => {
            console.log(err.response);
            if (err.response.status === 401 && this.loggedin) {
              this.$store
                .dispatch("refreshtoken")
                .then(() => {
                  console.log("yes it ok");
                  console.log(this.formhosestore);
                  this.$store
                    .dispatch("senddatahouse", {
                      area: this.formhosestore.area,
                      room: this.formhosestore.room,
                      year: this.formhosestore.year,
                      location: this.formhosestore.location
                    })
                    .then(() => {
                      console.log("yes im done");
                      this.formhouseforali = this.houseform;
                      this.dataforromina = this.houseform;
                    })
                    .catch(errrr => console.log(errrr.response));
                })
                .catch(er => {
                  console.log(er);
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
        this.formDatahouse.area = null;
        this.formDatahouse.location = "";
        this.formDatahouse.year = null;
        this.formDatahouse.room = null;
        this.$refs.formhouse.resetValidation();
        this.showkole = false;
      }
    },
    houseresourceimage(mysrc) {
      return `data:image/png;base64, ${mysrc}`;
    },
    onimageinslideshow() {
      var mysrces;
      var myobject;
      console.log("im in func");
      for (let i = 0; i < this.houseresource.length; i++) {
        mysrces = this.houseresourceimage(this.houseresource[i].image);
        console.log(mysrces);
        console.log(i);
        myobject = {
          src: mysrces,
          text: this.houseresource[i].text
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
/*.sildeshowimg {
  height: 100vh;
}
.v-carousel-item img {
  height: 100vh !important ;
}*/
.divlasti {
  max-height: 195px;
  height: 195px;
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
.myslideshow {
  border: 5px solid rgba(45, 59, 71, 1);
  box-shadow: 5px 5px 4px #aaaaaa;
  padding: 3px;
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
