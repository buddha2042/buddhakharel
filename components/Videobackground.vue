<template>
  <div>
    <div  >
 <div class="carousel-inner"> 
   <div class="carousel-item active">
     <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
       <source src="../assets/video4.mp4" type="video/mp4">
       </video>
  
     <div class="container ">
       <div class="carousel-caption" >
         <form class="main" >
          
           <h5 class="head">Get A Free Quote Today </h5><br>
           <input type="text" class="" name="Full name" placeholder="Your Business Name.." ><br><br>
           <input type="text" id="lname" name="lastname" placeholder="Phone Number & Email"><br><br><br>
           <h6 aria-controls="red"> Where Is Your Business Located ? </h6>
           
           <input type="text" id="lname" name="lastname" placeholder=" Your Country"><br><br>
           <h6  class="ico.fab" aria-controls="red" style="color: rgba(228, 226, 244, 0.872)" > Services You Looking For </h6>
           <select sm="4" id="country" name="Please Select Services" class="sub">
            
           <option value="usa">Web Application / Website Design </option>
           <option value="usa">User Experience (UX) Design</option>
           <option value="usa">Mobile-optimized Website</option>
           <option value="australia">Content Management System</option>
           <option value="canada">Shopping Cart / Online Ordering System / Online Payments</option>
           <option value="canada">Not Listed.. Please Write in below box</option>
           </select><br>
           <h6 aria-controls="red" style="color: rgba(228, 227, 237, 0.872)"> More Details</h6>
           <textarea class="inpt" name="subject" placeholder="Please provide us more detail about Requirement" style="height:100px"></textarea> <br>
           <button class="sign-up-l" @click="$bvModal.show('bv-modal-signin')" >Get Started</button>
         </form>
         </div>
       </div>
     </div>
     </div>
   </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>
h5{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(164, 208, 208);
  padding-top: 200px;
}
video{
  height: 600px; 
  width: 100%;
  min-height: fit-content;
  min-width: max-content;



}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main{

  margin: auto;
  margin-top: 100px;
 box-shadow: 2px 2px 10px  #00000080;
 transform: rotateZ(-180deg) rotateZ(0deg)  rotateX(180deg) rotateY(180deg) rotateX(360deg); 
 transform-style: preserve-3d;
 transition: all 2s;
}
.main:hover {
  transform:rotateX(0deg) rotateX(0deg) rotateZ(0deg) ; 
}
.sign-up{
  width: 25%;
  height: 32px;
  background-color: #53e935;
  transform-style: preserve-3d;
}
.head{
  color: #C9D8F3;
  font-size: 30px;
  text-align: center;
  padding: 20px 0;
  background-image: linear-gradient(135deg, #007991 30%, #78ffd6 90%);
  box-shadow: 2px 2px 10px  #00000080;
}
.btn{

  width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 15px 15px;
  position: relative;
  text-decoration: none;
  font-size: 20px;
  color: #C9D8F3;
  border-radius: 10px;
}
.ico{
  padding-left: 70px;
  position: relative;
}
.ico .fab{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  line-height: 50px;
  padding: 0 15px 0 15px;
  background-color: #00000021;
  border-radius: 10px 0 0 10px;
}
.hov1:hover{
  background-color: #1b4192;
  box-shadow: inset 0 3px 0 #00000033;
}
.hov2:hover{
  background-color: #248ddd;
  box-shadow: inset 0 3px 0 #00000033;
}
.hov3:hover{
  background-color: #e93d26;
  box-shadow: inset 0 3px 0 #00000033;
}
.sign-up-l{
  width: 50%;
  height: 32px;
  transform-style: preserve-3d;
  background: linear-gradient(
  60deg,
 
  #5073b8,
  #1098ad,
  #07b39b,
  #6fba82
);
}
.inpt{
  width: 80%;
  margin: 20px 10%;
  position: relative;
  border-bottom: 1px solid #FD2E62;
}
.inpt input{
  width: 100%;
  height: 45px;
  border: none;
  background-color: #fff;
  outline: none;
  color: #B0B0B0;
  font-size: 16px;
}
.inpt input:focus::-webkit-input-placeholder{
  color: #B0B0B0;
  font-size: 16px;
  font-weight: bold;
  -webkit-transform: translateY(-15px);
  transform: translateY(-15px);
}
.inpt input::placeholder{
  font-size: 16px;
  color: #B0B0B0;
}

.sub{
  width: 80%;
  height: 40px;
  margin: 20px 10%;
  background: linear-gradient(
      60deg,
      #f79533,
       #a166ab,
      #5073b8,
      #f37055,
      #ef4e7b,
     
      #1098ad,
      #07b39b,
      #6fba82
    );
  box-shadow: 2px 2px 10px  #00000080;
  border: none;
  color: #C9D8F3;
  border-radius: 25px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}
.sub:hover{
    color: #1fffc7;
    background: linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);
}

</style>