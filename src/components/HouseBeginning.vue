<template>
  <div>
    <div id="main_div">
      <img src="../assets/housebeginningimg.jpg" alt="house" />
      <v-row class="divform" justify="center">
        <v-spacer></v-spacer>
        <h1 class="h1class" style="color: rgba(45, 59, 71, 1)">سرویس خانه</h1>
        <v-spacer></v-spacer>
        <v-form class="houseform" @submit="onsubmitinfohouse" ref="formhouse">
          <v-row>
            <v-spacer></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-md-and-down"></v-spacer>
            <v-col cols="11" md="10" lg="11">
              <v-text-field
                placeholder="متراژ"
                class=" ml-9"
                min="50"
                step="1"
                shaped
                v-model.number="formDatahouse.area"
                :rules="metrazrules"
                reverse
                :maxlength="12"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
          </v-row>
          <v-row>
            <v-spacer></v-spacer><v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-md-and-down"></v-spacer>
            <v-col cols="11" md="10" lg="11">
              <v-text-field
                type="text"
                placeholder="منطقه"
                class=" ml-9"
                v-model="formDatahouse.neighberhood"
                :rules="mataghrulse"
                shaped
                reverse
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
              <v-text-field
                placeholder="تعداد اتاق"
                min="1"
                step="1"
                class="ml-9"
                shaped
                v-model.number="formDatahouse.roomnumber"
                :rules="tedadeotaghrules"
                reverse
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
                placeholder="سال ساخت"
                min="1200"
                max="5000"
                step="1"
                class="ml-9"
                shaped
                v-model.number="formDatahouse.year"
                :rules="salesaketrules"
                reverse
                :maxlength="12"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <v-spacer class="hidden-lg-and-up"></v-spacer>
          </v-row>
          <!-- <input
          type="text"
          placeholder="منطقه"
          class="mt-3 mb-3"
          required
          v-model="formDatahouse.neighberhood"
          oninvalid="this.setCustomValidity('منطقه مورد نظر خود را وارد کنید')"
          oninput="this.setCustomValidity('')"
        />
        <input
          type="number"
          placeholder="تعداد اتاق"
          min="1"
          max="150"
          step="1"
          class="mt-3 mb-3"
          v-model.number="formDatahouse.roomnumber"
          required
          oninvalid="this.setCustomValidity('تعداد اتاق  مورد نظر خود را وارد کنید')"
          oninput="this.setCustomValidity('')"
        />
        <input
          type="number"
          placeholder=" سال ساخت"
          min="1200"
          max="2356"
          step="1"
          class="mt-3 mb-3"
          required
          v-model.number="formDatahouse.year"
          oninvalid="this.setCustomValidity('سال ساخت مورد نظر خود را وارد کنید')"
          oninput="this.setCustomValidity('')"
        />-->
          <v-spacer class="hidden-md-and-up"></v-spacer>
          <v-btn
            type="submit"
            style="color: rgba(45, 59, 71, 1)"
            class="btnformhouse ml-12 hidden-md-and-down"
          >
            <h3>تخمین قیمت</h3></v-btn
          >
          <v-spacer class="hidden-md-and-up"></v-spacer>
          <v-spacer class="hidden-lg-and-up"></v-spacer>
          <v-btn
            type="submit"
            style="color: rgba(45, 59, 71, 1)"
            class="btnformhouse mb-2 hidden-lg-and-up"
            small
          >
            <h3>تخمین قیمت</h3></v-btn
          >
          <v-spacer class="hidden-lg-and-up"></v-spacer>
        </v-form>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <HouseResult :formhouseforali="formhouseforali" />
  </div>
</template>

<script>
import HouseResult from "@/components/HouseResult.vue";
export default {
  components: {
    HouseResult
  },
  data() {
    return {
      formDatahouse: {
        area: null,
        neighberhood: "",
        roomnumber: null,
        year: null
      },
      formhouseforali:{

      },
      metrazrules: [
        value => !!value || "متراژ مورد نظر خود را وارد کنید",
        value => value >= 50 || "متراژ شما باید بزرگتر یا مساوی 50 متر باشد"
      ],
      mataghrulse: [
        value => !!value || "منطقه مورد نظر خود را وارد کنید",
        
      ],
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
  methods: {
    onsubmitinfohouse(event) {
      event.preventDefault();
      if (this.$refs.formhouse.validate()) {
        fetch("http://localhost:3000/housedata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formDatahouse)
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            this.formhouseforali=data;
            console.log(this.formhouseforali)
          })
          .catch(error => console.log(error));
           this.$refs.formhouse.reset();
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
h3 {
  font-family: IRANSans !important;
}
h1 {
  font-family: IRANSans !important;
}
div {
  font-family: IRANSans !important;
  text-align: right;
}
#main_div {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
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
  background-color: rgba(255, 255, 255, 1);
  padding: 5px;
  width: 250px;
  height: 300px;
  max-width: 25%;
  max-height: 80%;
  z-index: 10;
  text-align: center;
  box-shadow: 12px 12px 2px 1px rgba(101, 101, 122, 0.2);
  background-image: linear-gradient(
    to bottom,
    rgb(228, 233, 238),
    rgba(180, 176, 176, 0.75)
  );
  overflow: auto;
}
.btnformhouse {
  background-image: linear-gradient(
    to bottom,
    rgb(228, 233, 238),
    rgba(180, 176, 176, 0.75)
  );
  margin-left: 15px;
}
/**input::placeholder {
  text-align: center;
  color: rgb(127, 148, 167);
}**/

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
  /**border: 2px solid rgb(177, 189, 202);*/
  outline: none;
  background-color: rgb(169, 173, 177);
}
input:hover {
  background-color: rgb(169, 173, 177);
}
@media screen and (max-width: 900px) {
  /** .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }**/
  .divform {
    position: absolute;
    float: right;
    right: 70px;
    top: 4px;
    width: 150px;
    max-height: 90%;
    overflow: auto;
  }

  .h1class {
    font-size: 18px;
    margin-left: 40px;
  }
  .btnformhouse {
    margin-bottom: 4px;
  }
}
</style>
