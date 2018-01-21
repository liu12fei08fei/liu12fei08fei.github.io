# JavaScript多线程

[TOC]

## Concurrent.Thread.js

**运行如下程序，这是一个很简单的功能实现**

```
<script src="Concurrent.Thread.js"></script>
<script>
Concurrent.Thread.create(function() {
    var i = 0;
    while (1) {
        document.body.innerHTML += i++ + "<br/>";
    }
});
</script>
```

> 执行这个程序将会顺序显示从0开始的数字，它们一个接一个出现，你可以滚屏来看它。
> 现在让我们来仔细研究一下代码，他应用`while(1)`条件制造了一个不会中止的循环
> 通常情况下，象这样不断使用一个并且是唯一一个线程的`JavaScript`程序会导致浏览器看起来象冻结了一样，自然也就不会允许你滚屏
> 那么为什么上面的这段程序允许你这么做呢？
> 关键之处在于`while(1)`上面的那条`Concurrent.Thread.create()`语句
> 是这个库提供的一个方法，它可以创建一个新线程。
> 被当做参数传入的函数在这个新线程里执行

**让我们对程序做如下微调**

```
<script src="Concurrent.Thread.js"></script>
<script type="text/javascript">
function f(i) {
    while (1) {
        document.body.innerHTML += i++ + "<br/>";
    }
}
Concurrent.Thread.create(f, 0);
Concurrent.Thread.create(f, 100000);
</script>
```

> 在这个程序里有个新函数`f()`可以重复显示数字，它是在程序段起始定义的
> 接着以`f()`为参数调用了两次`create()`方法，传给`create()`方法的第二个参数将会不加修改地传给f()
> 执行这个程序，先会看到一些从0开始的小数，接着是一些从100,000开始的大数，然后又是接着前面小数顺序的数字
> 你可以观察到程序在交替显示小数和大数，这说明两个线程在同时运行
> 让我来展示`Concurrent.Thread`的另外一个用法
> 上面的例子调用`create()`方法来创建新线程
> 不调用库里的任何`APIs`也有可能实现这个目的

**例如，前面那个例子可以这样写：**

```
<script type="text/x-script.multithreaded-js">
    var i = 1;
    while( 1 ){
    	document.body.innerHTML += i++ + "<br/>";
    }
</script>
```

> 在`script`标签内，很简单地用`JavaScript`写了一个无穷循环
> 你应该注意到标签内的`type`属性，那里是一个很陌生的值`(text/x- script.multithreaded-js)`，如果这个属性被放在`script`标签内，那么`Concurrent.Thread`就会在一个新的线程内执行标签之间的程序
> 你应当记住一点，在本例一样，必须将`Concurrent.Thread`库包含进来
> 有了`Concurrent.Thread`，就有可能自如的将执行环境在线程之间进行切换，即使你的程序很长、连续性很强
> 我们可以简要地讨论下如何执行这种操作
> 简言之，需要进行代码转换
> 粗略地讲，首先要把传递给`create()`的函数转换成一个字符串，接着改写直至它可以被分批分次执行
> 然后这些程序可以依照调度程序逐步执行
> 调度程序负责协调多线程，换句话说，它可以在适当的时候做出调整以便每一个修改后的函数都会得到同等机会运行
> `Concurrent.Thread`实际上并没有创建新的线程，仅仅是在原本单线程的基础上模拟了一个多线程环境
> 虽然转换后的函数看起来是运行在不同的线程内，但是实际上只有一个线程在做这所有的事情
> 在转换后的函数内执行同步通信仍然会造成浏览器冻结，你也许会认为以前的那些问题根本就没有解决
> 不过你不必耽心，`Concurrent.Thread`提供了一个应用`JavaScript`的异步通信方式实现的定制通信库，它被设计成当一个线程在等待服务器的响应时允许其它线程运行
> 这个通信库存于 `Concurrent.Thread.Http` 下

**`Concurrent.Thread.Http`它的用法如下所示：**

> `data.json`本地访问，不能有跨域问题
> 例子：`{ "name":"怪诞咖啡", "age":18, "job":"前端攻城狮" }`

```
<script src="Concurrent.Thread.js"></script>
<script type="text/x-script.multithreaded-js">
	var url = 'data.json';
    var req = Concurrent.Thread.Http.get(url, ["Accept", "*"]);
    if (req.status == 200) {
    	document.write(req.responseText);
    } else {
    	document.write(req.statusText);
    }
</script>
```

> `get()`方法，就像它的名字暗示的那样，可以通过`HTTP`的`GET`方法获得指定`URL`的内容
> 它将目标`URL`作为第一个参数，将一个代表`HTTP`请求头的数组作为可选的第二个参数
> `get()`方法与服务器交互，当得到服务器的响应后就返回一个`XMLHttpRequest`对象作为返回值
> `当get()`方法返回时，已经收到了服务器响应，所以就没必要再用回调函数接收结果
> 自然，也不必再耽心当程序等待服务器的响应时浏览器冻结的情况了
> 另外，还有一个 `post()` 方法可以用来发送数据到服务器

**post()方法**

```
<script src="Concurrent.Thread.js"></script>
<script type="text/x-script.multithreaded-js">
	var url = 'data.json';
    var req = Concurrent.Thread.Http.post(url, "key1=val1&key2=val2");
    document.write(req.statusText);
</script>
```

> `post()`方法将目的`URL`作为第一个参数，要发送的内容作为第二个参数
> 像`get()`方法那样，你也可以将请求头作为可选的第三个参数
> 如果你用这个通信库实现了第一个例子当中的`getArticle()`方法，那么你很快就能应用文章开头示例的那种简单的方法写出`getArticleWithCache()`,`backgroundLoad()`以及其它调用了`getArticle()`方法的函数了
> 即使是那版`backgroundLoad()`正在读文章数据，照例还有另外一个线程可以对用户请求做出响应，浏览器因此也不会冻结
> 现在，你能理解在JavaScript中应用多线程有多实用了！


