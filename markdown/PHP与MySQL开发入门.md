# PHP与MySQL开发入门

[TOC]

## 初识PHP

> JS是面向过程编程的语言
> PHP是面向对象的编程语言（后端的语言几乎都是面对对象编程）

### 课程概要

1. 初识PHP
2. OO的概念解读以及Prototype
3. PHP和JS的比较（面向对象实现上）

**前端和后端**

* 前端是展现给用户的
* 后端是默默地运行在服务器上的

**为什么前端要学习后端？**

* 学习后端语言，能真正的、更好的了解一些编程的概念和原理
* 和后台工程师合作的时候，更有把握，知道自己做的东西是什么

**PHP（超文本预处理器）**

> PHP（外文名:PHP: Hypertext Preprocessor，中文名：“超文本预处理器”）是一种通用开源脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，使用广泛，主要适用于Web开发领域。PHP 独特的语法混合了C、Java、Perl以及PHP自创的语法。它可以比CGI或者Perl更快速地执行动态网页。用PHP做出的动态页面与其他的编程语言相比，PHP是将程序嵌入到HTML（标准通用标记语言下的一个应用）文档中去执行，执行效率比完全生成HTML标记的CGI要高许多；PHP还可以执行编译后代码，编译可以达到加密和优化代码运行，使代码运行更快。

* *超文本预处理器：*是可以预先进行处理并产出，不是写死的
* *脚本语言：*不需要进行编译的语言
* *编译：*比如：吃一个萝卜
    1. 洗洗就可以吃了，这是解释型语言
    2. 编译，就是要把萝卜切成块，放在高压锅里面顿，顿完才能吃
    3. 因此，编译型语言更快
* *它可以比CGI或者Perl更快速地执行动态网页：*主要知道php执行很快就可以
* *PHP还可以执行编译后代码：*要求php技术比较高

> 编写代码：当文件夹下面有`index.html`和`index.php`，运行文件夹第一个找到的是`html`，当没有`html`时候，运行`index.php`

### PHP概念和基本操作

* 命名使用`$`
* 使用分号结束
* php是块级作用域
* 判断php变量是否被声明，使用`isset($a)`，返回值：`存在并且值不是 NULL 则返回 TRUE，否则返回 FALSE`
* php在函数作用域中调用，全局作用域中的变量，需要进行额外操作`global $a;`或者`$GLOBALS["a"](不带$)`
* PHP 变量三种作用域：local（局部）、global（全局）、static（静态）
* php引入其他php文件，`require`、`include`、`require_once`、`include_once`，区别是请求出错的处理机制不同，建议使用`require_once`
* 把php数组，输出成`json`格式，使用`json_encode`，eg：

```
<?php
$arrayTest = array('0'=>'苹果',1=>'栗子');
echo json_encode($arrayTest);
?>
```

* 存储有关用户会话的信息，`session_start`一般都是在我们初始的配置文件里面启动一次就可以了，避免没事使用都要进行`session_start();`

```
<!-- 存储 -->
<?php
session_start();
$_SESSION["view"] = 'view';
 ?>
```

```
<!-- 引用 -->
<?php
session_start();
echo $_SESSION["view"];
 ?>
```

* php获得前端提交的数据，通过`form`或者`ajax`；php接收方法：
    1. `$_GET`：通过 URL 参数传递给当前脚本的变量的数组
    2. `$_POST`：当 HTTP POST 请求的 Content-Type 是 application/x-www-form-urlencoded 或 multipart/form-data 时，会将变量以关联数组形式传入当前脚本
    3. `$_COOKIE`：通过 HTTP Cookies 方式传递给当前脚本的变量的数组
    4. `$_REQUEST`：默认情况下包含了 `$_GET`，`$_POST` 和 `$_COOKIE` 的数组。

> 讲述了，php基本操作和判断方法
> 函数中引用变量方法和作用域
> php引用其他php文件的方法
> php回话机制
> php给前端传递json数据的方法
> 前端给后端传递数据的流程
> 后端处理前端传递的数据

### 初始phpMyAdmin

**什么是MySQL？**

> MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性
> 数据库定义了存储信息的结构
> 在数据库中，存在着一些表。类似 HTML 表格，数据库表含有行、列以及单元

* *关系型：*比如萝卜
    1. 非关系型：一个萝卜一个坑，相应的萝卜和萝卜之间（相应的数据和数据之间），没有什么关系
    2. 关系型：两个萝卜的根，能连接到一起，萝卜和萝卜之间存在某种关系 

