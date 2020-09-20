import axios from "axios";

//1. Http request& response 와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

//2. api함수들을 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobswsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAsksList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}


export { fetchNewsList, fetchJobswsList,fetchAsksList};