<template>
<!--Carousel Wrapper-->
<div  class="carousel  " >

  <ol class="carousel-indicators">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
    
  }
</script>

<style  scoped>
.carousel-item{
  width: 100%;
  height: 305px;
}


</style>