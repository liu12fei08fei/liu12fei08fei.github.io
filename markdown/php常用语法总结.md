# php常用语法总结

[TOC]

## 常见错误

* Parse error(解析错误):syntax error(语法错误)
* Notice(通知):Undefined variable(未定义的变量)
* Catchable fatal(致命) error:
* Warning(警告):

## 可变变量-等量代换

```
<?php
// 可变变量-等量代换
$a = 'b';
$b = 'c';
$c = '怪诞咖啡';
echo $$$a; //怪诞咖啡
 ?>
```

## 常用打印语法

* `echo`：输出一个或者多个字符串
* `var_dump()`：打印变量的详细信息，可以一次打印一个或者多个变量的详细信息（数据类型）
* `print_r()`

## 字符串

**单引号和双引号的区别？**

* 双引号会解析变量
* 推荐使用单引号，单引号执行效率高，不需要检测和解析变量

**查找字符串中指定位置的字符**

```
// 从0开始查找字符
$str = 'abcd';
echo $str{0};

// 只能是一个替换一个
$str{1} = 'ui'; // aucd
```

## 数据类型强制转换-临时转换

> *临时转换：*不改变值本身

### 小括号-变量类型

* 整型：`(int)$变量名称` | `(integer)$变量名称`
* 浮点型：`(float | double | real)$变量名称`
* 字符型：`(string)$变量名称`
* 布尔型：`(bool | boolean)$变量名称`
* 空：`(unset)$变量名称`
* 数组：`(array)$变量名称`
* 对象：`(object)$变量名称`

### 系统函数

* `intval($var)`：返回变量转换成整型之后的值
* `floatval($var) | doubleval($var) | realval($var)`：返回变量转换成浮点型的值
* `strval($var)`：返回变量转换成字符串的值
* `boolval($var)`：返回变量转换成布尔类型的值

## 数值类型强制转换-永久转换

* `settype($var,$type)`：设置变量的类型
* `gettype($var)`：返回变量的类型，后续版本可能会更改，不建议使用

## 通过变量函数库检测变量的类型，`is_*`

* 整型：`is_int() | is_integer() | is_long()`
* 浮点型：`is_float() | is_double() | is_real()`
* 字符串型：`is_string()`
* 布尔类型：`is_bool`
* 标量类型：`is_scalar()`
* 空null：`is_null()`
* 数组：`is_array()`
* 对象：`is_object()`
* 资源：`is_resource()`
* 是否为数值型或者字符串形式的数值：`is_number()`

## php常量

### 系统常量

> 系统提前给大家提供的，拿来就可以直接使用

* PHP_VERSION：PHP的版本
* PHP_OS：PHP的运行系统
* PHP_INT_MAX：整型的最大值

### 定义常量

* `define()`函数定义常量，`define(NAME, VALUE)`，常量名称不加`$`，常量名称最好大写
* `const`关键字定义常量，`const WEB_TITLE`

### 检测常量是否存在

* `defined($name)`：检测常量名称是否存在，如果存在返回true，否则返回false
* 获取所有已经定义的常量：`get_defined_constants()`：返回包含系统常量和自定义常量的数组

### 魔术常量

* `__LINE__`：当前行号
* `__FILE__`：当前文件的完整绝对路径和文件名
* `__DIR__`：得到文件的完整绝对路径

## 错误抑制符`@`

```
@echo $str;
@var_dump($str);
```

## MySQL数据类型

