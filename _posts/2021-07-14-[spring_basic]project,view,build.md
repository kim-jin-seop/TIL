---
title:  "[Spring_basic]Static,MVC,A"
excerpt: "Spring 기초"
categories:
    SPRING
tag:
    - SPRING
    - CODE
    - WEB
    - JAVA
header:
    teaser: https://user-images.githubusercontent.com/33629459/125073613-34a98180-e0f7-11eb-9e65-2508acbacfab.png
    og_image: https://user-images.githubusercontent.com/33629459/125073613-34a98180-e0f7-11eb-9e65-2508acbacfab.png
---

위 글은 김영한 개발자님의 "스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술" 강의를 듣고, 배운 내용을 제가 필요할 때 찾기위해 요약한 글 입니다.  

# Spring Project 생성

## 순서
1. start.spring.io로 들어간다.  
2. 세팅을 수행한다. 이 때, add dependencies에서 Spring Web을 반드시 추가한다. (템플릿 엔진은 여러가지 종류가 있음)
3. 스프링 프로젝트를 생성한다.  
4. IntelliJ를 사용하여 생성한 프로젝트를 실행한다.

## 최종 세팅
<img width="1174" alt="스크린샷 2021-07-09 오후 9 04 51" src="https://user-images.githubusercontent.com/33629459/125075299-5efc3e80-e0f9-11eb-9f03-1e8fbcb712f7.png">

## Maven과 Gradle 프로젝트의 차이?
### Maven
Maven은 Apache의 Ant의 대안인 빌드관리 도구이다.
특징으로는 라이브러리를 사용할 때 굉장히 편리하다는 것이다.(라이브러리에서 다른 라이브러리가 필요한 경우가 있는데, 이를 모두 가져와 빌드할 수 있게 도와주기 때문이다.)  
XML코드를 사용한다.


### Gradle
Gradle은 Maven과 Ant를 기반으로 생겨난 프로젝트 빌드관리도구이다.
Groovy 언어를 사용한다.(Groovy는 자바와 굉장히 유사한 스크립트 언어이며 코드가 간결하다.)
구글에 의해 안드로이드 프로젝트 빌드 시스템으로 채택되어있다.  

## 결론 : Gradle이 더 우수하다.
Gradle은 이미 업데이트 된 테스크에 대하여 추가적인 빌드는 수행하지 않으므로 빌드 시간이 훨씬 단축된다.  
큰 프로젝트일수록 Gradle의 빌드 성능이 우수하다.  
Gradle은 Race Condition을 대비해 checksum 기반 캐시를 사용한다.
커스터마이징이 간편하다.(xml보다 groovy가 간결하기 때문)  

# Model, View, Controller  
참고해야 할 페이지 : https://spring.io  
## Welcome Page
resources/static에 index.html로 생성  
## Model, View, Controller
![스크린샷 2021-07-11 오전 12 58 39](https://user-images.githubusercontent.com/33629459/125169011-3cdeeb00-e1e3-11eb-8ced-6e2350cbd821.png)  
- Controller에서 return값이 페이지 이름이 되어야 함.
- Controller에서 처리하면 Model이 attribute를 가지고 View에 넘겨줌.

# Build
## 빌드 실행
1. 프로젝트 파일로 이동
2. ./gradlew build  
3. cd build/libs
4. java -jar ~.jar 실행
나중에 빌드 후 해당 jar파일만 넘겨주면 끝.  


## 빌드 삭제
./gradlew clean
