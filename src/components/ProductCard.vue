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
            // console.log(product)
            product['qty'] = 1;
            var p_data = product;


            var cart = localStorage.getItem('myCart');
            if (!cart) {
                var myArr = [];

            } else {
                myArr = JSON.parse(cart);

            }

            myArr.push(p_data)
            // console.log(p_data);
            localStorage.setItem('myCart', JSON.stringify(myArr))
            location.reload();

            // var cart = localStorage.getItem('mycart'); //string
            // if (!cart) {
            //     var cart_list = [];
            //     cart_list.push(p_data);
            // cart_list = JSON.parse(cart);

            // } else {
            // cart_list = JSON.parse(cart);
            // console.log(cart_list)
            // for (let i in cart_list) {
            //     console.log(cart_list[i])


            // console.log(cart_list[i]);
            // console.log(i);
            // console.log(cart_list[i].id);


            // if (cart_list[i].id === p_data.id) {
            //     cart_list[i].qty += 1;

            // } else {
            //     cart_list.push(p_data);
            // }

            // }
        }
        // localStorage.setItem('mycart', JSON.stringify(cart_list));
        // location.reload();
        // console.log(cart);

        // }
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