# TypeScript入门

[TOC]

1. 微软开发一门编程语言
2. JavaScript的超集
3. 遵循ES6脚本语言规范

* TypeScript扩展了JavaScript的语法，任何已经存在的JS程序，可以不加任何改动的在TypeScript环境下运行
* TypeScript只是向JS中添加一些新的，遵循ES6规范的语法，以及基于类的面向对象编程的这种特性
* 其次，2016年9月底发布的Angular2框架，这个框架本身是由TypeScript语言本身来编写的
* TypeScript这门语言是由Microsoft（微软）和Google（谷歌），在背后支持
* 因此，TypeScript有可能称为前端脚本语言发展的一个主流方向

## 课程内容介绍

1. 学习TypeScript的好处
2. 安装TypeScript开发环境
3. TypeScript概念、语法和特性介绍

## 课程介绍-前置知识

1. 理解ES5、ES6、JavaScript、TypeScript的概念和关系
    1. ES是客户端脚本语言的规范，ES5、ES6是不同的版本
    2. JavaScript和TypeScript是两种客户端脚本语言
    3. JavaScript是实现了ES5规范，TypeScript实现了ES6规范
2. 有基础的JavaScript开发经验

## TypeScript的优势

1. 支持ES6规范
2. 强大的IDE支持
3. Angular2的开发语言

## 搭建TypeScript开发环境

* 就是安装TypeScript compiler

### 什么是compiler？为什么需要compiler？

1. 它是编译器，编译器的作用就是把TypeScript代码转化成JS代码
2. 因为主流浏览器没有完全支持ES6，需要转化成ES5

### [使用在线compiler开发](http://www.typescriptlang.org/play/index.html)

### 搭建本地TypeScript开发环境

## TypeScript-字符串新特性（所有例子都是es6语法）

一、 多行字符串

```
var str = `111,
222,
333,
444`;
```

* 多行字符串使用双撇号声明变量（即：反引号），好处是可以随意换行无需拼接字符串

二、 字符串模板：在多行字符串里，用一个表达式去插入变量或者用以调用方法

```
var myName = '怪诞咖啡';

var getName = function () {
    return myName;
}

console.log(`Hello ${myName}`); // 调用变量
console.log(`Hello ${getName()}`); // 调用函数
```

* 注：字符串模板`${}`，只有在反引号``中有作用，在双引号（""）和单引号（''）中只会当字符串输出

三、 自动拆分字符串：当用一个字符串模板去调用一个方法的时候，这个字符串模板里面表达式的值会自动赋值给被调用方法中的参数

```
function test(name, age, job) {
    console.log(name);
    console.log(age);
    console.log(job);
}

var myName = "怪诞咖啡";
var getAge = function () {
    return 18;
}

test`Hello my name is ${myName}, I'm ${getAge()}`;
```

* 调用test函数，进行参数传递时候，不需要写双括号，直接使用反引号
* 第一个参数是：字符串模板的值 => ["Hello my name is ",", I'm ",""]
* 第二个参数是：第一个表达式的值 => 怪诞咖啡
* 第三个参数是：第二个表达式的值 => 18

## TypeScript-参数新特性

### 参数类型

一、 在参数名称后面使用冒号来指定参数的类型

```
var myName: string = '怪诞咖啡';

myName = 13;
```

* 注：报错只会在typescript环境下，在编译后的es5环境下是不会报错的

二、 类型推断机制，就是当第一次给变量赋值，此变量的类型就固定为第一次赋值的类型

```
var myName = '怪诞咖啡';

myName = 13;
```

* 注：报错只会在typescript环境下，在编译后的es5环境下是不会报错的

三、 要想在typescript环境下任意赋值，就需要赋值为:any

```
var myName:any = '怪诞咖啡';

myName = 13;
```

四、 其他基本类型

1. 数值类型 var num: number = 20;
2. 布尔类型 var boo: boolean = true;
3. void类型：void不是用来声明变量的，而是用来声明变量的返回值的

void类型例子：

```
function test(): void{
    return ''; // 报错
}
function test(): string{
    return ''; // 不报错
}
```

五、 除了给变量和函数声明类型外，还可以给参数声明类型

```
function test(name: string, age) {
    return name;
}
test(1); // 报错，只能使用string类型进行调用
```

**注：介绍了如何声明类型、typescript类型推断机制、五种基本的类型、可以声明类型的位置**

六、 自定义类型：在typescript里面，可以通过class或接口来申明自定义类型

```
class Person{
    name: string;
    age: number;
}

