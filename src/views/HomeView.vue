<template>
  <div class="home">
    <!-- welcome section -->
    <div class="bg-dark">
      <div class="container">
        <div class="row py-5">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
            <p class="fs-1 fw-bold text-light">Welcome Shoppy</p>
            <p class="fs-5 text-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ipsam nostrum laborum voluptas nihil
              perferendis recusandae ut nam nulla est eveniet exercitationem, voluptates a quae facilis dolorum autem
              accusamus beatae iste minima asperiores enim corrupti. Enim a nesciunt, sunt maxime mollitia,
              necessitatibus officiis rerum tempora ipsam perferendis debitis iure numquam!
            </p>
            <a href="/products"> <button class="btn btn-outline-light mt-3">Shop Now</button>
            </a>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img src="../assets/images/welcome_pic.jpg" alt="Welcome img" class="img-fluid">
          </div>
        </div>
      </div>

    </div>
    <!-- welcome section -->

    <!-- quality -->
    <div class="container-fluid my-5">
      <div class="row">

        <!-- title -->
        <div class="text-center">
          <h2>Product Quality</h2>

        </div>

        <div class="row text-center ">
          <!-- quality -->
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
            <h4>Best Quality</h4>

            <i class="fa-solid fa-medal fa-5x"></i>
          </div>

          <!-- design -->
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
            <h4>Latest Design</h4>
            <i class="fa-solid fa-palette fa-5x"></i>
          </div>

          <!-- reliability -->
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
            <h4>Reliability</h4>
            <i class="fa-solid fa-handshake fa-5x"></i>
          </div>

          <!-- warranty -->
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
            <h4>1 Year Warranty</h4>
            <i class="fa-solid fa-certificate fa-5x"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- quality -->

    <!-- service -->
    
    <!-- service -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView'
  // components: {
  //   HelloWorld
  // }
}
</script>
