<template>
    <div v-if="posts.length > 0">
        <transition-group name="post-list">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove = "$emit('remove', post)"
            />
        </transition-group>
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

.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.2s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.post-list-move{
    transition: all 0.2s ease;
}

</style>