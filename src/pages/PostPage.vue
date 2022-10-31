<template>
    <div>
        <h1>Посты</h1>
        <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >Создать пост
            </my-button>

            <my-select
            v-model="selectedSort"
            :options="sortOptions"
            ></my-select>

        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form  
            @create="createPost"
        />
        </my-dialog>

        <post-list 
            :posts="searchAndSortedPosts"
            @remove="removePost"
            v-if="!isLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <!-- <div  class="page-wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            class="page"
            :class="{
                'current_page': page === pageNumber
            }"

            @click="changePage(pageNumber)"
            >{{ pageNumber }}</div>
        </div> -->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";
import MyInput from "@/components/UI/MyInput.vue";

export default {  

    components:{
    PostForm,
    PostList,
    MyInput
},

    data(){
        return{
            posts: [
        ],
        dialogVisible: false,
        isLoading: false,
        selectedSort: '',
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: "body", name: "По описанию"},
            {value: "id", name: "По id"}
        ]
        }

    },

    methods: {
        createPost(post){
            this.posts.push(post);
            this.dialogVisible = false;
        },

        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        // changePage(pageNumber){
        //     this.page = pageNumber;
        // },

        async fetchPosts(){
            try{
                this.isLoading = true;
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                }
                );
                this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                this.posts = response.data;
            }catch(e){
                alert("Ошибка");
            }
            finally{
                this.isLoading = false;
            }
        },
        async loadMorePosts(){
            try{
                this.page +=1;
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                }
                );
                this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                this.posts = [...this.posts, ...response.data];
            }catch(e){
                alert("Ошибка");
            }
        }
    },

    mounted(){
        this.fetchPosts();
    },

    computed:{
        sortedPosts(){
            if (this.selectedSort !== "id"){
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            }
                return [...this.posts].sort((post1 , post2) => post1[this.selectedSort] - post2[this.selectedSort])
        },

        searchAndSortedPosts(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },

    },

    watch:{
        // page(){
        //     this.fetchPosts();
        // }
    }

};
</script>

<style scoped>

.app__btns{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.page-wrapper{
    display: flex;
    margin-top: 15px;
}

.page{
    border: 1px solid black;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.current_page{
    border: 2px solid teal;
}

.observer{
    height: 30px;
}

</style>