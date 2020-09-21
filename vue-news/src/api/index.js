import axios from "axios";

//1. Http request& response 와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

//2. api함수들을 정리

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}


export {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
};