var feifei: Person = new Person();
feifei.name = '怪诞咖啡';
feifei.age = 18; 
```

* 当我们写feifei.的时候会提示Person有name和age两个属性

### 默认参数

在参数声明后面用等号来指定参数的默认值

```
function test(a: string, b: string, c: string) {
    console.log(a);
    console.log(b);
    console.log(c);
}

test('1','2','3'); // 必须传递三个string类型的参数，否则提示错误
```
给参数指定默认值之后，可以不传递参数

```
function test(a: string, b: string, c: string='攻城狮') {
    console.log(a);
    console.log(b);
    console.log(c);
}

test('1', '2'); // 只传递两个参数，第三个参数使用默认值
```

* 默认值的设定应该遵循从右向左一次设定，否则无法起到合理的作用

### 可选参数

在方法的参数声明后面用问号来标明此参数为可选参数

```
function test(a: string, b?: string, c: string='攻城狮') {
    console.log(a);
    console.log(b);
    console.log(c);
}

test('1'); // 只传递一个参数，第二个参数为undefined，第三个参数为默认值
```
注意几点：

* b设置为可选参数，要处理可选参数没传的情况

```
function test(a: string, b?: string, c: string='攻城狮') {
    console.log(a);
    console.log(b.length);
    console.log(c);
}
```
说明：b参数为可选参数，在不传递参数值的情况下是不允许调用undefined的length属性的

* 和默认值一样，可选参数不能声明在必选参数的后面的

```
function test(a?: string, b: string, c: string='攻城狮') {
    console.log(a);
    console.log(b);
    console.log(c);
}
```
说明：我给a设置为可选参数，b为必选参数，会直接报错；和设置默认值是一样的，不允许在必选参数前面设置默认值

## 函数新特性

### Rest and Spread操作符（...）：用来声明任意数量的方法参数，即rest参数

```
function fun(...args) {
    args.forEach(function (arg) { 
        console.log(arg);
    });
}

