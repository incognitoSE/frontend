<template>
  <v-row class="dashboard" no-gutters>
    <v-col cols="10">
      <div class="content">
        <router-view />
      </div>
    </v-col>
    <v-col cols="2">
      <NavDrawer />
    </v-col>
  </v-row>
</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  components: {
    NavDrawer
  },
  data() {
    return {};
  }
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
