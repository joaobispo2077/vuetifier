<template>
    <div class="citation">
        <slot name="author"></slot>
        <slot></slot>
        <slot name="text"></slot>
        <slot name="font"></slot>
    </div>
</template>

<script>
export default {
    activated() {
        alert('citation was activated');
    },
    deactivated() {
        alert('citation was deactivated');
    }
}
</script>

<style scoped>
    .citation {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: blue;
    }
</style>
