<template>
    <div>
        <div class="  logo-container "  >
            <!-- <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"  >
       <source src="../assets/video4.mp4" type="video/mp4" >
       </video> -->
   
          
            <p class="para"> OUR SISTER COMPANY  </p>
          
            <ul>
              <li>
                <div class="logo-holder logo-1">
                  <a href="">
                    <h3>B $ L</h3>
                    <p>PROPERTY MANAGEMENT</p>
                  </a>
                </div>
              </li>
         
              <li>
                <div class="logo-holder logo-3">
                  <a href="">
                    <h3> HIMALAYA</h3>
                    <p>YOGA CLASS & C</p>
                  </a>
                </div>
              </li>
              
             
            </ul>
          </div>
          <div class="follow">
            <a href="https://facebook.com/buddha2042" target="_blank"><i class="fb_logo img sp_ezjerk sx_440431">
            </i></a>
       
          <!-- <div class="container p-4">
            <h5>FOLLOW US</h5>
         
 
 
        <a target="_blank" href="https://www.facebook.com/buddha2042/">
          <img src="../assets/facebook.png">
         </a>
         <a target="_blank" href="https://www.twitter.com/buddha_kharel/">
          <img src="../assets/twitter.png">
         </a>
         <a target="_blank" href="https://www.youtube.com/buddha2042/">
          <img src="../assets/youtube.png">
         </a>
         <a target="_blank" href="https://www.instagram.com/buddha2042/">
          <img src="../assets/lindkin.png">
         </a> 
         </div> --> </div> 
       </div> 
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Bangers|Cinzel:400,700,900|Lato:100,300,400,700,900|Lobster|Lora:400,700|Mansalva|Muli:200,300,400,600,700,800,900|Open+Sans:300,400,600,700,800|Oswald:200,300,400,500,600,700|Roboto:100,300,400,500,700,900&display=swap');
/* Used Google Fonts */

h1, h2, h3, h4, h5, h6, p{
  margin:0px;
  padding:0px;
}
.logo-container ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display:inline-block;
    padding-top: 0%;
}
.logo-container ul li {
    width: 300px;
    height: 120px;
    background: #fff;
    border-radius: 10px;
    margin: 10px;
    float: left;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);    
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-container ul li a{
  text-decoration:none !important;
  display: inline-block;
}
.logo-holder{
  text-align:center;
}
/* Logo-1 */
.logo-1 h3 {
    color: #e20fad;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 50px;
    line-height:1.3;
}
.logo-1 p {
    font-size: 14px;
    letter-spacing: 8px;
    text-transform: uppercase;
    padding-left: 10px;
    color: #34495e;
    font-weight: 600;
}

/* Logo-3 */
.logo-3 h3 {
    color: #06e70e;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 50px;
    line-height:1.3;
}
.logo-3 p {
    font-size: 14px;
    letter-spacing: 7px;
    text-transform: uppercase;
    background: #34495e;
    font-weight: 400;
    color: #fff;
    padding-left: 5px;
}
/* Logo-4 */
.logo-4 h3 {
    color: #092604;
    font-weight: 300;
    font-size: 50px;
    line-height: 0.65;
    font-family: 'Lobster', cursive;
}
.logo-4 p {
    font-size: 14px;
    margin-left: 50px;
    color: #545454;
    font-weight: 400;
    text-transform: capitalize;
    font-style: italic;
    font-family: 'Mansalva', cursive;
}
/* Logo-5 */
.logo-5 h3 {
    color: #8f342a;
    font-weight: 300;
    font-size: 50px;
    line-height: 0.6;
    font-family: 'Bangers', cursive;
    letter-spacing: 5px;
}
.logo-5 p {
    font-size: 14px;
    margin-left: 0;
    color: #545454;
    font-weight: 400;
    text-transform: capitalize;
    font-style: italic;
    font-family: 'Mansalva', cursive;
    position: relative;
}
.logo-5 p:before {
    position: absolute;
    content: '';
    width: 17px;
    height: 12px;
    background: #545454;
    left: 0px;
    top: 5px;
}
.logo-5 p:after {
    position: absolute;
    content: '';
    width: 17px;
    height: 12px;
    background: #545454;
    right: 0px;
    top: 5px;
}
/* Logo-6 */
.logo-6 h3 {
    color: #1267d5;
    font-family: 'Cinzel', serif;
    font-weight: 300;
    font-size: 30px;
    line-height:1.3;
}
.logo-6 h3 span {
    background: #e74c3c;
    color: #fff;
    display: inline-block;
    line-height: 1.8;
    padding: 0 16px;
}

.follow{

  right:10px;
  bottom:5px;
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


@media only screen and (max-width:736px) {
  body{
      margin:0;
      padding:0;

  }
  .logo-container ul {
      width: 100%;
      text-align: center;
  }
  .logo-container ul li {
      width: 290px;
      margin-left: auto;
      margin-right: auto;
      float: none !important;
  }
  .logo-4 p {
      margin-top: 2px;
  }
  .Logos{
    margin-top:20px;
  }
}

h1.Logos {
    font-weight: 400;
    font-family: 'Bangers', cursive;
    font-size: 30px;
    text-align: center;
    letter-spacing: 3px;
    text-shadow: 2px 2px 0px #2d303a, -2px -2px 0px #2d303a, -2px 2px 0px #2d303a, 2px -2px 0px #2d303a;
    color: rgb(146, 164, 163);
}
p.para {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
    letter-spacing: 3px;
    font-family: 'Lora', serif;
    padding-top: 5px;
    color: #230c92;
}
 .logo-container{
  text-align: center; 
 }
  h5{
    color: #5e144b;
  }


  video{
    max-height: 400px;
    min-height: fit-content;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    max-width: 100%;
    width: 100%;
  
  }
  
</style>