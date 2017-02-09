
# Text组件

我们先来看官网给的例子：

```
renderText: function() {
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={this.onPressTitle}>
        {this.state.titleText + '\n\n'}
      </Text>
      <Text numberOfLines={5}>
        {this.state.bodyText}
      </Text>
    </Text>
  );
},
...
var styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};
```

##属性

ios allowFontScaling bool 

控制字体是否要根据iOS的“文本大小”辅助选项来进行缩放。

numberOfLines number 

用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。

onLayout function 

当挂载或者布局变化以后调用，参数为如下的内容：{nativeEvent: {layout: {x, y, width, height}}}

onPress function 

当文本被点击以后调用此回调函数。


样式
color string

fontFamily string

fontSize number

fontStyle enum('normal', 'italic')

fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
指定字体的粗细。大多数字体都支持'normal'和'bold'值。并非所有字体都支持所有的数字值。如果某个值不支持，则会自动选择最接近的值。

letterSpacing number

lineHeight number

textAlign enum("auto", 'left', 'right', 'center', 'justify')
指定文本的对齐方式。其中'justify'值仅iOS支持。

androidtextAlignVertical enum('auto', 'top', 'bottom', 'center')

ios letterSpacing number

ios textDecorationColor string

textDecorationLine enum("none", 'underline', 'line-through', 'underline line-through')

ios textDecorationStyle enum("solid", 'double', 'dotted', 'dashed')

ios  writingDirection enum("auto", 'ltr', 'rtl')

testID string 

用来在端到端测试中标记这个视图。

ios  suppressHighlighting bool 

当为true时，如果文本被按下，则没有任何视觉效果。默认情况下，文本被按下时会有一个灰色的、椭圆形的高光。

## 注意点：

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