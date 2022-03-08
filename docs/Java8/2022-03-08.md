# Annotation의 변화

## Java8의 Annoataion
- 제너릭 타입 선언부에 선언이 가능하다.
- 중복해서 사용이 가능하다.

### Annoation 다양한 위치에 선언하기
Annotaiton을 다양한 위치에 선언하기 위해서는 @Target을 정의해주어야한다.

```java
@Target(ElementType.TYPE_PARAMETER) // Generic Type으로 선언 가능
@Target(ElementType.TYPE_USE) // Type선언하는 모든 곳에서 사용
public @interface Chicken {
}
```
- ElementType.TYPE_PARAMETER : 제너릭의 Type parameter에 선언이 가능하게 해준다.
```java
    static class FeelsLikeChicken<@Chicken T>{
        public static <C> void print(C c){ // 앞에 C는 타입파라미터
        }
    }
```

- ElementType.TYPE_USE : 어디서든지 사용할 수 있게 해준다.
```java
@Chicken
    public static void main(@Chicken String[] args) throws @Chicken RuntimeException {
        List<@Chicken String> names = Arrays.asList("jinseop");
    }

    static class FeelsLikeChicken<@Chicken T>{

        public static <C> void print(C c){ // 앞에 C는 타입파라미터

        }

    }
    ```
    
### Annoation 다양한 위치에 선언하기 
Annotation을 중복으로 사용할 수 있다.  
Annoation을 중복해서 사용하기 위해서는 감싸주는 Container Annotation이 필요하다.
@Repeatable()를 사용하여 Container Annotation을 정의해주면 된다.

- Chicken Annotation
```java
@Target(ElementType.TYPE_USE)
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(ChickenContainer.class)
public @interface Chicken {
    String value();
}
```
Repeatable에 Container Annotation을 value값으로 넣어준 것을 볼 수 있고, value로 String을 받는 것을 알 수 있다.

- ChikenContainer Annotation
```java
@Target(ElementType.TYPE_USE)
@ Retention(RetentionPolicy.RUNTIME)
public @interface ChickenContainer {

    Chicken[] value();
}
```
Chicken Annotation을 감싸주는 Contatiner Annotation이다.   
감싸주는 Contatiner는 항상 **Target**과 **Retention**을 감싸는 Annoataion보다 넓게 잡아야한다.

### 중복으로 사용한 Annoation 사용하기
```java
@Chicken("양념")
@Chicken("마늘")
@Chicken("후라이드")
public class App {
	...
}
```
중복으로 정의한 Annotaiton을 사용하는 방법은 두가지가 있다.

1. 직접 Chicken에 접근하여 사용하기
```java
        Chicken[] chickens = App.class.getAnnotationsByType(Chicken.class);
        Arrays.stream(chickens).forEach(c -> {
            System.out.println(c.value());
        });
```
2. Chicken Container로 접근해서 사용하기
```
        ChickenContainer chickenContainer = App.class.getAnnotation(ChickenContainer.class);
        Arrays.stream(chickenContainer.value()).forEach(c -> {
            System.out.println(c.value());
        });
```