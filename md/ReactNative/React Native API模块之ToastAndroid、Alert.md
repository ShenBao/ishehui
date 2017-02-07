
# React Native APIģ��֮ToastAndroid��Alert

## ToastAndroid

ģ��:ToastAndroid��androidƽ̨��toast��Ϣ��

��ToastAndroidģ���ǰ�Androidƽ̨ԭ��ģ��Toast��װ��һ��JSģ��ʹ�ã������е���һ��toast��Ϣ����ģ����һ��'show'�����ᴫ��������������:��:message  string �ַ�����ʽ������Ҫ����toast��ʾ���ı�    ��:duration  int��ʽ toast��Ϣ������ʾ��ʱ������������ѡֵToastAndroid.SHORT����ToastAndroid.LONG

(��)����

1.show(message:string,duration:number)  static ��̬������������toast��Ϣ�ĵ���

(��)����

1.SHORT  ��̬intֵ����ʾtoast��ʾ�϶̵�ʱ��

2.LONG   ��̬intֵ����ʾotast��ʾ�ϳ���ʱ��

(��)ʹ��ʵ��

ToastAndroid�����������:

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
          ���������ʱ���toast
        </Text>
        <CustomButton text="���������ʱ��toast"
        onPress={()=>ToastAndroid.show('����Һ���,��ʱ���~',ToastAndroid.SHORT)}/>
        <Text style={styles.welcome}>
          ���������ʱ���toast
        </Text>
        <CustomButton text="���������ʱ��toast"
        onPress={()=>ToastAndroid.show('����Һ���,��ʱ���~',ToastAndroid.LONG)}/>
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

���н�ͼ����:

![ToastAndroid.gif](../../img/RN/ToastAndroid.gif)


## Alert

Android��iOSƽ̨ͨ�õĵ�����Alertģ��

��Alertģ���Ǵ�������һ��������ʾһ�������Լ������Ϣ���ݡ��õ���������ṩһϵ�еĿ�ѡ��ť������κ�һ����ť�������onPress�������ҹرյ���Ĭ������£���ֻ����ʾһ��'ȷ��'��ť��

��ģ��API����Android��iOSƽ̨ͨ�õ���ʾ��̬�ĵ��������Ҫ��ʾһ����ʾ��������û����������Ϣ�ģ���ϸ��鿴AlertIOS;�ô������ĵ���ֻ������iOSƽ̨��

(��)iOSƽ̨���

ֻ��iOSƽ̨����ָ�����������button,ÿ����ť��������������ķ�񣬲������Ϊ'default','cancel','destructive'����״̬֮һ��

(��)Androidƽ̨���

iOSƽ̨����ָ�����������button��������Androidƽ̨�������ֻ��ָ��������ť��Androidƽ̨�ĵ�����İ�ť��'�м�̬','ȡ��','ȷ��'����״̬

1.�����ֻ��ָ����һ����ť����ô��Ϊ'positive' (����:ȷ��)

2.�����ָ����������ť����ô�û�'negative','positive' (����:ȷ����ȡ��)

3.�����ָ����������ť����ô�û�'neutral','negative','positive'(����:�Ժ���˵,'ȷ��','ȡ��')

(��)Alert����

static alert(title:string,message?:string,buttons?:Buttons,type?:AlertType)  �û�Alertģ����ʾ����ľ�̬���������ĸ��������ֱ�Ϊ���⣬��Ϣ����ť���Լ���ť�ķ������

(��)Alertʹ��ʵ��

Alertʵ����������:

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
          ������ʵ��
        </Text>
        <CustomButton text='�������Ĭ��Alert'
          onPress={()=>Alert.alert('��ܰ����','ȷ���˳���?')}
          />
        <CustomButton text='�������������ť��Alert'
          onPress={()=>Alert.alert('��ܰ����','ȷ���˳���?',[
            {text:'ȡ��',onPress:()=>ToastAndroid.show('������ȡ��~',ToastAndroid.SHORT)},
            {text:'ȷ��',onPress:()=>ToastAndroid.show('������ȷ��~',ToastAndroid.SHORT)}
            ])}
          />
        <CustomButton text='�������������ť��Alert'
          onPress={()=>Alert.alert('��ܰ����','ȷ���˳���?',[
            {text:'One',onPress:()=>ToastAndroid.show('������One~',ToastAndroid.SHORT)},
            {text:'Two',onPress:()=>ToastAndroid.show('������Two~',ToastAndroid.SHORT)},
            {text:'Three',onPress:()=>ToastAndroid.show('������Three~',ToastAndroid.SHORT)}
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

���н�ͼ����:

![Alert.gif](../../img/RN/Alert.gif)
















[ȫ����]