<template>
    <div>
        <h1>{{ $store.state.post.limit }}</h1>
        <div>
            <my-button @click="$store.commit('incrementLikes')">Like</my-button>
            <my-button @click="$store.commit('decrementLikes')">Dislike</my-button>
        </div>
        <h1>Посты</h1>
        <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >Создать пост
            </my-button>

            <my-select
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
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

import MyInput from "@/components/UI/MyInput.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

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

        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),

        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),

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


    },

    mounted(){
        this.fetchPosts();
    },

    computed:{
        ...mapState({
            posts: state => state.post.posts,
            isLoading: state => state.post.isLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            searchAndSortedPosts: 'post/searchAndSortedPosts'
        })
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