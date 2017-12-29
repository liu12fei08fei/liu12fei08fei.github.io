# CCS3知识查缺补漏

[TOC]

## CSS3选择器分类

![CSS选择器分类](http://p1g0rvvn6.bkt.clouddn.com/CSS3选择器.jpg)

### 基本选择器

选择器 | 类型 | 功能描述 | 例子
--- | --- | --- | ---
* | 通配选择器 | 选择文档中所有的HTML元素 | *{}
E | 元素选择器 | 选择指定的类型的HTML元素 | div{}
\#id | ID选择器 | 选择指定ID属性值为“id”的任意类型元素 | #id_1{}
.class | 类选择器 | 选择指定class属性值为“class”的任意类型的任意多个元素 | .class_1{}
selector1, selectorN | 群组选择器 | 将每一个选择器匹配的元素集合并 | div{}, #id_1{}, .class_1{}

### 层次选择器

选择器 | 类型 | 功能描述 | 例子
--- | --- | --- | ---
E F | 后代选择器(包含选择器) | 选择匹配的F元素，且匹配的F元素被包含在匹配的E元素内 | body div{}
E > F | 子选择器 | 选择匹配的F元素，且匹配的F元素是所匹配的E元素的子元素 | .class_1 > div
E + F | 相邻兄弟选择器 | 选择匹配的F元素，且匹配的F元素紧位于匹配的E元素后面 | .class_1 + .class_2
E ~ F | 通用选择器 | 选择匹配的F元素，且位于匹配的E元素后的所有匹配的F元素 | .class_1 ~ .class_2

### 伪类选择器

> 分为：动态伪类选择器、目标伪类选择器、语言伪类选择器、UI状态伪类选择器、结构伪类选择器、否定伪类选择器
>
> 伪类选择器语法书写时和其他的CSS选择器语法有所区别：都已冒号(:)开头

#### 动态伪类选择器

> 第一种：链接中常看到的锚点伪类
> 第二种：用户行为伪类
> 
> 注意：锚点伪类的设置必须遵守一个原则，link - visited - hover - active

选择器 | 类型 | 功能描述 | 例子
--- | --- | --- | ---
E:link | 链接伪类选择器 | 选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接锚点上
E:visited | 链接伪类选择器 | 选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接锚点上
E:active | 用户行为伪类选择器 | 选择匹配的E元素，且匹配元素被激活。常用语锚点与按钮上
E:hover | 用户行为伪类选择器 | 选择匹配的E元素，且用户鼠标在停留在元素E上
E:focus | 用户行为伪类选择器 | 选择匹配的E元素，且匹配的元素获得焦点

#### 目标伪类选择器

选择器 | 功能描述
--- | ---
E:target | 选择匹配E的所有元素，且匹配元素被相关URL指向

> 注意：目标伪类选择器是动态选择器，只有存在URL指向改匹配元素时，样式效果才会生效

#### 语言伪类选择器

> 用来匹配使用语言的元素是非常有用的
> 特点是用于多语言版本的网站，其作用更是明显
> 根据不同语言版本设置页面的字体风格

**为文档指定语言，两种方法：**

1. 直接设置文档语言：`<html lang="zh-CN"></html>`
2. 手工在文档中指定lang属性，并设置对应语言值：`<body lang="fr"></body>`

#### UI状态伪类选择器

选择器 | 类型 | 功能描述
--- | --- | ---
E:checked | 选中状态伪类选择器 | 匹配选中的复选按钮或单选按钮表单元素
E:enabled | 启用状态伪类选择器 | 匹配所有启用的表单元素
E:disabled | 不可用状态伪类选择器 | 匹配所有禁用的表单元素

#### 结构伪类选择器

> 参数n：
> 可以是整数(1、2、3、4)、关键字(odd奇数、even偶数)，还可以是公式(2n+1、-n+5)
> 参数n的起始值始终是1，而不是0

选择器 | 功能描述
--- | --- 
E:first-child | 作为父元素的第一个子元素的元素E。与E:nth-child(1)等同
E:last-child | 作为父元素的最后一个子元素的元素E。与E:nth-last-child(1)等同
E:root | 选择匹配元素E所在文档的根元素。在HTML文档中，根元素始终是html，此刻该选择器与html类型选择器匹配的内容相同
E F:nth-child(n) | 选择父元素E的第n个子元素F。其中n可以是整数（1、2、3）、关键字（even、odd）、可以是公式（2n+1、-n+5），而且n值起始值为1，而不是0
E F:nth-last-child(n) | 选择元素E的倒数第n个子元素F。此选择器与E F:nth-child(n)选择器计算顺序刚好相反，但使用方法都是一样的，其中:nth-last-child(1)始终匹配的是最后一个元素，与:last-child等同
E:nth-of-type(n) | 选择父元素内具有指定类型的第n个E元素
E:nth-last-of-type(n) | 选择父元素内具有指定类型的倒数第n个E元素
E:first-of-type | 选择父元素内具有指定类型的第一个E元素，与E:nth-of-type(1)等同
E:last-of-type | 选择父元素内具有指定类型的最后一个E元素，与E:nth-last-of-type(1)等同
E:only-child | 选择父元素只包含一个子元素，且该子元素匹配E元素
E:only-of-type | 选择父元素只包含一个同类型的子元素，且该子元素匹配E元素
E:empty | 选择没有子元素的元素，而且该元素也不包含任何文本节点

**`nth-child(n)`系列的线上工具**

1. [CSS3 structural pseudo-class selector tester](http://lea.verou.me/demos/nth.html)
2. [:nth Tester](https://css-tricks.com/examples/nth-child-tester/)
3. [Nth-Child Visual Calculator](http://www.nealgrosskopf.com/tech/resources/80/)

#### 否定伪类选择器

选择器 | 功能描述
--- | ---
E:not(F) | 匹配所有除元素F外的E元素

### 伪元素

> 伪元素可用于定位文档中包含的文本，但无法在文档树中定位
> 一方面，伪类反映无法再CSS中轻松或可靠地检测到的某个元素属性或状态
> 另一方面，伪元素表示DOM外部的某种文档结构
> 
> 伪元素使用双冒号(::)表示法
> 双冒号和单冒号在CSS3中主要用来区分伪类和伪元素

包括：`::first-letter`、`::first-line`、`::before`、`::after`、`::selection`

伪元素 | 说明
--- | ---
`::first-letter` | 选择文本块第一个字母
`::first-line` | 匹配第一行文本
`::before` | 需要配合`content`属性
`::after` | 需要配合`content`属性
`::selection` | 用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝的背景，白色的字体

### 属性选择器

选择器 | 功能描述
--- | ---
E[attr] | 选择匹配具有属性attr的E元素。其中E可以省略，表示选择定义了attr属性的任意类型元素
E[attr=val] | 选择匹配具有属性attr的E元素，并且attr的属性值为val（其中val区分大小写），同样E元素省略时表示选择定义了attr属性值为val的任意类型元素
E[attr|=val] | 选择匹配E元素，且E元素定义了属性attr，attr属性值是一个具有val或者以val-开始的属性值。常用于lang属性（例如lang="en-us"）。例如p[lang=en]将匹配定义为英语的任何段落，无论是英式英语还是美式英语
E[attr~=val] | 选择匹配E元素，且E元素定义了属性attr，attr属性值具有多个空格分隔的值，其中一个值等于val。例如，.info[title~=more]将匹配元素具有类名info，而且这个元素设置了一个属性title，同时title属性值以包含了“more”的任何元素，例如<a class="info" title="click here for more information">click me</a>
E[attr*=val] | 选择匹配元素E，且E元素定义了属性attr，其属性值任意位置包含了“val”。换句话说，字符串val与属性值中的任意位置相匹配
E[attr^=val] | 选择匹配元素E，且E元素定义了属性attr，其属性值以val开头的任何字符串
E[attr$=] | 选择匹配元素E，且E元素定义了属性attr，其属性值以val结尾的任何字符串。刚好与E[attr^=val]相反

**CSS3常见的通配符**

通配符 | 功能描述 | 示例
--- | --- | ---
`^` | 匹配起始符 | `span[class^=span]`表示选择以类名以“span”开头的所有span元素
`$` | 匹配终止符 | `a[href\$=pdf]`表示选择以“pdf”结尾的href属性的所有a元素
`*` | 匹配任意字符 | `a[title*=site]`匹配a元素，而且a元素的title属性值中任意位置有“site”字符的任何字符串

## CSS3文本

属性 | 功能描述 | 取值
--- | --- | ---
font-variant | 定义字体大小写 | normal(默认值)、small-caps(小型的大写字母字体)，可以转繁体字`traditional`
word-wrap | 数字/字母换行 | break-word
word-break | 数字/字母换行 | break-all

## CSS3颜色特性

> web安全色：红色(R)、绿色(G)、蓝色(B)

## CSS3动画属性

> animation:[
>   <animation-name> 动画名字
>   <animation-duration> 动画播放所需时间
>   <animation-timing-function> 动画播放方式
>   <animation-delay> 动画开始时间，单位秒
>   <animation-iteration-count> 动画播放循环次数
>   <animation-direction> 动画的播放方向
>   <animation-play-state> 动画播放的状态
>   <animation-fill-mode> 设置动画的时间外属性
> ]

### 关键帧

```
@keyframes animation_name{
	from{
		/*css样式编写位置*/
	}
	percentage{
		/*css样式编写位置*/
	}
	to{
		/*css样式编写位置*/
	}
}
```

**percentage**指的是百分比，必须带百分号`%`，否则无效

## 媒体类型

```
@media screen and (max-width:720px){
    选择器{
        /*css样式编写位置*/
    }
}
```

## 字体图标的优势

1. 适用性：一个图标字体比一系列的图像（特别是在Retina屏中使用双倍大小的图像）要小。一旦图标字体加载了，图标就会马上渲染出来，不需要下载任何图像
2. 可扩展性：图标字体可以用font-size属性设置大小。能够随时输出不同大小的图标，然而，使用位图必须每个不同大小的图像输出一个不同文件
3. 灵活性：文字效果可以很容易地应用到图标上，包括颜色、阴影和翻转等效果。它们还可以在任何背景下显示
4. 兼容性：网页字体支持所有现代浏览器，包括低版本IE

### `@font-face`具有以下五种字体格式

**1. TureType(.ttf)格式**

* TureType(.ttf)格式字体是Windows和iOS的最常见的字体，是一种RAW格式。
* 支持这种字体的浏览器有：IE 9+、Firefox 3.5+、Chrome 4+、Safari 3+、Opera 10+、iOS Mobile Safari 4.2+等

**2. OpenType(.otf)格式**

* OpenType(.otf)格式字体被认为是一种原始的字体格式，其内置在TureType的基础上，所以也提供更多的功能，支持这种字体的浏览器有：Firefox 3.5+、Chrome 4.0+、Safari 3.1+、Opera 10.0+、iOS Mobile Safari 4.2+等

**3. Web Open Font Format(.woff)格式**

* Web Open Font Format(.woff)格式字体是Web字体中最佳格式，它是一个开发的TrueType/OpenType的压缩版本，同时也支持元数据包的分离，支持这种字体的浏览器有：Firefox 3.5+、Chrome 6.0+、Safari 3.6+、Opera 11.1+等

**4. Embedded Open Type(.eot)格式**

* Embedded Open Type(.eot)格式字体是IE专用字体，可以从TrueType中创建此格式字体，支持这种字体的浏览器有IE4+

**5. SVG(.svg)格式**

* SVG(.svg)格式字体是基于SVG字体渲染的一种格式，支持这种字体的浏览器有：Chrome 4+、Safari 3.1+、Opera 10.0+、iOS Mobile Safari 3.2+等

> 为了得到更多的浏览器版本支持，至少需要`.woff`和`.eot`两种格式字体，甚至还需要`.svg`字体

### 很多情况下，手上仅有一种格式的字体，这就需要我们能够转换所需字体格式

[Google Fonts](https://fonts.google.com/)


