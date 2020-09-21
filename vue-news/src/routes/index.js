import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",//url #값 없애는 것
  routes: [
    //path: url주소
    //component url 주소로 갔을때 표시될 컴포넌트
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name:'news',
      component: NewsView,
    },
    {
      path: "/ask",
      name:'ask',
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
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