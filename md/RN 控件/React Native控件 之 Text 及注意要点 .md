
# Text组件

## 介绍

该Text组件为React中一个基本组件，该和Android中的TextView组件相类似用来显示基本的文本信息，该控件除了基本的显示布局之外，可以进行嵌套显示，设置样式，以及可以做事件(例如:点击)处理。下面我们来一个实例：

```
/**
 * 进行简单Text组件使用实例
 * Sample React Native App  test.android.js
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';
var styles = StyleSheet.create({
     titleBase:{
        margin:10,
        textAlign:'center',
        color:'red',
        fontSize:28,
        fontFamily:'Cochin',
     },
     title:{
        color:'green',
        fontWeight:'bold',
     },
});
var TestText = React.createClass({
  render: function() {
    return (
      <Text style={styles.titleBase}>
         I am root text!
         <Text style={styles.title}>
              I am chid text!
          </Text>
      </Text>
    );
  }
});
AppRegistry.registerComponent('TestText', () => TestText);
```

上述实例采用TextView的嵌套方式，最外层的Text的Style titleBase定义相关风格，内层的风格style定义相关风格，我们可以看到运行效果，如果内层没有重写外层定义的样式，那么内层会进行继承。如果重写了样式，那么内层会根据自己定义的样式进行渲染，该和CSS样式表差不多。


## 属性方法(主要一些可用的属性)


- ①.allowFontScaling (bool):控制字体是否根据iOS的设置进行自动缩放-iOS平台,Android平台不适用
- ②.numberOfLines (number):进行设置Text显示文本的行数，如果显示的内容超过了行数，默认其他多余的信息就不会显示了。
- ③.onLayout (function) 当布局位置发生变动的时候自动进行触发该方法, 其中该function的参数如下:
[code lang="" start="" highlight=""]{nativeEvent: {layout: {x, y, width, height}}}[/code]
- ④.onPress (fcuntion) 该方法当文本发生点击的时候调用该方法.

## 风格样式

- 1.继承可以使用View组件的所有Style(具体查看http://facebook.github.io/react-native/docs/view.html#style)
- 2.color:字体颜色
- 3.fontFamily 字体名称
- 4.fontSize  字体大小
- 5.fontStyle   字体风格(normal,italic)
- 6.fontWeight  字体粗细权重("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
- 7.textShadowOffset 设置阴影效果{width: number, height: number}
- 8.textShadowRadius 阴影效果圆角
- 9..textShadowColor 阴影效果的颜色
- 10.letterSpacing 字符间距
- 11.lineHeight 行高
- 12.textAlign   文本对其方式("auto", 'left', 'right', 'center', 'justify')
- 13.textDecorationLine  横线位置 ("none", 'underline', 'line-through', 'underline line-through')
- 14.textDecorationStyle   线的风格("solid", 'double', 'dotted', 'dashed')
- 15.textDecorationColor  线的颜色
- 16.writingDirection  文本方向("auto", 'ltr', 'rtl')

## 特别注意点

### 嵌套特点

和Web上面一直的设计方案，我们通过嵌套包裹的方案，相同的属性的文本可以用父标签进行包裹，然后内部特殊的文本采用子标签方案，具体例子如下:

```
<Text style={{fontWeight: 'bold',fontSize:28}}>
      I am bold
      <Text style={{color: 'red'}}>
        and red
    </Text>
</Text>
```

整体字体格式为bold以及字体大小为28，不过后边的'and red'的字体颜色为红色。

### 容器布局规则

FlexBox(弹性布局),

### 样式继承规格

组件可以嵌套，而且样式还支持继承，也就说父组件定义了相关样式，如果子组件没有重写样式的话，那么该子组件会继承父组件定义的样式。

```
/**
 *  Text组件实例演示
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';
var TestText = React.createClass({
  render: function() {
    return (
      <View>
       <Text style={{color:'red'}}>
          My Text One  红色。
       </Text>
       <Text style={{color:'green',fontSize:20}}> My Text Two 绿色和字体大小。</Text>
       <Text style={{color:'green',fontFamily:'Cochin'}}> My Text Three 绿色和字体名称。</Text>
       <Text style={{color:'pink',fontWeight:'bold'}}> My Text Four 粉色和加粗。</Text>
       <Text style={{color:'gray',fontStyle:'italic'}}> My Text Five 灰色和斜体。</Text>
       <Text style={{textAlign:'center',fontStyle:'italic'}}> My Text Six 居中和斜体。</Text>
       <Text numberOfLines={1} style={{textAlign:'center',fontStyle:'italic'}}>测试行数My Text Six 居中和斜体。My Text Six 居中和斜体。 My Text Six 居中和斜体。</Text>
       <Text style={{marginLeft:50,marginTop:50,textAlign:'center',fontStyle:'italic'}}>设置文本的间距,居左，居顶部50</Text>
       <Text numberOfLines={2} style={{lineHeight:50,textAlign:'center',fontStyle:'italic'}}>
          测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 
          测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
       </Text>
      </View>
    );
  }
});
AppRegistry.registerComponent('TestText', () => TestText);
```

## 注

1、在使用Text的过程中，实现文本垂直居中、水平居中的效果（iOS和Android通用）

```
<View  style={styles.textView}>
    <Text style={styles.text}> 水平垂直居中</Text>
</View>

textView:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
}

text:{
    fontSize:12,
    color:'#f2f2f2',
}
```
尽量用view去包裹一层Text组件，text组件只负责基础的文字样式，View组件负责对齐方式等。

2、在Android平台上，Text组件里使用paddingLeft 属性，不好使，直接顶着View了。

解决方式：1）将paddingLeft放在View属性上;2）将paddingLeft修改为marginLeft

建议使用第一种方案修改，把对齐方式交给view去处理，Text只负责文本属性的显示。






[全文完]