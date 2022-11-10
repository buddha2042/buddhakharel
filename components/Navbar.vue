
<template>
  <div >
    <b-navbar  toggleable="lg" type="dark" variant="info"  fixed="top">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="../assets/bobby-dev-low-resolution.png" class="d-inline-block align-top " alt="Kitten">
          <h3> B&D USA LLC</h3>
        </b-navbar-brand>
      </b-navbar>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-modal.modal-1 active>OurServices</b-nav-item>
          <b-modal id="modal-1" title="Our Services ">
            <div class="ourservices">
               1) Streamlined automation via machine learning <br>
               2) Shopping Cart / Online Ordering System / Online Payments <br>
               3) Web Application / Business Software <br>
               4) User Experience (UX) Design <br>
               5) Targeted support on specific products <br>
               6) Virtual face-to-face IT support
           </div>
          </b-modal>
          <b-nav-item @click="$bvModal.show('bv-modal-contactus')" active>ContactUs</b-nav-item>
          <div>
    <b-nav-item v-b-toggle.sidebar-1 active>GetPrice</b-nav-item>
    <b-sidebar id="sidebar-1" title=" SEND REQUIREMENTS" shadow>
      <div class="px-1 py-4">
        <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Services You Looking for </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1) Production Support </option>
                  <option>2) Application Developments</option>
                  <option>3) Software Developments</option>
                  <option>4 ) Website Design </option>
                  <option>5 ) Others </option>
                </select>
              </div>
             
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Please write more  in details</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
              </div>
               <button type="button" class="btn btn-primary btn-lg btn-block">Send</button>
        <b-img src="../assets/bobbyanddev.png" fluid thumbnail></b-img>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">B&D LLC USA </a>
    </div>
       
      </div>
    </b-sidebar>
  </div>

            
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <button type="button" class="btn btn-primary" value="Primary" @click="$bvModal.show('bv-modal-signup')">SignUp</button>
          <button type="button" class="btn btn-dark" @click="$bvModal.show('bv-modal-signin')">Login</button>
          </b-navbar-nav>
       

       
      </b-collapse>
    </b-navbar>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>

.d-inline-block{
  height: 80px;
  width: 160px;


}

.toast{
  text-align: center;
}
img{

}
.ourservices{
  background-color: rgb(4, 12, 85);
  color: white
}
H3{
  color: rgb(145, 54, 8);
}


</style> 