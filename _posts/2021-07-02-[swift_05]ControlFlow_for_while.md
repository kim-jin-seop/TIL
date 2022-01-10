---
title:  "[swift_05]반복문 while과 for문"
excerpt: "Control Flow 반복문 익히기"
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


# while문

## while문 선언과 사용

```
var index = 5

while index < 0{
  index -= 1
  print(index)
}
```

# For문
## 배열에서 사용하는 법
```
let names = ["a","b","c"]
for name in names {
    print(name)
}
```
python의 for-in 동일

## 사전에서 활용하는
```
let a = "a"
let b = " b"

var first = a + b

var second = "c"
second += first // ca b
```

## 숫자 범위로 사용하기
```
for index in 1...5{
    print("\(index) times 5 is \(index * 5)")
}

for _ in 1...5{
    print("Hello")
}
```

## stride 활용해서 사용하기
```
let minuteIntervel = 5
for tickMark in stride(from: 0, to: 50, by: minuteIntervel){
    print(tickMark)
}

for tickMark in stride(from: 0, through: 50, by: minuteIntervel){
    print(tickMark)
}
```
stride에서 to라면 값은 끝 값은 포함 안함  
through라면 끝의 값까지 포함하여 연산  
