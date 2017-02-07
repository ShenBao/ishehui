
React Native 是由Facebook发布的开源框架，React Native 的宗旨是,学习一次,高效编写跨平台原生应用。它的宣传语是“Learn once，write anywhere”，看见这个宣传语，是不是特别眼熟，Java的宣传语是 write once,run anywhere，java由于他运行于JVM中，可以实现跨平台的特性，然而RN靠什么来write anywhere？

组件化和API是React－Native的核心。提供一套组件，Android和iOS都可以使用，是不是很爽，以前需要2个人写的界面，现在一个人就搞定。所有通用的模块可以封装成一个组件。API是React-Native提供的一系列功能的接口定义，开发者只需要按照约定的格式去调用即可。

React-Native使用JavaScript语言开发，使用React框架，对于web前端开发人员来说，是不是很熟悉。什么？会ReactJS 框架，就很容易上手开发原生的App？

### 理想很美好，现实很骨感。

现在React-Native至少存在如下问题：

1、支持的功能不完善，很难使用RN开发一个完整的APP，还处于初始阶段，版本迭代频繁

2、开源组件较少，遇到某些复杂功能容易卡壳，不好解决

3、组件并非完全通用，还是得特殊处理android和iOS

4、性能问题，相比NativeAPP 还是有差距，本质上还是属于特殊的Hybrid APP

5、对于特殊的功能，需要开发和原生桥接的组件，还是得需要了解原生，这是灾难

毕竟React-Native还在发展，RN的出现确实能解决一部分问题，下面投入RN的研发热潮中。


## 安卓开发环境

1.安装  chocolatey.0.10.3   http://www.tuicool.com/articles/QV7VNrR 在cmd命令行下运行网址中的相关命令就可以安装chocolatey

2.切换目录到  chocolatey.0.10.3 解压路径

  管理员 powershell修改权限，使用： set-ExecutionPolicy RemoteSigned

3.Node python

        choco install python2
		
        choco install nodejs.install

4.React Native命令行工具（react-native-cli）

        npm install -g react-native-cli

5.安装  安卓开发工具

        记住  安卓sdk路径
		
        配置  ANDROID_HOME         D:\Android\sdk
        
6.安装 jdk
        记住  路径
		
       配置      JAVA_HOME               D:\Java\jdk1.8.0_111
	   
                    Path                            %JAVA_HOME%\bin                   （win10不用加分号，win7加分号）
					
                                                        %JAVA_HOME%\jre\bin   
														
                （ps：配置好后  cmd窗口输入java测试）



				
				
[全文完]