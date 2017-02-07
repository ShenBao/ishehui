
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

毕竟React-Native还在发展，RN的出现确实能解决一部分问题，本人也会投入一定的时间加入RN的研发热潮中。