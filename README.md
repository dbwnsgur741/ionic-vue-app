<h1 align="center"> Ionic Simple App </h1>

<h3 align="center"><a href="https://ionicframework.com/docs/intro/cli">Installing Ionic</a></h3>

# 개발환경 

- 운영체제 : ubuntu 18.04 ( AWS EC2 ) 

- Ionic (v) : 6.12.3

- Npm (v) : 6.14.8

- NodeJs (v) : 14.20.0

# init ( 01 / 04 )

- Ionic 설치 

```
$ Ionic start 
$ cd myApp
```


- 설치 후 실행 명령어 ( default port : 8100 ) 

```
$ Ionic serve
```

- AWS 보안 문제인지 문제인지 잘 모르겠으나 외부에서 해당 서버에 접속이 불가하여 옵션을 추가함 

- <a href="https://ionicframework.com/docs/cli/commands/serve#advanced-options">실행 명령어 옵션 보기 </a> 

```
$ Ionic serve --host=0.0.0.0 
```

# Change ionic-vue ( 01 / 06 )

- <a href="https://ionicframework.com/docs/vue/quickstart#build-your-way-with-typescript-or-javascript">TypeScript 를 Javascript 로 변경하기 </a>

- <a href="https://ionicframework.com/docs/theming/color-generator">앱 테마 컬러 설정하기 </a>

- <a href="https://ionicframework.com/docs/api/thumbnail"> 이미지 썸네일 형식 </a>

# install vuex ( 01 / 07 )

```
$ npm install --save vuex/next
```

- Vue.js 상태관리자인 Vuex를 통해 각종 변수 관리 
- store ( 폴더 ) 에서 state() , getter() 를 통해 각각 컴포넌트에 관련된 변수 가져옴

- <a href="https://ionicons.com/"> Ionic 아이콘 </a>