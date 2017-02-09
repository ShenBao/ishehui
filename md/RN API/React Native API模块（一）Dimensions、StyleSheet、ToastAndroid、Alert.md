
# React Native API模块之Dimensions、StyleSheet、ToastAndroid、Alert、



## Dimensions

Dimensions  屏幕宽高模块

(一)方法

1.set(dims:{[key:string]:any})  static 静态方法，该方法应该只能被原生代码进行调用。@parm{object} dims参数作为屏幕宽高设置

2.get(dim:string)   static静态方法,进行初始化屏幕的宽和高信息 在runApplication方法之后就执行了，所以我们可以在任何requires的方法运行之前就可以获取到该信息。不过该信息可能会发生改变。具体我们往下看:

[注].屏幕尺寸信息一般可以直接进行使用的，但是有时候会发生变化(例如:屏幕的方向发生旋转)。因此如果基于该屏幕信息的业务逻辑或者相关样式设置需要在调用每次render渲染方法之后进行，而不是我们把该屏幕信息保存下来，后面直接使用。(例如:我在使用样式设置的时候，不要去使用StyleSheet方法，而是采用内联式方案)。即:什么时候需要使用屏幕信息，那就什么时候去调用该方法

实例代码:var {height,width}=Dimensions.get('window')

@param {string}  进行调用set方法，想要返回屏幕信息的名称

@return {Object?}  返回的屏幕尺寸信息

(二)具体事例

下面演示一下该方法的具体使用来获取屏幕的宽度和高度,具体代码如下:

```
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
 
class DimensionsDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          屏幕信息如下:
        </Text>
        <Text style={styles.instructions}>
           当前屏幕宽度:+{Dimensions.get('window').width};
        </Text>
        <Text style={styles.instructions}>
           当前屏幕高度:'+{Dimensions.get('window').height};
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 
AppRegistry.registerComponent('DimensionsDemo', () => DimensionsDemo);
```

运行截图如下:

![Dimensions.jpg](./../../img/RN/Dimensions.jpg)


## StyleSheet

在React Native中，该StyleSheet模块是实现了类似Web中CSS样式表的功能。简单的创建一个StyleSheet文件的实例代码如下:

```
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

<View style={styles.container}>
  <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
</View>
```

这样写的方式，有以下一些优点:

1.从代码质量角度来分析:

- 从render渲染方法中移除了styles样式相关代码，这样可以使代码更加容易阅读
- 通过对不同样式命名，正好也是对render方法中的组件的一种标志

2.从性能角度来分析:

- 通过StyleSheet，我们可以通过标志的样式ID来引用，而不是每次都要创建一个新的Style对象
- 该允许样式通过桥接在原生代码和JavaScript中传递一次，后面全部通过该id进行引用(不过现在该功能还没有实现)


方法

create(obj:{[key:string]:any})  static 静态方法   通过给定的对象进行常见一个StyleSheet样式

三)属性

1.hairlineWidth:CallExpression  该用来定义当前平台最细的宽度。该属性用来设置边框或者两个组件之间的分割线。例如:

```
{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
}
```

该会根据当前平台信息，自动转换成一根很细的线。

2.flatten: CallExpression


## ToastAndroid

模块:ToastAndroid。android平台的toast消息。

该ToastAndroid模块是把Android平台原生模块Toast封装成一个JS模块使用，来进行弹出一个toast消息。该模块有一个'show'方法会传入下面两个参数:①:message  string 字符串格式，设置要进行toast显示的文本    ②:duration  int格式 toast消息弹出显示的时长。有两个可选值ToastAndroid.SHORT或者ToastAndroid.LONG

(二)方法

1.show(message:string,duration:number)  static 静态方法，该设置toast消息的弹出

(三)属性

1.SHORT  静态int值，表示toast显示较短的时间

2.LONG   静态int值，表示otast显示较长的时间

(四)使用实例

ToastAndroid具体代码如下:

```
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
class ToastAndroidDemo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          点击弹出短时间的toast
        </Text>
        <CustomButton text="点击弹出短时间toast"
        onPress={()=>ToastAndroid.show('点击我好疼,短时间的~',ToastAndroid.SHORT)}/>
        <Text style={styles.welcome}>
          点击弹出长时间的toast
        </Text>
        <CustomButton text="点击弹出长时间toast"
        onPress={()=>ToastAndroid.show('点击我好疼,长时间的~',ToastAndroid.LONG)}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});
 
AppRegistry.registerComponent('ToastAndroidDemo', () => ToastAndroidDemo);
```

运行截图如下:

![ToastAndroid.gif](../../img/RN/ToastAndroid.gif)


## Alert

Android、iOS平台通用的弹出框Alert模块

该Alert模块是创建弹出一个弹框，显示一个标题以及相关信息内容。该弹出框可以提供一系列的可选按钮，点击任何一个按钮都会调用onPress方法并且关闭弹框。默认情况下，该只会显示一个'确定'按钮。

该模块API是在Android、iOS平台通用的显示静态的弹框。如果需要显示一个提示框可以让用户输入相关信息的，详细请查看AlertIOS;该带输入框的弹框只适用于iOS平台。

(二)iOS平台相关

只有iOS平台可以指定多个数量的button,每个按钮都可以设置特殊的风格，不过风格为'default','cancel','destructive'三种状态之一。

(三)Android平台相关

iOS平台可以指定多个数量的button，但是在Android平台上面最多只能指定三个按钮。Android平台的弹出框的按钮有'中间态','取消','确认'三种状态

1.如果你只有指定了一个按钮，那么该为'positive' (例如:确定)

2.如果你指定了两个按钮，那么该会'negative','positive' (例如:确定，取消)

3.如果你指定了三个按钮，那么该会'neutral','negative','positive'(例如:稍后再说,'确定','取消')

(四)Alert方法

static alert(title:string,message?:string,buttons?:Buttons,type?:AlertType)  该会Alert模块显示弹框的静态方法，有四个参数，分别为标题，信息，按钮，以及按钮的风格类型

(五)Alert使用实例

Alert实例代码如下:

```
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
class AlertDemo extends Component {
  render() {
    return (
      <View>
        <Text style={{height:30,color:'black',margin:8}}>
          弹出框实例
        </Text>
        <CustomButton text='点击弹出默认Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}
          />
        <CustomButton text='点击弹出两个按钮的Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
            {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消~',ToastAndroid.SHORT)},
            {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定~',ToastAndroid.SHORT)}
            ])}
          />
        <CustomButton text='点击弹出三个按钮的Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
            {text:'One',onPress:()=>ToastAndroid.show('你点击了One~',ToastAndroid.SHORT)},
            {text:'Two',onPress:()=>ToastAndroid.show('你点击了Two~',ToastAndroid.SHORT)},
            {text:'Three',onPress:()=>ToastAndroid.show('你点击了Three~',ToastAndroid.SHORT)}
            ])}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});
 
AppRegistry.registerComponent('AlertDemo', () => AlertDemo);
```

运行截图如下:

![Alert.gif](../../img/RN/Alert.gif)
















[全文完]