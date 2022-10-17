<template>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post"
    />
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}

</script>

<style scoped>
.post{
    margin-top: 15px;
    border: 2px solid teal;
    padding: 15px;
}
</style>