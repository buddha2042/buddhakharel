<template>
   <div>
    


      

 <b-modal id="bv-modal-signin" hide-footer title="CLIENT LOGIN">
   
    <div class="d-block text-center">
      <div class="container">
    <label for="uname"><b>Username</b></label><br>
    <input type="text" placeholder="Enter Username" name="uname" required><br>

    <label for="psw"><b>Password</b></label><br>
    <input type="password" placeholder="Enter Password" name="psw" required> <br><br>
        
    <button type="submit">Login</button><br><br>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
      </div>
   </div>
</b-modal>
   






















  
 <b-modal id="bv-modal-signup" hide-footer title="NEW CLIENT REGISTER">
   
   <div class="a-block text-center">
     <div class="container">
   <label for="email"><b>Email</b></label><br>
   <input type="text" placeholder="Enter Email" name="email" id="email" required><br>

   <label for="psw"><b>Password</b></label><br>
   <input type="password" placeholder="Enter Password" name="psw" id="psw" required> <br><br>
   <label for="psw-repeat"><b>Repeat Password</b></label> <br>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>

    <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account?  <br><button class="loginbutton"  @click="$bvModal.show('bv-modal-signin')" >Sign in</button></p>
  
  
     </div>
  </div>
</b-modal>


<b-modal id="bv-modal-contactus" hide-footer title="CONTACT INFO">
   
   <div class="b-block ">
     <div >
      <h5>Email:info@bobbyanddev.com</h5><br>
      <h6>Phone:713-302-8888</h6><br>
      <h3><a href="https://www.google.com/maps/houstondowntown">DIRECTION</a></h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55445.4703749086!2d-95.46769122763659!3d29.709854072787216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf14d882c6a7%3A0x1163d8fa8c3d2bb0!2sHouston%20MBDA%20Business%20Center!5e0!3m2!1sen!2sus!4v1667854446312!5m2!1sen!2sus" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     
  </div>
</b-modal>
  
</div>

</template>

<script>
   export default {
      
   }
</script>

<style  scoped>
.d-block{
   background-color: aqua;


}

.a-block{
   background-color: rgb(41, 164, 16);
}

.loginbutton{
   background-color: rgb(20, 20, 229);
   color: aliceblue;
}

.b-block{
  text-align: center;
  background-color: azure;
}
</style>