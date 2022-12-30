<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div  class="post_text">{{ post.body }}</div>
            <div>ID: {{post.id}}</div>
        </div>
        <div class="post_controls">
            <my-button
            @click="$router.push(`/post/${post.id}`)"
            style="margin-right: 15px;"
            >Открыть</my-button>
            <my-button
            @click="$emit('remove', post)"
            >Удалить</my-button>
        </div>
    </div>
</template>

<script>

export default{
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

.post_controls{
    min-width: 180px;
}
</style>