<template>

    <!-- text section -->
    <div class="bg-dark mb-5">
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

    <!-- cat section -->
    <div class="container">
        <div class="row">
            <div class="col">
                <!-- <h5>Categories</h5> -->

                <!-- dropdown -->
                <div class="dropdown">
                    <button class="btn btn-sm btn-outline-dark dropdown-toggle px-4" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false" id="cat-selected">
                        Categories
                    </button>
                    <ul class="dropdown-menu" v-if="allCatNames">
                        <li><a href="" class="dropdown-item">All Products</a></li>
                        <li v-for="(cat,index) in allCatNames" :key="index"><a class="dropdown-item"
                                @click="getCats(cat)" href="#">{{cat}}</a>
                        </li>
                    </ul>
                </div>
                <!-- dropdown -->
            </div>
        </div>
    </div>
    <!-- cat section -->


    <!-- product section -->
    <div class="container text-center" v-if="products.length">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12" v-for="(product,index) in products" :key="index">
                <div>
                    <ProductCard :product="product" :rating="product.rating"></ProductCard>
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
            allCatNames: [],

        };
    },

    mounted() {

        // all products getdata
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.products = response.data;
                // console.log(this.products[1].id);
            });

        // cats getdata
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                this.allCatNames = response.data;
                // console.log(this.allCatName);
            });
    },

    methods: {

        getCats(cat) {
            axios.get(`https://fakestoreapi.com/products/category/${cat}`)
                .then(response => {
                    this.products = response.data;
                    console.log(this.catProducts);
                });
        },

    },

    components: { ProductCard }
}

</script>
<style>

</style>