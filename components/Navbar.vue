
<template>
  <div >
    <b-navbar  toggleable="lg" type="dark" variant="info" position="fixed">
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
          <b-nav-item href="#footer" >ContactUs</b-nav-item>
          <b-nav-item class="mb-2" variant="primary" @click="$bvToast.show('example-toast')">GetPrice</b-nav-item>
          <b-toast id="example-toast" title="" static no-auto-hide>
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
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
  
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item @click="show('example-toas')">Login</b-dropdown-item>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
  height: 90px;
  width: 160px;


}


</style> 