<template>

  <!-- start nav -->
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container">

      <a class="navbar-brand pe-5 fs-3 fw-bold" href="/">Shoppy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page">About</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Shop
            </a>

            <ul class="dropdown-menu">
              <li>
                <router-link to="/products" class="dropdown-item">All Products</router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Popular Items</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Arrivals</a>
              </li>
            </ul>
          </li>

        </ul>

        <button class="btn btn-outline-dark" type="submit"><i class="fa-solid fa-cart-shopping"></i> Cart 0</button>

      </div>
    </div>
  </nav>
  <!-- end nav -->

  <router-view />

  <!-- footer section -->
  <footer >
    <div class="bg-dark text-center p-5">
      <div class="row">
        <div class="text-light">
          <p>Copyright © <a href="/">Shoppy</a> | Created by <a href="https://github.com/maungbo404">Bo Bo Aung</a></p>
        </div>
      </div>

    </div>
  </footer>
  <!-- footer section -->

</template>

<style>
  footer a{
    text-decoration: none;
    
  }
</style>
