 
 # WebStorm开发工具设置React Native代码智能提醒
 
 
 最近在做React Native开发的时候，相信大家一般会使用WebStorm，Sublime，Atom等等开发工具。WebStorm是一款非常优秀的Web开发工具，同样支持React Native开发。但是苦于该暂时不提供React Native代码智能提醒功能，OK~今天我正好逛Github的时候突然发现这一款插件Webstrom live template，特意介绍给大家吧。


插件地址:https://github.com/virtoolswebplayer/ReactNative-LiveTemplate


ReactNative的代码模板,包括:

组件名称

- Api 名称
- 所有StyleSheets属性
- 调用ReactNative组件时, 首先 按下 command + J , 然后输入属性名的 首字母 如输入onP 自动提示 onPress, onPressIn, onPressOut, ....


下载方法:

首先大家可以把该项目下载或者如下命令clone下来:
```
git clone https://github.com/virtoolswebplayer/ReactNative-LiveTemplate
```
安装方法一(Windows和Mac都支持):

```
file -> import settings -> ReactNative.jar
```

安装方法二(该方法只是针对Mac):

将ReactNative.xml复制到 ~/Library/Preferences/WebStorm11/templates 重启 WebStrom

使用方法:

通用方法

直接输入组件 或 Api 名称的首字母, 比如想要 View ,只要输入 V自动提示代码里就会看到 View

StyleSheet属性提示

首先 按下 command + J , 然后输入属性名的 首字母

如: 输入 f ,会自动提示 fontSize,fontFamily,fontStyle...等等



![WebStorm.jpg](./img/RN Base/WebStorm.jpg)



[全文完]
