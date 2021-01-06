<h1 align="center"> Ionic Simple App </h1>
<p align="center"><img src="ionic_logo.png" width="240"></p>

<h3 align="center"><a href="https://ionicframework.com/docs/intro/cli">Installing Ionic</a></h3>

# 개발환경 

- 운영체제 : ubuntu 18.04 ( AWS EC2 ) 

- Ionic (v) : 6.12.3

- Npm (v) : 6.14.8

- NodeJs (v) : 12.20.0

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
$ Ionic serve --host : 0.0.0.0 --port : 82
```
