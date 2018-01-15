# ES6

[TOC]

> ES6的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言
> 更多的是ES5的语法糖：

## 语法糖

> 语法糖（Syntactic sugar），也译为糖衣语法，是由英国计算机科学家彼得·约翰·兰达（Peter J. Landin）发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会

## 部署进度

**[各大浏览器对ES6的支持](http://kangax.github.io/compat-table/es6/)**

**查看 Node 已经实现的 ES6 特性**

```
$ node --v8-options | grep harmony
```

**[ES-Checker](https://github.com/ruanyf/es-checker)：**用来检查各种运行环境对 ES6 的支持情况

**[查看自己的浏览器支持ES6情况](http://ruanyf.github.io/es-checker/)：**可以看到您的浏览器支持 ES6 的程度

**查看你正在使用的 Node 环境对 ES6 的支持程度**

```
$ npm install -g es-checker
$ es-checker

=========================================
Passes 38 feature Dectations
Your runtime supports 90% of ECMAScript 6
=========================================
```

* `*-cli`一般都是命令行

### babel

1. 建立一个文件夹`es6`，添加一个`index.js`文件
2. 进入`es6`文件夹，运行`npm init`
3. 安装`babel-cli`工具，`npm install --save-dev babel-cli`，采用本地安装，而非全局
4. 在 `package.json` 中添加一个 `"scripts"` 属性并将 `babel` 命令放在它的 `build` 属性中
5. `"build": "babel src -d lib"`，`src`换成要转换的文件，如：`index.js`
6. `npm run build` => 这时输出的文件没有变化
7. 创建 `.babelrc` 配置文件
8. `npm install babel-preset-env --save-dev`
9. 定义 `.babelrc` 文件
```
{
  "presets": ["env"]
}
```
10. 在进行 `npm run build` 就可以了

> 批处理命令

**为何采用本地安装，而非全局?**

1. 同一机器上的不同的项目可以依赖不同版本的 Babel, 这允许你一次更新一个项目。
2. 这意味着在你的工作环境中没有隐含的依赖项。它将使你的项目更方便移植、更易于安装。

**警告内容**

```
// 没什么用，只是进行提示
npm WARN es6@1.0.0 No description
npm WARN es6@1.0.0 No repository field.
```

## 需要掌握的语法

### const let

**`const` 优于 `let` 几点？**

1. `const` 可以提醒大家，不能被改变
2. `const` 比较符合函数式编程
    1. 在函数式编程里面，运算是不能去改变值的，只能新建值
    2. 有利于我们进行分布式运算，`const`命名的值不变
    3. JS编译器对 `const` 进行了优化处理
3. 本质的区别，编译器内部处理机制不同

**声明变量的方式有多少？**

> 共六种

*ES5*

1. `var`
2. `function`

*ES6*

1. `let`
2. `const`
3. `import`
4. `class`

### 变量解构赋值

#### 数组的解构赋值

```
const arr = ['🍎', '🍊', '🍌', '🍃'];
console.log(arr);
const [a, b, c, d] = arr;
console.log(a, b, c, d)
```

#### 对象的解构赋值

```function test() {
    return {
        name: 'coffee',
        age: 18
    }
}
const rtn = test();
const {
    name,
    age
} = rtn;
console.log(name, age) //coffee 18
console.log(age, name) //18 "coffee"
```

### 字符串模板

```
const h = 'Hello';
const w = ' World!';
console.log('Hi ' + h + w);
console.log(`Hi ${h}${w}`)
```

### 对象和数组

#### 数组

**Array.from()**

> 转化为数组

```
const s = '😆😋😊😭😲';
console.log(Array.from(s)) //["😆", "😋", "😊", "😭", "😲"]
```

**扩展运算符**

```
const s = '😆😋😊😭😲';
const test = ['🌲', '🌹', ...s];
console.log(test); //["🌲", "🌹", "😆", "😋", "😊", "😭", "😲"]
```

#### 对象

```
const s = '😆😋😊😭😲';
const test = ['🌲', '🌹', ...s];
const k = 2;
const rtn = {
    [k + 1]: 1,
    a: 'hello world!',
    s,
    test,
    q() {
        console.log('😙🐧');
    }
};
console.log(rtn, rtn.q());
```
*输出：*
![输出](http://p1fg8xetu.bkt.clouddn.com/es6-object.jpg)

**在JS中万物皆对象**

```
console.log(NaN === NaN);//false
console.log(Object.is(NaN, NaN));//true
```

**创建原型链的副本**

*Object.create*

```
const eat = {
    getEat() {
        return '🍗';
    }
}
const drink = {
    getDrink() {
        return '🍺';
    }
}
let sunday = Object.create(eat);
console.log(sunday);
console.log(sunday.getEat());
console.log(Object.getPrototypeOf(sunday))
```
![Object.create](http://p1fg8xetu.bkt.clouddn.com/es6-create.jpg)

*Object.setPrototypeOf*

```
const eat = {
    getEat() {
        return '🍗';
    }
}
const drink = {
    getDrink() {
        return '🍺';
    }
}
let sunday = Object.create(eat);
console.log(sunday);
console.log(sunday.getEat());
console.log(Object.getPrototypeOf(sunday))
Object.setPrototypeOf(sunday, drink);
```
![Object.setPrototypeOf](http://p1fg8xetu.bkt.clouddn.com/es6-setPrototypeOf.jpg)

**可以直接使用`__proto__`**

```
const eat = {
    getEat() {
        return '🍗';
    }
}
console.log(sunday)
var sunday = {
    __proto__: eat
};
console.log(sunday)
console.log(sunday.getEat())

// 也可以在外面直接使用
sunday.__proto__ = eat;
```
![__proto__](http://p1fg8xetu.bkt.clouddn.com/__proto__.jpg)

**函数 `name`**

```
const fn = function PP(argument) {}
console.log(fn.name)//PP
```

### 函数

**箭头函数**

```
(() => console.log('函数'))();//函数
(() => {
    console.log('理论');//理论
})();
```

**es5 => es6**

```
const rtn = ['🍺', '🥜', '🐈'].map(function(item) {
    return item + '🐶';
});
console.log(rtn); //["🍺🐶", "🥜🐶", "🐈🐶"]

const rtn2 = ['🍺', '🥜', '🐈'].map((item) => {
    return item + '🐶';
});
console.log(rtn); //["🍺🐶", "🥜🐶", "🐈🐶"]

const rtn3 = ['🍺', '🥜', '🐈'].map((item) => item + '🐶');
console.log(rtn); //["🍺🐶", "🥜🐶", "🐈🐶"]
```

**箭头函数中不变的this**

> 箭头函数绑定当前对象的顶级作用域

```
window.name = '🍺';
var obj = {
    name: '🍚',
    getName: () => this.name
}
console.log(obj.getName()) //🍺
```

## 需要掌握的语法进阶

### Iterator and Generator

```
let ff = function*() {
    yield "🍦";
    yield "🤗";
    yield "🍔";
    return 'ending';
};
let rtn = ff();
console.log(rtn.next()); //{value: "🍦", done: false}
console.log(rtn.next()); //{value: "🤗", done: false}
console.log(rtn.next()); //{value: "🍔", done: false}
console.log(rtn.next()); //{value: undefined, done: true}
```

**for of**

> 只支持数组形式，不支持对象形式

```
const arr = ['🍊', '🦁', '🐅'];
const obj = {
    a: '❄️',
    b: '🌧',
    c: '🌞'
};
// 依次打印
for (let val of arr) {
    console.log(val);
}
// 报错 Uncaught TypeError: obj is not iterable
for (let val of obj) {
    console.log(val);
}
```

**for...in and for...of**

> in：遍历key
> of：遍历value

```
const arr = ['🍊', '🦁', '🐅'];
for (let idx in arr) {
    console.log(idx);
    // 0
    // 1
    // 2
}
for (let val of arr) {
    console.log(val);
    // 🍊
    // 🦁
    // 🐅
}
```

**恶补es5，Object.keys() and Object.values()**

```
const arr = ['🍊', '🦁', '🐅'];
console.log(Object.keys(arr)) //["0", "1", "2"]
console.log(Object.values(arr)) // ["🍊", "🦁", "🐅"]
```

### Class

**属性**

```
class Person {
    constructor(age) {
        this.age = age;
    }
}
let ff = new Person(18);
console.log(ff.age)//18
```

**方法**

```
class Person {
    constructor(age) {
        this.age = age;
    };
    getAge() {
        return `您的年龄是：${this.age}`;
    }
}
let ff = new Person(18);
console.log(ff.age) //18
console.log(ff.getAge()) //您的年龄是：18
```

**子类继承父类属性**

```
class Person {
    constructor(age) {
        this.age = age;
    };
    getAge() {
        return `您的年龄是：${this.age}`;
    }
}
class Man extends Person {
    constructor(age) {
        super(age);
    }
}
const a = new Man(88);
console.log(a.age)
```

**子类继承父类方法**

```
class Person {
    constructor(age) {
        this.age = age;
    };
    getAge() {
        return `您的年龄是：${this.age}`;
    }
}
class Man extends Person {
    constructor(age) {
        super(age);
    };
    getAge() {
        // 不支持多个参数的重载，必须要先调用
        super.getAge();
        console.log('必须先调用，才能重写')
    }
}
const a = new Man(88);
console.log(a.age)//88
a.getAge() //必须先调用，才能重写
```

**set() and get()**

```
class Person {
    constructor(age) {
        this.age = age;
        this.arr = ['🐘', '🐒', '🐎'];
    };
    set(data) {
        this.arr.push(data);
    };
    get() {
        return this.arr;
    };
    getAge() {
        return `您的年龄是：${this.age}`;
    }
}
let p = new Person();
console.log(p.arr) //["🐘", "🐒", "🐎"]
console.log(p.get()) //["🐘", "🐒", "🐎"]
p.set('🐢')
console.log(p.arr) //["🐘", "🐒", "🐎", "🐢"]
console.log(p.get()) //["🐘", "🐒", "🐎", "🐢"]
```

**Class的静态方法static**

> 只有类自己能够调用，实例无法调用，称为静态方法

```
class Person {
    static other() {
        return 18;
    }
}
let p = new Person();
console.log(Person.other())//18
// Uncaught TypeError: p.other is not a function
console.log(p.other())
```

### Set、Map

#### Set()

**add() and size**

```
let arr = new Set('⛰🐟👻');
console.log(arr) //Set(3) {"⛰", "🐟", "👻"}
arr.add('🍪')
console.log(arr) //Set(4) {"⛰", "🐟", "👻", "🍪"}
arr.add('🐲')
console.log(arr) //Set(5) {"⛰", "🐟", "👻", "🍪", "🐲"}
console.log(arr.size); //5
```

**has() and delete()**

```
let arr = new Set('⛰🐟👻');
console.log(arr.has('👻')); //true
arr.delete('⛰');
console.log(arr); //Set(2) {"🐟", "👻"}
console.log(arr.has('⛰'));//false
```

**for...of and clear()**

```
let arr = new Set('⛰🐟👻');
for (let val of arr) {
    console.log(val)
        // ⛰
        // 🐟
        // 👻
}
console.log(arr.size) //0
arr.clear();
console.log(arr) //Set(0) {}
console.log(arr.size)//0
```

#### Map()

**set()**

```
let food = new Map();
let fruit = {},
    cook = function() {};
food.set(fruit, "🍆")
food.set(cook, "🦁")
console.log(food)
```
![Map()](http://p1fg8xetu.bkt.clouddn.com/map().jpg)

**get() delete() and size**

```
let food = new Map();
let fruit = {},
    cook = function() {};
food.set(fruit, "🍆")
food.set(cook, "🦁")
console.log(food)
console.log(food.get(fruit)) // 🍆
food.delete(cook)
console.log(food)
console.log(food.size)//1
```

**clear()**

```
let food = new Map();
let fruit = {},
    cook = function() {};
food.clear()
console.log(food) //Map(0) {}
```

**数组去重**

```
const arr = [1, 2, 3, 4, 3, 2, 1, 8];
const rtn = [...new Set(arr)];
console.log(rtn) // [1, 2, 3, 4, 8]
```

### Module

* `export`：命令用于规定模块的对外接口
* `import`：命令用于输入其他模块提供的功能

## ES6 Other总结

### async函数

> async函数就是Generator函数的语法糖
> async解决的是写法上的问题，并没有真正的解决掉异步

**起源-嵌套黑洞**

```
// 一层
$.ajax({
    success: function(response) {
        // 二层
        $.ajax({
            success: function(response) {
                // 三层
                $.ajax({
                    success: function(response) {
                        // ...
                    }
                });
            }
        });
    }
});
```

**例子**

```
(async() => {
    function promiseFn(url) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                dataType: "jsonp",
                success: function(response) {
                    resolve(response)
                },
                error: function() {
                    reject(new Error('错误：啦啦啦'));
                }
            });
        });
    }
    const a1 = await promiseFn('https://api.douban.com/v2/book/17604305');
    const a2 = await promiseFn('https://api.douban.com/v2/movie/top250');
    let p = a1 + a2;
    console.log(p); //[object Object][object Object]
})();
```


