<template>
    <div class="card p-3 mt-5 mb-3">
        <img :src="product.image" class="card-img-top" height="300">
        <div class="card-body">
            <h6 class="card-title">{{product.title.substr(0,20)}}</h6>
            <p class="card-text">$ {{product.price}}</p>
            <a href="#" class="btn btn-outline-dark me-3">Add to cart</a>
            <a href="#" class="btn btn-outline-dark">Details</a>

        </div>
    </div>
</template>

<script>

export default {
    name: "ProductCard",
    props: {
        product: Object,
    },

}

</script>

<style>
.card:hover {
    background-color: rgb(228, 228, 228);
    cursor: pointer;
}
</style>