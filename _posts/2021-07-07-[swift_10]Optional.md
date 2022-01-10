---
title:  "[swift_10]Optional"
excerpt: "swift의 optional"
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


# Optional

## Optional 변수
swift에서 지금까지 배운 변수는 항상 초기화를 시켜주었음.   
nil값이 있으면 연산중에 runtime에 프로그램이 종료되기 때문에 문제가 됨.  
따라서 Optional를 활용하여 nil값이 있을 경우 문제를 해결 할 수 있음.

## Optional 선언
```
var varName:Int?
```
?를 타입 뒤에 붙여서 선언  
초기화를 시켜주지 않아도 됨  

## 캐스팅
```
let possibleNumber = "f"
let convertedNumber = Int(possibleNumber)
```
캐스팅을 시켜주면 optional 변수로 캐스팅이 됨  
그 이유는, 위 예처럼 string을 integer로 캐스팅 할 경우 nil값으로 캐스팅해 주어야 하기 때문이다.  

## optional 변수 사용 1
```
if convertedNumber != nil{
    print(convertedNumber!)
}
```
변수 뒤에 !를 붙이면 강제로 optional을 벗기기 가능  
이때 주의점은 해당 변수가 nil이 아닐 때만 사용해야함.  

## optional 변수 사용 2
```
if let actualNumber = Int(possibleNumber) {
    print(actualNumber)
}
```
위 처럼 if문을 사용 시 possibleNumber가 nil이 아니면 if문 실행  
nil일 경우 else문을 실행함
