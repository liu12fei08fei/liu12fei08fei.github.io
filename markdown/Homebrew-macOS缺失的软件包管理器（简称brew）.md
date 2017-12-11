# Homebrew-macOS缺失的软件包管理器（简称brew）

[TOC]

## 简介

* brew又叫Homebrew，是Mac OSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件，只需要一个简单的命令，非常方便

## 遇到的问题

* 在真正了解软件包管理工具之前，一直是出于混乱状态，用到什么下载什么，来源也不尽相同，有来自git的、有来自安装包下载的、还有来自百度的等等，记得最让我难忘的就是关于MySQL数据库的学习，我下载了好多版本不同路径不同来源的数据库，后来导致终端软件管理出现了混乱，配置文件也是一塌糊涂；
* 这次是为了 小程序Trace导出工具 安装ADB，最好的方式是安装brew，但是安装的过程中各种出错，最好的方式就是重新做系统然后进行软件包管理
* 也就引起了这次深入研究

## [官网](https://brew.sh/)

## 安装Homebrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## 安装目录介绍

```
$ cd /usr/local
$ find Cellar
Cellar/wget/1.16.1
Cellar/wget/1.16.1/bin/wget
Cellar/wget/1.16.1/share/man/man1/wget.1

$ ls -l bin
bin/wget -> ../Cellar/wget/1.16.1/bin/wget
```

* Homebrew会将软件包安装到独立目录，并将其文件软链接至/usr/local
* Homebrew不会将文件安装到它本身目录之外，所以您可将Homebrew安装到任意位置

## 基本命令

### 查看brew版本

`brew -v`

### 安装公式

```
brew install formula
例子：brew install wget
```

### 写在公式

```
brew uninstall formula
例子：brew uninstall wget
```

### 搜索公式

```
brew search /formula/
例子：brew search /wge*/
*表示模糊搜索
```

### 查看已安装软件

`brew list`

### 更新brew

`brew update`

### 用浏览器打开brew官方网站

`brew home`

### 显示软件信息

`brew info`

### 显示包依赖

`brew deps`

### 其他帮助信息

```
Example usage:
  brew search [TEXT|/REGEX/]
  brew (info|home|options) [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]

Troubleshooting:
  brew config
  brew doctor
  brew install -vd FORMULA

Developers:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]
  https://docs.brew.sh/Formula-Cookbook.html

Further help:
  man brew
  brew help [COMMAND]
  brew home
```

## 包管理器

* 包管理器或包管理系统是一系列软件工具的集合, 这些软件工具用和电脑操作系统一致的方式, 使应用的安装, 升级, 配置和删除软件包的过程自动化, 它通常维护一个数据库软件的依赖和版本信息, 防止软件不匹配和无法跟踪.


