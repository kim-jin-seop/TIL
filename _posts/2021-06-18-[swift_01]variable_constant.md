---
title:  "[swift_01]변수와 상수 선언"
excerpt: "swift 변수와 상수 선언하는 법"
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


# 변수와 상수 선언

## 변수(variable)
변수는 항상 변할 수 있는 값  
선언하는 방법

```
var hello = "hello"
var world : String = "world!"

print(type(of:a)) // String
print(type(of:b)) // String
```

## 상수(constant)
상수는 변할 수 없는 값.
선언하는 방법  
```
let hello = 1
let hello : int = 2
```

# String
## 문자열 그대로 출력하기
```
var str = """
A is first
"B is second"
C is third
"""
```
\없이 개행과 특수문자 사용 가능

## empty 문자열
```
var empty1 = ""
var empty2 = String()

if empty1.isEmpty{
 // if empty1 is empty string
}
```
isEmpty : 빈 문자열이라면 true, 아니면 false

## 문자열 합치기
```
let a = "a"
let b = " b"

var first = a + b

var second = "c"
second += first // ca b
```
+연산자 활용해 합치기 가능, += 연산도 가능 연산 시 뒤에 붙음
