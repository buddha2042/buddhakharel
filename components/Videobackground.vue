<template>
  <div>
    <div  >
 <div class="carousel-inner"> 
   <div class="carousel-item active">
     <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
       <source src="../assets/background.mp4" type="video/mp4">
       </video>
       
     <div class="container ">
       <div class="carousel-caption" >
         <form  >
          
           <h5>Get A Free Quote Today </h5><br>
           <input type="text" id="fname" name="Full name" placeholder="Your Business Name.." ><br><br>
           <input type="text" id="lname" name="lastname" placeholder="Phone Number & Email"><br><br><br>
           <h6 aria-controls="red"> Where Is Your Business Located ? </h6>
           
           <input type="text" id="lname" name="lastname" placeholder=" Your Country"><br><br>
           <h6 aria-controls="red" style="color: rgba(228, 226, 244, 0.872)" > Services You Looking For </h6>
           <select sm="4" id="country" name="Please Select Services">>
            
           <option value="usa">Web Application / Website Design </option>
           <option value="usa">User Experience (UX) Design</option>
           <option value="usa">Mobile-optimized Website</option>
           <option value="australia">Content Management System</option>
           <option value="canada">Shopping Cart / Online Ordering System / Online Payments</option>
           <option value="canada">Not Listed.. Please Write in below box</option>
           </select><br>
           <h6 aria-controls="red" style="color: rgba(228, 227, 237, 0.872)"> More Details</h6>
           <textarea id="subject" name="subject" placeholder="Please provide us more detail about Requirement" style="height:100px"></textarea> <br>
           <button @click="$bvModal.show('bv-modal-signin')" >Get Started</button>
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

</style>