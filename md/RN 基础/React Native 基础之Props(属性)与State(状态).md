
# React Native 基础之Props(属性)与State(状态)

## (一).前言

在我们进行React Native开发的时候,有一些基础知识点是非常重要的,例如Props(属性)和State(状态)。所以我们会经常看到一些组件的属性设置以及状态设置以及更新。今天我们主要来个大家讲解一下基础知识点，学完本节会对React Native的继续深入学习有很好的效果。


## (二).Props

大多数组件在创建的时候都需要进行采用各种不同的参数进行自定义，这些被创建的参数我们就称作props 例如:我们现在以一个React Native最基础的Image组件为例。当我们在创建一个image的时候，我们可以使用source属性进行控制图片显示。实例代码如下:

```
import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
 
class Bananas extends Component {
  render() {
    let pic = {  
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
AppRegistry.registerComponent('Bananas', () => Bananas);
```

注意到{pic}是通过大括号进行包围的，这样我们就把pic变量迁入到JSX语句中。通过这样方法我们可以把任何正确合法的JavaScript的表达式迁入到JSX中。

当然了我们自定义的组件也是可以使用props的。该可以让你创建一个在应用中不同场景通过不同属性定制的组件，最后在你的render方法直接通过this.props进行引用即可。下面是一个实例:

```
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
 
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
 
class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
```

以上例子中：我们自定义了属性为name的Greeting组件，这样我们可以根据属性值不同进行复用该组件了。当然了上面我们也看到了一些View组件，这个View组件是其他组件的容器，可以用来帮助控制风格样式和布局。我们可以使用props和一些基础的View,Image,Text组件就足以编写出各式各样的UI界面了。

## (三).State

我们一般会有两种类型的数据进行控制改变组件:props和state。props是在父组件中进行设置，只要设置完成那么该在组件的声明周期中就定死了，不会发生改变。所以针对数据变化修改的情况，我们需要使用state属性。

一般情况下，我们需要在constructor方法中进行初始化state，然后在你想要修改更新的时候调用setState方法即可。

例如:我们现在需要制作一段不断进行闪动的文字效果，文字内容当组件创建好的时候就已经指定了。文字内容通过prop展现。但是通过时间控制文字闪动的状态通过state实现。一起来看一下如下的代码:

```
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
 
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
 
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
 
class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
 
AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
```

在一个真正的应用中，我们一般不会通过定时器来控制状态。当我们服务器有新数据的响应或者有用户输入的时候，我们也可以使用一些例如Redux的状态容器来进行统一管理数据而不是直接调用setState。



[全文完]

