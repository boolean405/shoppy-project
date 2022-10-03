<template>
    <!-- rating -->
    <div>
        <div v-if="rating.rate <=1.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <=2.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <3.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <=3.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>

        </div>
        <div v-else-if="rating.rate <=3.5">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>

        <div v-else-if="rating.rate <4.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <=4.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <=4.5">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else-if="rating.rate <=5.0">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>({{rating.rate}})</span>
        </div>
        <div v-else>
            Not recommended
        </div>
    </div>
    <!-- rating -->
</template>
<script>
export default {
    props: {
        product: Object,
        rating: Object,
    }
}
</script>
<style>
.fa-star {
    color: gold;
    padding-right: 10px;
}

.fa-star-half-stroke {
    color: gold;
    padding-right: 10px;

}
</style>