[菜鸟教程](http://www.runoob.com/mysql/mysql-data-types.html)

## 创建数据表

名称 | 变量名 | 数据类型 | 备注
--- | --- | --- | ---
编号 | `id` | `int` | 无符号
用户名 | `username` | `varchar(20)` | 唯一
年龄 | `age` | `tinyint` | 无符号
邮箱 | `email` | `varchar(50)` | 唯一
电话 | `tel` | `char(11)` | 唯一
薪水 | `salary` | `float(8,2)` | 
是否结婚 | `married` | `tinyint(0)` | `0`未结婚 `1`结婚
地址 | `addr` | `varchar(100)` | 
密码 | `password` | `char(32)` | 
身份证 | `card` | `char(18)` | 唯一
性别 | `sex` | enum('男','女','保密') | 

## php数组

### 删除数组项目

* `unset($arr[0])`

### 快速创建二维数组

```
$arr[] = ['id'=>1,'name'=>'php','desc'=>'php是最好的语言'];
$arr[] = ['id'=>2,'name'=>'javascript','desc'=>'javascript是最好的语言'];
$arr[] = ['id'=>3,'name'=>'go','desc'=>'go是最好的语言'];
```

### 合并数组`=`

* 数组键名相同，只会使用左边数组元素的值；而不是覆盖

### 比较数组

* `==`比较数组的键名和键值是否相同，如果相同返回true，否则返回false
* `===`既要比较键名和键值是否相同，也要排列顺序相同
* `!=`和`<>`都是不等于

### 遍历数组

```
// for循环只能遍历下标连续的索引数组
$arr = range('a','z');
for($i=0,$count=count($arr);$i<$count;$i++){
	echo $arr[$i].'<br/>';
}
```

```
// foreach分为两种形式
// 只要键值的情况
foreach($数组名称 as $val){}
// 既要键名也要键值的情况
foreach ($数组名称 as $key => $value){}
```

```
$arr = [
	5 => 'a',
	10 => 'b',
	15 => 'c',
	20 => 'd',
	25 => 'e'
];
foreach ($arr as $key => $value) {
	echo $key.'=>'.$value.'</br>';
}
```

* `foreach()`遍历数组和对象，如果不是数组或者对象会报警告，通过@符号无法抑制错误

```
// 二维的索引+关联数组，
$user = [
	['id'=>1,'username'=>'name_1','age'=>11],
	['id'=>2,'username'=>'name_2','age'=>22],
	['id'=>3,'username'=>'name_3','age'=>33],
];
foreach ($user as $key => $value) {
	foreach ($value as $key => $value) {
		echo $key.'=>'.$value.'<br/>';
	}
}
```

```
// php+html=>写法_1
<?php
$user = [
	['id'=>1,'username'=>'name_1','age'=>11],
	['id'=>2,'username'=>'name_2','age'=>22],
	['id'=>3,'username'=>'name_3','age'=>33],
];
?>
<table border="1" cellpadding="0" cellspacing="0" width="80%" bgcolor="#abcdef">
    <tr>
        <td>编号</td>
        <td>用户名</td>
        <td>年龄</td>
    </tr>
    <?php foreach ($user as $key => $value):?>
	    <tr>
	        <td><?php echo $value['id']; ?></td>
	        <td><?php echo $value['username']; ?></td>
	        <td><?php echo $value['age']; ?></td>
	    </tr>
	<?php endforeach; ?>
</table>
```

```
// php+html=>写法_2，可以通过冒号(:)和endforeach代替{}
<?php
$user = [
	['id'=>1,'username'=>'name_1','age'=>11],
	['id'=>2,'username'=>'name_2','age'=>22],
	['id'=>3,'username'=>'name_3','age'=>33],
];
?>
<table border="1" cellpadding="0" cellspacing="0" width="80%" bgcolor="#abcdef">
<?php foreach ($user as $key => $value) {?>
<tr>
    <td><?php echo $value['id']; ?></td>
    <td><?php echo $value['username']; ?></td>
    <td><?php echo $value['age']; ?></td>
</tr>
<?php }; ?>
</table>
```

### 检测数组

```
// 测变量是否是数组，是 array，则返回 TRUE，否则返回 FALSE
is_array($arr)
```

### 字符串转化为数组

```
$str = 'a,b,c,d,e';
$arr = explode(',', $str);
print_r($arr);
```

### 截取文件扩展名，并且检测扩展名是否在['jpg','jpeg','gif','png']

```
$allowExts = ['jpg','jpeg','gif','png'];
$filename = '1.txt.php.jpg';
$arr = explode('.', $filename);
$ext = end($arr);
var_dump(in_array($ext, $allowExts));
```

### 快速生成字符串

```
$str = join('',range('a','z'));
echo $str;
```

### 合并数组

```
$arr1 = range(0,9);
$arr2 = range('a','z');
$arr3 = range('A','Z');
$newArr = array_merge($arr1,$arr2,$arr3);
print_r($newArr);
```

### 生成验证码

```
// 方法_1
$arr1 = range(0,9);
$arr2 = range('a','z');
$arr3 = range('A','Z');
$newArr = array_merge($arr1,$arr2,$arr3);
$str = '';
for($i=0;$i<4;$i++){
	$str.=$newArr[mt_rand(0,count($newArr)-1)];
}
echo $str;
```

```
// 方法_2
$arr1 = range(0,9);
$arr2 = range('a','z');
$arr3 = range('A','Z');
$newArr = array_merge($arr1,$arr2,$arr3);
$res = join('',array_rand(array_flip($newArr),4));
echo $res;
```

### 打乱数组

```
$arr1 = range(0,9);
$arr2 = range('a','z');
$arr3 = range('A','Z');
$newArr = array_merge($arr1,$arr2,$arr3);
shuffle($newArr);
print_r($newArr);
```

### 得到数组的键名和键值，并以数组的形式返回

```
$arr = range('A','F');
$key = array_keys($arr);
$val = array_values($arr);
print_r($key);
print_r($val);
```

## 设置时区

```
date_default_timezone_set("PRC");
```

