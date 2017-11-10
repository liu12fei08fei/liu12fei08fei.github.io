# hint.css使用说明

###用途

快速实现tooltips提示样式

###相关资源

[官方网站](http://kushagragour.in/lab/hint/)
[GitHub](https://github.com/chinchang/hint.css)
[CDN](https://cdnjs.com/libraries/hint.css)

###功能特色：

1. 只需要引入一个CSS文件，没有JavaScript
2. 文件只有1.5KB min版 and zip版 （指的是SCSS，CSS10KB）
3. 便于使用，无需配置
4. 支持aria-label无障碍属性
5. 支持所有主流浏览器

###缺点：

收费，商业用途需要获得相关许可证

###使用方法：

一、在HEAD标签内引入：

```
<link rel="stylesheet" href="hint.css"></link>
或
<link rel="stylesheet" href="hint.min.css"></link>
```
二、例子

```
Hello Sir, <span class="hint--bottom" aria-label="Thank you!">hover me.</span>
```
三、使用方法

```
class绑定八种方法：（表示显示位置）
hint--top hint--right hint--bottom hint--left hint--top-left hint--top-right hint--bottom-left hint-bottom-right

提示内容或提示文本：（以属性的形式写入）
两种方法：data-hint="提示信息" 或 aria-label="提示信息"
``` 
四、颜色-修饰符

```
错误 hint--error
<span class="hint--top hint--error" data-hint="提示信息">错误</span>

警告 hint--warning
<span class="hint--top hint--warning" data-hint="提示信息">警告</span>

提示 hint--info
<span class="hint--top hint--info" data-hint="提示信息">提示</span>

成功 hint--success
<span class="hint--top hint--success" data-hint="提示信息">成功</span>
```
五、尺寸-修饰符

```
小尺寸 hint--small
<span class="hint--top hint--small" data-hint="提示信息">成功</span>

中等尺寸 hint--medium
<span class="hint--top hint--medium" data-hint="提示信息">成功</span>

大尺寸 hint--large
<span class="hint--top hint--large" data-hint="提示信息">成功</span>
```
六、其他-修饰符

```
一直显示不隐藏 hint--always
<span class="hint--top hint--always" data-hint="提示信息">一直显示</span>

提示框改成圆角 hint--rounded
<span class="hint--top hint--rounded" data-hint="提示信息">圆角显示</span>

去掉过渡动画效果 hint--no-animate
<span class="hint--top hint--no-animate" data-hint="提示信息">无动画</span>

过渡增加弹性效果 hint--bounce
<span class="hint--top hint--bounce" data-hint="提示信息">动画增加弹性过渡</span>
```

###浏览器兼容

* Chrome – 基本功能 + transition 效果
* Firefox – 基本功能 + transition 效果
* Opera – 基本功能
* Safari – basic
* IE 10+ – 基本功能 + transition 效果
* IE 8 & 9 –基本功能



