<template>
    <HeaderText title="All Carts" text="Start order now!"></HeaderText>

    <div v-if="carts">
        <div class="container my-5 ">
            <div class="row ">
                <div class="col-12">
                    <!-- <button class="btn btn-primary" type="button">Button</button> -->
                    <button class="btn btn-outline-dark float-end" type="button" @click="removeAllCarts()">Remove Items
                        from cart</button>
                </div>
            </div>
        </div>
        <!-- cart -->
        <div class="container">
            <div class="row" v-for="(cart,index) in carts" :key="index">
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
                                    <div>
                                        <button type="button" class="btn btn-outline-dark btn-sm"
                                            @click="cartQtyDecr(cart)">
                                            <i class="fa-solid fa-minus"></i></button>

                                        <span class="mx-5 fs-5">{{cart.qty}}
                                            <span v-if="cart.qty >1">Items</span>
                                            <span v-else>Item</span>
                                        </span>

                                        <button type="button" class="btn btn-outline-dark btn-sm" @click="cart.qty++">
                                            <i class="fa-solid fa-plus"></i></button>


                                    </div>
                                    <p class="my-3">Total : $ {{totalPrice(cart)}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cart -->

        <!-- total amount -->
        <div class="container mb-3">
            <div class="row">
                <div class="col">
                    <p class="float-end">Total amount is : $ {{}}</p>
                </div>
            </div>
        </div>

        <!-- total amount -->

        <!-- check out -->
        <div class="container">
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-outline-dark px-5 float-end">Check Out</button>
                </div>
            </div>
        </div>
        <!-- check out -->
        <!-- {{this.$store.state.local_cart}} -->
    </div>

    <div v-else>
        <h2 class="text-center">You have no added items. Go to shop now!</h2>
        <router-link to="/products">
            <button type="button" class="btn btn-outline-dark px-5 mx-auto d-block my-3">Shop Now
            </button>
        </router-link>
        <img src="../assets/images/cart/girl_no_cart.jpg" class="img-fluid w-25 rounded mx-auto d-block">

    </div>
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
        },

        cartQtyDecr(cart) {
            if (cart.qty > 1) {
                cart.qty--

            }
        },
        totalPrice(cart) {
            var price = cart.qty * cart.price;
            return price.toFixed(2);
        },
        totalAmount(){

         
        }


    },
    components: { HeaderText }
}

</script>
<style>

</style>