<template>

    <!-- text section -->
    <div class="bg-dark">
        <div class="container">
            <div class="row">
                <div class=" col-12 text-center py-5">
                    <p class="fs-1 fw-bold text-light">All Products</p>
                    <p class="fs-5 text-secondary">Let's start shopping with us
                    </p>
                </div>
            </div>
        </div>

    </div>

    <!-- product section -->
    <div class="container text-center" v-if="products.length">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12" v-for="(product,index) in products" :key="index">
                <div>
                    <div class="card p-3 mt-5 mb-3 ">
                        <img :src="product.image" class="card-img-top " height="300">
                        <div class="card-body">
                            <h6 class="card-title">{{product.title.substr(0,20)}}</h6>
                            <p class="card-text">$ {{product.price}}</p>
                            <a href="#" class="btn btn-outline-dark">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- product section -->


</template>

<script>

const axios = require('axios')

export default {
    name: 'ProductsView',

    data() {
        return {
            products: [],
        }
    },
    mounted() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.products = response.data
                // console.log(this.products[1].id);
            })
    }
}
</script>
<style>
    .card:hover{
        background-color: rgb(228, 236, 241);
        cursor: pointer;
    }
</style>