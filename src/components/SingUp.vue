<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" rounded small text style="color: #ffffff"
        >ثبت نام</v-btn
      >
    </template>
    <v-form @submit="onsubmitinfsingup" ref="singupform" v-model="formvalidi">
      <v-container style="background-color:#C4c4c4">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <span class="headline" style="color: rgba(45, 59, 71, 1)"
              ><h1>ثبت نام</h1></span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    placeholder="نام و نام خانوادگی"
                    type="text"
                    v-model="formDatasingup.name"
                    required
                    reverse
                    solo
                    class="fa fa-cloud"
                    prepend-inner-icon="mdi-account-circle"
                    :rules="namerules"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    placeholder="ایمیل"
                    type="email"
                    v-model="formDatasingup.email"
                    required
                    prepend-inner-icon="mdi-email"
                    reverse
                    solo
                    :rules="emailrulse"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    placeholder="رمز"
                    :type="showpassword ? 'text' : 'password'"
                    v-model="formDatasingup.password"
                    required
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showpassword = !showpassword"
                    reverse
                    solo
                    :rules="[passwordrules.required, passwordrules.password]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <div v-if="errors.length == 1">
            <!--  <h3>{{ errors[0] }}</h3>-->
            <v-alert dense outlined type="error">
              کاربری با این ایمیل وجود دارد
            </v-alert>
          </div>
          <div v-if="succ.length != 0">
            <v-alert dense outlined type="success"> {{ succ }}</v-alert>
          </div>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="rgba(45, 59, 71, 1)"
              :disabled="!formvalidi"
            >
              <h3 style="color:#CFD8DC">ثبت نام</h3></v-btn
            >
            <v-btn color="rgba(45, 59, 71, 1)" @click="onclosesingup">
              <h3 style="color:#CFD8DC">بستن</h3>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-form>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      formvalidi: false,
      dialog: false,
      showpassword: false,
      paternpassword: "",
      formDatasingup: {
        name: "",
        email: "",
        password: ""
      },
      errors: [],
      succ: [],
      namerules: [
        value => !!value || "لطفا نام و نام خانوادگی خود را وارد کنید",
        value =>
          value.length >= 5 ||
          "نام و نام خانوادگی شما باید بیشتر از پنج حرف باشد"
      ],
      emailrulse: [
        value => !!value || "لطفا ایمیل خود را وارد کنید",
        value =>
          value.indexOf("@") !== 0 ||
          "ایمیل شما باید حاوی یک نام کاربری معتبر باشد",
        value => value.includes("@") || "ایمیل شما باید شامل @ باشد",
        value =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "ایمیل شما باید حاوی یک دامنه معتبر باشد",
        value =>
          value.indexOf(".") <= value.length - 3 ||
          "ایمیل شما باید حاوی یک پسوند دامنه معتبر باشد مثلا com , ..."
      ],
      passwordrules: {
        required: value => !!value || "لطفا رمز خود را وارد کنید",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "رمز شما باید حداقل 8 حرف با حداقل یک حرف بزرگ ، یک عدد و یک کاراکتر خاص باشد"
          );
        }
      }
    };
  },
  methods: {
    onsubmitinfsingup(event) {
      event.preventDefault();

      if (this.$refs.singupform.validate()) {
        fetch("http://127.0.0.1:8000/User/profile/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formDatasingup)
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data.length);
            if (typeof data.id != "undefined") {
              this.succ = ".ثبت نام با موفقیت انجام شد";
            }
            this.errors = data.email;
            console.log(data);
          })
          .catch(error => console.log(error));
        this.formDatasingup.name = "";
        this.formDatasingup.email = "";
        this.formDatasingup.password = "";
        this.$refs.singupform.resetValidation();
      }
    },
    onclosesingup() {
      this.dialog = false;
      this.formDatasingup.name = "";
      this.formDatasingup.email = "";
      this.formDatasingup.password = "";
      this.errors = [];
      this.succ = [];
      this.$refs.singupform.resetValidation();
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