**采用语言**

* SQL语言

**表是改什么的？**

* 是用来存储我们的数据

**phpMyAdmin-SQL操作**

> 使用`SQL`栏目自带的几个功能按钮，可以解决初学者快速入门的需求
> 建议使用单引号包裹要内容，原因是很多外部内容里面存在双引号，当然后续再进行处理也行

* `SELECT（*）：`查找
* `INSERT：`添加
* `UPDATE：`更新
* `DELETE：`删除

**PHP MySQL 连接数据库**

* php连接数据库：`mysqli_connect(servername,username,password);`
* 创建数据库：`CREATE DATABASE database_name`
* 向数据库表插入数据：

```
INSERT INTO table_name
VALUES (value1, value2,....)
```

*例子：*

> 返回值：
> 1. 当连接成功的时候，返回mysql连接标识符
> 2. 当连接失败的时候返回false

```
$con = mysqli_connect("localhost","root","root");
```

* 一个完整的系统：前端 <=> PHP <=> MySQL

**php->连接数据库->选择数据库->操作表**

```
<?php
// php输入操作符 echo() var_dump()-打印变量的相关信息 print_r()-打印关于变量的易于理解的信息
// die()-等同于 exit()-输出一个消息并且退出当前脚本

// 目的：防止页面出现乱码
header("Content-type:text/html;charset=utf-8");
// 连接数据库，localhost、root、root参数改成自己的
$con = mysqli_connect("localhost","root","root");
if($con){
	echo '<br/>'.'连接数据库成功!'.'<br/>';

	// 进行选择数据库，yiding数据库名改成自己的
	$sdb = mysqli_select_db($con,'yiding');

	if($sdb){
		echo '<br/>'.'选择数据库成功'.'<br/>';

		// MySQL语句-增
		$newstitle = '侃大山2';
		$newsimg = "我是img";
		$newscontent = "我要说点事";
		$addtime = "2018-08-08";
		// 拼接字符串，news表名改成自己的
		$sql = "INSERT INTO `news`( `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."')";

		// 不拼接字符串
		// $sql = "INSERT INTO `news`( `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('上了飞机','我发了img','falds','2017-08-08')";

		// MySQL语句-删
		// $sql = "DELETE FROM `news` WHERE `newsid`=7";
		// $sql = "DELETE FROM `news` WHERE `newstitle`='你好title'";

		// MySQL语句-改
		// $sql = "UPDATE `news` SET `newstitle`='你好啦啦啦11' WHERE `newsid`=3";

		// 操作数据库
		$que = mysqli_query($con,$sql);
		if($que){
			echo '<br/>'.'操作表成功!'.'<br/>';
		}else{
			die('<br/>'.'操作表错误：'.mysqli_error($con).'<br/>');
		}
	}else{
		die('<br/>'.'选择数据库错误：'.mysqli_error($con).'<br/>');
	}
}else{
	die('<br/>'.'连接数据库错误：'.mysqli_error($con).'<br/>');
}
// 关闭数据库连接
mysqli_close($con);
?>
```

**数据库扩展**

> 像Mysql常用的扩展有原生的mysql库，也可以使用增强版的mysqli扩展，还可以使用PDO进行连接与操作

* mysql扩展进行数据库连接的方法：

```
$link = mysql_connect('mysql_host', 'mysql_user', 'mysql_password');
```

* mysqli扩展：

```
$link = mysqli_connect('mysql_host', 'mysql_user', 'mysql_password');
```

* PDO扩展

```
$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'dbuser';
$password = 'dbpass';
$dbh = new PDO($dsn, $user, $password);
```

## php面向对象

### 课程概要

1. 面向对象介绍
2. 如何抽象一个类
3. 通过类实例化对象

### 面向对象的介绍

1. 面向对象的产生
2. 面向对象的概念（OOP）
3. 类与对象之间的关系
4. 面向对象程序设计

**面向对象的产生**

1. 软件危机的产生
2. 软件工程学
3. 软件开发的方法--面向对象

*软件危机：*

* 软件危机是指落后的软件生产方式无法满足迅速增长的计算机软件需求，从而导致软件开发与维护过程中出现一系列严重问题的现象。
* **记忆：由于落后的生产方式，导致软件危机**

*软件工程学：*

* 软件工程学，是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科，它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。
* **记忆：分为结构化方法（按软件周期分为三个阶段：分析、设计、编程）和面向对象**
* **记忆：由于软件危机，诞生了软件工程学**

> 结构化方法：就是分析、设计、编程

*面向对象：*

* OOP(Object-Oriented Programming，面向对象的编程)技术为编程人员敞开了一扇大门，使其编程的代码**更简洁、更易于维护，并且具有更强的可重用性**
* OOP达到了软件工程的三个目标：**重用性、灵活性、扩展性**
* OOP面向对象编程的特点：**封装、继承、多态**

**类与对象之间的关系**

1. 什么是类：“人类”，是一个巨大的概念，是一个集合
2. 什么是对象：就是类里面具体的“人”，张三、李四...

**面向对象的三个主要特征：**

1. 对象的行为：对象里面具体能干什么，即方法
2. 对象的状态：对象属性，鼻子眼睛...
3. 对象的标识：姓名

**如何抽象一个类：**

1. 类的声明
2. 成员属性：具体的值
3. 成员方法：方法干活

**类的声明-简单格式：**

```
[修饰符] class 类名{ // 使用class关键字+空格后+类名
	[成员属性] // 也叫成员变量

	[成员方法] // 也叫成员函数
}
```

**类的声明-完整格式：**

```
[修饰符] class 类名 [extends父类][implements接口1[,接口2...]]{ // 使用class关键字+空格后+类名
	[成员属性] // 也叫成员变量

	[成员方法] // 也叫成员函数
}
```

*父类：*公共属性和方法

**成员属性**

> 格式：修饰符 $变量名[=默认值]; // 如：public $name="zhangsan";
> 注意：成员属性不可以，带运算符的表达式、变量、方法或函数调用

*错误定义方式：*

```
public $var3=1+2; // 错误格式
public $var4=self::myStaticMethod(); // 错误格式
public $var5=$myVar; // 错误格式
```

*正确定义方式：*

```
public $var6=100; // 普通数值（4个标量：整数、浮点数、布尔、字符串）
public $var6=myConstant; // 常量
public $var7=self::classConstant; // 静态属性
public $var8=array(true,false); // 数组
```

**成员方法**

*格式*

```
[修饰符]function 方法名(参数...){
	[方法体]
	[return 返回值]
}
```

*例子*

```
public function say(){ // 人可以说话的方法
	echo "人在说话"; //方法体
}
```

### 通过类实例化对象

> 实例化对象
> 对象中成员的访问
> 特殊对象引用$this

#### 实例化对象

* 当定义好类后，我们使用new关键字来生成一个对象

```
$对象名称 = new 类名称();
$对象名称 = new 类名称([参数列表]);
```

#### 对象中成员的访问

* 语法

```
$引用名 = new 类名(构造参数);
$引用名->成员属性=赋值; // 对象属性赋值
echo $引用名->成员属性; // 输出对象的属性
$引用名->成员方法(参数); // 调用对象的方法
```

#### 特殊对象引用 $this

> 在当前代码里面可以随意的引用 $this

```
public function play(){
	echo "正在玩手机!";
}

