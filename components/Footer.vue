<template>
 
<!-- Footer -->
<footer class=" footer  text-center text-white" id="footer">
    <!-- Grid container -->
  <div class="container p-4"> 
        <h5 >Follow Us </h5>
        <a target="_blank" href="https://www.facebook.com/buddha2042/">
          <img src="../assets/facebook.png">
         </a>
         
         <a target="_blank" href="https://www.twitter.com/buddha.kharel/">
          <img src="../assets/twitter.png">
         </a>
         <a target="_blank" href="https://www.instagram.com/buddhakharel/">
          <img src="../assets/lindkin.png">
         </a> 
         <a target="_blank" href="https://www.youtube.com/buddhakharel/">
          <img class="youtube" src="../assets/youtube.png">
         </a> 
        </div> 

      <!-- Section: Social media -->
  
  

        <p> <span> <a class="link" href="#" v-b-popover.hover.top="' Please Email Your latest  Resume : bbl_llc@hotmail.com  career@bobbyanddev.com'" >Careers</a>  |  <a class="link" href="" v-b-popover.hover.top="' CEO : Buddha Kharel'" >Team</a>  |  <a class="link" href="#" @click="$bvModal.show('bv-modal-contactus')" v-b-popover.hover.top="'USA | CANADA | INDIA | NEPAL'" >Locations</a> |  <a class="link" href="#d-block" v-b-popover.hover.top="'USAID | USPS  | DXC | TXDOF'">Clients</a></span> <br/><span>Phone Number: +1 800-2333-9971</span><br />
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
    padding-top: 15px;

}
img{
  height: 40px;
  width: 40px;
  padding: .5%;
  border: 2px solid #3F51B5;
  border-radius: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  padding: 5px;
  background: #fff;
}

P{
color: rgb(34, 3, 63);
}
.follow img {
  width: 40px;
  height: 40px;
  border: 2px solid #3F51B5;
  border-radius: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  padding: 5px;
  background: #fff;
}


</style>