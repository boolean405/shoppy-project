<template>

    <div class="container mb-5 " id="details_container">
        <div class="row my-5">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <img :src="product.image" width="300">
            </div>
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="mt-5">
                    <h2 class="my-5">{{product.title}}</h2>
                    <p class="fs-3">$ {{product.price}}</p>

                    <!-- rating -->
                    <RatingComp :product="product" :rating="rating"></RatingComp>
                    <!-- rating -->

                    <p class="fst-italic">{{rating.count}} Sold</p>
                    <p class="mt-3">{{product.description}}</p>

                    <!-- <button type="button" class="btn btn-outline-dark mt-3" @click="addToCart(product)">Add to
                        cart</button> -->
                    <a class="btn btn-outline-dark me-3 mt-3" @click="addToCart(product)"> <i
                            class="fa-solid fa-cart-shopping me-2"></i><span>Add to cart</span></a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// const axios = require('axios')

import axios from 'axios';
import RatingComp from '../components/RatingComp.vue';


export default {
    name: "DetailsView",
    data() {
        return {
            product: [],
            rating: {},
        };
    },
    mounted() {
        this.getProductById();
    },
    methods: {
        getProductById() {
            axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                .then(response => {
                    this.product = response.data;
                    this.rating = response.data.rating;
                    // console.log(this.rating.rate);
                    // console.log(typeof(this.rating.rate));
                });
        },
        addToCart(product) {
            // console.log(product)
            product['qty'] = 1;
            var p_data = product;
            var status = true;

            var cart = localStorage.getItem('myCart');
            if (!cart) {
                var myArr = [];
            } else {
                myArr = JSON.parse(cart);
            }
            for (const p of myArr) {
                if (p_data.id == p.id) {
                    p.qty++;
                    status = false;
                    break;
                }
            }
            if (status) {
                myArr.push(p_data)
            }
            // console.log(p_data);
            localStorage.setItem('myCart', JSON.stringify(myArr))
            // location.reload();
            this.$store.dispatch('getCartData');

        }
    },
    components: { RatingComp }
}
</script>
<style>
/* .row{
    margin-bottom: 100px;
} */
#details_container {
    height: 650px;
}
</style>