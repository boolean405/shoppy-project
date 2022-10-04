<template>

    <!-- start nav -->
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container">

            <a class="navbar-brand pe-5 fs-3 fw-bold" href="/">Shoppy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <router-link to="/" class="nav-link active me-3" aria-current="page">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active me-3" aria-current="page">About</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/products" class="nav-link active me-3" aria-current="page">Shop</router-link>
                    </li>
                </ul>

                <router-link to="/cart">
                    <button class="btn btn-outline-dark" type="submit"><i class="fa-solid fa-cart-shopping"></i>
                        <span v-if="cart_products">
                            <span>
                                ({{cart_products.length}})
                            </span>
                        </span>
                    </button>
                </router-link>

            </div>
        </div>
    </nav>
    <!-- end nav -->

</template>
<script>

export default {
    name: 'NavBar',
    data() {
        return {
            // loc_data_len: Number,
            cart_products: [],

        }
    },
    // props: {
    //     products: Object,
    // },
    mounted() {
        // getCartFromLocal()
        // console.log(this.cart_products);
        var cart_str = localStorage.getItem('myCart')
        var cart_arr = JSON.parse(cart_str);

        // console.log(cart_str);
        if (cart_arr) {
            this.cart_products = cart_arr;
            // if (cart_arr.length > 0) {

            // } else {
            //     console.log('error in local list')
            // }
        } else {
            console.log('ma shi bue')
        }

    },

    // methods: {
    //     getCartFromLocal() {
    //         var cart_str = localStorage.getItem('mycart')
    //         var cart_arr = JSON.parse(cart_str);
    //         console.log(cart_arr.length);
    //         console.log(typeof (cart_arr));
    //         if (cart_arr.length) {
    //             this.cart_products = cart_arr;
    //             console.log('shi tal in cart list')
    //         } else {
    //             console.log('error in local list')
    //         }


    //     }
    // }

}
</script>
<style>
.nav-link:hover {
    background-color: rgb(206, 206, 206);
    letter-spacing: 6px;

}
</style>