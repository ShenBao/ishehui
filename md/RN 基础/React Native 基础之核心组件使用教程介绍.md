
# React Native基础之核心组件使用教程介绍

## 概述

UI组件用于像搭积木一样的构建React Native应用。React Native用户交互界面声明的控件(这些控件可能是嵌套的)会和原生平台系统的原生控件相对应。React Native有一系列的常用应用使用的核心组件，通过该组件或者组件相互嵌套可以构建新的组件。

## (二)Text

在React Native中最基本的控件是Text组件，该Text组件渲染简单的文本。最简单的就是在设备中显示字符串"Hello"

```
import React from 'react';
import { AppRegistry, Text } from 'react-native';
 
const App = () => {
  return (
    <Text>Hello World!</Text>
  );
}
 
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App);
```

## (三)Image

React Native中另外一个基础组件为Image组件，和Text相似，该Image组件用来渲染一个图片。该Image组件网页中的img标签类似。Image组件最简单的使用方法就是使用source属性提供一个图片文件的地址即可。下面一个现实checkbox图片的简单实例:

```
import React from 'react';
import { AppRegistry, Image } from 'react-native';
 
const App = () => {
  return (
    <Image source={require('./img/check.png')} />
  );
}
 
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App);
```

## (四)View

View组件是React Native应用最最基础的空间了，该View控件和目标原生平台顶层视图是等价的，例如在iOS平台的UIView。该View组件和网页中的div标签类似。当然没有View包裹的基础组件例如:Text和Image也是可以显示的，但是这种的方法一般不推荐，因为我们可以使用View组件进行控制这些组件的样式和布局。

接下来的例子我们创建一个View视图，然后让字符串"Hello"在设备的顶层中间显示。有时候我们仅仅使用Text组件是无法达到这样的效果(外层没有加View组件的Text组件会布局显示在一个固定的位置上面)。

```
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
 
const App = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello!</Text>
    </View>
  );
}
 
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App);
```

## (五)TextInput

用户输入是所需应用的基础，例如写一篇文章或者评论就是一个例子。TextInput组件就是一个最基础允许用户输入的组件。下面的例子就是创建一个简单的TextInput，当用户没有输入的时候默认显示字符串'Hello'

```
import React, { AppRegistry, TextInput, View } from 'react-native'
 
const App = () => {
  return (
      <View>
        <TextInput placeholder="Hello" />
      </View>
  );
}
 
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App);
```

## (六)ListView

在手机设备中,列表是许多应用程序的核心元素。ListView是一个View的特殊类型组件用于显示垂直滚动变化的数据。ListView组件需要两个属性:dataSource和renderRow。dataSource表示列表部分的所有需要展现的信息数据，renderRow将数据显示一个被渲染的组件中。

这边的例子创建一个简单的显示写死的数据的ListView。首先初始化用于填充列表的数据源，然后使用这些数据渲染ListView。

[注意].在使用ListView的时候需要使用rowHasChanged方法，该方法可以判断如果当前行和之前的有没有发生变化。


```
import React from 'react';
import { AppRegistry, Text, View, ListView} from 'react-native';
 
var SimpleList = React.createClass({
  // Initialize the hardcoded data
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie'])
    };
  },
  render: function() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
});
 
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => SimpleList);
```



[全文完]