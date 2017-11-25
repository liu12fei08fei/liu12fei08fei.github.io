# Linux入门基础篇

[TOC]

## Linux诞生

1. Linux操作系统诞生于1991年10月5日（这是第一次正式向外公布时间）。
2. Linux存在着许多不同的Linux版本，但它们都使用了Linux内核。
3. Linux可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、视频游戏控制台、台式计算机、大型机和超级计算机。

## Linux发行版本说明

1. Linux的发行版说简单点就是将Linux内核与应用软件做一个打包
2. 较知名的发行版有：Ubuntu、RedHat、CentOS、Debain、Fedora、SuSE、OpenSUSE、TurboLinux、BluePoint、RedFlag、Xterm、SlackWare等

## [Linux官方网站](https://www.linux.org/)

1. Ubuntu 和 CentOS 用的比较多
2. Debian 在国内用的比较少，在国外欧美市场占有率比较大
3. Fedora 已经非常成熟，老师使用的就是这个
4. 其他版本的来源：
    1. 一部分是通过某个已成型的操作系统基础上再次演化而来
    2. 另一部分就是有特殊用途的，比如：Kali是专门为安全方面所开发的一个发行版，其中还有很多网络安全工具、很多黑客工具，这是一个专用的操作系统
5. CentOS 和 Red Hat在服务器市场上占有率非常大
6. Ubuntu、Debian、Fedora在桌面系统上的占有率是比较大的

## [Linux内核官方网站](https://www.kernel.org/)

* 全世界只有这一个内核，这个内核是归Linus本人来进行维护的
* 有很多的程序员都在为这个内核贡献源代码，但是内核的主导维护者就是Linux本人

## 比较有名的Linux发行版

