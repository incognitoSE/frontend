<template>
  <div>
    <br />
    <h1 style="text-align: center">خانه های مشابه</h1>

    <div v-if="samples">
      <v-carousel>
        <v-carousel-item v-for="(sample, i) in samples" :key="i">
          <v-sheet
            height="100%"
            color="white"
            style="display: flex ; justify-contetn : space-between"
            @click="samplepage(sample.link)"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-col md="4" sm="4" xs="3">
                <v-card-text
                  tile
                  style="color : black ; background-color:white"
                >
                  <div style=" margin:30px">
                    <div class="price">
                      :قیمت
                    </div>
                    <div style=" font-size : 20px ; text-align : center ">
                      $ {{ sample.price }}
                    </div>
                  </div>
                </v-card-text>
              </v-col>
              <v-col md="4" sm="5" xs="6">
                <v-card-text
                  class="justify-left  text-left"
                  tile
                  style="color : black ; background-color:white"
                >
                  <div class="property">
                    <span style="font-size : 20px ; margin-left:10px"
                      >{{ sample.area }}
                    </span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:متراژ</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px">
                      {{ sample.neighbourhood }}</span
                    >
                    <span style="font-size : 20px ;color : 	#888888"
                      >:منطقه</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px"> {{ sample.room }}</span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:تعداد اتاق</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px ">{{ sample.year }}</span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:سال ساخت</span
                    >
                  </div>
                </v-card-text>
              </v-col>
              <v-col md="4" sm="3" xs="3" id="picture">
                <v-avatar
                  id="pic"
                  tile
                  size="cover"
                  style="margin-right : 40px "
                >
                  <v-img contain src="../assets/homeserviceicon.png" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div v-else>
      <h2>در حال بارگذاری</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      samples: [
        {
          neighbourhood: "اکباتان",
          year: 2001,
          area: 160,
          room: 3,
          price: 45000,
          link: "https://codeforces.com"
        },
        {
          neighbourhood: "اکباتان",
          year: 2001,
          area: 160,
          room: 3,
          price: 45000,
          link: "https://codeforces.com"
        },
        {
          neighbourhood: "انقلاب",
          year: 2009,
          area: 130,
          room: 2,
          price: 1200,
          link: "https://www.quera.ir"
        }
      ]
    };
  },
  methods: {
    samplepage: function(add) {
      window.location.href = add;
    }
  },
  mounted() {
    fetch("http://127.0.0.1:8000/HEstimator/House/1/")
      .then(res => res.json())
      .then(data => (this.samples = data))
      .catch(err => console.log(err.message));
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

.price {
  font-size: 40px;
  padding-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.property {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}

#pic {
  display: inline;
  width: 350px;
  height: 350px;
  max-height: 100%;
  max-width: 100%;
}

@media screen and (max-width: 600px) {
  #picture {
    display: none;
  }
}
</style>
