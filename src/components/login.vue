<template>
  <div>
    <v-dialog max-width="600px" v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          small
          text
          style="color: #ffffff"
          v-bind="attrs"
          v-on="on"
        >
          ورود
        </v-btn>
      </template>
      <v-form @submit="submitinfo" ref="userinfo">
        <v-container style="background-color:#c4c4c4">
          <v-card>
            <v-card-title class="justify-center">
              <h1>ورود</h1>
            </v-card-title>
            <v-card-text>
              <v-container style="background-color:#ffffff">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      solo
                      style="padding:20px"
                      color="#2d3b47"
                      placeholder=" ایمیل"
                      reverse
                      prepend-inner-icon="mdi-email"
                      :v-model="logininfo.email"
                      :rules="emailRules"
                      required
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      solo
                      placeholder="رمز عبور"
                      style="padding:20px"
                      color="#2d3b47"
                      label=" رمز عبور"
                      reverse
                      prepend-inner-icon="mdi-lock"
                      :append-icon="passfield ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="passfield ? 'text' : 'password'"
                      :v-model="logininfo.password"
                      :rules="passrules"
                      @click:append="passfield = !passfield"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                large
                style="color: #ffffff ; background-color : #2d3b47"
              >
                ورود
              </v-btn>
              <v-btn
                large
                style="color: #ffffff ; background-color : #2d3b47"
                @click="closelogin"
              >
                بستن
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passfield: false,
      dialog: false,
      logininfo: {
        email: null,
        password: null
      },
      emailRules: [
        v => !!v || "ایمیل خود را وارد کنید",
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
          "  ..., com ایمیل شما باید حاوی یک پسوند دامنه معتبر باشد مثلا "
      ],
      passrules: [
        value => !!value || "پسورد خود را وارد کنید",
        value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "رمز شما باید حداقل 8 حرف با حداقل یک حرف بزرگ ، یک عدد و یک کاراکتر خاص باشد"
          );
        }
      ]
    };
  },
  methods: {
    submitinfo(e) {
      e.preventDefault();
      if (this.$refs.userinfo.validate()) {
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.logininfo)
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => console.log(error));
        this.$refs.userinfo.reset();
      }
    },
    closelogin() {
      this.dialog = false;
      this.$refs.userinfo.reset();
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
