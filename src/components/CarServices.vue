<template>
  <div>
    <br />
    <h1 style="text-align: center">ماشین های مشابه</h1>
    <div v-if="dataforrominaCar.cars.length != 0">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(sample, i) in dataforrominaCar.cars" :key="i">
          <v-sheet
            height="100%"
            color="white"
            style="display: flex ; justify-contetn : space-between"
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
                      {{ sample.price }}
                    </div>
                    <div style=" margin:40px ; text-align: center ">
                      <v-btn
                        style="background-color:#2d3b47"
                        link
                        :href="sample.link"
                        target="_blank"
                      >
                        مشاهده
                      </v-btn>
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
                      >{{ sample.brand }}
                    </span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:برند</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px"> {{ sample.model }}</span>
                    <span style="font-size : 20px ;color : 	#888888">:مدل</span>
                  </div>
                  <div class="property">
                    <span style="font-size : 20px"> {{ sample.mileage }}</span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:کارکرد</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px ">{{ sample.year }}</span>
                    <span style="font-size : 20px ; color : 	#888888"
                      >:سال تولید</span
                    >
                  </div>
                  <div class="property">
                    <span style="font-size : 20px">
                      {{ sample.body_status }}</span
                    >
                    <span style="font-size : 20px ; color : 	#888888"
                      >:وضعیت خودرو</span
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
                  <v-img contain src="../assets/image (7).png" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div v-else>
      <h2 style="text-align:center ; margin:70px">ماشین مشابهی یافت نشد</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataforrominaCar"],
  data() {
    return {
      samples: []
    };
  },
  methods: {
    samplepage: function(add) {
      window.location.href = add;
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
