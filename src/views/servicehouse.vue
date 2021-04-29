<template>
  <div>
    <HouseBeginning />
    <houseservices />
  </div>
</template>

<script>
import HouseBeginning from "@/components/HouseBeginning.vue";
import houseservices from "@/components/houseservices.vue";
export default {
  components: {
    HouseBeginning,
    houseservices
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
