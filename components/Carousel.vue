<template>
  <div>
    <body>
      <!-- slider container -->
       <div class="slider">
   
         <!-- slide 1 -->
         <div class="slide">
           <img
             src="https://source.unsplash.com/random?landscape,mountain"
             alt=""
           />
         </div>
   
          <!-- slide 2 -->
         <div class="slide">
           <img src="https://source.unsplash.com/random?landscape,cars" alt="slide1" />
         </div>
   
          <!-- slide 3 -->
         <div class="slide">
           <img src="https://source.unsplash.com/random?landscape,night" alt="slide2" />
         </div>
   
          <!-- slide 4 -->
         <div class="slide">
           <img src="https://source.unsplash.com/random?landscape,city" alt="slide3" />
         </div>
   
          <!-- Control buttons -->
         <button onclick="#slide" class="btn btn-next"></button>
         <button class="btn btn-prev"></button>
       </div>
     </body>
  </div>
</template>

<script>
  export default {
    
    
  }
</script>

<style  scoped>

.slider {
  width: 100%;

  height: 350px;
  position: relative;
  /* overflow: hidden; */
}

.slide {
  width: 100%;

  height: 350px;
  position: absolute;
  transition: all 0.5s;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  z-index: 10px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
}

.btn:active {
  transform: scale(1.1);
}

.btn-prev {
  top: 45%;
  left: 2%;
}

.btn-next {
  top: 45%;
  right: 2%;
}
</style>