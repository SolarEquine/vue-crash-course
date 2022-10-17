<template>
    <div class="post">
        <div><strong>Название^</strong>{{ post.title }}</div>
        <div>{{ post.body }}</div>
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
}
</style>