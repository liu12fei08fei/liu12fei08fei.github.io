# git和github

[TOC]

## 概念

* git：工具，版本控制
* github：网站，社交平台，开源项目，远程仓库（全球最大的基友平台，哈哈）

## git和svn

* git：分布式
* svn：集成式

## 设置全局全局name和email

```
// 不加名字和邮箱，是查看
$ git config --global user.name '怪诞咖啡'
$ git config --global user.email '759665259@qq.com'
```

## 查看所有配置项

```
$ git config --list
```

## git的三个区

* 工作区
* 暂存区
    1. 作为过渡层
    2. 避免误操作
    3. 保护工作区和版本区
    4. 分支处理
* 版本区(库)

**查看当前git状态**

```
$ git status
```

### 工作区和暂存区操作

**把文件添加到暂存区**

```
// 全部都添加
$ git add .

// 单个文件添加
$ git add <file>
```

**把文件返回到工作区**

```
// 全部都返回
$ git reset .

// 单个文件返回
$ git reset <file>
```

### 暂存区和版本区

**把文件从暂存区添加到版本区**

```
$ git commit 
```

### 工作区、暂存区和版本区一起操作

```
$ git commit -a -m 'message'
```

### git历史(log)

**查看log**

```
$ git log
```

**退出log**

```
按Q
```

### 对比

```
// 工作区和暂存区对比
git diff

// 暂存区和版本区对比
git diff --cached(--staged)

// 工作区和版本区对比
git diff master(分支名称)
```

### 撤销

```
// 暂存区撤销回工作区
git reset HEAD <file name>

// 工作区撤销回版本区/暂存区
git checkout --<file name>

// 工作区撤销回暂存区
git commit --amend
```

### 删除

```
// 随意删除工作区文件
git rm <file name>

// 删除工作区和暂存区文件
git rm -f <file name>

// 删除工作区
git rm --cached <file name>
```

### 恢复

```
// 针对文件
git checkout commit id <file name>

// 针对版本，HEAD是指针
git reset --hard commit id
    HEAD^
    HEAD~<num>
    
// 查看所有提交记录
git reflog
```

## git分支管理

### 查看远程分支

```
$ git branch -a
```

### 查看本地分支

```
$ git branch
```

### 创建分支推到远程分支

```
$ git branch dev
$ git push origin dev
```

### 切换分支

```
$ git checkout test
```

### 删除本地分支

```
$ git branch -d  dev
```

### 提交代码

```
$ git push origin dev  
$ git merge dev
```

### push到远程

```
git push --set-upstream origin chart_data
```

## 开源项目协作

### Fork

> 开了一个分支，放在了我们自己的github下
> 使用`pull request`