public function info(){
	$this->play();
	return "手机的宽度：{$this->width}，手机的高度：{$this->height}";
}
```

#### 类的例子

```
<?php
/**
*类的声明
*/
class Person
{

    public $age;
    public function say($word){
        echo "she say {$word}";
    }
    public function info(){
        $this -> say("Hi!");
        return $this -> age;
    }
}

$xh = new Person();
$xh -> age = 22;
$age = $xh -> info();
echo $age;

 ?>
```

## 构造方法与析构方法

### 构造方法

> 构造方法
> 构造方法实例

**构造方法语法格式：**

```
[修饰符]function__construct([参数]){
	程序体
}
```

### 析构方法

> 析构方法
> 析构方法实例

**析构方法语法格式：**

```
[修饰符]function__destruct([参数]){
	程序体
}
```

*析构代码：*

1. 当我们一个类不用再去使用到里面任何一个相关的属性和方法的时候，析构执行
2. 可以理解为：再也没有有关的这个类调用的时候，就执行了

### 例子

```
<?php
/**
*为了测试构造方法和析构方法
*/
class Person
{

    public function __construct($name,$age){
        // 当这个类的时候自动执行的
        echo('hello'.$name).'<hr/>';
        $this -> name = $name;
        $this -> age = $age;
    }
    public function data(){
        return $this->age;
    }
    public function __destruct(){
        // 用途 可以进行资源的释放操作 数据库关闭 读取文件关闭
        // 执行 对象被销毁的时候执行 没有代码在去运行了
        echo "bye bye{$this->name}<br/>";
    }
}
new Person('小王',30);
new Person('小红',20);

 ?>
