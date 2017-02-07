
# RN����֮FlexBox

### ����

flex��Flexible Box����д����Ϊ"���Բ���"������Ϊ��״ģ���ṩ��������ԡ�����flex���ֵ�Ԫ�أ���Ϊflex������flex Container�������"����"������������Ԫ���Զ���Ϊ������Ա����Ϊflex��Ŀ��flex item�������"��Ŀ"��

![flexbox01.jpg](../../img/RN/flexbox01.jpg)

### flexDirection

���ַ��򣬾�������ķ���Ĭ��ֵ��column�������򲼾�

|ֵ             |����                 |
|-------------|--------------------|
|row           |���򲼾֣�����Ϊˮƽ����|
|column     |���򲼾֣�����Ϊ��ֱ����|

![flexDirection.jpg](../../img/RN/flexbox-flexDirection.jpg)

### flexWrap

�������ݣ�Ĭ��ֵ��nowrap���������������ݣ���ʵ�������Ϊ�Ƿ��С�

|ֵ           |����                                                     |
|-----------|--------------------------------------------------------|
|nowrap  |��Ŀ�����᷽�򲼾֣������������ȵĲ��ֲ��ɼ�                    |
|wrap      |��Ŀ�����᲼�����賤�ȴ��������ܳ���ʱ�����в��֣�������Ŀ���ݶ��ɼ�|

![flexWrap.jpg](../../img/RN/flexbox-flexWrap.jpg)

### alignItems

�����᷽����뷽ʽ��Ĭ��ֵflex-start���������Ὺ�ˡ�

|ֵ            | ����      |
|-------------|----------|
|flex-start  | �����Ὺ�� |
|center     | ��������� |
|flex-end  | ������ĩ�� |

![alignItems.jpg](../../img/RN/flexbox-alignItems.jpg)

### justifyContent

���᷽����뷽ʽ��Ĭ��ֵ��flex-start��������Ŀ���

|ֵ                  | ����                   |
|------------------|-----------------------|
|flex-start        | ���Ὺ��                |
|center            | ����                   |
|flex-end         | ����ĩ��                |
|space-between| ��Ŀ����Ŀ֮�������ȿ�϶ |
|space-around | ��Ŀ���Բ�����ȿ�϶      |

![justifyContent.jpg](../../img/RN/flexbox-justifyContent.jpg)

### flex

����Ȩ��

|ֵ    |����       |
|------|----------|
|>=0 |��ĿռλȨ��|

1:0��flex=0����Ŀռ�ÿռ��Ϊ��������ռ䣬flex=1����Ŀ��ռ���������пռ�

![flex.jpg](../../img/RN/flexbox-flex.jpg)

�ڲ������ָ����height������£�flex�ǡ�����height����ʣ��ռ䡱�ķֲ����������磺
```
<View style={{height:100}}>
    <View style={{flex: 3}} />
    <View style={{flex: 2}} />
</View>
```

������View�ĸ߶ȷֱ��� 60��40��

```
<View style={{height:100}}>
    <View style={{height: 50, flex: 3}} />
    <View style={{flex: 2}} />
</View>
```
������View�ĸ߶Ⱦͷֱ���80(50+30)��20��



### alignSelf

��Ŀ�����᷽��������뷽ʽ

|ֵ            |����|
|-------------|---|
|flex-start  |����|
|center      |����|
|flex-end   |ĩ��|

![alignSelf.jpg](../../img/RN/flexbox-alignSelf.jpg)







[ȫ����]