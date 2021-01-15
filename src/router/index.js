import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/NotFound";
import About from "../components/About";
import App from "../App";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: App },
        { path: "/about", component: About },
        { path: "*", component: NotFound },
    ],
})