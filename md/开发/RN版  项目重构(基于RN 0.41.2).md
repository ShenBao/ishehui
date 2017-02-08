

#  RN版  项目重构(基于RN 0.41.2)


## 重构准备

1.react-native-cli 升级至2.0.1

2.react-native升级至0.41.2

3.android\gradle升级至gradle-2.14.1


## 重构目标

1.抛弃react-native-navigation，自己封装

2.head公共部分自己封装

3.返回自己封装

4.抛弃Native持久化存储，改用AsyncStorage

5.抛弃原生粘贴板，引用Cilpboard

6.引入react-redux，简单引用

7.引入react-thunk，简单引用

8.对react-native-webview-bridge的封装进行优化


基于以上，项目整体架构进行大改动



## 当前版本说明

1.IM实时聊天暂不接入

2.观看直播暂不接入。有观看直播的进行提示

3.调用Native的分享、购买课程、购买库存等暂不实现

4.调用登录暂不实现、包括邀请码页面，此版本使用的登录账号默认   ID为1000（慎重内外网删除用户）














