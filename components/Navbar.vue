
<template>
  <div >
    <b-navbar  toggleable="lg" type="dark" variant="info"  fixed="top">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="../assets/logo.png" class="d-inline-block align-top " alt="Kitten">
        </b-navbar-brand>
      </b-navbar>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-modal.modal-1>OurServices</b-nav-item>
          <b-modal id="modal-1" title="Our Services">
            <div class="">
               1) Streamlined automation via machine learning <br>
               2) Shopping Cart / Online Ordering System / Online Payments <br>
               3) Web Application / Business Software <br>
               4) User Experience (UX) Design <br>
               5) Targeted support on specific products <br>
               6) Virtual face-to-face IT support
           </div>
          </b-modal>
          <b-nav-item @click="$bvToast.show('example-toast')">ContactUs</b-nav-item>
          <b-toast id="example-toast" title="BBDL LLC USA" static no-auto-hide><div class="toast">
            <h3>17018 Thirsk Pl</h3><br> <h4>Richmond, TX 77407 USA </h4><br><h5>phone: 713-302-9971</h5> <br><li>bbl_llc@hotmail.com</li></div>
            </b-toast>
            



          <b-nav-item class="mb-2" variant="primary" @click="$bvToast.show('second-toast')">GetPrice</b-nav-item>
          <b-toast id="second-toast" title="SEND US REQUIREMENTS" static no-auto-hide>
            <form>
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
                <label for="exampleFormControlTextarea1">Please write in detail</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button >send</button>
              </div>
            </form>
          </b-toast>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
     
  
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em >User</em>
            </template>
            <b-dropdown-item @click="show('example-toas')">LogIn</b-dropdown-item>
            <b-dropdown-item @click="show('example-toas')">SignUp</b-dropdown-item>
       
          </b-nav-item-dropdown>
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
 color: rgb(241, 232, 239);
 
}

</style> 