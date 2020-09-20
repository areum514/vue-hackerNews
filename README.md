# vue-advanced

npm i vue-router --save

main.js - 플러그인과 라이브러리 앱의 구조들을 확인할수 있는 청사진이 되어야 함

router폴터안에 index.js 만들어서 


script 단에서는 ToolBar
tenokate  에서는 vscode에서 자동으로 케밥으로 <too-bar></too-bar> 플러그인 자동으로 되게 해줌 앱의 생상성을 위해 

구성 tip
1. views안에 있는 컴포넌트 들은 페이지에 라우팅 관련 부분만 들어가는게 좋음 

api를 호출할때마다 view 컴포넌트에 axio코드를 남달하겠지..!! 그래서 src/api/index.js를 따로 두어서 여기서 


this
자바스크립트는 기본적으로 전역을 가르킴
화살표 함수 this 
 this 4가지와 화살표 함수의 this

 객체생성과 비동기에서는 전역을 가르키지않고 우리가 알고있는 지역을 가르켜.. 좀더 찾아보자


다우나믹 라우팅 매칭
1. views/UserView.vue 생성 하고 route의 param은 거를 api 파라미터로 넘겨서 호출하기
created(){
  const userName=this.$route.params.id
  this.$store.dispatch('FETCH_USERS',userName);
  }

2. api/index.js에 
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

3. store 에서 FETCH_USERS
FETCH_USERS({commit},name){
            fetchUserInfo(name)
            .then(({data})=>{
                commit('SET_USER',data)
            })
            .catch(error=>{
                console.log(error);

            })
        },