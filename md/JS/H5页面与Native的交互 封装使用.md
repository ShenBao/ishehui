
# H5页面与Native的交互

## 旧版本

（用法参考附件  兼容老模式）

|功能          	|描述                 	|			Data											|
|--------------	|---------------------	|-----------------------------------------------------------|
|轮播图：		|FTPosterJump			|json														|
|头像：			|FTPresentH5			|url														|
|楼层：			|FTCardOperation		|json														|
|大图：			|FTPhotoBrowse			|jsond带有url和图片类型										|
|详情：			|FTPresent101DetailH5	|json														|
|点赞未登录：	|FTLaudCard 			|{}				（回调H5的 loginCallback方法带uid，token）	|
|评论：			|FTPresentH5 			|json中带url												|
|分享：			|FTShareCard 			|json														|


## 以后新版		

（用法参考附件  新模式）

|功能          	|描述                 	|			Data											|
|--------------	|---------------------	|-----------------------------------------------------------|
|测试：			|key_persent_test		|json	 				在回调中返回一个json，传入response  |
|Alert：		|key_persent_alert		|{message : 'alert测试'};									|
|Toast：		|key_persent_toast		|{message : toast测试'};									|


## 附件

### js_callnative.js封装的NativeCall的方法

```
function NativeCall() {};
(function() {
	var userAgent = navigator.userAgent;
	NativeCall.isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1;
	NativeCall.isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	function toFunction(callback) {
		var callbackType = typeof callback;
		if (callbackType == "string") {
			//如果回调方法写的是方法名字符串，转成方法
			return callback.startsWith("window.") ? eval(callback) : eval("window." + callback);
		}
		return callback;
	}
	function processDebug(debug, callback) {
		if (!debug) {
			return false;
		}
		var type = typeof debug;
		var response;
		//处理是否为函数式Debug
		if (type == "function") {
			response = debug();
		} else {
			response = debug;
		}
		//处理返回的数据
		var method;
		if (response instanceof Array) {
			//如果是数据则多参数调用，多个参数
			method = "apply";
		} else {
			//参数列表，只一个参数
			method = "call";
		}
		toFunction(callback)[method](this, response);
		return true;
	}
	/**
	 * @param  {String} message
	 * @param  {Object} data
	 * @param  {Function|String} callback
	 * @param  {Object|Function} debug
	 */
	NativeCall.sendOld = function(message, data, oldData, callback, debug) {
		sendOpt({
			'message': message,
			'data': data,
			'oldData': oldData,
			'callback': callback,
			'debug': debug,
			'version': 1
		});
	}
	/**
	 * @param  {String|Object} message 当是Object时后面参数可不传
	 * @param  {Object} data
	 * @param  {Function|String} callback
	 * @param  {Object|Function} debug
	 */
	NativeCall.send = function() {
		if (arguments.length == 1) {
			sendOpt(arguments[0]);
		} else {
			sendOpt({
				'message': arguments[0],
				'data': arguments[1],
				'callback': arguments[2],
				'debug': arguments[3],
				'version': 2
			});
		}
	}
	function sendOpt(opt) {
		var message = opt.message;
		var data = opt.data;
		var callback = opt.callback;
		var version = opt.version;
		//debug时
		if (processDebug(opt.debug, callback)) {
			return ;
		}
		//正式环境
		if (NativeCall.isAndroid) {
			if (version == 1) {
				//兼容之前老模式
				var oldData = opt.oldData;
				var oldDataType = typeof oldData;
				if(oldDataType == "object") {
					JavaScriptInterface[message](JSON.stringify(oldData));
				} else {
					JavaScriptInterface[message](oldData);
				}
			} else {
				//新模式
				JavaScriptInterface.callHandler(message, JSON.stringify(data), "" + callback);
			}
		} else if (NativeCall.isIOS) {
			window.WebViewJavascriptBridge.callHandler(message, data, toFunction(callback));
		} else {
			alert('This platform is not available!');
			// console.log(message, JSON.stringify(data), ""+callback);
			// console.log('This platform is not available!');
		}
	}
})();
```

### 使用方法：

#### 一：兼容老模式

注意：在安卓端需要知道H5的方法名

```
A.json
			NativeCall.sendOld("FTPosterJump", swiperList[index],  swiperList[index] , function(response) {
				业务代码
			});
B.url
			NativeCall.sendOld( "FTPosterJump" , {'url': _url} , url , function( response) {
				业务代码
			});
```

#### 二．新模式

```
A.带有Debug无业务操作
			NativeCall.send("login", data, callback, {
				uid: 1212,
				token: "abc"
			});
B. 带有Debug 且有业务操作
NativeCall.send("login", data, 'window.callback2', function() {
				console.log("做一些模拟操作");
				return {
					uid: 1212,
					token: "abc"
				};
			});
C.声明函数（大力提倡使用）
			NativeCall.send("login", data, 'callback2');
			NativeCall.send("login", data, callback2);
D.匿名函数（不提倡使用；若应用，则不要在匿名函数中写注释且JS语法要严格）
NativeCall.send("login", data, function() {
				console.log(obj.uid, obj.token);
			});
```
			
## 附执行原理：

实际是在浏览器的url中运行代码

```
javascript:(function callback(obj) {
				console.log(obj.uid, obj.token);
			})({uid:111, token:"xxx"})

			javascript:(function (obj) {
				console.log('nnn');
				console.log(obj.uid, obj.token);
			})({uid:111, token:"xxx"});

			javascript:(callback)({uid:111, token:"xxx"})；
```




[全文完]