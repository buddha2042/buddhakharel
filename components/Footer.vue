<template>
 
<!-- Footer -->
<footer class=" footer  text-center text-white" id="footer">
    <!-- Grid container -->
    <div class="container p-4">
        <h5>Follow Us </h5>
      <!-- Section: Social media -->
      <section class="mb-4">
        <a class="p-icon--github" href="https://facebook.com/buddha2042">Facebook</a>
        <a class="p-icon--twitter" href="https://twitter.com/buddha.kharel">Twitter</a>
        <a class="p-icon--github" href="https://youtube.com/buddha2042">Youtube</a>
        <a class="p-icon--twitter" href="https://twitter.com/buddha2042">Linkdin</a>

 </section>
      <!-- Section: Social media -->
  
  

        <p> <span> <a class="link" href=./employement.html>Careers</a>  |  <a class="link" href="https://nepalusa.org/team.html" >Team</a>  |  <a class="link" href="https://www.nepalusa.org">Locations</a> |  <a class="link" href="https://nepalusa.org/user">Clients</a></span> <br/><span>Phone Number: +1 800-2333-9971</span><br />
          <span>Email: info@nepalusa.org</span>  <br/> www.nepalusa.org</p>

      <!-- Section: Text -->
      <section class="mb-4">
        <p>
            Delivering technology solutions that connect your Business to the world !
        </p>
      </section>
      <!-- Section: Text -->
  
    
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">BBDL LLC USA </a>
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

</style>