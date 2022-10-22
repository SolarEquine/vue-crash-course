<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div>{{ post.body }}</div>
        </div>
        <div>
            <my-button
            @click="$emit('remove', post)"
            >Удалить</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default{
  components: { MyButton },
    props:{
        post: {
            type: Object,
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>