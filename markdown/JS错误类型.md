# JS错误类型

[TOC]

## 简介

> 执行代码期间可能会发生的错误有多种类型
> 每种错误都有对应的错误类型
> 当错误发生时，就会抛出相应类型的错误对象

## 错误类型

> 一般来说，当代码出错的时候，会遇到两种主要的错误类型

* **语法错误：**这是代码的拼写错误，实际上导致程序不能运行或停止通过工作的一部分，这种通常会用一些提供的错误消息找到修复的方法，只要熟悉正确的工具，知道错误消息的意思！
* **逻辑错误：**这些错误，语法实际上是正确的，但代码不一定是你想要的，意味着项目成功运行，但会产生不正确的结果。这些通常比语法错误更难以修复，因为通常没有错误指向错误源

## ECMA-262定义的七种错误类型

### Error

> `Error` 是基类型，其他错误类型都继承自该类型
> 因此，所有错误类型共享了一组相同的属性（错误对象中的方法全是默认的对象方法）
> 基类型的主要目的是供开发人员抛出自定义错误

### EvalError

> `EvalError` 类型的错误会在使用 `eval()` 函数而发生异常时被抛出

### RangeError

> `RangeError` 类型的错误会在数值超出相应范围时触发

### ReferenceError

> `ReferenceError` 再找不到对象的情况下，会发生
> 通常，在访问不存在的变量时，就会发生这种错误

### SyntaxError

> `SyntaxError` 当我们把语法错误的JS字符串传入 `eval()` 函数时，就会导致此类错误

### TypeError

> `TypeError` 类型在JS中会经常用到，在变量中保存着意外的类型时，或者在访问不存在的方法时，都会导致这种错误
> 错误的原因虽然多种多样，但归根结底还是由于在执行特定于类型的错误时，变量的类型并不符合要求所致

### URIError

> 在使用 `encodeURI()` 或 `decodeURI()`，而`URI`格式不正确时，就会导致 `URIError` 错误
> 这种错误很少见，因为前面这两个函数的容错性非常高

## 错误类型捕获

```
try {
    someFunction();
} catch (error) {
    if (error instanceof TypeError) {
        // 处理类型错误
    } else if (error instanceof ReferenceError) {
        // 处理引用错误
    } else {
        // 处理其他类型的错误
    }
}
```

## 抛出错误

> `throw` 操作符，用于随时抛出自定义错误
> 抛出错误，必须要给`throw`操作符指定一个值，无类型要求
> 在遇到 `throw` 操作符时，代码会立即停止执行

### 真实模拟浏览器错误

```
throw new Error('Something bad happened!');
```

* 浏览器会像处理自己生成的错误一样，来处理这行代码抛出的错误

```
throw new SyntaxError("I don't like your syntax!");
throw new TypeError("What type of variable do you take me for?");
throw new RangeError("Sorry, you just don't have the range!");
throw new EvalError("That doesn't evaluate!");
throw new URIError("Uri, is that you?");
throw new ReferenceError("You didn't cite your references properly!");
```

## 创建自定义错误类型

> 利用原型链还可以通过继承 `Error` 来创建自定义错误类型
> 此时，需要为新创建的错误类型指定 `name` 和 `message` 属性

```
function CustomError(message){
	this.name = "CustomError";
	this.message = message;
}
CustomError.prototype = new Error();
throw new CustomError("My message!");
```

## 查询字符串处理

> 对于查询字符串，应该记住必须要使用 `encodeURIComponent()` 方法

```
// 原链接
http://www.liu12fei08fei.top/?url=http://www.liu12fei08fei.top/

// 转化
encodeURIComponent("http://www.liu12fei08fei.top/?url=http://www.liu12fei08fei.top/")

// 结果
"http%3A%2F%2Fwww.liu12fei08fei.top%2F%3Furl%3Dhttp%3A%2F%2Fwww.liu12fei08fei.top%2F"
```

**封装成函数**

```
/**
 * [addQueryStringArg 处理查询字符串]
 * @param {[type]} url   [要追加查询字符串的URL]
 * @param {[type]} name  [参数名]
 * @param {[type]} value [参数值]
 */
function addQueryStringArg(url, name, value){
	if(url.indexOf("?")==-1){
		url += "?";
	}else{
		url += "&";
	}

	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}
```

## 把错误记录到服务器

```
/**
 * logError
 * @param sev 表示严重程度的数值或字符串 
 * @param msg 错误消息
 */
function logError(sev, msg) {
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
}
```
**使用`Image`原因**
 
> 使用`Image`对象来发送请求，这样做非常灵活，表现在几方面

1. 所有浏览器都支持`Image`对象，包括那些不支持`XMLHttpRequest`对象的浏览器
2. 可以避免跨域限制。通常都是一台服务器要负责处理多台服务器的错误，而这种情况下使用`XMLHttpRequest`是不行的
3. 在记录错误的过程中出问题的概率比较低。大多数`Ajax`通信都是由JS库提供的包装函数来处理的，如果库代码本身有问题，而你还在依赖该库记录错误，可想而知，错误消息是不可能得到记录的

**例子**

```
for (var i = 0, len = arr.length; i < len; i++) {
    try {
        arr[i].init();
    } catch (ex) {
        logError("nonfatal", "module init failed：" + ex.message);
    }
}
```


