<template>
    <!-- text section -->
    <div class="bg-dark mb-5">
        <div class="container">
            <div class="row">
                <div class=" col-12 text-center py-5">
                    <p class="fs-1 fw-bold text-light">{{title}}</p>
                    <p class="fs-5 text-secondary">{{text}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- text section -->
</template>
<script>
export default {
    name: 'HeaderText',
    props: {
        title: String,
        text: String,
    }
}
</script>