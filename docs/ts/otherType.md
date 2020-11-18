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

