# JavaScript中数组的各种操作方法

[TOC]

## 检测数组

### 使用instanceof操作符，进行检测

```
ar arr = [1,2,3];
// arr = '非非';
if(arr instanceof Array){
    console.log('是数组');
}else{
    console.log('不是数组');
}
```

* 备注：ES3中使用instanceof操作符的前提是，当前页面只有一个执行环境，当网页中存在多个框架的时候，这种检测方式出现问题；为了解决这个问题，ES5提出了第二种方法

### Array.inArray()方法

```
var arr = [1,2,3];
// arr = '非非';
if(Array.isArray(arr)){
    console.log('是数组');
}else{
    console.log('不是数组');
}
```

* 备注：IE8是不支持这种检测的，当然了对于其兼容性还是可以实现的；不过现在对于IE8早已无人问津

## 数组转换字符串

### toString()方法

```
var arr = [
    [1,2,3],
    ['非非','咖啡'],
    [8,9]
];
console.log(arr.toString());//1,2,3,非非,咖啡,8,9
```

### join()方法

```
var arr = [
    [1,2,3],
    ['非非','咖啡'],
    [8,9]
];
console.log(arr.join(','));//1,2,3,非非,咖啡,8,9
console.log(arr.join('||'));//1,2,3||非非,咖啡||8,9
```

## 数组排序

### reverse()反转数组项的顺序

```
var arr = [1,2,3,4];
var arr1 = ['非非','琪琪','艾艾'];
console.log(arr.reverse());//[4, 3, 2, 1]
console.log(arr1.reverse());//["艾艾", "琪琪", "非非"]
```

### sort()

* 默认情况下，按升序排列数组项（默认比较的是每一项的字符串形式，toString()）

```
var arr = [1,2,3,4];
var arr1 = ['非非','琪琪','艾艾'];
var arr2 = [1,2,3,4,11];
console.log(arr.sort());//[1, 2, 3, 4]
console.log(arr1.sort());// ["琪琪", "艾艾", "非非"]
console.log(arr2.sort());//[1, 11, 2, 3, 4]
```

* sort()接受一个比较函数的参数

```
function compare(value1, value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}
// 简化比较函数
function compare(value1, value2){
    return value1 - value2;
}
var arr = [1,2,3,4,11];
console.log(arr.sort(compare));//[1, 2, 3, 4, 11]
```

## 数组插入

### push()从后面插入新项

```
var arr = [1,2,3,4];
arr.push(8,9)
console.log(arr);//[1, 2, 3, 4, 8, 9]
```

### unshift()从前面插入新项

```
var arr = [1,2,3,4];
arr.unshift(8,9)
console.log(arr);//[8, 9, 1, 2, 3, 4]
```

### splice()-插入

```
var arr = [1,2,3,4,5];
arr.splice(3,0,'非非')
console.log(arr);//[1, 2, 3, "非非", 4, 5]
```

## 数组删除

### pop()删除数组最后一项

```
var arr = [1,2,3,4];
arr.pop()
console.log(arr);//[1, 2, 3]
```

### shift()删除数组第一项

```
var arr = [1,2,3,4];
arr.shift()
console.log(arr);//[2, 3, 4]
```

### splice()-删除

```
var arr = [1,2,3,4,5,6,7,8,9];
arr.splice(0,3)
console.log(arr);//[4, 5, 6, 7, 8, 9]
```

## 数组替换

* splice()-替换

```
var arr = [1,2,3,4,5];
arr.splice(2,1,'非非','琪琪')
console.log(arr);//[1, 2, "非非", "琪琪", 4, 5]
```

## 数组位置查找

```
var arr = [1,2,'非非',3,4,5,'非非','琪琪'];
console.log(arr.indexOf('非非'));//2
console.log(arr.lastIndexOf('非非'));//6
```

## 数组合并

* `concat()`

```
var arr = [1,2,3,4,11];
var arr1 = ['非非','琪琪'];
console.log(arr.concat(arr1));// [1, 2, 3, 4, 11, "非非", "琪琪"]
console.log(arr1.concat(arr));//["非非", "琪琪", 1, 2, 3, 4, 11]
```

## 数组截取

* slice()，接收一个或两个参数，第一个参数是数组起始位置（结果包括起始位置项），第二个参数是结束位置（结果不包括结束项）；支持负数，用长度length减去负数，就是当前项的位置

```
var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(1));//[2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.slice(1,5));//[2, 3, 4, 5]
console.log(arr.slice(-3));//[7, 8, 9]
console.log(arr.slice(-4,-1));//[6, 7, 8]
```

## 迭代方法

## every()

* every()对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true

```
var arr = [1,2,3,4,5,6,7,8];
var everyMethods = arr.every(function(item, index, array){
    return item > 0;
});
console.log(everyMethods);//true
```

## filter()

* filter()对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组

```
var arr = [1,2,3,4,5,6,7,8];
var filterMethods = arr.filter(function(item, index, array){
    return item > 6;
});
console.log(filterMethods);//[7, 8]
```

## forEach()

* forEach()对数组中的每一项运行给定函数。这个方法没有返回值（与使用for循环迭代数组一样）

```
var arr = [1,2,3,4,5,6,7,8];
var forEachMethods = arr.forEach(function(item, index, array){
    console.log('item=>'+item);
    console.log('index=>'+index);
    console.log('array=>'+array);
});
console.log(forEachMethods);
// item=>1
// array.html:24 index=>0
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>2
// array.html:24 index=>1
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>3
// array.html:24 index=>2
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>4
// array.html:24 index=>3
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>5
// array.html:24 index=>4
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>6
// array.html:24 index=>5
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>7
// array.html:24 index=>6
// array.html:25 array=>1,2,3,4,5,6,7,8
// array.html:23 item=>8
// array.html:24 index=>7
// array.html:25 array=>1,2,3,4,5,6,7,8
```

### map()

* map()对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组

```
var arr = [1,2,3,4,5,6,7,8];
var mapMethods = arr.map(function(item, index, array){
    return item*2;
});
console.log(mapMethods);//[2, 4, 6, 8, 10, 12, 14, 16]
```

### some()

* some()对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true

```
var arr = [1,2,3,4,5,6,7,8];
var someMethods = arr.some(function(item, index, array){
    return item > 6;
});
console.log(someMethods);//true
```

### 归并方法

* reduce()方法 and reduceRight()方法
* 就是递归的函数式方式

## 数组去重

### 第一种

```
var arr = [1,2,3,4,1,2,4,5,6];
console.log(arr);
Array.prototype.unique = function() {
    var n = []; //一个新的临时数组
    for (var i = 0; i < this.length; i++) //遍历当前数组
    {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
};
console.log(arr.unique());
```

### 第二种

```
var arr = [1,2,3,4,1,2,4,5,6];
console.log(arr);
Array.prototype.unique = function()
{
    var n = {},
        r = []; //n为hash表，r为临时数组
    for (var i = 0; i < this.length; i++) { //遍历当前数组
        if (!n[this[i]]) { //如果hash表中没有当前项
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
};
console.log(arr.unique());
```

### 第三种

```
var arr = [1,2,3,4,1,2,4,5,6];
console.log(arr);
Array.prototype.unique = function(){
    var n = [this[0]]; //结果数组
    for (var i = 1; i < this.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
};
console.log(arr.unique());
```


