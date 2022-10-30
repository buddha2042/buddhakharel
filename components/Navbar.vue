
<template>
  <nav class="navbar navbar-expand-lg  sticky-top">
    <div class="logo-holder logo-7">
      <a href="#">
        <i class="fas fa-book-open"></i>
        <div class="left">
          <h3>BBDL-USA</h3>
          <p> Business Services...!</p>
        </div>
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse menu-text d-flex d-none d-sm-none justify-content" >
      <ul class="navbar-nav mr-auto mt-2 mt-lg  ">
        <li class="nav-item active"><a class="nav-link" href="#domestic-service-desk"><span class="fa fa-home fa-lg" ></span> Services</a></li>

                   <li class="nav-item active"><a class="nav-link" href="#domestic-service-desk"><span  ></span>HireUs</a></li>
                   <li class="nav-item active"><a class="nav-link" href="#why choose us"><span ></span>Clients</a></li>

                   <li class="nav-item active"><a class="nav-link" href="#footer"><span class="fa fa-address-card fa-lg" ></span>ContactUs</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>

.navbar{
  background-color: rgb(91, 189, 189);
  color: white;

}
li{
  padding-right: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  font-display: bold;
  font-weight: 150;
  font-language-override: normal;
  font-size: large;
}
.navbar-brand{
  color: white;
  font-size: x-large;
  font-style: inherit;
}
.logo-7 {
  width: 100%;
  display: inline-block;
}
.logo-7 i {
  font-size: 60px;
  display: inline-block;
  float: left;
  margin-right: 5px;
  color: #34495e;
}
.logo-7 .left {
  float: left;
  margin-left: 10px;
  text-align: left;
}
.logo-7 a {
  color: #545454;
}
.logo-7 .left h3 {
  font-family: 'Muli', sans-serif;
  font-weight: 400;
  font-size: 25px;
  text-transform: uppercase;
  color: #5c5cee;
  font-style: italic;
  font-display: filters;
}
.logo-7 .left p {
  text-align: right;
  font-size: 14px;
  color: #323030;
  font-style: italic;
  border-top: 1px dashed #919191;
  letter-spacing: 2px;
  padding-top: 3px;
  font-family: 'Lobster', cursive;
}

</style> 