```

## php面向对象之封装性

> 设置私有成员与私有成员访问
> 魔术方法__set()：外面的元素对类里面的元素设置值的使用，进行调用
> 魔术方法__get()：获取类里面相应的元素的时候
> 魔术方法__isset()：在外面去执行对象类里面的成员属性判断的时候进行调用
> 魔术方法__unset()：释放，从类外面释放这个变量的时候进行调用

### 设置私有成员与私有成员访问

> 封装的修饰符
> 设置私有成员
> 访问私有成员

#### 封装的修饰符

* 封装性是面向对象编程中的三大特性之一，封装就是把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象的内部细节，已达到对成员的访问控制（切记不是拒绝访问）

PHP5支持如下三种访问修饰符：

1. public（公有的 默认）
2. private（私有的）
3. protected（受保护的）

#### 设置私有成员

* 只要在声明成员属性或成员方法时，使用private关键字修饰就是实现了对成员的私有封装

*实例：*

```
class person{
	private $name;
	private $age;
	private function say(){
		...
	}
}
```

#### 访问私有成员

* 封装后的成员在对象的外部不能直接访问，只能在对象的内部方法中使用`$this`访问
* `$this`开始发挥作用

*实例：*

```
class person{
	private $name;

	public functon say(){
		return $this -> name;
	}
}
```

#### 例子

```
<?php
/**
*定义一个类 学习 public private protected
*private protected区别在继承
*/
class Person
{
    public $name="志佳"; // 公有的
    private $age=27; // 私有的
    protected $money=10; // 受保护的

    // 私有的成员方法 不能在类外部直接被访问
    private function getAge(){
        return $this->age;
    }

    // 被保护的成员方法 不能在类的外部直接被访问
    protected function getMoney(){
        return $this->money;
    }

    public function userCard(){
        echo $this->name.'-'.$this->getAge().'-'.$this->getMoney();
    }

    public function __set($key,$value){
        // 魔术方法的set 只针对保护的变量，私有的变量
        if($key=="age"&&$value=="laowang"){
            $this->age="xiaowang";
        }
    }

    public function __get($key){
        if($key=="age"){
            return "girl not tell you";
        }
    }

    public function __isset($key){
        if($key=="age"){
            return true;
        }
    }

    public function __unset($key){
        if($key=="age"){
            echo '已经unset'.'<br/>';
        }
    }
}
$xw = new Person();
// 下面是调用三种类型，只有public可以在外部调用
// echo $xw->name;
// echo $xw->age; // 报错，没有权限
// echo $xw->money; // 报错，没有权限
// echo $xw->userCard();
// echo $xw->getAge(); // 报错，没有权限
// echo $xw->getMoney(); // 报错，没有权限

// set方法调用
// $xw->age="laowang";
// echo $xw->userCard();

// get方法调用
// echo $xw->age;

// var_dump(isset($xw->age));//返回true/false
// isset()-检测变量是否已设置并且非 NULL

// unset($xw->age);//干掉一个变量
// unset — 释放给定的变量
// var_dump($xw->age);
 ?>
```

#### 访问权限

  | private | protected | public(默认的)
--- | --- | --- | ---
在同一类中 | 可以 | 可以 | 可以
在类的外部 | 不可以 | 不可以 | 可以

## PHP面向对象之继承和多态

> 类继承的应用
> 访问类型控制
> 子类中重载父类的方法

### 类继承的应用

> PHP只支持单继承，不允许多重继承。一个子类只能有一个父类，不允许一个类直接继承多个类，但一个类可以被多个类继承
> 可以有多层继承，即一个类可以继承某一个类的子类，如：类B继承了类A，类C又继承了类B，那么类C也间接继承了类A
> 形象一点就是：当一个人的儿子，当很多人的爹

```
class A{
	...
}

