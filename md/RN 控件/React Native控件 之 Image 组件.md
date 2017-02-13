
# React Native控件之Image组件


## 用法

```
<Image source={require('./img/my_icon.png')} />

<Image source={{uri:'ic_launcher'}} />

<Image  source = { require('../img/default_head.jpg') : {uri:`${serverConfig.imgUrlPrefix}${head}`} } />
```

注意：加载项目资源图片从0.14版本开始react native支持加载我们项目目录中的图片资源

RN更加好的是Packager会根据平台选择相应的文件，例如:my_icon.ios.png和my_icon.android.png两个文件(命名方式android或者ios)。该会根据android或者ios平台选择相应的文件。

设置@2X，@2X等格式的图片来进行适配手机屏幕，例如:my_icon@2x.png或者my_icon@3x.png。这样的话Packager进行打包的时候会根据屏幕的不同密度进行选择显示对应的图片。如果没有恰好的满足当前屏幕的分辨率，那么会选择最接近的那个图片资源。

[注意].这边使用Image组件，require中的图片名称必须为一个静态的字符串信息。不能在require中进行拼接。例如:

## Image实现某些控件的背景图效果

React Native中支持嵌套的方式，例如我们现在有一个Text组件，假如要实现背景图的效果，那么可以使用Image嵌套的Text的方式，然后Image加载图片方式实现,例如代码如下:

```
<Image source={require('./img/my_icon.png')} >
    <Text style={{color:'red'}}>下面是背景图</Text>
</Image>
```

## Image属性方法

1.onLayout   (function) 当Image布局发生改变的，会进行调用该方法，调用的代码为:

{nativeEvent: {layout: {x, y, width, height}}}.

2.onLoad (function):当图片加载成功之后，回调该方法

3.onLoadEnd (function):当图片加载失败回调该方法，该不会管图片加载成功还是失败

4.onLoadStart (fcuntion):当图片开始加载的时候调用该方法

5.resizeMode  缩放比例,可选参数('cover', 'contain', 'stretch') 该当图片的尺寸超过布局的尺寸的时候，会根据设置Mode进行缩放或者裁剪图片

6.source {uri:string} 进行标记图片的引用，该参数可以为一个网络url地址或者一个本地的路径

## Image样式风格

1.FlexBox  支持弹性盒子风格

2.Transforms  支持属性动画                3.resizeMode  设置缩放模式

4.backgroundColor 背景颜色

5.borderColor     边框颜色              6.borderWidth 边框宽度

7.borderRadius  边框圆角

8.overflow 设置图片尺寸超过容器可以设置显示或者隐藏('visible','hidden')

9.tintColor  颜色设置         10.opacity 设置不透明度0.0(透明)-1.0(完全不透明)




[全文完]