1. [CentOS](https://www.centos.org/)，由社区进行维护的，提供了三种镜像下载：
    1. DVD ISO 里面包含了图形界面的操作系统
    2. Everything ISO 除了包含图形界面，还包括了所有他自己维护的软件
    3. Minimal ISO 不提供图形界面，一般把mini版的IOS装到服务器上，有了图形界面反而降低了服务器的操作性能
    4. 是在redhat基础上重新编译和封装之后产生的CentOS，可以理解为是redhat的开源版或者是redhat的社区版，两者几乎一模一样，不同的是redhat提供了很多商业性的软件
2. [redhat](https://www.redhat.com/zh)，是由商业公司进行维护的和商业性的服务
    1. 商业公司把Linux进行了包装，另外还提供了很多商业性的服务，所以redhat是一个商业性的操作系统
    2. 在官网下载比较麻烦
3. ubuntu，在中国非常流行，还提供了一个[中文版的Linux ubuntu](https://www.ubuntu.com/index_kylin)的发行版

## 虚拟机（Virtual Machine），一个虚拟的系统，安装在系统中的系统

* 指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。流行的虚拟机软件有[VMware](https://www.vmware.com/cn.html)、Virtual Box和Virtual PC，它们都能在Windows系统上虚拟出多个计算机。

VMware/Virtual Box/Virtual PC三者的区别：

1. VMware 商业化的，即收费的
    1. Fusion是MAC系统
    2. Workstation Pro是Windows系统
2. Virtual Box 开源的虚拟机，由Oracle进行维护
3. Virtual PC 不开源，但可以免费试用，是由微软进行维护

## Linux与Windows的不同

1. Linux文件名严格区分大小写
2. Linux中所有内容以文件形式保存，包括硬件
3. Linux不靠扩展名区分文件类型
    1. 根据权限区分，下面是一些约定俗成的扩展名，这些扩展名是为了管理员（即让人能够方便管理）管理文件使用的
    2. 压缩包：'.gz' '*.bz2' '*.tar.bz2' '*.tgz'等
    3. 二进制软件包：'.rpm'
    4. 网页文件：'*.html' '*.php'
    5. 脚本文件：'*.sh'
    6. 配置文件：'*.conf'
4. Windows下的程序不能直接在Linux中安装和运行

## Linux基本命令入门

1. ls 显示短格式；ls -l 显示长格式
2. ls -l显示信息讲解（drwxr-xr-x+  5 liufeifei  staff   170  8 18 15:56 Public）
    1. 第一栏：drwxr-xr-x+ 访问权限
    2. 第二栏：5 当前目录内存在文件的数量
    3. 第三栏和第四栏：liufeifei  staff 表示当前文件属于哪个用户和用户组
    4. 第五栏：170 表示当前目录或文件的大小
    5. 8 18 15:56 为目录或文件的创建时间
    6. 最后一个栏目是目录或文件的名称
3. ls -a显示所有文件，包括隐藏文件
    1. 在Linux下，只要文件名前面带有一个点就表示它是隐藏文件
    2. 有两个文件名比较特殊，第一个是一个点，第二个是两个点
        1. 一个点：表示当前目录
        2. 两个点：表示的是上一级的目录
4. mkdir建立目录（make directories）
    1. mkdir -p [目录名]：递归创建
    2. -p 是为了建立多级目录mkdir -p a/b/c，不加-p返回：No such file or directory
5. cd切换所在目录
    1. cd [目录]（change directory）
    2. cd ~ 或 cd 进入当前用户的家目录
    3. cd - 进入上次目录
    4. cd .. 进入上一级目录
    5. cd . 进入当前目录
6. cp复制命令（copy），公式：cp [选项] [原文件或目录] [目标目录]
    1. -r 复制目录
    2. -p 连带文件属性复制
    3. -d 若源文件是链接文件，则复制链接属性
    4. -a 相当于 -rpd
    5. 复制文件 cp 就行，要是复制目录需要带 -r ，默认复制文件
    6. cp -a 复制的所有隐藏属性都一样，啦啦啦，开心
7. pwd查询所在目录位置（print working directory）
8. rmdir [目录名]删除空目录（remove empty directories）
9. rm -rf [文件或目录]（remove）
    1. -r 删除目录
    2. -f 强制
    3. rm -rf / 这是一条让Linux自杀的命令，会把电脑90%以上的文件删除掉，不会影响电脑的正常运行，极个别的文件删不掉
10. mv（move）剪切或改名命令；mv [原文件或目录] [目标目录]

## Windows命令行入门（搜索cmd查找）

1. 查看当前目录所有文件，使用 dir
2. windows下文件夹就是目录，两者是等效的
3. 切换目录，使用cd [文件夹名称]
4. 创建目录 md [文件夹名称]
5. 复制命令 copy [要复制的文件] [复制地点]
6. 删除命令 del [删除文件名称]
    1. 使用这个命令系统不会给提示，使用时候特别注意
    2. 使用del删除的文件不会出现在回收站当中，要多加小心
7. 改名字命令：rename [要改名字的文件名] [要改成的名字]

## [Cygwin](http://www.cygwin.com/)安装和使用

* Cygwin是在windows平台上运行的Unix模拟环境
* 使用这个环境在windows下，来学习Linux命令
* Cygwin是开源项目
* 安装都选默认的就可以，最后一个选择下载地址，选择最快的（即第一个），之后选择组件安装方式，选择full全部安装

## Linux环境下补充

1. cd / 是进入系统的根目录
2. touch [文件名]新建文件，如：touch index.js
3. vi或vim [文件名]进入到对应文件中
4. cat [文件名]查看文件内容
5. ESC + :wq保存文件并退出
6. init 3 进入完全多用户模式，标准的运行级；即进入一个全命令的环境下
    1. init 0:关机 
    2. init 1:单用户模式 
    3. init 3:完全多用户模式，标准的运行级 
    4. init 5:启动可进入X-window系统；即图形界面
    5. init 6:重启

## 用户组
 * 在Linux中的每个用户必须属于一个组，不能独立于组外。在linux中每个文件有所有者、所在组、其他组的概念

### 所有者

* 一般为文件的创建者，谁创建了该文件，就天然的成为该文件的所有者
* 用ls -al命令可以看到文件的所有者
* 也可以使用chown 用户名 文件名来修改文件的所有者

### 文件所在组

* 当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组
* 用ls -al命令可以看到文件的所有组
* 也可以使用chgrp 组名 文件名来修改文件所在的组

### 其他组

* 除开文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组

## 文件夹权限

```
drwxr-xr-x  15 liufeifei  admin    510 11 23 11:38 demo
```
1. drwxr-xr-x 10个字符确定不同用户能对文件干什么
2. 第一个字符代表文件（-）、目录（d）、链接（l）
3. 其余字符每3个一组（rwx）、读（r）、写（w）、执行（x）
4. 第一组rwx：文件所有者的权限是读、写和执行
5. 第二组r-x：与文件所有者同一组的用户的权限是读、执行但不能写
6. 第三组r-x：不与文件所有者同组的其他用户的权限是读、执行但不能写
7. 也可以用数字表示为：r=4 w=2 x=1，因此rwx = 4+2+1 = 7
8. 15表示连接的文件数
9. liufeifei表示用户
10. admin表示用户所在的组
11. 510表示文件的大小（字节）
12. 11 23 11：38表示最后修改日期
13. demo表示文件名

## 改变文件夹权限

chmod 改变文件或目录的权限
chmod 777 用户名（即要修改权限的文件名）

```
chmod 777 index.js：赋予index.js权限rwxrwxrwx
chmod 755 test.js：赋予test.js权限rwxr-xr-x
```

chmod u=rwx g=rx o=rx test.js：同上u=用户权限 g=组权限 o=不同组其他用户权限
chmod u-x, g+w test.js：给test.js去除用户执行的权限，增加组写的权限
chmod a+r test.js：给所有用户添加读的权限


