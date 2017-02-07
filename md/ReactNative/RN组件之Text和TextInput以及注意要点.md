
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
�����ʽ��1����paddingLeft����View������
			2����paddingLeft�޸�ΪmarginLeft
����ʹ�õ�һ�ַ����޸ģ��Ѷ��뷽ʽ����viewȥ����Textֻ�����ı����Ե���ʾ��























