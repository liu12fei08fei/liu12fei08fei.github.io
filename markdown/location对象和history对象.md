# location对象和history对象

[TOC]

## location对象

> 提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能
> location对象的特别之处，是它既是window对象的属性，也是document对象的属性；即：window.location和document.location引用的是同一个对象
> 
> 特点：
> 1. location对象保存着当前文档的信息
> 2. 它将URL解析为独立的片段，可以通过不同的属性进行访问

### 各种属性表（省略了前面的window.location）

属性名 | 例子 | 说明
--- | --- | ---
hash | "#contents" | 返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串
host | "www.liu12fei08fei.top:80" | 返回服务器名称和端口号（如果有）
hostname | "www.liu12fei08fei.top" | 返回不带端口号的服务器名称
href | "http://www.liu12fei08fei.top" | 返回当前加载页面的完整URL。而location对象的toString()方法也返回这个值
pathname | "/project/" | 返回URL中的目录和(或)文件名
port | "8080" | 返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串
protocol | "http:" | 返回页面使用的协议。通常是http:或https:
search | "?language=javascript" | 返回URL的查询字符串。这个字符串以问好开头

### 位置操作

**assign()方法**

> 立即打开新URL
> 在浏览器的历史记录中生成一条记录

```
location.assign('http://www.liu12fei08fei.top')
```

* 将location.href或window.location设置为一个URL值，也会以该值调用assign()方法

```
window.location = "http://www.liu12fei08fei.top";

location.href = "http://www.liu12fei08fei.top";
```

> 修改location对象的其他属性也可以改变当前加载的页面。
> 有：hash、search、hostname、pathname和part属性

```
// 设定初始URL为"http://www.liu12fei08fei.top/project/"
// 将URL修改为"http://www.liu12fei08fei.top/project/#section"
window.location.hash = "#section";
// 或
window.location.hash = "section"

// 将URL修改为"http://www.liu12fei08fei.top/project/?language=javascript"
window.location.search = "?language=javascript";
// 或
window.location.search = "language=javascript";

// 将URL修改为"http://www.liu12fei08fei.top/project/"
window.location.hostname = "www.liu12fei08fei.top"

// 将URL修改为"http://www.liu12fei08fei.top/mydir/"
window.location.pathname = "mydir";

// 将URL修改为"www.liu12fei08fei.top:8080/project/"
window.location.port = 8080;
```

> 每次修改location的属性（hash除外），页面都会以新URL重新加载
> 通过上述任何一种方式修改UTL之后，浏览器的历史记录中就会生成一条新纪录

**replace()方法**

> 只接受一个参数，即要导航到的URL
> 结果虽然导致浏览器位置改变，但不会再历史记录中生成新纪录

**reload()**

> 作用是：重新加载当前显示的页面
> 调用`reload`不传递任何参数，页面就会以最有效的方式重新加载；即：页面自上次请求以来并没有改变过，页面就会从浏览器缓存中重新加载

*如果要强制从服务器重新加载，则需要传递参数true*

```
window.location.reload();// 重新加载（有可能从缓存中加载）

window.location.reload(true);// 重新加载（从服务器重新加载）
```

> 位于`reload()`调用之后的代码可能会也可能不会执行，这要取决于网络延迟或系统资源等因素
> 因此`reload()`最好放在代码的最后一行

## history对象

> history对象保存着用户上网的历史记录，从窗口被打开的那一刻算起。
> 因为history是window对象的属性，因此每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联
> 出于安全方面的考虑，开发人员无法得知用户浏览过的URL
> 可以借由访问过的页面列表，同样可以在不知道实际URL的情况下实现后退和前进

### length属性

> 保存着历史记录的数量
> 包括所有历史记录，即：所有向后和向前的记录
> 初始值为：0

```
// 确定用户是否一开始就打开了你的页面
if(window.history.length == 0){
	console.log('恭喜，您第一个窗口打开的是我!');
}
```

### go方法

#### 参数为整数值
```
// 后退一页
history.go(-1);
// 后退两页
history.go(-2);

// 前进一页
history.go(1);
// 前进两页
history.go(2);
```

* 测试没有问题

#### 参数为字符串

> 此时浏览器会跳转到历史记录中包含该字符串的第一个位置
> 可能后退，也可能前进，具体要看哪个位置最近
> 如果历史记录中不包含该字符串，那么这个方法什么也不做

```
// 跳转到最近的wrox.com页面
window.history.go('wrox.com');

// 跳转到最近的nczonline.net页面
window.history.go('nczonline.net');
```

* 经过测试没实现，没反应，总是在本页刷新
* 使用不同域名来测试，本页刷新
* 使用hash码测试，还是本页刷新

### back() and forward()方法

```
// 后退一页
window.history.back();
// 前进一页
window.history.forward();
```

### 用途

* 创建自定义的`后退`和`前进`按钮
* 检测当前页面是不是用户历史记录中的第一个页面


