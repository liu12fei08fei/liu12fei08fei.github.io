# 数据可视化

## 技术栈

* `vue`、`axios`、`highcharts`、`layui`

## 需求挖掘

**真实需求**

* 页面美观
* 能查数据、能看数据走势、能动态改变图表横坐标、能显示图表

**挖掘出来的需求**

* 可视化图表的放大
* 点击内容栏，把指定栏转化成可视化并放大显示
* 增加请求延迟`loading`效果
* 日期`icon`是使用`css3`制作，整个页面没有图片

## 工作如何越来越少

* 最近碰到几个改动原来的项目，分几类：
* 1. 需求变化，老页面需要新内容来宣传，这个正常
* 2. 老页面由于数据量增加，导致需要添加分页功能，由于其使用技术为`JSP`、`Angular 1.0`，看了一周，我一脸的懵逼，所以才有此悟
* 3. 提出需求挖掘：沟通可视化图表只展示固定三个，但是万一呢，做项目想的最多的就是万一呢
* 由此动态去改变图表的意义不大，而添加点击查看指定栏数据，确是完全有必要的
* 毕竟数据挖掘的真正用处是，通过可视化和合理的算法，找出用户的隐藏行为才是我们的目的
