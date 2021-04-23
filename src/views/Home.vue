<template>
  <div>
    <HelloWorld />
     <ShowUse />
    <div id="services">
      <ServiceShows />
     
    </div>
    <WhyUse />
    <HowItWorks />
    <div id="questions">
      <Questions />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HowItWorks from "@/components/HowItWorks.vue";
import Questions from "@/components/Question.vue";
import ServiceShows from "@/components/ServiceShows.vue";
import WhyUse from "@/components/WhyUse.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ShowUse from "@/components/ShowUse.vue";
export default {
  components: {
    HowItWorks,
    Questions,
    WhyUse,
    ServiceShows,
    HelloWorld,
    ShowUse
  }
};
</script>
