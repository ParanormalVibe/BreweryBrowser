import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'es6-promise/auto'

const store = createStore({
    state() {
        return {
            searchResults: [
                {
                    id: 5494,
                    name: "MadTree Brewing",
                    brewery_type: "regional",
                    street: "3301 Madison Rd",
                    address_2: null,
                    address_3: null,
                    city: "Cincinnati",
                    county_province: null,
                    state: "Ohio",
                    postal_code: "45209-1132",
                    country: "United States",
                    phone: "5138368733",
                    website_url: "http://www.madtreebrewing.com"
                }
            ]
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')