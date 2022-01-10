---
title:  "[swift_04]Collection-Dictionary"
excerpt: "swift의 Collection인 Dictionary 공부하기"
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

# Dictionary
## Mutable Dictionary 생성
```
var dictionary = Dictionary<String,Int>()
var dictionary2 = [String:Int]()
```

## Dictionary에 추가
```
dictionary2["and"] = 6
dictionary2["snake"] = 0
```
[]괄호 안에 key, 그리고 assignment뒤에  value  


## Dictionary 초기화
```
dictionary3 = ["and":6,"snake":0,"cat":4]
```
:을 활용하여 key와 value 구분하여 생성

## value 변경
```
dictionary3["cat"] = 5
```
기존에 있는 key값에 새로운 값을 assign

## immutable Dictionary 생성
```
let dictionary4 = ["ant":3,"snake":0,"cat":4]
```
배열과 동일하게 Dictionary도 immutable한 Dictionary가 속도가 빠름
