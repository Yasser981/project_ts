import { createApp } from "vue";
import Welcome from "./components/Welcome.vue";
import Crud from "./components/Crud.vue";
import store from "./store/post.ts;
const app = createApp({
    components: {
        Welcome,
        Crud,
    },
}).use.(store).mount("#app");
