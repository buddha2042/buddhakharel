<template>
    <b-carousel
      id="d-block"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-max-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div class="imagecontroller">
      <b-carousel-slide 
        caption="WELCOME TO B&D "
        text="we are here to help your business grow "
      
        img-src="https://source.unsplash.com/random?landscape,mountain, jungle "  >
      </b-carousel-slide>
        
      <b-carousel-slide
      caption="LET US HELP YOUR BUSINESS "
      text=" We help envision your future, build the business case and articulate the plan to get you there. "
      img-src="https://source.unsplash.com/random?city, kathmandu, houston, singapore, dubai" >
      </b-carousel-slide>

      <b-carousel-slide
    caption="COMING NEW SERVICES THAT  "
    text="provides audit & assurance, consulting, risk and financial advisory, risk management, etc... "
    img-src="https://source.unsplash.com/random?office, desktop, sunset, sunrise,  meeting ">
      </b-carousel-slide>
      
    </div>
    </b-carousel>


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

<style>
.b-carousel.img{
 height: 500px;
}
.imagecontroller{
height: 500px;
max-height: 600px;
}
</style>

    
  }
</script>

<style  scoped>
.carousel-item{
  width: 100%;
  height: 305px;
}


</style>

