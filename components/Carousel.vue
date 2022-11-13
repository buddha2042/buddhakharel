<template>
  <div class="image-slider">
    <b-carousel
      id="d-block"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="100%"

     
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div class="imagecontroller">
      <b-carousel-slide class="first"
        caption="WELCOME TO B&D "
        text="we are here to help your business grow "
      
        img-src="https://source.unsplash.com/random?cityhall, congress, dc, new-york, goveronment building "  >
      </b-carousel-slide>
        
      <b-carousel-slide class="second"
      caption="LET US HELP YOUR BUSINESS "
      text=" We help envision your future, build the business case and articulate the plan to get you there. "
      img-src="https://source.unsplash.com/random?city, kathmandu, houston, singapore, dubai" >
      </b-carousel-slide>

      <b-carousel-slide class="third"
    caption="COMING NEW SERVICES THAT  "
    text="provides audit & assurance, consulting, risk and financial advisory, risk management, etc... "
    img-src="https://source.unsplash.com/random? river, hill, gungle, mountian, beach, ">
      </b-carousel-slide>
      
    </div>
    </b-carousel>
</div>

</template>

<script>
  export default {

    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }


</script>




<style  scoped>

.first{
max-height: 400px;
min-height: fit-content;


}
.second{
  max-height: 400px;
  min-height: fit-content;

}
.third{
  max-height: 400px;
  min-height: fit-content;

    
  }
.image-slider{
  padding-bottom: 50px;
  padding-top: 80px
}


</style>

