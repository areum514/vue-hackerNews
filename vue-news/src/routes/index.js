import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js"
import bus from '../utils/bus.js'
import {store} from '../store/index.js'
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
      component: NewsView,
      beforeEnter:(to,from,next)=>{
        bus.$emit('start:spinner');
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          })
        // console.log(to);
        // console.log(from);
        // console.log(next);
        // next();
      }
      // component: createListView('NewsView'),
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        console.log(to.name);
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          })
      }
      // component: createListView('AskView'),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error);
          })}

      // component: createListView('JobsView'),
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