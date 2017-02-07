
# Text���

���������������������ӣ�

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

##����

ios allowFontScaling bool 

���������Ƿ�Ҫ����iOS�ġ��ı���С������ѡ�����������š�

numberOfLines number 

�������ı�������ʱ��ü��ı��������۵������Ļ������ڣ��ܵ��������ᳬ��������Ե����ơ�

onLayout function 

�����ػ��߲��ֱ仯�Ժ���ã�����Ϊ���µ����ݣ�{nativeEvent: {layout: {x, y, width, height}}}

onPress function 

���ı�������Ժ���ô˻ص�������


��ʽ
color string

fontFamily string

fontSize number

fontStyle enum('normal', 'italic')

fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
ָ������Ĵ�ϸ����������嶼֧��'normal'��'bold'ֵ�������������嶼֧�����е�����ֵ�����ĳ��ֵ��֧�֣�����Զ�ѡ����ӽ���ֵ��

letterSpacing number

lineHeight number

textAlign enum("auto", 'left', 'right', 'center', 'justify')
ָ���ı��Ķ��뷽ʽ������'justify'ֵ��iOS֧�֡�

androidtextAlignVertical enum('auto', 'top', 'bottom', 'center')

ios letterSpacing number

ios textDecorationColor string

textDecorationLine enum("none", 'underline', 'line-through', 'underline line-through')

ios textDecorationStyle enum("solid", 'double', 'dotted', 'dashed')

ios  writingDirection enum("auto", 'ltr', 'rtl')

testID string 

�����ڶ˵��˲����б�������ͼ��

ios  suppressHighlighting bool 

��Ϊtrueʱ������ı������£���û���κ��Ӿ�Ч����Ĭ������£��ı�������ʱ����һ����ɫ�ġ���Բ�εĸ߹⡣

## ע��㣺

1����ʹ��Text�Ĺ����У�ʵ���ı���ֱ���С�ˮƽ���е�Ч����iOS��Androidͨ�ã�

```
<View  style={styles.textView}>
    <Text style={styles.text}> ˮƽ��ֱ����</Text>
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
������viewȥ����һ��Text�����text���ֻ���������������ʽ��View���������뷽ʽ�ȡ�

2����Androidƽ̨�ϣ�Text�����ʹ��paddingLeft ���ԣ�����ʹ��ֱ�Ӷ���View�ˡ�

�����ʽ��1����paddingLeft����View������;2����paddingLeft�޸�ΪmarginLeft

����ʹ�õ�һ�ַ����޸ģ��Ѷ��뷽ʽ����viewȥ����Textֻ�����ı����Ե���ʾ��



# TextInput���

```
 <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
  />
