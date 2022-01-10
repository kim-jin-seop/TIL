---
title:  "[swift_06]조건문 if문과 switch문 "
excerpt: "Control Flow 조건문 익히기"
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


# if문

## if문 선언과 사용 방법

```
let age = 7
if age < 3 {
    print("Baby")
}
else if age >= 3 && age < 20{
    print("Child")
}
else{
    print("Adult")
}
```
일반적으로 사용하는 if문과 동일함

# Switch문
## switch문 사용하는 방법
```
switch age {
case 0,1,2 :
    print("Baby")
case 3...19 :
    print("Child")
default :
    print("Adult")
}

```
switch문은 기존에 내가 알고 있던 switch에 비해 상당히 강력함.
1. ,를 활용하여 여러가지 조건에서 확인할 수 있음.  
2. where절을 활용하여 추가적인 조건을 줄 수 있음  
3. break문이 필요 없음  
