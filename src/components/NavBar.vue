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

                <button class="btn btn-outline-dark" type="submit"><i class="fa-solid fa-cart-shopping"></i><span v-if="loc_data_len >1"> ({{loc_data_len}})</span></button>

            </div>
        </div>
    </nav>
    <!-- end nav -->

</template>
<script>

export default {
    name: 'NavBar',

    data(){
        return {
            loc_data_len : Number,
        }
    },
    created() {
        var cart = localStorage.getItem('mycart')
        var loc_data = JSON.parse(cart);
        var loc_data_list = [];
        for (const i in loc_data) {
            // console.log(loc_data[i])
            loc_data_list.push(loc_data[i])
        }
        // console.log(loc_data_list)
        var loc_data_len = loc_data_list.length;
        // console.log(loc_data_len)
        this.loc_data_len = loc_data_len
    }
}
</script>
<style>
.nav-link:hover {
    background-color: rgb(206, 206, 206);
    letter-spacing: 6px;

}
</style>