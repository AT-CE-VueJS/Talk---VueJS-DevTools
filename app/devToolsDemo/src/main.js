import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import App2 from "./App2.vue";
import router from "./router";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
});

createApp(App).use(router).use(store).mount("#app");
createApp(App2).mount("#app2");
