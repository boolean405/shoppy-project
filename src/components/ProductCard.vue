<template>
    <div class="card p-3 mt-5 mb-3">
        <img :src="product.image" class="card-img-top" height="300">
        <div class="card-body">
            <h6 class="card-title">{{product.title.substr(0,20)}}</h6>
            <p class="card-text mt-3">$ {{product.price}}</p>
            <RatingComp :product="product" :rating="rating"></RatingComp>
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
            var p_data = product;
            // var id = product.id;
            // var title = product.title;
            // var price = product.price;
            // var image = product.image;

            // var p_data = {
            //     id: id,
            //     title: title,
            //     price: price,
            //     image: image,
            //     qty: 1
            // }

            var cart = localStorage.getItem('mycart'); //string

            if (!cart) {
                var cart_list = [];

            } else {
                cart_list = JSON.parse(cart);
            }
            cart_list.push(p_data);
            localStorage.setItem('mycart', JSON.stringify(cart_list));

            location.reload();



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