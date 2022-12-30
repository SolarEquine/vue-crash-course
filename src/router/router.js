import Main from "@/pages/Main";
import {createRouter, createWebHashHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostPageId from "@/pages/PostPageId";
import PostPageWithStore from "@/pages/PostPageWithStore";


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/posts',
            component: PostPage
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/post/:id',
            component: PostPageId
        },
        {
            path: "/store",
            component: PostPageWithStore
        }
    ]
})

export default router;