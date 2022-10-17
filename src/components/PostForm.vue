<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название">
        
        <input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Описание">
        
        <button 
            class="button"
            @click="createPost" 
            >
            Создать пост
        </button>
    </form>
</template>

<script>
export default{
    data() {
        return{
            post: {
                title: "",
                body: "",
            }
        }
    },

    methods: {
        createPost(){
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            }
        }
    }
}
</script>

<style scoped>
.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}

.form{
    display: flex;
    flex-direction: column;
}

.button{
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color:teal;
    border: 1px solid teal;
    cursor: pointer;
    transition: all .2s linear;
}

.button:hover{
    color: #fff;
    background-color: teal;
}
</style>