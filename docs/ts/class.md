# 5:类

##  一.TS中定义类

```ts
class Pointer{
    x!:number; // 实例上的属性必须先声明
    y!:number;
    constructor(x:number,y?:number,...args:number[]){
        this.x = x;
        this.y = y as number;
    }
}
let p = new Pointer(100,200);
```

> 实例上的属性需要先声明在使用，构造函数中的参数可以使用可选参数和剩余参数

## 二.类中的修饰符

- `public`修饰符（谁都可以访问到）

  ```ts
  class Animal {
      public name!: string; // 不写public默认也是公开的
      public age!: number;
      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
  }
  class Cat extends Animal {
      constructor(name: string, age: number) {
          super(name, age);
          console.log(this.name,this.age); // 子类访问
      }
  }
  let p = new Cat('Tom', 18);
  console.log(p.name,p.age); // 外层访问
  ```

  ```ts
  class Animal {
      constructor(public name: string, public age: number) {
          this.name = name;
          this.age = age;
      }
  }
  ```

	> 我们可以通过参数属性来简化父类中的代码

- `protected`修饰符（自己和子类可以访问到）

  ```ts
  class Animal {
      constructor(protected name: string, protected age: number) {
          this.name = name;
          this.age = age;
      }
  }
  class Cat extends Animal {
      constructor(name: string, age: number) {
          super(name, age);
          console.log(this.name, this.age)
      }
  }
  let p = new Cat('Tom', 18);
  console.log(p.name,p.age);// 无法访问
  ```

- `private`修饰符（除了自己以外都访问不到）

  ```ts
  class Animal {
      constructor(private name: string, private age: number) {
          this.name = name;
          this.age = age;
      }
  }
  class Cat extends Animal {
      constructor(name: string, age: number) {
          super(name, age);
          console.log(this.name, this.age); // 无法访问
      }
  }
  let p = new Cat('Tom', 18); 
  console.log(p.name,p.age);// 无法访问
  ```

- `readonly`修饰符（仅读修饰符）

   ```ts
  class Animal {
      constructor(public readonly name: string, public age: number) {
          this.name = name;
          this.age = age;
      }
      changeName(name:string){
          this.name = name; // 仅读属性只能在constructor中被赋值
      }
  }
  class Cat extends Animal {
      constructor(name: string, age: number) {
          super(name, age);
      }
  }
  let p = new Cat('Tom', 18); 
  p.changeName('Jerry');  
  ```

## 三.静态属性和方法

> 静态属性和方法就是指class类自身的属性和方法，不是实例的
>
> 静态属性方法是可以被子类进行继承的
>
> 在子类之中可以重写继承过来的父类的静态方法，在重写的静态方法中有super关键字，就是指父类本身
>
> 注：**并不是所有的super都是指父类本身，例如父类原型方法，子类中重写的同样方法，在子类重写方法中的super指的是父类的原型(prototype)**

```ts
class Animal {
    static type = '哺乳动物'; // 静态属性
    static getName() { // 静态方法
        return '动物类';
    }
    private _name: string = 'Tom';

    get name() { // 属性访问器
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}
let animal = new Animal();
console.log(animal.name);
```

## 四.Super属性

```ts
class Animal {
    say(message:string){
        console.log(message);
    } 
    static getType(){
        return '动物'
    }
}
class Cat extends Animal {
    say(){ // 原型方法中的super指代的是父类的原型
        super.say('猫猫叫');
    }
    static getType(){ // 静态方法中的super指代的是父类
        return super.getType()
    }
}
let cat = new Cat();
console.log(Cat.getType())
```



## 五.类的装饰器

### 1.装饰类

```ts
function addSay(target:any){
    target.prototype.say = function(){console.log('say')}
}
@addSay
class Person {
    say!:Function
}
let person = new Person
person.say();


```

**装饰类可以给类扩展功能,需要开启experimentalDecorators:true**

### 2.装饰类中属性

```ts
function toUpperCase(target:any,key:string){
    let value = target[key]; 
    Object.defineProperty(target,key,{
        get(){
            return value.toUpperCase();
        },
        set(newValue){
            value = newValue
        }
    })
}
function double(target: any, key: string) {
    let value = target[key];
    Object.defineProperty(target, key, {
        get() {
            return value * 2;
        },
        set(newValue) {value = newValue}
    })
}
class Person {
    @toUpperCase
    name: string = 'JiangWen'
	@double
    static age: number = 10;
    getName() {
        return this.name;
    }
}
let person = new Person();
console.log(person.getName(),Person.age)
```

**装饰属性可以对属性的内容进行改写，装饰的是实例属性则target指向类的原型、装饰的是静态属性则target执行类本身~**

### 3.装饰类中方法

```ts
function noEnum(target:any,key:string,descriptor:PropertyDescriptor){
    console.log(descriptor)
    descriptor.enumerable = false;
}
class Person {
    @toUpperCase
    name: string = 'JiangWen'
    @double
    static age: number = 10;
    @noEnum
    getName() {
        return this.name;
    }
}
let person = new Person();
console.log(person); // getName 不可枚举
```

### 4.装饰参数

```ts
function addPrefix(target:any,key:string,paramIndex:number){
    console.log(target,key,paramIndex); // Person.prototype getName  0 
}
class Person {
    @toUpperCase
    name: string = 'JiangWen'
    @double
    static age: number = 10;
    prefix!:string
    @noEnum
    getName(@addPrefix prefix:string) {
        return this.name;
    }
}
```

## 六.抽象类

>  抽象类无法被实例化，只能被继承，抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现,而且必须实现。

```ts
abstract class Animal{
    name!:string;
    abstract speak():void
}
class Cat extends Animal {
    speak(){
        console.log('猫猫叫');
    }
}
class Dog extends Animal{
    speak():string{
        console.log('汪汪叫');
        return 'wangwang'
    }
}
```

> 定义类型时void表示函数的返回值为空（不关心返回值类型，所有在定义函数时也不关心函数返回值类型）

