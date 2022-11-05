<template>
  <div class=" crousel">
    <b-carousel
      id="d-block"
      v-model="slide"
      :interval="4000"
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
        caption="WELCOME TO BBDL "
        text="we are here to help your business gorw "
        
        img-src="https://source.unsplash.com/random?landscape,mountain, jungle "  ></b-carousel-slide>
      <b-carousel-slide
      caption="WELCOME TO BBDL "
      text="we are here to help your business gorw "
      img-src="https://source.unsplash.com/random?city, kathmandu, houston, singapore, dubai" ></b-carousel-slide>

    <b-carousel-slide
    caption="WELCOME TO BBDL "
    text="we are here to help your business gorw "
    img-src="https://source.unsplash.com/random?office, desktop, laptop, meeting "></b-carousel-slide>
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

<style>
.b-carousel.img{
 height: 500px;
}
.imagecontroller{
height: 500px;
max-height: ;
}
</style>
