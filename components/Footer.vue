<template>
 
<!-- Footer -->
<footer class=" footer  text-center text-white" id="footer">
    <!-- Grid container -->
    <!-- <div class="container p-4"> -->
        <!-- <h3 >Follow Us </h3>
        <a target="_blank" href="https://www.facebook.com/buddha2042/">
          <img src="../assets/facebook.png">
         </a>
         
         <a target="_blank" href="https://www.instagram.com/blaustern_fotografie/">
          <img src="../assets/twitter.png">
         </a>
         <a target="_blank" href="https://www.instagram.com/blaustern_fotografie/">
          <img src="../assets/lindkin.png">
         </a> 
         <a target="_blank" href="https://www.twitter.com/buddha.kharel/">
          <img class="youtube" src="../assets/youtube.png">
         </a> -->
        <!-- </div> -->

      <!-- Section: Social media -->
  
  

        <p> <span> <a class="link" href="#" >Careers</a>  |  <a class="link" href="" >Team</a>  |  <a class="link" href="" @click="$bvModal.show('bv-modal-contactus')" >Locations</a> |  <a class="link" href="#d-block">Clients</a></span> <br/><span>Phone Number: +1 800-2333-9971</span><br />
          <span> <a href="#">www.bobbyanddev.com</a></span>  <br/>Email: info@bobbyanddev.com
 </p>
      <!-- Section: Text -->
      <section class="mb-4">
        <p>
            Delivering technology solutions that connect your Business to the world !
        </p>
      </section>
      <!-- Section: Text -->
  
    
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">B&D LLC USA </a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
    export default {

        data () {
    return {
      windowFeatures: {},
      facebookShareOptions: {
        url: 'https://github.com/',
        quote: 'Quote',
        hashtag: '#Github',
      },
      twitterShareOptions: {
        url: 'https://github.com/',
        text: 'Hello world',
        hashtags: ['hash', 'tag'],
        via: 'twitterdev',
      },
      useNativeBehavior: false,
    }
  },
  methods:{
    onClose() {},
    onOpen() {},
    onBlock() {},
    onFocus() {},
  }
        
    }
        

</script>

<style  scoped>
.footer{
    background-color: rgb(89, 154, 154);

}
img{
  height: 40px;
  width: 40px;
  padding: .5%;
}
.youtube{
  height: 54px;
}
P{
color: rgb(34, 3, 63);
}


</style>