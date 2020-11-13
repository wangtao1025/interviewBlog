# Typescript

## 布尔值
```ts
let isTrue:boolean = false;
```
## 数字

- ts中数字和js中一样，都是浮点数

```ts
let num:number = 1;
```

## 字符串

```ts
let str:string = 'abc';
```

- 还可以使用模板字符串

- ```ts
  let name: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ name }.
  
  I'll be ${ age + 1 } years old next month.`;
  ```

## 数组

数组有两种定义方式

- 在元素类型后面接上[]

  - ```ts
    let list: number[] = [1, 2, 3];
    ```

- 使用数组泛型`Array<元素类型>`

  - ```ts
    let list: Array<number> = [1, 2, 3];
    ```

    

## 元组 Tuple

**一个已知元素和数量的数组，并且各元素的数量不必相同**

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

