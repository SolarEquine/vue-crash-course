<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar_inner">
                <div class="nav_item"><router-link to="/">Vue 3</router-link></div>
                <div class="nav_links">
                    <div class="nav_item"><router-link to="/about">About</router-link></div>
                    <div class="nav_item"><router-link to="/posts">Posts</router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    background-color: teal;
}

.container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.navbar_inner{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav_links{
    display: flex;
    justify-content: space-between;
    width: 20%;
}

a{
    text-decoration: none;
    color: white;
}

a:after{
    content: "";
    display: block;
    height: 1px;
    width: 0%;
    background-color: #fff;
    transition: all .2s linear;
}

a:hover:after{
    width: 100%;
}

.router-link-active:after{
    width: 100%;
}


</style>