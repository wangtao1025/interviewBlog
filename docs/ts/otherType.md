# Typescript

## 对象类型--非原始数据类型object







## 联合类型--默认可以认为是并集

```ts
let name:string|number;
```

**注意：当没有初始化的时候，只能调用两种类型的公共方法**

### 非空断言---标识一定有值 ->! 

```ts
let el:HTMLElement|null = document.getElementById('#app');
el!.style.color = 'red';
```

还有另外一种运算符，?,`el?.style`相当于`el&&el.style`;

### 断言操作

```ts
(el as HTMLElement).style.color = 'red'
```

上面这句表示el就是HTMLElement类型

```ts
(<HTMLElement>ele).style.color; // 这种写法不采用，会和jsx冲突
```

### 双重断言

```ts
(el as any)as boolean; // 不建议，相当于先转换成any类型，再转换成boolean
```



## 字面量类型 -- type关键字

```ts
let direction:'up'|'down'|'left'|'right';
// 表示direction只能是up down left或者right
```

```ts
type Direction = 'up' | 'down' | 'left' | 'right'; // type 是定义类型别名
let direction:Direction; // 和上面其实是一个意思
```

## 函数类型

- 函数-考虑入参和函数的返回值

  - 声明入参不赋值那就是any，（不要轻易使用any）

  - 函数声明两种方式

  - ```ts
    function sum(a: string,b: string):string{
        return a + b 
    }
    ```

  - ```ts
    // 如果使用表达式，你给他定义一个类型，你可以把兼容的函数赋予给他
    let sum:(a:string, b:string) => string = (a:string, b:string) = {
        reutrn a + b
    }
    ```

    - ```ts
        // 这种方式来定义函数类型明显过于长
        // 所以可以使用type关键字
        type Sum = (a:string, b:string) => string
      ```
- 可选参数---？  默认值--- =

    - ```ts
        let sum = (a:string, b?:string) => {
            return a+b
        }
        // 还有另外一种写法
        let sum1 = (a:string,b:string|undefined) => {
            return a+b
        }
        // 但是这种方法在调用的时候，sum1('1'),会报错，也就是并不是b可以不传，而是不传也得给我来一个undefined，sum1('1',undefined)
      ```
    
    - ```ts
        // 函数参数的默认值
        let sum = (a:string,b:string = 'b') => {
            return a + b
        }
        // 这种情况下b不传也ok，因为b有默认值
      ```
- 剩余参数
  ```ts
    let sum = (a:string, b:string, ...c:string[]) => {
        return a + b + c[0]
    }
  ```

- [函数重载](https://ts.xcatliu.com/basics/type-of-function.html#%E9%87%8D%E8%BD%BD)
  ```ts
    // 希望把一个字符串或者数字转换成一个数组的需求
    // 123 => [1,2,3] or '123' => ['1','2','3']
    function toArray(value:number):number[];
    function toArray(value:string):string[];
    function toArray(value:number | string){
        if(typeof value == 'string'){
            return value.split('');
        }else {
            return value.toString().split('').map(item => parseInt(item))
        }
    }
  ```



