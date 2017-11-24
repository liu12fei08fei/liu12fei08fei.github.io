# CSS之BFC、IFC、FFC and GFC

[TOC]

## 什么是FC？
* FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

## BFC(Block Formatting Contexts)
* 意为“块级格式化上下文”。就是页面上的一个渲染区域，容器内的子元素不会对外面的元素布局产生影响，反之亦然。

### BFC的布局规则:
1. 内部的盒子会在垂直方向，一个个地放置
2. 盒子垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的上下margin会发生重叠
3. 每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此
4. BFC的区域不会与float重叠
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
6. 计算BFC的高度时，浮动元素也参与计算

### 如何生成BFC： 
1. 根元素或其它包含它的元素
2. float的值不为none
2. overflow的值不为visible
3. position的值不为relative和static
4. display的值为table-cell,table-caption和inline-block中的任何一个

* 一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。
* 块格式化上下文对于定位与清除浮动很重要。定位和清除浮动的样式规则只适用于处于同一块格式化上下文内的元素。浮动不会影响其它块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。


## IFC(Inline Formatting Contexts)
* 意为“内联格式化上下文”,IFC中，盒子依次水平放置，从包含块的顶部开始

## FFC(Flex Formatting Contexts)
* 意为“自适应格式化上下文”,display值为flex或者inline-flex的元素将会生成自适应容器。flex box由伸缩容器和伸缩子元素组成。通过设置元素display:flex/inline-flex可以得到伸缩容器，前者为块级元素，后者为行内元素。伸缩容器外元素不受影响。

## GFC(GridLayout Formatting Contexts)
* 意为“网格布局格式化上下文”当一个元素设置为display:grid的时候，此元素将获得一个独立的渲染区域，可以在网格容器上定义网格行和列，为每一个网格定义位置和空间。GFC和table的区别在于GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染。 

