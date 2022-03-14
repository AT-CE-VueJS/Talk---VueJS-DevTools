<template>
    <h1>{{ year }} CE Vue - {{ name }}</h1>
</template>

<script>
export default {
    name: "Credits",
    data() {
        return {
            name: 0,
        };
    },
    props: {
        year: {
            type: Number,
            default: 1994,
        },
    },
    created() {
        this.name = this.$route.params.name;
    },
};
</script>
