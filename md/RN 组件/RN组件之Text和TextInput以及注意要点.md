
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



# TextInput组件

```
 <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
  />
```

属性：

autoCapitalize enum('none', 'sentences', 'words', 'characters') 

控制TextInput是否要自动将特定字符切换为大写：

- characters: 所有的字符。

- words: 每个单词的第一个字符。

- sentences: 每句话的第一个字符（默认）。

- none: 不自动切换任何字符为大写。

autoCorrect bool 
如果为false，会关闭拼写自动修正。默认值是true。

autoFocus bool 
如果为true，在componentDidMount后会获得焦点。默认值为false。

blurOnSubmit bool 
如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。

defaultValue string 
提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替。

editable bool 
如果为false，文本框是不可编辑的。默认值为true。

keyboardType enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search') 
决定弹出的何种软键盘的，譬如numeric（纯数字键盘）。

这些值在所有平台都可用：
- default
- numeric
- email-address

maxLength number 
限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。

multiline bool 
如果为true，文本框中可以输入多行文字。默认值为false。

onBlur function 
当文本框失去焦点的时候调用此回调函数。

onChange function 
当文本框内容变化时调用此回调函数。

onChangeText function 
当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。

onEndEditing function 
当文本输入结束后调用此回调函数。

onFocus function 
当文本框获得焦点的时候调用此回调函数。

onLayout function 
当组件挂载或者布局变化的时候调用，参数为{x, y, width, height}。

onSubmitEditing function 
此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。

placeholder string 
如果没有任何文字输入，会显示此字符串。

placeholderTextColor string 
占位字符串显示的文字颜色。

secureTextEntry bool 
如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false。

selectTextOnFocus bool 
如果为true，当获得焦点的时候，所有的文字都会被选中。

selectionColor string 
设置输入框高亮时的颜色（在iOS上还包括光标）

style Text#style 
译注：这意味着本组件继承了所有Text的样式。

value string 
文本框中的文字内容。

TextInput是一个受约束的(Controlled)的组件，意味着如果提供了value属性，原生值会被强制与value属性保持一致。在大部分情况下这都工作的很好，不过有些情况下会导致一些闪烁现象——一个常见的原因就是通过不改变value来阻止用户进行编辑。如果你希望阻止用户输入，可以考虑设置editable={false}；如果你是希望限制输入的长度，可以考虑设置maxLength属性，这两个属性都不会导致闪烁。


ios   clearButtonMode enum('never', 'while-editing', 'unless-editing', 'always') 
是否要在文本框右侧显示“清除”按钮。

ios    clearTextOnFocus bool 
如果为true，每次开始输入的时候都会清除文本框的内容。

ios    enablesReturnKeyAutomatically bool 
如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。

ios    keyboardAppearance enum('default', 'light', 'dark') 
指定键盘的颜色。

ios   onKeyPress function 
当一个键被按下的时候调用此回调。被按下的键会作为参数传递给回调函数。会在onChange之前调用。

ios    returnKeyType enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
决定“确定”按钮显示的内容。

ios    selectionState DocumentSelectionState 
参见DocumentSelectionState.js，可以控制一个文档中哪段文字被选中的状态。

android  numberOfLines number 
设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数。

android  underlineColorAndroid string 
文本框的下划线颜色(译注：如果要去掉文本框的边框，请将此属性设为透明transparent)。


### 注意点：
1、在使用TextInput的过程中，在Android平台下，输入框下有个横线，此时需要将属性underlineColorAndroid  设置为transparent来解决。

2、常用的TextInput是作为文本域，譬如最多输入50个字符。

此时需要设置   multiline ={true}  maxLength ={50}












[全文完]