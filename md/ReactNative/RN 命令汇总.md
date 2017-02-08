
# RN命令汇总


## 安装react-native-cli
```
npm install -g react-native-cli
```

## 升级
```
npm update -g react-native-cli
```

## 帮助
```
react-native -h
```

## 查看本地的React Native的版本
```
react-native --version
```

## 查看本地的React Native Info
```
npm info react-native
```

npm install --save react-native@0.18

## 运行安卓
```
react-native run-android
```

## 安装依赖
```
npm install --save react-native@0.18
```

## 启Server
```
react-native start
```

## 创建项目
```
react-native init 项目名称
```


## 打包
```
在android目录下操作

gradlew assembleRelease
```

## 其他命令
```
react-native upgrade
```





## 新项目报错处理：

android\gradle\wrapper    目录下
```
	gradle-wrapper.properties   文件
	改最后一行  distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
```

android 目录下
```
	build.gradle    文件 
	改第8行   classpath 'com.android.tools.build:gradle:1.5.0'
```