```

���ԣ�

autoCapitalize enum('none', 'sentences', 'words', 'characters') 

����TextInput�Ƿ�Ҫ�Զ����ض��ַ��л�Ϊ��д��

- characters: ���е��ַ���

- words: ÿ�����ʵĵ�һ���ַ���

- sentences: ÿ�仰�ĵ�һ���ַ���Ĭ�ϣ���

- none: ���Զ��л��κ��ַ�Ϊ��д��

autoCorrect bool 
���Ϊfalse����ر�ƴд�Զ�������Ĭ��ֵ��true��

autoFocus bool 
���Ϊtrue����componentDidMount����ý��㡣Ĭ��ֵΪfalse��

blurOnSubmit bool 
���Ϊtrue���ı�������ύ��ʱ��ʧ�������ڵ��������Ĭ��ֵΪtrue��������Ϊfalse��ע�⣺���ڶ����������˵�������blurOnSubmit��Ϊtrue�����ڰ��»س���ʱ�ͻ�ʧȥ����ͬʱ����onSubmitEditing�¼��������ỻ�С�

defaultValue string 
�ṩһ���ı����еĳ�ʼֵ�����û���ʼ�����ʱ��ֵ�Ϳ��Ըı䡣��һЩ�򵥵�ʹ�������£�����㲻���ü�����ϢȻ�����value���Եķ������������Ժ�״̬ͬ����ʱ�򣬾Ϳ�����defaultValue�����档

editable bool 
���Ϊfalse���ı����ǲ��ɱ༭�ġ�Ĭ��ֵΪtrue��

keyboardType enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search') 
���������ĺ�������̵ģ�Ʃ��numeric�������ּ��̣���

��Щֵ������ƽ̨�����ã�
- default
- numeric
- email-address

maxLength number 
�����ı����������ַ�����ʹ��������Զ�����JS�߼�ȥʵ�֣����Ա�����˸������

multiline bool 
���Ϊtrue���ı����п�������������֡�Ĭ��ֵΪfalse��

onBlur function 
���ı���ʧȥ�����ʱ����ô˻ص�������

onChange function 
���ı������ݱ仯ʱ���ô˻ص�������

onChangeText function 
���ı������ݱ仯ʱ���ô˻ص��������ı����������ݻ���Ϊ�������ݡ�

onEndEditing function 
���ı������������ô˻ص�������

onFocus function 
���ı����ý����ʱ����ô˻ص�������

onLayout function 
��������ػ��߲��ֱ仯��ʱ����ã�����Ϊ{x, y, width, height}��

onSubmitEditing function 
�˻ص�����������̵�ȷ��/�ύ��ť�����µ�ʱ����ô˺��������multiline={true}�������Բ����á�

placeholder string 
���û���κ��������룬����ʾ���ַ�����

placeholderTextColor string 
ռλ�ַ�����ʾ��������ɫ��

secureTextEntry bool 
���Ϊtrue���ı������ס֮ǰ��������֣�������������֮����������ֿ��Ը��Ӱ�ȫ��Ĭ��ֵΪfalse��

selectTextOnFocus bool 
���Ϊtrue������ý����ʱ�����е����ֶ��ᱻѡ�С�

selectionColor string 
������������ʱ����ɫ����iOS�ϻ�������꣩

style Text#style 
��ע������ζ�ű�����̳�������Text����ʽ��

value string 
�ı����е��������ݡ�

TextInput��һ����Լ����(Controlled)���������ζ������ṩ��value���ԣ�ԭ��ֵ�ᱻǿ����value���Ա���һ�¡��ڴ󲿷�������ⶼ�����ĺܺã�������Щ����»ᵼ��һЩ��˸���󡪡�һ��������ԭ�����ͨ�����ı�value����ֹ�û����б༭�������ϣ����ֹ�û����룬���Կ�������editable={false}���������ϣ����������ĳ��ȣ����Կ�������maxLength���ԣ����������Զ����ᵼ����˸��


ios   clearButtonMode enum('never', 'while-editing', 'unless-editing', 'always') 
�Ƿ�Ҫ���ı����Ҳ���ʾ���������ť��

ios    clearTextOnFocus bool 
���Ϊtrue��ÿ�ο�ʼ�����ʱ�򶼻�����ı�������ݡ�

ios    enablesReturnKeyAutomatically bool 
���Ϊtrue�����̻����ı�����û�����ֵ�ʱ�����ȷ�ϰ�ť��Ĭ��ֵΪfalse��

ios    keyboardAppearance enum('default', 'light', 'dark') 
ָ�����̵���ɫ��

ios   onKeyPress function 
��һ���������µ�ʱ����ô˻ص��������µļ�����Ϊ�������ݸ��ص�����������onChange֮ǰ���á�

ios    returnKeyType enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
������ȷ������ť��ʾ�����ݡ�

ios    selectionState DocumentSelectionState 
�μ�DocumentSelectionState.js�����Կ���һ���ĵ����Ķ����ֱ�ѡ�е�״̬��

android  numberOfLines number 
������������������multiline����Ϊtrueʱʹ����������ռ�ݶ�Ӧ��������

android  underlineColorAndroid string 
�ı�����»�����ɫ(��ע�����Ҫȥ���ı���ı߿��뽫��������Ϊ͸��transparent)��


### ע��㣺
1����ʹ��TextInput�Ĺ����У���Androidƽ̨�£���������и����ߣ���ʱ��Ҫ������underlineColorAndroid  ����Ϊtransparent�������

2�����õ�TextInput����Ϊ�ı���Ʃ���������50���ַ���

��ʱ��Ҫ����   multiline ={true}  maxLength ={50}












[ȫ����]