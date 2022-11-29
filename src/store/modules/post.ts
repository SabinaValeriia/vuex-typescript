export default {
    actions: {
        async fetchPosts(ctx: { commit: (arg0: string, arg1: any) => void; }, limit = 3) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
            
              );
              const posts = await res.json();

              ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state: { posts: any; }, posts: any) {
            state.posts = posts
        },
        createPost(state: { posts: any[]; }, newPost: any) {
            state.posts.unshift(newPost)
        },
    },
    state: {
        helloMessage: "Hello World",
        posts: []
    },
    getters: {
        validPosts(state: { posts: any[]; }) {
            return state.posts.filter((p: { title: any; body: any; }) => {
                return p.title && p.body
            })
        },
        allPosts(state: { posts: any; }) {
            return state.posts
        },
        
    },
}