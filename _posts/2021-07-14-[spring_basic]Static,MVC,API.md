---
title:  "[Spring_basic]Static,MVC,API"
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

# Static

## static?
웹을 html 그대로 static으로 보여주는 방법.  
'resources/static/' 경로에 html파일을 직접 넣어주면 됨.  
스프링 부트에서 항상 Controller가 있는지 확인하고, 없으므로 resources/static/에서 원하는 html을 찾아서 웹브라우저에 올려줌.  
접근하기 위해서는 html 확장자 까지 작성해야함.  

<static 생성하는 파일 위치>  
<img width="359" alt="스크린샷 2021-07-14 오전 12 54 19" src="https://user-images.githubusercontent.com/33629459/125484660-9e4b3a12-c659-409e-bd6d-84a655bd48f8.png">    
이 때, hello-static에 접근하고 싶으면, /hello-static.html로 검색해야함.  

# MVC
## MVC?
Model, View, Controller로 하는 역할을 나누어 둠.  
웹브라우저에서 요청이 오면 항상 Controller를 우선으로 거쳐 작업을 처리한 후 Model이 View로 처리한 작업을 옮기고 웹브라우저로 넘겨줌.  
MVC로 나누는 이유는 프로그램을 개발할 때 MVC를 나누지 않고 개발을하면 굉장히 무거워지기 때문임.  

## Model,Controller
<img width="819" alt="스크린샷 2021-07-14 오전 1 11 02" src="https://user-images.githubusercontent.com/33629459/125487298-cfb5af50-4c09-4697-b018-3d5e055eb59b.png">  
Controller를 사용할 때 항상 `java @Controller` anotation을 반드시 class에 붙여주어야함.  
모델을 이용해 뷰로 데이터를 넘겨줄 때, 항상 적절한 anotationd을 써 주어야함.

```java  
    @GetMapping("hello-mvc")
    public String hello(@RequestParam("name") String name,@RequestParam("old") int old, Model model){
        model.addAttribute("name",name);
        model.addAttribute("old",old);
        return "hello-mvc";
    }
```  

- GetMapping anotation을 반드시 붙여야 함.  
- 데이터를 받을 때는 RequestParam("x")를 사용한다. 그 값은 뒤에 선언한 파라미터로 넘어감.  
- Parameter에 Model은 항상 있어야 함.  
- `model.addAttribute("name",name)`에서  앞의 name은 html에서 받는 attribute name이고, 뒤 name은 Parameter name임.  
- return되는 값을 확인하여 'resources/templates'에서 해당 html을 찾아 적용함.  

데이터를 넘겨주는 역할은 Model이 수행하고, 처리를 하는 역할은 Controller가 수행함.  

## View  
```html  
<html xmlns:th="http://www.thymeleaf.org">
<body>
<p th:text="'hello ' + ${name}">hello! empty</p>
<p th:text="'I\'m ' + ${old} + 'years old'">hello! empty</p>
</body>
</html>
```
위 html은 'resources/templates/hello-mvc.html'이다.  
위 Model, Controller에서 넘겨온 attribute를 ${x}를 활용해 사용할 수 있음

## 정리
웹브라우저에서 요청이 들어오면 스프링 부트에서 해당 Controller를 찾는다.  
해당 Controller에서 처리를 하는데, 넘겨주는 데이터는 model이 관리한다.  
return이 되는 값을 확인하여 viewResolver가 관련 templates를 찾아서 해당 View로 넘겨준다.  

#API

## String API  
```java
    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name){
        return "hello " + name;
    }
```
String을 넘겨주는 API이다. Controller에 구현을 한다.  
이 때 anotation `@ResponseBody`를 반드시 붙여주어야한다. 그러면, viewResolver를 사용하지 않고, HTTP의 BODY에 문자내용을 직접 반환한다.  

실행하는 방법은 위 GetMapping을 한 hello-string로 수행하면 된다.  

<img width="719" alt="스크린샷 2021-07-14 오전 1 39 11" src="https://user-images.githubusercontent.com/33629459/125491723-7d00d0c0-df7e-4787-83ba-f8eac52b4c01.png">  
'http://localhost:8080/hello-string?name=kimjinseop'  
위 처럼 입력 시 hello kimjinseop 화면을 볼 수 있다.

## Object API

```java
    static class Hello{
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
```
위 처럼 object를 생성하였다.  

``` java
    @GetMapping("hello-object")
    @ResponseBody
    public Hello helloObject(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }
```
String을 넘겨주는 API와 동일하게 처리한다.  
실행하는 것도 동일하게 실행해주면 된다.

<img width="721" alt="스크린샷 2021-07-14 오전 1 43 29" src="https://user-images.githubusercontent.com/33629459/125492345-7807c21e-2e89-4222-9173-f127d640f303.png">  
'http://localhost:8080/hello-object?name=jinseop'
입력 후 실행 결과이다. 객체는 Json으로 값이 나오게 된다.  

## 정리
API로 설정하기 위해서는 반드시 anotation을 추가로 붙여주어야한다.  
`@ResponseBody` anotation을 붙여주면 Controller에서 HttpMessageConverter가 처리한다.(viewResolver가 처리안함)  
이 때 넘겨주는 값이 String이면 StringConverter가 Object이면 JsonConverter로 넘긴다.  
Spring에서 Default로 문자를 처리하는 것은 StringHttpMessageConverter, 객체는 MappingJackson2HttpMessageConverter가 처리한다.
이 때 Jackson2이란 Json을 맵핑하는 도구 중 하나이다.  
그 외 다양한 반환형에 따라 여러가지 처리하는 Converter가 있다.
