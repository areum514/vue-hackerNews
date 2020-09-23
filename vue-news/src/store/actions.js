
import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";

export default {
  
  FETCH_USERS({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, item) {
    return fetchItemInfo(item)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //#2
  FETCH_LIST({ commit }, pageName) {
    //#3 
    //retrun 이 프로미스의 결과가 체이닝이 되서 
    //ListMixin에 .then()을 의미하게 되지 
    // 순서 보장을 위해 필요 
    return fetchList(pageName)
      .then(({ data }) => {
        //#4
        console.log("4");

        commit("SET_LIST", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
