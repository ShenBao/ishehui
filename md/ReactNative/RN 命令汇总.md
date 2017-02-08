

npm install -g react-native-cl

查看本地的React Native的版本

react-native --version



npm info react-native



 react-native -h



npm update -g react-native-cli



react-native upgrade



npm install --save react-native@0.18




react-native run-android


npm install --save react-native@0.18



react-native start


react-native init AwesomeProject



打包
cd android && ./gradlew assembleRelease





##  新项目报错处理：

android\gradle\wrapper    目录下

gradle-wrapper.properties     改最后一行  distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip

\android 目录下

build.gradle     改 第8行   classpath 'com.android.tools.build:gradle:1.5.0'



