<template>
  <v-row class="dashboard" no-gutters>
    <v-col cols="10">
      
      <div class="content">
        
        <router-view />
      </div>
    </v-col>
    <v-col cols="2">
      <NavDrawer style="width:25%;" />
      
    </v-col>
  </v-row>

</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  components: {
    NavDrawer
  },
  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  })
};
</script>

<style scoped>
.dashboard {
  height: 100%;
  display: flex;

  overflow: hidden;
  position: relative;
}
</style>
