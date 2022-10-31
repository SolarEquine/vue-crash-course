import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import Post from "@/pages/PostPageId";

const routes = [
    {
        path: '/',
        component: Main,
        name: "Vue 3 course"
    },
    {
        path: '/posts',
        component: PostPage,
        name: "Posts"
    },
    {
        path: '/about',
        component: About,
        name: "About"
    },
    {
        path: '/post/:id',
        component: Post,
        name: `Post`
    },

]

const router = createRouter({
    mode: "history",
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    let documentTitle = `${to.name}`
    if (to.params.id){
        documentTitle = `${to.name} ${to.params.id}`
    }
    document.title = documentTitle
    next()
})

export default router;