class B extends A{
	...
}
```

### 访问类型控制

**访问权限**

    | private | protected | public(默认的)
--- | --- | --- | ---
在同一类中 | 可以 | 可以 | 可以
在子类中 | 不可以 | 可以 | 可以
在类的外部 | 不可以 | 不可以 | 可以

### 子类中重载父类的方法

> 在子类里面允许重写（覆盖）父类中的方法
> 在子类中，使用parent访问父类中被覆盖的属性和方法

```
parent::construct();
parent::fun();
```

### 多态

> 大白话：多种状态
> 重写/覆盖  override  
> 指:子类重写了父类的同名方法  
> 重载: overload  
> 重载是指:存在多个同名方法,但参数类型/个数不同.  
> 传不同的参数,调用不同的方法  
> 但是在PHP中,不允许存在多个同名方法.  
> 因此,不能够完成java,c++中的这种重载  
> 但是,PHP的灵活,能达到类似的效果 

**重载overload**方法名不变，参数不同
**重写override**还是A，原来的方法没有了，是覆盖
**多态**同样定义一个A，A在执行的时候，不一定在子类里面重写或重载，A表示多种状态

* 封装继承都是为了多态做准备

### 例子

```
<?php
/**
* 父类
*/
class Person
{
    public $name;
    private $age;//私有的 继承不过来
    protected $money;//外部不能访问 但是可以被继承过去
    function __construct($name,$age,$money)
    {
        $this->name=$name;
        $this->age=$age;
        $this->money=$money;
    }

    public function cardInfo(){
        echo "name->".$this->name." age->".$this->age." money->".$this->money.'<br/>';
    }
}
/**
*
*/
class Yellow extends Person
{

