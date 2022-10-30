<template>
<!-- Footer -->
<footer class=" footer  text-center text-white" id="footer">
    <!-- Grid container -->
    <div class="container p-4">
        <h2>Follow Us </h2>
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
      
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
            >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>

        <s-twitter
             
        >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
            >
                <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
            </svg>
        </s-twitter>

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
      <a class="text-white" href="https://mdbootstrap.com/">BBBL LLC USA </a>
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
    background-color: rgb(7, 117, 117);

}
.link{

    background-color: white;
    padding-inline-end: 0%;
}

.link.hover{

}

</style>