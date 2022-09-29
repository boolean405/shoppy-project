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
                  <ProductCard :product="product"></ProductCard>
                </div>
            </div>
        </div>
    </div>
    <!-- product section -->


</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
const axios = require('axios')

export default {
    name: "ProductsView",
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
            this.products = response.data;
            // console.log(this.products[1].id);
        });
    },
    components: { ProductCard }
}
</script>
<style>
    .card:hover{
        background-color: rgb(228, 236, 241);
        cursor: pointer;
    }
</style>