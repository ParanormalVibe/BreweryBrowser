import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'es6-promise/auto'

const store = createStore({
    state() {
        return {
            searchResults: [],
            searchQuery: ''
        }
    },
    mutations: {
        updateSearchQuery(state, query) {
            state.searchQuery = query
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')