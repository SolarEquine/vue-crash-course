<template>
    <div v-if="posts.length > 0">
        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove = "$emit('remove', post)"
        />
    </div>
    <div v-else style="color:red">Постов нет :(</div>
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

</style>