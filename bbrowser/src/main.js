import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'es6-promise/auto'
import paginatorLogic from './paginatorLogic'

const store = createStore({
    state() {
        return {
            queryHasError: false,
            searchResults: [],
            searchQuery: '',
            paginatorSettings: {
                itemsPerPage: 5,
                pageIndex: 1
            }
        }
    },
    mutations: {
        flagQueryError(state) {
          state.queryHasError = true
        },
        updateSearchQuery(state, query) {
            state.searchQuery = query
        },
        updateSearchResults(state, searchResults) {
            state.searchResults = searchResults
            state.paginatorSettings.pageIndex = 1
            state.queryHasError = false
        },
        updatePageNumber(state, pageNumber) {
            state.paginatorSettings.pageIndex = pageNumber
        }
    },
    getters: {
        currentPage: (state) => {
            return paginatorLogic.getPage(state.searchResults, state.paginatorSettings.pageIndex, state.paginatorSettings.itemsPerPage)
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')