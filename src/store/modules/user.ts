export default {
    actions: {
        async fetchUsers(ctx: {commit:(arg0: any, arg1: any) => void;}, limit = 6) {
            const resS = await fetch(
                "https://jsonplaceholder.typicode.com/users?_limit=" + limit
            
              );
              const users = await resS.json();

              ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state: { users: any; }, users: any ) {
            state.users = users;
        }
    },
    state: {
        users: []
    },
    getters: {
        validUsers(state: { users: any[]; }) {
            return state.users.filter((p: { name: any; username: any; }) => {
                return p.name && p.username 
            })
        },
        allUsers(state: { users: any; }) {
            return state.users
        },
        
    },
    
}