fun(1, 2, 3);
console.log('******'); // 分隔符
fun(10,8,18,49,100,7)
```

**一个Rest and Spread操作符，反方向使用的方法--目前版本2.6不支持**

* 设置传递固定数量的参数，在使用的时候传递不定数量的参数

```
function fun(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

var args = [1, 2];
fun(...args); // 在typescript中报错，在转化的es5中支持，返回值为：1 2 undefined

console.log('*****');

var args2 = [7, 8, 9, 10, 12];
fun(...args2); // 在typescript中报错，在转化的es5中支持，返回值为：7 8 9
```

### generator函数：控制函数的执行过程，手工暂停和恢复代码执行

1. 在es5中，调用一个方法的时候，没有办法在函数执行到一半的时候，进行暂停执行
2. 在es6中，新加一个关键字yield，这个关键字可以实现方法暂停执行；yield就好像给代码加上了断点一样，可以通过编程的手段，控制代码走到某个点暂停执行，然后调用特定方法的时候在进行，可以往复循环

声明一个generator函数，只要在function后面添加一个*即可：`function* fun(){}`

```
function* fun(){
  console.log('start');
  
  yield;
  
  console.log('finish');
}

// fun(); // 这样调用generator是不起作用的，必须使用下面的方式调用

var fn = fun();
fn.next(); // 打印start

fn.next(); // 打印finish
```

### destructuring析构表达式：通过表达式将对象或数组拆解成任意数量的变量

* 从对象中通过析构表达式获得相应属性和方法，对象析构是用`{}`大括号声明

```
function a() {
  return {
    myName: '怪诞咖啡',
    age: {
      age1: 18,
      age2:80
    }
  }
}

var { myName, age: { age1, age2 } } = a(); // 析构表达式，包括嵌套属性

var { myName:newName, age: { age1, age2 } } = a(); // 析构表达式，给myName起一个新的名字newName

console.log(age1);
console.log(age2);
```

解析：返回值，即`return`返回值，的结构和我们的析构表达式的结构`{ myName, age: { age1, age2 } }`一一对应，所以析构表达式，即可理解为，解析结构获得对象属性的方法

* 从数组中通过析构表达式获得相应属性和方法，数组析构是用`[]`方括号声明

```
var arr = [1, 2, 3, 4];
var [num1, num2, ...other] = arr; // 获取第一个和第二个，其余变量赋值给other
var [,,num3,num4] = arr; // 获取第三和第四个值
```
析构表达式好处：当你需要从一个对象的属性或者是数组的元素里面，用其中的值赋值给其余变量的时候，可以让我们写更少的代码

## 表达式和循环

### 箭头表达式：用来声明匿名函数，消除传统匿名函数的this指针问题

```
// 无参数表达式
var sum = () => {}
// 只有一个参数的表达式
var sum = arg => {}
// 单行表达式
var sum = (arg1, arg2) => arg1 + arg2;
// 多行表达式
var sum2 = (arg1, arg2) => {
  return arg1 + arg2;
}
```
实际例子：

```
var arr = [1, 2, 3, 4, 5];
var flt = arr.filter(val => val % 2 == 0);
console.log(flt);
```
箭头函数的优势：

1. 简化书写
2. 最大的优势，消除了js里，this关键字的问题

* this指向问题

```
function fn(myName: string) {
  this.myName = myName;

  setInterval(function () {
    console.log('myName is：'+this.myName);
  },1000);
}

var myName = 1; // 全局myName，后面的this指向了全局，而不是a
var a = new fn('怪诞咖啡');
```
* 改用箭头函数，消除this指向问题

```
function fn(myName: string) {
  this.myName = myName;

  setInterval(() => {
    console.log('myName is：'+this.myName);
  },1000);
}

var myName = 1;
var a = new fn('怪诞咖啡'); // 消除指向问题
```

### forEach()、for in和for of

#### forEach：

```
var arr = [1, 2, 3, 4];
arr.desc = 'I am number type!'; // 这行在typescript里面会报错

arr.forEach(val => console.log(val));
```
问题：

1. forEach会把desc属性忽略掉
2. foeEach里面无法打断循环，break不支持

#### for in

```
var arr = [11, 22, 33, 44];
arr.desc = 'I am number type!';

for (var item in arr) {
  console.log(item); // key=> 1,2,3,4,desc
  console.log(arr[item]); //value=>11,22,33,44,I am number type! 
}
```

问题：

* 不光把数组里面的值循环出来，同样会把定义的属性也循环出来；结果很可能不是我们希望的样子

#### for of

1. 和forEach差不错，循环的是你对象或数组的值，而不是像for in循环的key
2. for of和forEach的差别是，可以用break可以打断循环

```
var arr = [11, 22, 33, 44];
arr.desc = 'I am number type!';

for (var item of arr) {
  console.log(item); // key=> 11,22,33,44 
}
```

## 面向对象特性

### 类（class）：TypeScript的核心，使用TypeScript开发时，大部分代码都是写在类里面的。

* 这里会介绍类的定义，构造函数，以及类的继承

#### 类的定义

* 使用class关键字声明类

```
class Person{
  
}
```

* 可以指定类的属性和方法，一个完整的类具有属性和方法

```
class Person{
  name;
  eat() {
    console.log('I am eating!');
  }
}
```

* 实例化：可以把类理解成为一个模子；所谓实例化，就是根据模子做出实际的产品出来

```
class Person{
  name;
  eat() {
    console.log('I am eating!');
  }
}

var p1 = new Person();
p1.name = 'Hello';
p1.eat();

var p2 = new Person();
p2.name = 'World';
p2.eat();
```

#### 返回控制符

* 在声明类的属性和方法的时候，可以为其指定一个返回控制符
* 返回控制符的作用是控制类的属性和方法是否可以在外部被访问到
* 返回控制符有三个：
    1. public共用，默认public
    2. private私有，只有在类的内部才能被访问到，在外部访问不到
    3. protected受保护的，可以在类的内部和子类（继承）里面可以被访问到，在外部访问不到

#### 类的构造函数，即：constructor方法

* 实际上是类里面一个特殊的方法，这个方法只有在类被实例化的时候才会被调用
* 而且只会调用一次
* 外部无法访问到constructor构造函数的

```
class Person{
  constructor() {
    console.log('构造函数')
  };
  name='默认值';
  eat() {
    console.log('I am eating!');
  }
}

var p1 = new Person();
p1.name = 'Hello';
p1.eat();

var p2 = new Person();
p2.name = 'World';
p2.eat();
```
构造函数的作用：可以在实例化的时候，指定相应属性

```
class Person{
  constructor(public name:string) {
    
  };

  eat() {
    console.log(this.name);
  }
}

var p1 = new Person('Hello');
p1.eat();

var p2 = new Person('World');
p2.eat();
```
注意：构造函数里面，定义属性，要使用控制符来明确声明，即：`public name:any`；如果是`name:any`这样，说明没有声明该属性，下面无法访问到

#### 类的继承：两个关键字

1. 一个是extends，用来声明类的继承关系
2. 另一个是super，用来调用父类的构造函数和方法

##### extends，获得继承类中所有属性和方法

```
class Person{
  constructor(public name:string) {
    
  };

  eat() {
    console.log(this.name);
  }
}

class Employee extends Person{
  // 定义新的属性和方法
  code: string;

  work() {
    
  }
}

let em = new Employee('coffee');
em.eat();
```

##### super

###### 调用父类的构造函数

```
class Person{
  constructor(public name:string) {
    console.log('父类构造函数');
  };

  eat() {
    console.log(this.name);
  }
}

class Employee extends Person{

  constructor(name: string, code: string) { 
    // 必须调用父类的构造函数，这是硬性规定
    super(name);
    console.log('子类构造函数');
    this.code = code;
  };

  code: string;

  work() {
    
  }
}

let em = new Employee('coffee','8');
em.eat();
```

###### 用来调用父类的方法

```
class Person{
  constructor(public name:string) {
    console.log('父类构造函数');
  };

  eat() {
    console.log(this.name);
  }
}

class Employee extends Person{

  constructor(name: string, code: string) { 
    // 必须调用父类的构造函数，这是硬性规定
    super(name);
    console.log('子类构造函数');
    this.code = code;
  };

  code: string;

  work() {
    // 调用父类的方法
    super.eat();
  };
  // 返回控制符
  private doWork() {
    
  }
}

let em = new Employee('coffee','8');
em.work();
```

### 面向对象特性

#### 泛型-generic：是指参数化的类型，一般用来限制集合的内容

```
class Person{
  constructor(public name:string) {
    console.log('父类构造函数');
  };

  eat() {
    console.log(this.name);
  }
}

class Employee extends Person{

  constructor(name: string, code: string) { 
    // 必须调用父类的构造函数，这是硬性规定
    super(name);
    console.log('子类构造函数');
    this.code = code;
  };

  code: string;

  work() {
    // 调用父类的方法
    super.eat();
  };
  private doWork() {
    
  }
}

var workers: Array<Person> = [];
workers[0] = new Person('神经了');
workers[1] = new Employee('神经了', '8');
workers[2] = 3; // 报错，指定放Person类型的数据
```

#### 接口-Interface：用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定

```
interface IPerson{
  name: string;
  age: number;
}

class Person{
  constructor(public config:IPerson){}
}

// 声明属性
var p1 = new Person({
  name: 'coffee',
  age:8
});
console.log(p1);
```
实现对应的接口中的方法：

```
interface Animal{
  eat();
}

class Sheep implements Animal{
  eat() {
    console.log('I eat grass');
  }
}

class Tiger implements Animal{
  eat() {
    console.log('I eat meat');
  }
}
```

#### 模块-module：模块可以帮助开发者将代码分割为可重用的单元。开发者可以自己决定将模块中的哪些资源（类、方法、变量）暴露出去供外部使用，哪些资源只在模块内使用。

1. 模块在typescript里面就是一个文件，一个文件就是一个模块
2. 在模块内部有两个关键字来支撑模块的特性，export暴露接口、import

```
// 文件a
import {newName} from "./b"; // 引入b文件，使用b文件中提供的接口newName

// a文件对外提供接口
export var prop1;
var prop2;
export function func1(){

}
function func2(){

}

export class Class1{

}

class Class2{

}
// 获得b文件提供的接口
console.log(newName);
```

```
// b文件
import {Class1, func1, prop1} from "./a"; // 引入a文件
// 获取a文件提供的接口
console.log(prop1);

func1();

new Class1{

}
// 对外提供接口
export var newName;
```

#### 注解-annotation：注解为程序的元素（类、方法、变量）加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的

#### 类型定义文件（*.d.ts）：类型定义文件用来帮助开发者在TypeScript中使用已有的JS的工具包；如：jQuery、zepto等

如何找到类型定义文件，肯定不能自己一个个的写；使用tyings来快速启动

