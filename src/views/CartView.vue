<template>
    <HeaderText title="All Carts" text="Start order now!"></HeaderText>
    <div class="container my-5 ">
        <div class="row ">
            <div class="col-12">
                <!-- <button class="btn btn-primary" type="button">Button</button> -->
                <button class="btn btn-outline-dark" type="button" @click="removeAllCarts()">Remove Items from
                    cart</button>
            </div>
        </div>
    </div>
    <!-- cart -->
    <div class="container" v-if="carts">
        <div class="row" v-for="cart in carts" :key="cart.index">
            <div class="col">
                <div class="card mb-5">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="cart.image" class="img-fluid rounded mx-auto d-block w-25 my-3">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title fs-3">{{cart.title}}</h5>
                                <p class="card-text fs-4">$ {{cart.price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cart -->
</template>

<script>
import HeaderText from '@/components/HeaderText.vue';
export default {
    name: 'CartView',
    data() {
        return {
            carts: [],
        }
    },
    mounted() {
        this.getCart();
    },
    methods: {
        getCart() {
            let cart = localStorage.getItem('myCart');
            let json_cart = JSON.parse(cart);
            // console.log(json_cart)
            this.carts = json_cart;

        },
        removeAllCarts() {
            localStorage.clear();
            location.reload();
        }
    },
    components: { HeaderText }
}

</script>
<!-- <style>
    img{
        height: 30px;
    }
</style> -->