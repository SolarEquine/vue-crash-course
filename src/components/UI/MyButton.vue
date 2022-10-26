<template>
<button class="button">
    <slot></slot>
</button>
</template>

<script>
export default{
    name: "my-button",
}
</script>

<style scoped>
.button{
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