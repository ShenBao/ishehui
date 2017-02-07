
# React Native APIģ��֮Dimensions��StyleSheet��ToastAndroid��Alert��



## Dimensions

Dimensions  ��Ļ���ģ��

(һ)����

1.set(dims:{[key:string]:any})  static ��̬�������÷���Ӧ��ֻ�ܱ�ԭ��������е��á�@parm{object} dims������Ϊ��Ļ�������

2.get(dim:string)   static��̬����,���г�ʼ����Ļ�Ŀ�͸���Ϣ ��runApplication����֮���ִ���ˣ��������ǿ������κ�requires�ķ�������֮ǰ�Ϳ��Ի�ȡ������Ϣ����������Ϣ���ܻᷢ���ı䡣�����������¿�:

[ע].��Ļ�ߴ���Ϣһ�����ֱ�ӽ���ʹ�õģ�������ʱ��ᷢ���仯(����:��Ļ�ķ�������ת)�����������ڸ���Ļ��Ϣ��ҵ���߼����������ʽ������Ҫ�ڵ���ÿ��render��Ⱦ����֮����У����������ǰѸ���Ļ��Ϣ��������������ֱ��ʹ�á�(����:����ʹ����ʽ���õ�ʱ�򣬲�Ҫȥʹ��StyleSheet���������ǲ�������ʽ����)����:ʲôʱ����Ҫʹ����Ļ��Ϣ���Ǿ�ʲôʱ��ȥ���ø÷���

ʵ������:var {height,width}=Dimensions.get('window')

@param {string}  ���е���set��������Ҫ������Ļ��Ϣ������

@return {Object?}  ���ص���Ļ�ߴ���Ϣ

(��)��������

������ʾһ�¸÷����ľ���ʹ������ȡ��Ļ�Ŀ�Ⱥ͸߶�,�����������:

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
          ��Ļ��Ϣ����:
        </Text>
        <Text style={styles.instructions}>
           ��ǰ��Ļ���:+{Dimensions.get('window').width};
        </Text>
        <Text style={styles.instructions}>
           ��ǰ��Ļ�߶�:'+{Dimensions.get('window').height};
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

���н�ͼ����:

![Dimensions.jpg](../../img/RN/Dimensions.jpg)


## StyleSheet

��React Native�У���StyleSheetģ����ʵ��������Web��CSS��ʽ��Ĺ��ܡ��򵥵Ĵ���һ��StyleSheet�ļ���ʵ����������:

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

����д�ķ�ʽ��������һЩ�ŵ�:

1.�Ӵ��������Ƕ�������:

- ��render��Ⱦ�������Ƴ���styles��ʽ��ش��룬��������ʹ������������Ķ�
- ͨ���Բ�ͬ��ʽ����������Ҳ�Ƕ�render�����е������һ�ֱ�־

2.�����ܽǶ�������:

- ͨ��StyleSheet�����ǿ���ͨ����־����ʽID�����ã�������ÿ�ζ�Ҫ����һ���µ�Style����
- ��������ʽͨ���Ž���ԭ�������JavaScript�д���һ�Σ�����ȫ��ͨ����id��������(�������ڸù��ܻ�û��ʵ��)


����

create(obj:{[key:string]:any})  static ��̬����   ͨ�������Ķ�����г���һ��StyleSheet��ʽ

��)����

1.hairlineWidth:CallExpression  ���������嵱ǰƽ̨��ϸ�Ŀ�ȡ��������������ñ߿�����������֮��ķָ��ߡ�����:

```
{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
}
```

�û���ݵ�ǰƽ̨��Ϣ���Զ�ת����һ����ϸ���ߡ�

2.flatten: CallExpression


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