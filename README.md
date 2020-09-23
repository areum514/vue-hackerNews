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
1. views/UserView.vue 생성 하고 
2. 라우터에 ItemView로 갈수 있는 라우터 정보를 등록 
{
    path:'',
    component:,
}

3. 해당 페이지 컴포넌트로 이동햇을때 받아온 param를 이용해서 페이지에 데이터를 표시 
created(){
  const userName=this.$route.params.id
  this.$store.dispatch('FETCH_USERS',userName);
  }

4. api/index.js에 
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

5. store 에서 FETCH_USERS
FETCH_USERS({commit},name){
            fetchUserInfo(name)
            .then(({data})=>{
                commit('SET_USER',data)
            })
            .catch(error=>{
                console.log(error);

            })
        },


HOC 하이오더컴포넌트 컴포넌트 로직을 재사용하기 위한 고급 기술

리팩토링 4 - 데이터 호출과 UX
[데이터 호출 시점]
1. 컴포넌트 라이프 사이클 훅
	- created: (컴포넌트가 생성)ㄷ되자마자 호출되는 로직
2. 라우터 네비게이션 가드
	- 특정 url로 접근하기 전의 동작을 정의하는 속성(함수)




Netlify를 이용한 배포 실습
0. npm run build 
1. basedirectory 설정 잘해주기 
2. vuecli 에서 depolyment 관련 문서 보기 

.env 파일을 이용해 데이터 보호하기 
//env 환경 변수 파일을 이용한 옵션 변경 방법
//VUE_를 붙이면 process.env.VUE_APP_TITLE 이런식으로 사용 가능함 그럼 출력은 HELLO 나오징~ 
VUE_APP_TITLE=HELLO