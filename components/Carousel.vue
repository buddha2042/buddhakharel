<template>
<<<<<<< HEAD
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

=======
<!--Carousel Wrapper-->
<div  class="carousel  " >

  <ol class="carousel-indicators">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
>>>>>>> ca8b239a9b187140dffa006e88346f3ecf7ee008
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button  class="btn btn-primary">Submit</button>

</form>
      
    </ol>
    <!--/.Indicators-->
    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <video class="video-fluid" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="carousel-item">
        <video class="video-fluid" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="carousel-item">
        <video class="video-fluid" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  
  </div>
  <!--Carousel Wrapper-->
</template>

<script>
  export default {
<<<<<<< HEAD
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
=======
    
  }
</script>

<style  scoped>
.carousel-item{
  width: 100%;
  height: 305px;
}


</style>
>>>>>>> ca8b239a9b187140dffa006e88346f3ecf7ee008
