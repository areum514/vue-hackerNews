import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js"
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //url #값 없애는 것
  routes: [
    //path: url주소
    //component url 주소로 갔을때 표시될 컴포넌트
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView('NewsView'),
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView('AskView'),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView('JobsView'),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});