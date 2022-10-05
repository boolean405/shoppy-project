<template>
    <div class="card p-3 mt-5 mb-3 shadow">
        <img :src="product.image" class="card-img-top" height="300">
        <div class="card-body">
            <h5 class="card-title">{{product.title.substr(0,20)}}</h5>
            <p class="card-text mt-3 fs-5">$ {{product.price}}</p>
            <RatingComp :product="product" :rating="rating"></RatingComp>
            <p class="fst-italic fw-light">{{rating.count}} Sold</p>
            <a class="btn btn-outline-dark me-3 mt-3" @click="addToCart(product)">Add to cart</a>
            <router-link class="btn btn-outline-dark mt-3" :to="{name: 'details' ,params: {id: product.id}}">
                Details
            </router-link>

        </div>
    </div>
</template>

<script>
import RatingComp from './RatingComp.vue';

export default {
    name: "ProductCard",
    props: {
        product: Object,
        rating: Object,
    },


    methods: {

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
.card:hover {
    background-color: rgb(228, 228, 228);
    cursor: pointer;
}
</style>