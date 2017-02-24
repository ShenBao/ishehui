
# React Native特定平台代码说明

## (一)前言

Android,iOS双平台开发的时候特殊代码的相关写法

当我们在构建开发跨平台的app的时候，经常会针对不同的平台需求编写不同的代码。有一种最直观的方式就是在不同的文件夹下面放置不同的组件。具体实例方式如下:

```
/common/components/
/android/components/
/ios/components/
```

另外的一种方式根据不同平时进行对组件不同的文件命令进行区别，常常如下进行使用:

```
ButtonIOS.js
ButtonAndroid.js
```

同时React Native还挺另外两种简单的方式进行区别不同的平台。


## (二)平台不同的扩展名

React Native会进行检测文件夹是否有.ios或者.android的扩展名，然后根据当前客户端运行的平台进行加载对应的文件，例如:你现在在项目有如下的一些文件:

```
Button.ios.js
Button.android.js
```

有这样的配置，你可以在其他不同的组件中去使用这些文件并且不需要关注当前客户端运行的平台环境,具体使用方式如下:

```
import BigButton from './components/Button';
```

## (三)平台模块

```
var { Platform } = 'react-native';
 
var styles = StyleSheet.create({
  height: (Platform.OS === 'ios') ? 200 : 100,
});
```

如果当前是在iOS平台运行，那么Platform.OS会返回ios，反之在Android设备或者模拟器中运行会返回android


## (四)检测Android版本

在Android平台上面，当前Platform模块可以进行检测当前Android平台运行的版本

```
var {Platform} = 'react-native';
 
if(Platform.Version === 21){
  console.log('Running on Lollipop!');
}
```



[全文完]