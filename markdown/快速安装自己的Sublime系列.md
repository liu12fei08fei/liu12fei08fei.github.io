# 快速安装自己的Sublime系列

[TOC]

## 安装插件管理（Package Control）

* Sublime Text 支持大量插件，如何找到并管理这些插件就成了一个问题，Package Control，正是为了解决这个问题而出现的，利用它我们可以很方便的浏览、安装和卸载 Sublime Text 中的插件。
* 进入 [Package Control 的官网](https://packagecontrol.io/installation)，里面有详细的安装教程。Package Control 支持 Sublime Text 2 和 3，本文只给出 3 的安装流程：
    * Window 使用 Ctrl + ` 打开 Sublime Text 控制台。
    * MAC 使用 Control + ` 打开 Sublime Text 控制台。
    * 将对应的 Python 代码粘贴到控制台，回车等待安装完成
    * 当网络状况不友好的时候，可以使用[官网](https://packagecontrol.io/installation)中的手动安装方式，官网有详细的介绍
    * 等待 Package Control 安装完成。之后使用 Ctrl + Shift + P 打开命令板，输入 PCIP 应出现 Package Control：Install Packge
    * 可以愉快的安装插件了

## 主题
[Material Theme](http://equinsuocha.io/material-theme/#/default)：The most epic theme for Sublime Text.

## 配置：(4种主题)

### 默认主题
```
"theme": "Material-Theme.sublime-theme","color_scheme": 
"Packages/Material Theme/schemes/Material-Theme.tmTheme",
```
![material-theme-default@2x](media/15103694266910/material-theme-default@2x.png)
### DarKer主题
```
"theme": "Material-Theme-Darker.sublime-theme","color_scheme": 
"Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
```
![material-theme-darker@2x](media/15103694266910/material-theme-darker@2x.png)
### palenight主题
```
"theme": "Material-Theme-palenight.sublime-theme","color_scheme": 
"Packages/Material Theme/schemes/Material-Theme-palenight.tmTheme",
```
![material-theme-palenight@2x](media/15103694266910/material-theme-palenight@2x.png)
### Lighter主题
```
"theme": "Material-Theme-Lighter.sublime-theme","color_scheme": 
"Packages/Material Theme/schemes/Material-Theme-Lighter.tmTheme",
```
![material-theme-lighter@2x](media/15103694266910/material-theme-lighter@2x.png)
## 插件
1. [Emmet](https://packagecontrol.io/packages/Emmet)：编码快捷键，前端必备
2. [autoprefixer](https://packagecontrol.io/packages/Autoprefixer)：CSS添加私有前缀，选择CSS代码，Ctrl+Shift+P，选择autoprefixer即可
3. [Js​Format](https://packagecontrol.io/packages/JsFormat)：Javascript的代码格式化插件，快捷键（Ctrl+Alt+F或Control+Alt+F）
4. [jQuery](https://packagecontrol.io/packages/jQuery)：JQ函数提示
5. [Doc​Blockr](https://packagecontrol.io/packages/DocBlockr)：生成优美注释
6. [Nodejs](https://packagecontrol.io/packages/Nodejs)：node代码提示
7. [File​Diffs](https://packagecontrol.io/packages/FileDiffs)：强大的比较代码不同工具，右键标签页，出现FileDiffs Menu或者Diff with Tab…选择对应文件比较即可
8. [Chinese​Localizations](https://packagecontrol.io/packages/ChineseLocalizations)：汉化插件，提供简中，繁中，英文，日文四种语言切换
9. [HTML-CSS-JS Prettify](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify)：格式化HMTL/CSS/JS
10. [Delete​Blank​Lines](https://packagecontrol.io/packages/DeleteBlankLines)：删除多余空行
11. [cssrem](https://github.com/flashlizi/cssrem)：一个CSS值转REM的Sublime Text插件

## 常用配置
1. "update_check": false, // 禁止自动更新
2. "word_wrap": "true" // 设置自动换行
3. "trim_trailing_white_space_on_save": true, // 保证在文件保存时，移除每行结尾多余空格
4. "highlight_line": true, // 当前行高亮
5. "tab_size": 4, // Tab转换，转成4个空格
6. "save_on_focus_lost": true, // 窗口失焦立即保存文件
7. "font_size": 14, // 字体大小
8. "show_encoding": true, // 显示当前文件的编码
9. "show_full_path": true, // 显示全路径
10. "font_face": "YaHei Consolas Hybrid", // 字体设置
11. "font_face": "Comic Sans MS", // 超赞字体

## 相关链接
* [官方文档](http://www.sublimetext.com/docs/3/)
* [官方论坛](https://forum.sublimetext.com/)
* [优秀文档，比官网都全面](http://sublime-text-unofficial-documentation.readthedocs.io/en/latest/)
* [大量主题和插件](https://packagecontrol.io/)


