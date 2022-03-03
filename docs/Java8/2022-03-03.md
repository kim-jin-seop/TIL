# CompletableFuture
Future에서도 어느정도 비동기 프로그래밍을 가능하게 만들어 주었지만, 부족한 부분이 많았다.
- get()을 사용하여 블로킹을 통해서만 콜백을 실행시킬 수 없다.
- Future들을 조합하는 것에 있어서 제한된다. (과목의 정보를 가져온 뒤 그 과목을 수강하는 학생들을 가져오는 것이 제한된다.)
- 예외처리가 불가능하다.
이러한 문제점을 해결하고 좀 더 완벽한 비동기 프로그래밍을 위해 Java8에 새로 추가된 인터페이스가 **CompletableFuture**이다.

## CompletableFuture 생성
```java
        CompletableFuture<String> future = new CompletableFuture<>();
        future.complete("jins");
        future.get(); //String jins
```
future를 생성하는 방법은 CompletableFuture를 직접 사용해주면 된다. complete를 입력하면 그 future의 값을 의미한다.  

## Future 처리를 위한 콜백 함수들
### thenApply()
`콜백 함수` `Callable의 처리된 값을 사용 가능` `리턴 있음` 
```java
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "Hello";
        }).thenApply((s)->{ //get()전에 작업을 할 수 있음.
            return s.toUpperCase();
        });
        future.get();
```
supplyAsync를 사용하면 Callable을 입력받아 CompletableFuture를 생성할 수 있다. 그리고 이 것은 get()을 호출하여 실행할 수 있다.  
과거 Future의 문제점인 '**get()을 사용하여 블로킹을 통해서만 콜백을 실행시킬 수 없다.**'를 해결하는 부분이다.  

thenApply를 사용하면 콜백함수의 역할을 하여 future의 Callable이 수행 된 뒤 해당 Callable의 결과에 대한 처리를 할 수 있다.  
입력으로 future의 결과값을 받으며 return으로 future의 결과값에 대한 처리를 한 결과를 준다.

### thenAccept()
`콜백 함수` `Callable의 처리된 값을 사용` `리턴 없음` 
```java
        CompletableFuture.supplyAsync(() -> {
            System.out.println("run Async");
            return "Hello";
        }).thenAccept((s)->{ //get()전에 작업을 할 수 있음.
            System.out.println("s = " + s.toUpperCase());
        }).get();
```
thenAccept는 future의 처리된 값을 사용을 하는데 반환값은 없다.(Consumer)

### thenRun()
`콜백 함수` `Callable의 처리된 값을 사용안함` `리턴 없음` 
```java
        CompletableFuture.supplyAsync(() -> {
            System.out.println("run Async");
            return "Hello";
        }).thenRun(()->{ //get()전에 작업을 할 수 있음.
            System.out.println("Runnable");
        }).get();
```
thenRun은 입력값으로 Runnable이 온다. future의 처리된 값을 다시 사용하지 않는다.  
future 이후에 해야하는 작업에 대하여 처리할 수 있다.  

## CompletableFuture를 조합하여 사용하기
CompletableFuture 여러개를 조합하여 사용할 수 있다.

```java
        CompletableFuture<String> hello = CompletableFuture.supplyAsync(() -> {
            System.out.println("run Hello");
            return "Hello";
        });
        
        CompletableFuture<String> world = CompletableFuture.supplyAsync(() -> {
            System.out.println("run World");
            return "World";
        });
```
두개의 CompletableFuture를 선언하였다. 이 두개의 future를 조합하여 사용하는 방법을 알아보겠다.  

### thenCompose()
```java
        CompletableFuture<String> future = hello.thenCompose(App::getWorld);
        future.get();
        
        //App에 getWord()
            private static CompletableFuture<String> getWorld(String message) {
        return CompletableFuture.supplyAsync(() -> {
            System.out.println("run World");
            return message + " World";
        });
    }
```
thenCompose를 사용하면  항상 hello를 사용한 뒤에 world를 사용하게 된다. 즉 두개의 future의 선후관계를 지정해줄 수 있는 것이다.  
이 때 hello가 사용된 결과값을 world에서 입력값으로 사용할 수 있다.

