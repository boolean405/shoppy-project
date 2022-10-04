<template>

    <HeaderText title="All Products" text="Let's start shopping with us"></HeaderText>

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
                        <li><a class="dropdown-item" @click="getAllProducts()">All Products</a></li>
                        <li v-for="(cat,index) in allCatNames" :key="index"><a class="dropdown-item"
                                @click="getCats(cat)">{{cat}}</a>
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
import HeaderText from '../components/HeaderText.vue'
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
        this.getAllProducts();

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

        // all products getdata
        getAllProducts() {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    this.products = response.data;
                    // console.log(this.products[1].id);
                });
        }

    },

    components: { ProductCard, HeaderText }
}

</script>
<style>

</style>