---
title:  "[swift_07]함수"
excerpt: "swift의 함수"
categories:
    SWIFT
tag:
    - SWIFT
    - CODE
    - IOS
header:
    teaser: https://user-images.githubusercontent.com/33629459/122415954-4a79ca00-cfc3-11eb-8cc5-dad9c9209a26.jpg
    og_image: https://user-images.githubusercontent.com/33629459/122415954-4a79ca00-cfc3-11eb-8cc5-dad9c9209a26.jpg
---
![thumb-course-Swift](https://user-images.githubusercontent.com/33629459/122415954-4a79ca00-cfc3-11eb-8cc5-dad9c9209a26.jpg)


# 함수

## void형 함수

```
func hello(){
  print("Hello")
}
```
반환하는 타입이 없음

## Return
```
func hello2() -> String{
  return "Say Hello"
}
```
반환하는 타입 : String

## Parameter
```
func add(a:Int, b:Int) -> Int{
  return a + b
}

add(a:3 , b:4)
```
parameter와 argument label이 동일  

## Default parameter
```
func add2(a:Int = 3, b:Int) -> Int{
  return a + b
}
```
a 파라미터에 기본값 3, 만약 argument a에 대입이 없으면 a = 3

## Argument Label
```
func add3(a first:Int, _ second:Int) -> Int{
  return first + second
}
add3(a:4,5)
```
add3에서 a는 argument label  
first는 parameter  
argument label에 '_'를 사용하면 함수 호출 시 그냥 값만 적으면 됨.