### thenCombine()
```java
	hello.thenCombine(world,(h,w) ->h + " " + w).get()
```
두개의 future를 모두 실행한 후 생성되는 결과값으로 작업을 해야한다면 thenCombine으로 조합하면 된다.
hello와 world에 대한 처리를 하면 두번째 매개변수로 받는 bifunc에서 hello의 결과값과 world의 결과값을 사용하여 결과를 주게 된다.

그 결과는 get()으로 꺼낼 수 잇다.

### anyOf()
```
CompletableFuture<Void> future = CompletableFuture.anyOf(hello, world).thenAccept((s) -> {
            System.out.println(s);
        });
        future.get();
```
두개의 future를 처리할 때 둘 중 가장 먼저 처리되는 값을 사용하는 방법이 anyOf이다. 입력된 future가 실행되다 가장 먼저 실행이 완료된 future에 대한 값을 처리하게 된다.

### allOf()
모든 future를 순서없이 처리하는 방법을 알아보자.
```java
CompletableFuture<Void> voidCompletableFuture = CompletableFuture.allOf(hello, world);
```
allOf()를 활용하면 모든 future에 대하여 처리를 한 결과를 List로 받을 수 있다.  

그런데 Future의 return type이 모두 다를 수 있기 때문에 단순히 allOf()로 처리를 한 결과를 받게 되면 void타입의 값이 나오게 된다.(get의 결과는 모두 null)

```java
        List<CompletableFuture> futures = Arrays.asList(hello, world);
        CompletableFuture[] futuresArr = {hello, world};

        CompletableFuture<List<Object>> results = CompletableFuture.allOf(futuresArr)
                .thenApply(s -> {
                    return futures.stream()
                            .map(CompletableFuture::join)
                            .collect(Collectors.toList());
                });
        List<Object> resultObject = results.get();
``` 
따라서 처리한 결과에 대하여 stream의 map을 활용해 join시켜 Object Type으로 변환받도록 사용해야한다.


## 예외처리
예외를 처리하기 위해서 exceptionally와 handle 두가지가 있다.

### exceptionally()
```java
        boolean throwError = true;
        CompletableFuture<String> name = CompletableFuture.supplyAsync(()->{
            if(throwError){
                throw new IllegalArgumentException();
            }

            return "jinseop";
        }).exceptionally(ex ->{
            System.out.println(ex);
            return "Error!"; // future의 결과로 Error!가 들어옴
        });
```
future를 동작할 때 반드시 에러를 던져주는 경우를 만들어주었다.
이에 대한 처리는 exceptionally의 뒤에서 처리가 이루어진다. 이 때 매개변수로 받는 것은 Exception이다. 
future의 결과는 exceptionally에서의 return 값이 된다.

### handle()
에러가 날 수 있는경우와 아닌 경우 두가지 경우에 대하여 동시에 처리를 해주는 방법이다.
```java
boolean throwError = true;
        CompletableFuture<String> name = CompletableFuture.supplyAsync(()->{
            if(throwError){
                throw new IllegalArgumentException();
            }

            return "jinseop";
        }).handle((result, ex) ->{
            if(ex != null){
                System.out.println(ex);
                return "Error!";
            }
            return result;
        });
```
handle은 bifunc를 받는다. 첫번째 파라미터는 정상적으로 실행되었을 때에 대한 결과이고 두번째 파라미터는 에러가 발생한 경우의 던져진 Exception이다.  
ex가 null이라면 정상 동작을 한 상황이고, 아니라면 exception이 동작한 경우이므로 그것에 대한 처리를 해주면 된다.







