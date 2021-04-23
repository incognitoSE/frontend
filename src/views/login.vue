<template>
  <v-app>
  
    <v-content>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title><h1>login</h1></v-card-title>
        <v-card-text
          ><v-form
            ><v-text-field label="username" prepend-icon="mdi-account-circle">
            </v-text-field
          ></v-form>
          <v-form
            ><v-text-field
              label="password"
              :type="showpassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showpassword = !showpassword"
            >
            </v-text-field
          ></v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success">login</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info">sign up</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>

   
  </v-app>
</template>

<script>
export default {

      name: "loginPage",

  components: {},

  data: () => ({
    showpassword: false
  })
};
</script>

<style></style>