    function __construct($name,$age,$money)
    {
        parent::__construct($name,$age,$money);
    }
    // php重写
    public function cardInfo($pp){
        // php实现重载的办法
        parent::cardInfo();
        echo $pp;
    }
    public function test(){
        echo $this->money;
    }
}
$s = new Yellow('新闻',12,1000);
// $s->cardInfo(11);
print_r($s->name);
$s->test();
?>
```

## php抽象类与接口

> 抽象方法和抽象类
> 接口技术
> 多态应用

### 抽象方法和抽象类

> 当类中有一个方法，他没有方法体，也就是没有花括号，直接分号结束，像这种方法我们叫抽象方法，必须使用关键字abstract定义

```
如：public abstract function fun();
```

* 包含这种方法的类必须是抽象类也要使用关键字abstract加以声明。（即使用关键字abstract修饰的类为抽象类）

**抽象类的特点：**

1. 不能实例化，也就是不能new成对象
2. 若想使用抽象类，就必须定义一个类去继承这个抽象类，并定义覆盖父类的抽象方法（实现抽象方法）

### 接口技术

> php与大多数面向对象编程语言一样，不支持多重继承，也就是说每个类只能继承一个父类。为了解决这个问题，php引入了接口，接口的思想是指定了一个实现了该接口的类必须实现的一系列函数

**定义格式：**

```
interface 接口名称{
	// 常量成员（使用const关键字定义）
	// 抽象方法（不需要使用abstract关键字）
}
```

**使用格式：**

```
class 类名 implements 接口名1,接口名2{... ...}
```

**抽象类和接口的区别：**

* 当你关注一个事物的本质的时候，用抽象类；
* 当你关注一个操作的时候，用接口

* 接口是对动作的抽象，表示这个对象能做什么，对类的局部行为进行抽象
* 抽象类是对根源的抽象，表示这个类是什么，对类的整体进行抽象，对一类事物的抽象描述

* 比如，男人，女人，这两个类（如果是类的话...），他们的抽象类是人。说明，他们都是人，人可以吃东西，狗也可以吃东西，你可以把“吃东西”定义成一个接口，然后让这些类去实现它

* 所以，在高级语言上，一个类只能继承一个类（抽象类）（正如人不可能同时是生物和非生物），但是可以实现多个接口（吃饭接口、走路接口）

> 接口是抽象类的变体，接口中所有的方法都是抽象的。而抽象类是声明方法的存在而不去实现它的类
> 接口可以多继承，抽象类不行
> 接口定义方法，不能实现，而抽象类可以实现部分方法
> 接口中基本数据类型为static而抽象类不是的
> 接口中不能含有静态代码块以及静态方法，而抽象类可以含有静态方法和静态代码块

### 多态应用

> 对象的多态性：是指在父类中定义的属性或行为被子类继承之后，可以具有不同的数据类型或表现出不同的行为。这使得同一个属性或行为在父类及其各个子类中具有不同的语义

### 抽象类实例

```
<?php
/**
*1.含有抽象方法的类必须是抽象类
*2.抽象类不一定非得含有抽象方法
*3.抽象类可以存在普通方法
*4.抽象类不能被实例化，必须由一个子类去继承，并且把抽象类的抽象方法都实现了
*
* 越往高层抽象，越是对整个逻辑思维的抽象；可以是代码高内聚低耦合
*/
abstract class Person
{
    // 抽象方法，没有方法体
    public abstract function eat();
}
/**
*
*/
class Man extends Person
{
    public function eat(){
        echo "Man eat";
    }
}
$man = new Man();
$man->eat();
?>
```

### 接口实例

```
<?php
// 1. 接口声明的关键字是interface
// 2. 接口可以声明常量也可以抽象方法
// 3. 接口中的方法都是抽象方法 不用abstract去人肉的定义
// 4. 接口不能被实例化 需要一个类去实现它
// 5. 一个类不能继承多个类 一个类可以实现多个接口
interface Person{
    const NAME = '怪诞咖啡';
    public function run();
    public function eat();
}
interface Study{
    public function study();
}
class Student implements Person,Study
{
    public function run(){
        echo 'run';
    }
    public function eat(){
        echo 'eat';
    }
    public function study(){
        echo 'study';
    }
}
$xw = new Student;
echo $xw::NAME;
?>
```

## php常见的关键字

> final关键字
> static关键字
> 单例设计模式
> const关键字
> instanceof关键字

### final关键字

> 在PHP5中新增加了final关键字，它只能用来修饰类和方法。不能使用final这个关键字修饰成员属性

**final的特性：**

1. 使用final关键字标识的类不能被继承
2. 使用final关键字标识的方法不能被子类覆盖（重写），是最终版本

**目的：**

1. 为了安全
2. 没必要被继承或重写

### static关键字

> static关键字标识静态的意思，用于修饰类的成员属性和成员方法（即静态属性和静态方法）
> 类中的静态属性和方法不能实例化（new）就可以直接使用类名访问

**格式：**

```
类::$静态属性
类::静态方法
```

* 在类的方法中。不能this来引用静态变量或静态方法，而需要用self来引用

**格式：**

```
self::$静态属性
self::静态方法
```

* 静态方法中不可以使用非静态的内容。就是不让使用$this
* 静态属性是共享的。也就是new很多对象也是共用一个属性

### 单例设计模式

> 单例模式的主要作用是保证在面向对象编程设计中，一个类只能有一个实例对象存在

### const关键字

> const是一个在类中定义常量的关键字，我们都知道在php中定义常量使用的是`define()`这个函数，但是在类里面定义常量使用的是`const`这个关键字

*语法：*

```
const CONSTANT = ""constant value; // 定义
echo self::CONSTANT; // 类内部访问
echo className::CONSTANT; // 类外部访问
```

### instanceof关键字

> instanceof关键字用于检测当前对象实例是否属于某一个类或这个类的子类

### PHP面向对象程序设计之魔术方法

* 克隆对象
* 类中通用的方法__toString()
* __call()方法的应用
* 自动加载类
* 对象串行化

**自动加载类**

* php5中当new实例化一个不存在的类时，则自动调用此函数__autoload()，并将类名作为参数传入此函数
* 可以使用这个实现类的自动加载

### PHP面向对象程序设计之常用函数

* class_exists与get_class_methods函数
* get_class与get_object_vars函数
* get_parent_class与is_a函数
* method_exists与property_exists函数

## php面向对象异常处理

> 系统自带的异常处理
> 自定义异常处理
> 捕捉多个异常处理

```
class Exception{
    protected $message = "Unknown exception"; // 异常信息
    protected $code = 0; // 用户自定义异常代码
    protected $file; // 发生异常的文件名
    protected $line;
    function __construct($message=null,$code=0);
    final function getMessage(); // 返回异常信息
    final function getCode(); // 返回异常代码
    final function getFile(); // 返回发生异常的文件名
    final function getLine(); // 返回发生异常的代码行号
    final function getTrace(); // backtrace()数组
    final function getTraceAsString(); // 已格成化成字符串的getTrace()信息
    function __toString(); // 可输出的字符串
}
```

**例子：**

```
<?php
// try分支在这里进行代码测试，如果有问题就要抛出一个异常，如果没有问题就继续执行
try{
    // catch分支就是捕捉异常对象
    // 参数：异常对象，使用的是类型约束，只能捕捉由Exception类实例化来的对象
}catch(Exception $e){
    echo "错误文件为：";
    echo $e->getFile(); // 得到发生异常的文件
    echo "，发生错误的行为：";
    echo $e->getLine(); // 得到发生异常的行
    echo "，错误代码为：";
    echo $e->getCode(); // 得到异常代码
    echo "，错误信息为：";
    echo $e->getMessage(); // 得到异常信息
}

?>
```

## php和JavaScript的比较

大同小异，多练习jquery


