---
title:  "[swift_09]구조체"
excerpt: "swift의 구조체"
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


# 구조체

## 구조체가 필요한 이유
```
var name = ["Park","Choi","Kim","Lee"]
var age = [3,4,5,6]
var height = [40,50,60,70]
```
한 인물의 데이터를 위처럼 배열을 활용해 넣으면 가독성이 떨어지고, 배열 각각을 일일히 써야하기에 어려움

## 구조체 선언
```
struct Student{
    var name: String
    var age: Int
    var height: Int
}
```
구조체를 선언하는 방법


## 구조체 생성
```
var student1 = Student(name: "Park", age: 3, height: 40)
var student2 = Student(name: "Choi", age: 4, height: 50)

```
구조체를 생성하는 방법은 위 처럼 각각의 변수에 데이터를 넣어주면 됨

## 구조체 사용
```
print(student1.name, student1.age, student1.height)
```
구조체를 사용하기 위해서 '.'을 활용함
