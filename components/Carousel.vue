<template>
  <div class="container-fuild" data-ride="carousel" >
    <b-carousel
      id="b-carousel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#rgb(5, 74, 87)"
      img-width="100%"

     


     
  
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div class="imagecontroller">
      <b-carousel-slide class="first"
        caption="WELCOME TO B&D "
        text="we are here to help your business grow "
      
        img-src="../assets/it1.jpg"  
        >
      </b-carousel-slide>
        
      <b-carousel-slide class="second"
      caption="LET US HELP YOUR BUSINESS "
      text=" We help envision your future, build the business case and articulate the plan to get you there. "
      img-src="../assets/it.jpg">
      </b-carousel-slide>

      <b-carousel-slide class="third"
    caption="COMING NEW SERVICES THAT  "
    text="provides audit & assurance, consulting, risk and financial advisory, risk management, etc... "
    img-src="../assets/it2.jpg">
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
max-height: 60vh;
  min-height: fit-content;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);



}
.second{
  max-height: 60vh;
  min-height: fit-content;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);

  
}
.third{
  max-height: 60vh;
  min-height: fit-content;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);

    
  }
.image-slider{
  padding-bottom: 50px;
  padding-top: 80px
}
.container-fuild{
  display: inline-block;
  width: 100%;
  background-color: rgb(5, 74, 87);


  }



</style>

